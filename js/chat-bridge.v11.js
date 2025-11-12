/* Testfy Chat Bridge v11
 * - Chat penceresi: taşıma (pointer events), minimize/kapat, konum kaydı
 * - Mesaj gönderme: Enter veya buton, yazıyor animasyonu
 * - TestifyAI v11 entegrasyonu: addMessage/showTyping/hideTyping/highlightTestTab
 * - API anahtarı fallback: Config.OPENAI_API_KEY veya localStorage
 */
(function () {
  'use strict';

  // ---- DOM refs
  const $ = (s, r = document) => r.querySelector(s);
  const widget = $('#chatWidget');
  const header = widget ? $('.chat-header', widget) : null;
  const toggleBtn = $('#chatToggleBtn');
  const closeBtn = $('#chatCloseBtn');
  const minimizeBtn = $('#chatMinimizeBtn');
  const aiInput = $('#aiInput');
  const aiSendBtn = $('#aiSendBtn');
  const aiChat = $('#aiChat');

  if (!widget || !header || !toggleBtn || !closeBtn || !minimizeBtn || !aiInput || !aiSendBtn || !aiChat) {
    console.warn('Chat Bridge: Gerekli elementler bulunamadı.');
    return;
  }

  // ---- Küçük yardımcılar
  const sanitize = (s) => (window.Utils?.sanitizeHTML ? Utils.sanitizeHTML(s) : String(s).replace(/[<>&]/g, m => ({'<':'&lt;','>':'&gt;','&':'&amp;'}[m])));
  const inViewportClamp = (left, top) => {
    const margin = 8;
    const maxLeft = Math.max(margin, window.innerWidth - widget.offsetWidth - margin);
    const maxTop  = Math.max(margin, window.innerHeight - widget.offsetHeight - margin);
    return [Math.min(Math.max(left, margin), maxLeft), Math.min(Math.max(top, margin), maxTop)];
  };
  const setPos = (left, top) => {
    const [L, T] = inViewportClamp(left, top);
    widget.style.left = L + 'px';
    widget.style.top = T + 'px';
    widget.style.right = 'auto';
    widget.style.bottom = 'auto';
    try { localStorage.setItem('chatWidgetPos', JSON.stringify({ left: L, top: T })); } catch {}
  };
  const restorePos = () => {
    try {
      const p = JSON.parse(localStorage.getItem('chatWidgetPos'));
      if (p && Number.isFinite(p.left) && Number.isFinite(p.top)) setPos(p.left, p.top);
    } catch {}
  };

  // ---- Aç / Kapat / Minimize
  const openWidget = () => {
    widget.classList.add('chat-widget--open');
    toggleBtn.classList.add('chat-toggle-btn--hidden');
    widget.setAttribute('aria-hidden', 'false');
    aiInput.focus();
  };
  const closeWidget = () => {
    widget.classList.remove('chat-widget--open', 'chat-widget--minimized');
    toggleBtn.classList.remove('chat-toggle-btn--hidden');
    widget.setAttribute('aria-hidden', 'true');
  };
  const toggleMinimize = () => {
    widget.classList.toggle('chat-widget--minimized');
  };

  toggleBtn.addEventListener('click', openWidget);
  closeBtn.addEventListener('click', closeWidget);
  minimizeBtn.addEventListener('click', toggleMinimize);

  // ESC kapatsın
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && widget.classList.contains('chat-widget--open')) closeWidget();
  });

  // ---- Taşıma (pointer events, mobile/desktop)
  let dragging = false, sx = 0, sy = 0, sLeft = 0, sTop = 0;
  restorePos();
  header.style.touchAction = 'none';
  header.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('.chat-header-actions')) return; // butonlara tıklama ise sürükleme yapma
    const r = widget.getBoundingClientRect();
    dragging = true;
    sx = e.clientX; sy = e.clientY; sLeft = r.left; sTop = r.top;
    header.setPointerCapture?.(e.pointerId);
    header.style.userSelect = 'none';
  });
  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    e.preventDefault();
    setPos(sLeft + (e.clientX - sx), sTop + (e.clientY - sy));
  }, { passive: false });
  const endDrag = (e) => {
    if (!dragging) return;
    dragging = false;
    header.releasePointerCapture?.(e.pointerId);
    header.style.userSelect = '';
    // viewport değiştiyse konumu bir kere daha kelepçele
    const r = widget.getBoundingClientRect();
    setPos(r.left, r.top);
  };
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('resize', restorePos);

  // ---- Mesaj render
  function addMessage(text, role = 'ai') {
    const wrap = document.createElement('div');
    wrap.className = 'chat-message ' + (role === 'user' ? 'is-user' : 'is-ai');
    wrap.style.margin = '8px 0';
    wrap.style.display = 'flex';
    wrap.style.justifyContent = role === 'user' ? 'flex-end' : 'flex-start';

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.style.maxWidth = '85%';
    bubble.style.padding = '10px 12px';
    bubble.style.borderRadius = '12px';
    bubble.style.lineHeight = '1.45';
    bubble.style.border = '1px solid rgba(148,163,184,.3)';
    bubble.style.background = role === 'user' ? 'var(--primary,#4f46e5)' : 'var(--bg-tertiary,#111827)';
    bubble.style.color = role === 'user' ? '#fff' : 'var(--text-primary,#e5e7eb)';
    bubble.innerHTML = `<div class="message-content">${sanitize(text)}</div>`;

    wrap.appendChild(bubble);
    aiChat.appendChild(wrap);
    aiChat.scrollTop = aiChat.scrollHeight;
  }

  // ---- Yazıyor göstergesi
  let typingEl = null, dotsTimer = null;
  function showTyping() {
    if (typingEl) return;
    typingEl = document.createElement('div');
    typingEl.style.margin = '8px 0';
    typingEl.style.display = 'flex';
    typingEl.style.justifyContent = 'flex-start';
    typingEl.innerHTML = `
      <div class="message-bubble" style="max-width:85%;padding:10px 12px;border-radius:12px;border:1px solid rgba(148,163,184,.3);background:var(--bg-tertiary,#111827);color:var(--text-primary,#e5e7eb)">
        <span class="typing-dots" style="display:inline-block;min-width:2em">● ● ●</span>
      </div>`;
    aiChat.appendChild(typingEl);
    aiChat.scrollTop = aiChat.scrollHeight;

    const dots = typingEl.querySelector('.typing-dots');
    let i = 0;
    dotsTimer = setInterval(() => {
      dots.style.opacity = i % 3 === 0 ? '1' : (i % 3 === 1 ? '0.6' : '0.3');
      i++;
    }, 400);
  }
  function hideTyping() {
    if (dotsTimer) { clearInterval(dotsTimer); dotsTimer = null; }
    if (typingEl) { typingEl.remove(); typingEl = null; }
  }

  // ---- API anahtarı fallback (v11 kodundaki .config.getApiKey yoksa)
  if (!window.TestifyAI) window.TestifyAI = {};
  if (!window.TestifyAI.config) window.TestifyAI.config = {};
  if (typeof window.TestifyAI.config.getApiKey !== 'function') {
    window.TestifyAI.config.getApiKey = function () {
      try {
        return (window.Config && Config.OPENAI_API_KEY)
          || localStorage.getItem('testify_api_key')
          || localStorage.getItem('OPENAI_API_KEY')
          || '';
      } catch { return ''; }
    };
  }

  // ---- TestifyAI <-> UI köprüsü
  function attachUIToAI() {
    const AI = window.TestifyAI || window.TestifyAI_UltimateTeacher || {};
    AI.addMessage = addMessage;
    AI.showTypingIndicator = showTyping;
    AI.hideTypingIndicator = hideTyping;
    AI.highlightTestTab = () => { try { window.navigateTo && window.navigateTo('test'); } catch {} };
    // küçük durum bayrağı
    if (AI.isGenerating == null) AI.isGenerating = false;
  }
  attachUIToAI();

  // ---- Gönderme
  async function send() {
    const text = aiInput.value.trim();
    if (!text) return;
    aiInput.value = '';
    addMessage(text, 'user');

    attachUIToAI();
    const AI = window.TestifyAI;

    // Uygun generate fonksiyonu
    const generate = (AI && typeof AI.generateTestFromAI === 'function')
      ? AI.generateTestFromAI.bind(AI)
      : null;

    showTyping();

    if (!generate) {
      // graceful fallback
      setTimeout(() => {
        hideTyping();
        addMessage('Sisteme bağlanamadım. Lütfen API anahtarını ekleyip tekrar deneyin.', 'ai');
      }, 600);
      return;
    }

    try {
      await generate(text);
    } catch (err) {
      hideTyping();
      addMessage('İstek başarısız: ' + (err?.message || String(err)), 'ai');
      return;
    }
    hideTyping();
  }

  aiSendBtn.addEventListener('click', send);
  aiInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  });

  // İlk yükte "açık" geldiyse aria senkronu
  if (!widget.classList.contains('chat-widget--open')) {
    widget.setAttribute('aria-hidden', 'true');
  } else {
    toggleBtn.classList.add('chat-toggle-btn--hidden');
    widget.setAttribute('aria-hidden', 'false');
  }

  // Dışarı ver
  window.TestfyChatUI = {
    open: openWidget,
    close: closeWidget,
    minimize: toggleMinimize,
    addMessage,
    showTypingIndicator: showTyping,
    hideTypingIndicator: hideTyping
  };
})();
