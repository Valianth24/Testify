/*
 * CHAT BRIDGE v11
 * Floating chat widget ile TestifyAI çekirdeği arasında köprü
 */
(function (window, document) {
  'use strict';

  const $ = (sel) => document.querySelector(sel);
  const on = (el, evt, cb) => el && el.addEventListener(evt, cb);

  function sendUserMessage(text) {
    if (!text || !text.trim()) return;
    if (window.TestifyAI && typeof window.TestifyAI.addMessage === 'function') {
      window.TestifyAI.addMessage(text, 'user');
    }
  }

  function handleCommand(text) {
    const core = window.TestifyAI;
    if (!core) return;

    // API anahtarı kaydetme: /key sk-live-...
    if (/^\s*\/key\s+/i.test(text)) {
      const key = text.trim().split(/\s+/).slice(1).join(' ');
      core.config && core.config.setApiKey && core.config.setApiKey(key);
      core.addMessage('🔑 API anahtarı kaydedildi. Güvenli saklama: localStorage.', 'ai');
      return true;
    }

    // Yardım
    if (/^\s*\/yardim|^\s*\/help/i.test(text)) {
      core.addMessage(
        'Komutlar:\n' +
        '• <code>/key YOUR_OPENAI_KEY</code> – API anahtarını kaydet\n' +
        '• Sadece isteğini yaz: <em>AI test: YKS işletim sistemleri 10 soru orta</em> gibi',
        'ai'
      );
      return true;
    }

    return false;
  }

  function routeToAI(text) {
    const core = window.TestifyAI;
    if (!core || typeof core.generateTestFromAI !== 'function') return;
    if (core.isGenerating) {
      core.addMessage('⏳ Zaten bir üretim sürüyor. Lütfen tamamlanmasını bekleyin.', 'ai');
      return;
    }
    core.generateTestFromAI(text);
  }

  function initChatBridge() {
    const widget = $('#chatWidget');
    const toggleBtn = $('#chatToggleBtn');
    const minimizeBtn = $('#chatMinimizeBtn');
    const closeBtn = $('#chatCloseBtn');
    const input = $('#aiInput');
    const sendBtn = $('#aiSendBtn');

    // Toggle
    on(toggleBtn, 'click', () => {
      widget && widget.classList.add('chat-widget--open');
      toggleBtn && toggleBtn.classList.add('chat-toggle-btn--hidden');
      setTimeout(() => input && input.focus(), 60);
    });

    // Minimize
    on(minimizeBtn, 'click', () => {
      widget && widget.classList.toggle('chat-widget--minimized');
    });

    // Close
    on(closeBtn, 'click', () => {
      widget && widget.classList.remove('chat-widget--open');
      widget && widget.classList.remove('chat-widget--minimized');
      const tgl = $('#chatToggleBtn');
      tgl && tgl.classList.remove('chat-toggle-btn--hidden');
    });

    // Send handlers
    function submit() {
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;
      input.value = '';
      sendUserMessage(text);
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

    // Hızlı ipucu
    if (window.TestifyAI && typeof window.TestifyAI.addMessage === 'function') {
      window.TestifyAI.addMessage('İpucu: <code>/key</code> ile OpenAI anahtarını kaydedebilir, ardından <em>AI test</em> isteği gönderebilirsin.', 'ai');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatBridge);
  } else { initChatBridge(); }

})(window, document);
