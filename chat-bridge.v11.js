/*
 * ═══════════════════════════════════════════════════════════════════════════
 * TESTIFY CHAT BRIDGE v11.1 - Professional & Draggable
 * ═══════════════════════════════════════════════════════════════════════════
 */

(function (window, document) {
  'use strict';

  const VERSION = '11.1.0';
  const $ = (sel) => document.querySelector(sel);
  const on = (el, evt, cb) => el && el.addEventListener(evt, cb);

  // ═══════════════════════════════════════════════════════════════════════
  // MESSAGES
  // ═══════════════════════════════════════════════════════════════════════

  const WELCOME = `## 🎓 Testify'a Hoş Geldiniz

**Profesyonel AI destekli eğitim platformu**

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🚀 Nasıl Kullanılır?

Sadece ne istediğinizi yazın:

\`\`\`
YKS Matematik 15 soru orta
KPSS tarih 20 soru
Python programlama 10 soru
\`\`\`

### 📚 Komutlar

- \`/yardim\` - Yardım
- \`/örnekler\` - Örnek istekler
- \`/temizle\` - Sohbeti temizle

**Kısayol:** Ctrl+K

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Testify - AI ile öğrenin 🚀`;

  const HELP = `## 📖 Yardım

### Test İsteme

**Format:** \`[Sınav] [Konu] [Soru Sayısı] [Zorluk]\`

**Örnekler:**
\`\`\`
YKS Matematik 20 soru orta
LGS Türkçe 10 soru kolay
İşletim Sistemleri 15 soru
Python temelleri 10 soru
\`\`\`

### Komutlar

\`/yardim\` - Bu mesaj
\`/örnekler\` - Detaylı örnekler
\`/temizle\` - Sohbeti temizle
\`/arşiv\` - Oluşturulan testler

### Kısayollar

**Ctrl+K** - Komut menüsü
**Ctrl+Enter** - Gönder
**Esc** - Kapat

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 **İpucu:** Spesifik olun, daha iyi sonuç alın!`;

  const EXAMPLES = `## 📚 Örnek İstekler

### YKS/LGS/KPSS
\`\`\`
YKS TYT Matematik 40 soru
LGS Fen Bilimleri 15 soru
KPSS Tarih Osmanlı 20 soru
\`\`\`

### Programlama
\`\`\`
Python list comprehension 10 soru
JavaScript async/await 15 soru
React Hooks 10 soru
\`\`\`

### Üniversite
\`\`\`
Veri Yapıları linked list 10 soru
İşletim Sistemleri 20 soru
Fizik elektrik 15 soru
\`\`\`

### Dil Sınavları
\`\`\`
TOEFL Reading 15 soru
İngilizce grammar 20 soru
YÖKDİL vocabulary 10 soru
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ne öğrenmek istersiniz?`;

  // ═══════════════════════════════════════════════════════════════════════
  // CHAT HISTORY
  // ═══════════════════════════════════════════════════════════════════════

  const HISTORY_KEY = 'testify_chat';
  const MAX_HISTORY = 50;

  function saveHistory(role, content) {
    try {
      const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      history.push({ role, content, ts: Date.now() });
      while (history.length > MAX_HISTORY) history.shift();
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (e) {}
  }

  function loadHistory() {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function clearHistory() {
    localStorage.removeItem(HISTORY_KEY);
  }

  // ═══════════════════════════════════════════════════════════════════════
  // MESSAGE HANDLING
  // ═══════════════════════════════════════════════════════════════════════

  function send(text, role = 'user') {
    const core = window.TestifyAI;
    if (!core || !core.addMessage) return;
    core.addMessage(text, role);
    saveHistory(role, text);
  }

  function sendAI(text) {
    send(text, 'ai');
  }

  // ═══════════════════════════════════════════════════════════════════════
  // COMMAND HANDLING
  // ═══════════════════════════════════════════════════════════════════════

  function handleCommand(text) {
    const core = window.TestifyAI;
    if (!core) return false;

    const cmd = text.trim().toLowerCase();

    if (cmd === '/yardim' || cmd === '/help') {
      sendAI(HELP);
      return true;
    }

    if (cmd === '/örnekler') {
      sendAI(EXAMPLES);
      return true;
    }

    if (cmd === '/temizle') {
      if (core.clearChat) core.clearChat();
      clearHistory();
      sendAI('🧹 Sohbet temizlendi.\n\nYeni bir başlangıç! Ne öğrenmek istersiniz?');
      return true;
    }

    if (cmd === '/arşiv') {
      if (core.getArchive) {
        const archive = core.getArchive();
        if (archive.length === 0) {
          sendAI('📚 Arşiv boş.\n\nİlk testinizi oluşturun!');
        } else {
          let msg = '## 📚 Test Arşivi\n\n';
          archive.slice(0, 10).forEach((item, i) => {
            msg += `**${i+1}.** ${item.title} (${item.questionCount} soru)\n`;
          });
          sendAI(msg);
        }
      }
      return true;
    }

    if (text.startsWith('/')) {
      sendAI(`❌ Bilinmeyen komut: \`${text}\`\n\nKomutlar için: \`/yardim\``);
      return true;
    }

    return false;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // AI ROUTING
  // ═══════════════════════════════════════════════════════════════════════

  function routeToAI(text) {
    const core = window.TestifyAI;
    
    if (!core || !core.generateTestFromAI) {
      sendAI('❌ Sistem hatası. Lütfen sayfayı yenileyin.');
      return;
    }

    if (core.isGenerating) {
      sendAI('⏳ İşlem devam ediyor, lütfen bekleyin...');
      return;
    }

    try {
      core.generateTestFromAI(text);
    } catch (error) {
      sendAI(`❌ Hata: ${error.message}\n\nLütfen tekrar deneyin.`);
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // DRAGGABLE FUNCTIONALITY
  // ═══════════════════════════════════════════════════════════════════════

  function makeDraggable(widget) {
    const header = widget.querySelector('.chat-header');
    if (!header) return;

    let isDragging = false;
    let currentX, currentY, initialX, initialY;

    // Cursor değiştir
    header.style.cursor = 'move';

    function dragStart(e) {
      if (e.target.closest('button')) return; // Butonlara dokunma

      const isTouchEvent = e.type === 'touchstart';
      const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
      const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;

      initialX = clientX - (parseInt(widget.style.left) || 0);
      initialY = clientY - (parseInt(widget.style.top) || 0);

      isDragging = true;
      widget.style.transition = 'none';
      widget.style.cursor = 'grabbing';
      header.style.cursor = 'grabbing';
    }

    function drag(e) {
      if (!isDragging) return;
      e.preventDefault();

      const isTouchEvent = e.type === 'touchmove';
      const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
      const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;

      currentX = clientX - initialX;
      currentY = clientY - initialY;

      // Ekran sınırları içinde tut
      const maxX = window.innerWidth - widget.offsetWidth;
      const maxY = window.innerHeight - widget.offsetHeight;

      currentX = Math.max(0, Math.min(currentX, maxX));
      currentY = Math.max(0, Math.min(currentY, maxY));

      widget.style.left = currentX + 'px';
      widget.style.top = currentY + 'px';
      widget.style.right = 'auto';
      widget.style.bottom = 'auto';
    }

    function dragEnd() {
      isDragging = false;
      widget.style.transition = '';
      widget.style.cursor = '';
      header.style.cursor = 'move';

      // Pozisyonu kaydet
      localStorage.setItem('testify_chat_pos', JSON.stringify({
        left: widget.style.left,
        top: widget.style.top
      }));
    }

    // Event listeners
    header.addEventListener('mousedown', dragStart);
    header.addEventListener('touchstart', dragStart, { passive: false });
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag, { passive: false });
    
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);

    // Kaydedilmiş pozisyonu yükle
    try {
      const saved = JSON.parse(localStorage.getItem('testify_chat_pos'));
      if (saved) {
        widget.style.left = saved.left;
        widget.style.top = saved.top;
        widget.style.right = 'auto';
        widget.style.bottom = 'auto';
      }
    } catch (e) {}
  }

  // ═══════════════════════════════════════════════════════════════════════
  // INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════

  function init() {
    const widget = $('#chatWidget');
    const toggleBtn = $('#chatToggleBtn');
    const minimizeBtn = $('#chatMinimizeBtn');
    const closeBtn = $('#chatCloseBtn');
    const input = $('#aiInput');
    const sendBtn = $('#aiSendBtn');

    if (!widget || !input) {
      console.error('Chat elements not found');
      return;
    }

    // Toggle
    on(toggleBtn, 'click', () => {
      widget.classList.add('chat-widget--open');
      if (toggleBtn) toggleBtn.classList.add('chat-toggle-btn--hidden');
      setTimeout(() => input.focus(), 100);
    });

    // Minimize
    on(minimizeBtn, 'click', () => {
      widget.classList.toggle('chat-widget--minimized');
    });

    // Close
    on(closeBtn, 'click', () => {
      widget.classList.remove('chat-widget--open', 'chat-widget--minimized');
      if (toggleBtn) toggleBtn.classList.remove('chat-toggle-btn--hidden');
    });

    // Submit
    function submit() {
      const text = input.value.trim();
      if (!text) return;
      
      input.value = '';
      input.focus();
      
      send(text, 'user');
      
      if (!handleCommand(text)) {
        routeToAI(text);
      }
    }

    on(sendBtn, 'click', submit);
    on(input, 'keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submit();
      }
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        input.value = '/';
        input.focus();
      }
      
      if (e.key === 'Escape' && widget.classList.contains('chat-widget--open')) {
        widget.classList.remove('chat-widget--open', 'chat-widget--minimized');
        if (toggleBtn) toggleBtn.classList.remove('chat-toggle-btn--hidden');
      }
    });

    // Make draggable
    makeDraggable(widget);

    // Welcome message (first time)
    const WELCOMED = 'testify_welcomed_v11.1';
    if (!localStorage.getItem(WELCOMED)) {
      setTimeout(() => {
        sendAI(WELCOME);
        localStorage.setItem(WELCOMED, 'true');
      }, 500);
    }

    // Load history
    const history = loadHistory();
    if (history.length > 0 && window.TestifyAI?.clearChat) {
      window.TestifyAI.clearChat();
      history.slice(-20).forEach(msg => {
        if (window.TestifyAI?.addMessage) {
          window.TestifyAI.addMessage(msg.content, msg.role);
        }
      });
    }

    console.log('✓ Testify Chat v' + VERSION + ' ready');
  }

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export
  window.TestifyChatBridge = { version: VERSION, send, sendAI };

})(window, document);
