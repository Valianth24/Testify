
(function (window, document) {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════
  // CONFIGURATION & CONSTANTS
  // ═══════════════════════════════════════════════════════════════════════
  
  const VERSION = '11.1.0-ENHANCED';
  const CHAT_HISTORY_KEY = 'testify_chat_history';
  const MAX_HISTORY_ITEMS = 50;

  // Utility selectors
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);
  const on = (el, evt, cb) => el && el.addEventListener(evt, cb);



  // ═══════════════════════════════════════════════════════════════════════
  // CHAT HISTORY MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════

  function saveChatHistory(role, content) {
    try {
      const history = JSON.parse(localStorage.getItem(CHAT_HISTORY_KEY) || '[]');
      history.push({
        role,
        content,
        timestamp: Date.now()
      });

      // Keep only last MAX_HISTORY_ITEMS
      while (history.length > MAX_HISTORY_ITEMS) {
        history.shift();
      }

      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
      console.error('Chat history save error:', e);
    }
  }

  function loadChatHistory() {
    try {
      return JSON.parse(localStorage.getItem(CHAT_HISTORY_KEY) || '[]');
    } catch (e) {
      console.error('Chat history load error:', e);
      return [];
    }
  }

  function clearChatHistory() {
    try {
      localStorage.removeItem(CHAT_HISTORY_KEY);
      return true;
    } catch (e) {
      console.error('Chat history clear error:', e);
      return false;
    }
  }

  function exportChatHistory() {
    try {
      const history = loadChatHistory();
      const text = history.map(msg => 
        `[${new Date(msg.timestamp).toLocaleString()}] ${msg.role.toUpperCase()}: ${msg.content}`
      ).join('\n\n');

      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `testify_chat_${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      return true;
    } catch (e) {
      console.error('Export error:', e);
      return false;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // MESSAGE HANDLING
  // ═══════════════════════════════════════════════════════════════════════

  function sendUserMessage(text) {
    if (!text || !text.trim()) return;
    
    const core = window.TestifyAI;
    if (!core || typeof core.addMessage !== 'function') {
      console.error('TestifyAI core not found');
      return;
    }

    core.addMessage(text, 'user');
    saveChatHistory('user', text);
  }

  function sendAIMessage(content, role = 'ai') {
    const core = window.TestifyAI;
    if (!core || typeof core.addMessage !== 'function') {
      console.error('TestifyAI core not found');
      return;
    }

    core.addMessage(content, role);
    saveChatHistory(role, content);
  }

  // ═══════════════════════════════════════════════════════════════════════
  // COMMAND HANDLING - ENHANCED
  // ═══════════════════════════════════════════════════════════════════════

  function handleCommand(text) {
    const core = window.TestifyAI;
    if (!core) {
      console.error('TestifyAI core not available');
      return false;
    }

    const trimmed = text.trim();

    // ─────────────────────────────────────────────────────────────────────
    // /key - API Key Management
    // ─────────────────────────────────────────────────────────────────────
    if (/^\s*\/key\s+/i.test(trimmed)) {
      const key = trimmed.split(/\s+/).slice(1).join(' ').trim();
      
      if (!key || key.length < 20) {
        sendAIMessage(
          '❌ **Geçersiz API Anahtarı**\n\n' +
          'OpenAI API anahtarı genellikle `sk-` ile başlar ve 40+ karakter uzunluğundadır.\n\n' +
          '📝 **Doğru format:**\n```\n/key sk-proj-abc123...\n```\n\n' +
          '🔗 **Anahtar nereden alınır?**\n' +
          'https://platform.openai.com/api-keys',
          'ai'
        );
        return true;
      }

      const success = core.config && core.config.setApiKey && core.config.setApiKey(key);
      
      if (success) {
        sendAIMessage(
          '✅ **API Anahtarı Başarıyla Kaydedildi!**\n\n' +
          '🔐 Anahtarınız güvenle cihazınızda (localStorage) saklandı.\n\n' +
          '🚀 **Şimdi test isteyebilirsin!**\n\n' +
          '**Örnekler:**\n' +
          '• `AI test: YKS Matematik 15 soru orta`\n' +
          '• `AI test: Python programlama 10 soru kolay`\n' +
          '• `AI test: İngilizce grammar 20 soru`\n\n' +
          'Daha fazla örnek için: `/örnekler`',
          'ai'
        );
      } else {
        sendAIMessage(
          '❌ **Anahtar Kaydedilemedi**\n\n' +
          'Bir hata oluştu. Lütfen tekrar deneyin veya:\n\n' +
          '1. Anahtarın tam ve eksiksiz olduğundan emin olun\n' +
          '2. Başında/sonunda boşluk olmadığını kontrol edin\n' +
          '3. Tarayıcınızın localStorage\'ı desteklediğinden emin olun',
          'ai'
        );
      }
      return true;
    }

    // ─────────────────────────────────────────────────────────────────────
    // /yardim, /help - Help System
    // ─────────────────────────────────────────────────────────────────────
    if (/^\s*\/(yardim|help)\s*$/i.test(trimmed)) {
      sendAIMessage(HELP_MESSAGE, 'ai');
      return true;
    }

    // ─────────────────────────────────────────────────────────────────────
    // /örnekler - Examples
    // ─────────────────────────────────────────────────────────────────────
    if (/^\s*\/örnekler\s*$/i.test(trimmed)) {
      sendAIMessage(EXAMPLES_MESSAGE, 'ai');
      return true;
    }

    // ─────────────────────────────────────────────────────────────────────
    // /sistem - System Status
    // ─────────────────────────────────────────────────────────────────────
    if (/^\s*\/sistem\s*$/i.test(trimmed)) {
      if (typeof core.systemCheck === 'function') {
        const health = core.systemCheck();
        sendAIMessage(
          `## 🔧 SİSTEM DURUMU\n\n` +
          `**Versiyon:** ${health.version}\n` +
          `**API Anahtarı:** ${health.apiKeyConfigured ? '✅ Kayıtlı' : '❌ Kayıtsız'}\n` +
          `**Model:** ${health.model}\n` +
          `**API Base:** ${health.apiBase}\n` +
          `**Dil:** ${health.language}\n` +
          `**Arşiv:** ${health.archive} test\n\n` +
          `${health.apiKeyConfigured ? 
            '✅ Sistem hazır! Test isteyebilirsin.' : 
            '⚠️ Önce API anahtarını kaydet: `/key <anahtar>`'
          }`,
          'ai'
        );
      } else {
        sendAIMessage('⚠️ Sistem kontrolü kullanılamıyor.', 'ai');
      }
      return true;
    }

    // ─────────────────────────────────────────────────────────────────────
    // /temizle - Clear Chat
    // ─────────────────────────────────────────────────────────────────────
    if (/^\s*\/temizle\s*$/i.test(trimmed)) {
      if (typeof core.clearChat === 'function') {
        core.clearChat();
        clearChatHistory();
        sendAIMessage(
          '🧹 **Sohbet Temizlendi**\n\n' +
          'Yeni bir başlangıç için hazırız!\n\n' +
          'Ne yapmak istersin?\n' +
          '• `/yardim` - Yardım al\n' +
          '• `/örnekler` - Örnek istekler\n' +
          '• Test iste - Doğrudan yaz!',
          'ai'
        );
      }
      return true;
    }

    // ─────────────────────────────────────────────────────────────────────
    // /arşiv - Show Archive
    // ─────────────────────────────────────────────────────────────────────
    if (/^\s*\/arşiv\s*$/i.test(trimmed)) {
      if (typeof core.getArchive === 'function') {
        const archive = core.getArchive();
        if (archive.length === 0) {
          sendAIMessage(
            '📚 **Arşiv Boş**\n\n' +
            'Henüz hiç test oluşturmadın.\n\n' +
            'Örnek:\n```\nAI test: YKS Matematik 10 soru\n```',
            'ai'
          );
        } else {
          let msg = '## 📚 TEST ARŞİVİ\n\n';
          archive.slice(0, 10).forEach((item, idx) => {
            const date = new Date(item.timestamp).toLocaleDateString('tr-TR');
            msg += `**${idx + 1}.** ${item.title}\n`;
            msg += `   • ${item.questionCount} soru • ${item.difficulty} • ${date}\n\n`;
          });
          if (archive.length > 10) {
            msg += `\n_... ve ${archive.length - 10} test daha._`;
          }
          sendAIMessage(msg, 'ai');
        }
      }
      return true;
    }

    // ─────────────────────────────────────────────────────────────────────
    // /dışa-aktar - Export Chat
    // ─────────────────────────────────────────────────────────────────────
    if (/^\s*\/dışa-aktar\s*$/i.test(trimmed)) {
      if (exportChatHistory()) {
        sendAIMessage('✅ Sohbet geçmişi dışa aktarıldı!', 'ai');
      } else {
        sendAIMessage('❌ Dışa aktarma başarısız.', 'ai');
      }
      return true;
    }

    // ─────────────────────────────────────────────────────────────────────
    // Unknown Command
    // ─────────────────────────────────────────────────────────────────────
    if (trimmed.startsWith('/')) {
      sendAIMessage(
        `❌ **Bilinmeyen Komut:** \`${trimmed}\`\n\n` +
        'Kullanılabilir komutlar için: `/yardim`',
        'ai'
      );
      return true;
    }

    return false;
  }

  // ═══════════════════════════════════════════════════════════════════════
  // AI REQUEST ROUTING
  // ═══════════════════════════════════════════════════════════════════════

  function routeToAI(text) {
    const core = window.TestifyAI;
    
    if (!core || typeof core.generateTestFromAI !== 'function') {
      sendAIMessage(
        '❌ **Sistem Hatası**\n\n' +
        'Master Teacher AI modülü yüklenemedi.\n\n' +
        'Lütfen sayfayı yenileyin veya teknik destek alın.',
        'ai'
      );
      return;
    }

    // Check if already generating
    if (core.isGenerating) {
      sendAIMessage(
        '⏳ **Bir Test Zaten Oluşturuluyor**\n\n' +
        'Lütfen mevcut işlemin tamamlanmasını bekleyin.\n\n' +
        '💡 **İpucu:** GPT-4o ile yüksek kaliteli testler oluşturuyoruz, ' +
        'bu biraz zaman alabilir. Sabır, kalite için değer!',
        'ai'
      );
      return;
    }

    // Check API key
    if (!core.config || !core.config.getApiKey || !core.config.getApiKey()) {
      sendAIMessage(
        '⚠️ **API Anahtarı Gerekli**\n\n' +
        'Test oluşturabilmek için OpenAI API anahtarına ihtiyacımız var.\n\n' +
        '**Nasıl yapılır?**\n' +
        '1. https://platform.openai.com/api-keys adresine git\n' +
        '2. Yeni bir anahtar oluştur\n' +
        '3. Buraya şu komutu yaz:\n```\n/key sk-proj-senin-anahtarin\n```\n\n' +
        '🔐 **Güvenlik:** Anahtarın sadece cihazında saklanır.',
        'ai'
      );
      return;
    }

    // All checks passed, route to AI
    try {
      core.generateTestFromAI(text);
    } catch (error) {
      console.error('AI routing error:', error);
      sendAIMessage(
        '❌ **Beklenmeyen Hata**\n\n' +
        `Hata: ${error.message}\n\n` +
        'Lütfen tekrar deneyin. Sorun devam ederse:\n' +
        '• Tarayıcı konsolunu kontrol edin\n' +
        '• API anahtarınızı doğrulayın\n' +
        '• Sayfayı yenileyin',
        'ai'
      );
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // KEYBOARD SHORTCUTS
  // ═══════════════════════════════════════════════════════════════════════

  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl+K - Command palette
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        const input = $('#aiInput');
        if (input) {
          input.value = '/';
          input.focus();
        }
      }

      // Esc - Close chat
      if (e.key === 'Escape') {
        const widget = $('#chatWidget');
        const toggleBtn = $('#chatToggleBtn');
        if (widget && widget.classList.contains('chat-widget--open')) {
          widget.classList.remove('chat-widget--open');
          widget.classList.remove('chat-widget--minimized');
          if (toggleBtn) {
            toggleBtn.classList.remove('chat-toggle-btn--hidden');
          }
        }
      }
    });
  }

  // ═══════════════════════════════════════════════════════════════════════
  // CHAT WIDGET INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════

  function initChatBridge() {
    console.log('═'.repeat(80));
    console.log(`🎓 TESTIFY CHAT BRIDGE v${VERSION}`);
    console.log('Vision: Transform education through AI');
    console.log('Philosophy: Learning-centered, World-class quality');
    console.log('═'.repeat(80));

    const widget = $('#chatWidget');
    const toggleBtn = $('#chatToggleBtn');
    const minimizeBtn = $('#chatMinimizeBtn');
    const closeBtn = $('#chatCloseBtn');
    const input = $('#aiInput');
    const sendBtn = $('#aiSendBtn');

    if (!widget || !input) {
      console.error('Chat widget elements not found');
      return;
    }

    // ─────────────────────────────────────────────────────────────────────
    // Toggle Widget
    // ─────────────────────────────────────────────────────────────────────
    on(toggleBtn, 'click', () => {
      widget.classList.add('chat-widget--open');
      if (toggleBtn) {
        toggleBtn.classList.add('chat-toggle-btn--hidden');
      }
      setTimeout(() => input && input.focus(), 100);
    });

    // ─────────────────────────────────────────────────────────────────────
    // Minimize Widget
    // ─────────────────────────────────────────────────────────────────────
    on(minimizeBtn, 'click', () => {
      widget.classList.toggle('chat-widget--minimized');
    });

    // ─────────────────────────────────────────────────────────────────────
    // Close Widget
    // ─────────────────────────────────────────────────────────────────────
    on(closeBtn, 'click', () => {
      widget.classList.remove('chat-widget--open');
      widget.classList.remove('chat-widget--minimized');
      if (toggleBtn) {
        toggleBtn.classList.remove('chat-toggle-btn--hidden');
      }
    });

    // ─────────────────────────────────────────────────────────────────────
    // Message Submission
    // ─────────────────────────────────────────────────────────────────────
    function submit() {
      if (!input) return;
      
      const text = input.value.trim();
      if (!text) return;

      input.value = '';
      input.focus();

      sendUserMessage(text);

      // Handle command or route to AI
      if (!handleCommand(text)) {
        routeToAI(text);
      }
    }

    on(sendBtn, 'click', submit);

    on(input, 'keydown', (e) => {
      if (e.key === 'Enter') {
        if (e.ctrlKey || !e.shiftKey) {
          e.preventDefault();
          submit();
        }
      }
    });

    // ─────────────────────────────────────────────────────────────────────
    // Welcome Message (First Time)
    // ─────────────────────────────────────────────────────────────────────
    const WELCOMED_KEY = 'testify_welcomed_v11.1';
    if (!localStorage.getItem(WELCOMED_KEY)) {
      setTimeout(() => {
        sendAIMessage(WELCOME_MESSAGE, 'ai');
        localStorage.setItem(WELCOMED_KEY, 'true');
      }, 500);
    }

    // ─────────────────────────────────────────────────────────────────────
    // Load Chat History
    // ─────────────────────────────────────────────────────────────────────
    const history = loadChatHistory();
    if (history.length > 0 && window.TestifyAI && window.TestifyAI.clearChat) {
      // Clear UI first
      window.TestifyAI.clearChat();
      
      // Reload last 20 messages
      history.slice(-20).forEach(msg => {
        if (window.TestifyAI && window.TestifyAI.addMessage) {
          window.TestifyAI.addMessage(msg.content, msg.role);
        }
      });
    }

    // ─────────────────────────────────────────────────────────────────────
    // Initialize Keyboard Shortcuts
    // ─────────────────────────────────────────────────────────────────────
    initKeyboardShortcuts();

    console.log('✓ Chat bridge initialized successfully');
    console.log('✓ Ready to transform learning experiences');
    console.log('═'.repeat(80));
  }

  // ═══════════════════════════════════════════════════════════════════════
  // AUTO-INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatBridge);
  } else {
    initChatBridge();
  }

  // ═══════════════════════════════════════════════════════════════════════
  // EXPORT PUBLIC API
  // ═══════════════════════════════════════════════════════════════════════

  window.TestifyChatBridge = {
    version: VERSION,
    sendUserMessage,
    sendAIMessage,
    handleCommand,
    exportChatHistory,
    clearChatHistory,
    loadChatHistory
  };

})(window, document);
