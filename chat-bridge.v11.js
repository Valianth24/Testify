/*
 * ═══════════════════════════════════════════════════════════════════════════
 * TESTIFY CHAT BRIDGE v11.1 PROFESSIONAL
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * "Education is not the filling of a pail, but the lighting of a fire."
 * - William Butler Yeats
 * 
 * TESTIFY VISION:
 * Dünya standartlarında, AI destekli eğitim içeriği ile her öğrenciye
 * kişiselleştirilmiş öğrenme deneyimi sunmak.
 * 
 * PHILOSOPHY:
 * - Öğrenme merkezli yaklaşım
 * - 10/10 kalite standardı
 * - Araştırma bazlı pedagoji
 * - Profesyonel hizmet anlayışı
 * 
 * API: Testify tarafından sağlanır - Kullanıcı yapılandırması gerektirmez
 * ═══════════════════════════════════════════════════════════════════════════
 */

(function (window, document) {
  'use strict';

  const VERSION = '11.1.0-PROFESSIONAL';
  const CHAT_HISTORY_KEY = 'testify_chat_history';
  const MAX_HISTORY_ITEMS = 50;

  const $ = (sel) => document.querySelector(sel);
  const on = (el, evt, cb) => el && el.addEventListener(evt, cb);

  // ═══════════════════════════════════════════════════════════════════════
  // WELCOME / HELP / EXAMPLES MESSAGES
  // ═══════════════════════════════════════════════════════════════════════
  
  const WELCOME_MESSAGE = `
## 🎓 Testify'a Hoş Geldiniz

**"Bir test sadece değerlendirme değil, öğrenme yolculuğunun ta kendisidir."**  
*- Benjamin Bloom*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🌟 Testify Hakkında

**Testify**, yapay zeka destekli, dünya standartlarında eğitim içeriği sunan profesyonel bir platformdur.

✨ **Vizyonumuz**  
AI teknolojisi ile eğitimde mükemmellik standardı oluşturmak

💡 **Felsefemiz**  
Her öğrenci, seviyesine uygun, kaliteli eğitim içeriğine erişebilmeli

🎯 **Misyonumuz**  
Öğrenme merkezli, bilimsel temelli, erişilebilir eğitim

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🚀 Nasıl Çalışır?

**Çok basit!** Sadece ne istediğinizi yazın:

\`\`\`
YKS Matematik 15 soru orta seviye
KPSS tarih 20 soru
Python programlama 10 soru kolay
İngilizce grammar 15 soru
\`\`\`

Testify'ın **Master Teacher AI** sistemi:
- GPT-4o ile güçlendirilmiş
- Bloom Taksonomisi ile yapılandırılmış
- 500-900 kelimelik detaylı açıklamalar
- Profesyonel akademik standart

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 📚 Hızlı Komutlar

- \`/yardim\` - Detaylı yardım
- \`/örnekler\` - Örnek istekler
- \`/sistem\` - Sistem durumu
- \`/temizle\` - Sohbeti temizle

**Kısayol:** Ctrl+K - Komut menüsü

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🎯 Önemli Not

Testify, **profesyonel bir AI eğitim servisi**dir.  
API ve altyapı tamamen Testify tarafından sağlanır.

Siz sadece öğrenmeye odaklanın! 🚀

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hazırsanız, hemen başlayın! Ne öğrenmek istersiniz?
`;

  const HELP_MESSAGE = `
## 📖 Testify Kullanım Kılavuzu

### ✍️ Test İsteme

**Format:**  
\`[Sınav Tipi] [Konu] [Soru Sayısı] [Zorluk]\`

**Örnekler:**

**YKS/LGS/KPSS Sınavları:**
\`\`\`
YKS Matematik 20 soru orta
LGS Türkçe 10 soru kolay
KPSS Tarih 15 soru zor
\`\`\`

**Üniversite Dersleri:**
\`\`\`
İşletim Sistemleri 10 soru
Veri Yapıları 15 soru orta
Fizik 2 - Elektromanyetik 20 soru
\`\`\`

**Programlama:**
\`\`\`
Python temelleri 10 soru kolay
JavaScript ES6 15 soru orta
React Hooks 10 soru zor
\`\`\`

**Dil Sınavları:**
\`\`\`
İngilizce grammar 20 soru
TOEFL reading 15 soru orta
YÖKDİL vocabulary 10 soru
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⚙️ Sistem Komutları

\`/yardim\` - Bu yardım mesajı  
\`/örnekler\` - Detaylı örnekler  
\`/sistem\` - Sistem durumu  
\`/temizle\` - Sohbeti temizle  
\`/arşiv\` - Oluşturulan testler  
\`/dışa-aktar\` - Sohbeti kaydet  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⌨️ Klavye Kısayolları

**Ctrl+K** - Komut menüsü  
**Ctrl+Enter** - Gönder  
**Esc** - Kapat  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💡 Pro İpuçları

1. **Spesifik olun**  
   ✅ "YKS Matematik integral 15 soru orta"  
   ❌ "Matematik soruları"

2. **Zorluk belirtin**  
   kolay, orta, zor, karışık

3. **Açıklamaları okuyun**  
   Her soru 500-900 kelimelik mini bir ders!

4. **Yavaş öğrenin**  
   Kalite için zaman ayırın.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Daha fazla soru? Sadece sorun! 😊
`;

  const EXAMPLES_MESSAGE = `
## 📚 Örnek Test İstekleri

### 🎯 YKS Sınavları

**TYT:**
\`\`\`
YKS TYT Matematik 40 soru karışık
YKS TYT Türkçe 20 soru orta
YKS TYT Fen Bilimleri 15 soru
\`\`\`

**AYT:**
\`\`\`
YKS AYT Matematik 30 soru zor
YKS AYT Fizik elektrik 20 soru
YKS AYT Kimya organik 15 soru
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🎓 LGS Sınavları

\`\`\`
LGS Matematik 20 soru orta
LGS Fen Bilimleri 15 soru
LGS Türkçe 10 soru kolay
LGS İngilizce 15 soru
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 📋 KPSS Sınavları

\`\`\`
KPSS Tarih Osmanlı 20 soru orta
KPSS Coğrafya Türkiye 15 soru
KPSS Vatandaşlık 10 soru
KPSS Matematik 20 soru kolay
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💻 Bilgisayar & Programlama

\`\`\`
Veri Yapıları linked list 10 soru
Algoritmalar sorting 15 soru
İşletim Sistemleri 20 soru zor
Python list comprehension 10 soru kolay
JavaScript async/await 15 soru orta
React Hooks 10 soru
HTML5 semantic tags 10 soru kolay
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🌍 Dil Sınavları

\`\`\`
TOEFL Reading 15 soru orta
IELTS Writing 10 soru
YÖKDİL vocabulary 20 soru zor
İngilizce grammar tenses 15 soru
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🔬 Fen Bilimleri

\`\`\`
Fizik Newton yasaları 15 soru orta
Kimya periyodik tablo 10 soru kolay
Biyoloji hücre 20 soru
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 **İpucu:** Ne kadar spesifik olursanız, o kadar iyi sonuç alırsınız!
`;

  // ═══════════════════════════════════════════════════════════════════════
  // HELPERS: HTML ESCAPE & DOM RENDER
  // ═══════════════════════════════════════════════════════════════════════

  function escapeHTML(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Basit markdown → HTML: şu an sadece satır sonlarını koruyoruz
  function renderContent(raw) {
    const safe = escapeHTML(raw);
    return safe.replace(/\n/g, '<br>');
  }

  // Core yoksa / addMessage yoksa kullanılacak fallback renderer
  function renderMessageToDom(content, role) {
    const chat = $('#aiChat');
    if (!chat) {
      console.error('aiChat container not found');
      return;
    }

    const isUser = role === 'user' || role === 'human';

    const wrapper = document.createElement('div');
    wrapper.className = 'ai-message ' + (isUser ? 'ai-message--user' : 'ai-message--ai');

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble message-bubble--' + (isUser ? 'user' : 'ai');

    const body = document.createElement('div');
    body.className = 'message-content';
    body.innerHTML = renderContent(content);

    bubble.appendChild(body);
    wrapper.appendChild(bubble);
    chat.appendChild(wrapper);

    chat.scrollTop = chat.scrollHeight;
  }

  function clearChatDom() {
    const chat = $('#aiChat');
    if (chat) chat.innerHTML = '';
  }

  // ═══════════════════════════════════════════════════════════════════════
  // CHAT HISTORY MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════

  function saveChatHistory(role, content) {
    try {
      const history = JSON.parse(localStorage.getItem(CHAT_HISTORY_KEY) || '[]');
      history.push({ role, content, timestamp: Date.now() });
      while (history.length > MAX_HISTORY_ITEMS) history.shift();
      localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(history));
    } catch (e) {
      console.error('Chat history error:', e);
    }
  }

  function loadChatHistory() {
    try {
      return JSON.parse(localStorage.getItem(CHAT_HISTORY_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function clearChatHistory() {
    try {
      localStorage.removeItem(CHAT_HISTORY_KEY);
      return true;
    } catch (e) {
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
      return false;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // MESSAGE HANDLING
  // ═══════════════════════════════════════════════════════════════════════

  function sendUserMessage(text) {
    if (!text || !text.trim()) return;
    
    const core = window.TestifyAI;

    // Önce core varsa onu kullan, yoksa DOM fallback
    if (core && typeof core.addMessage === 'function') {
      core.addMessage(text, 'user');
    } else {
      renderMessageToDom(text, 'user');
    }

    saveChatHistory('user', text);
  }

  function sendAIMessage(content, role = 'ai') {
    const core = window.TestifyAI;

    if (core && typeof core.addMessage === 'function') {
      core.addMessage(content, role);
    } else {
      renderMessageToDom(content, role);
    }

    saveChatHistory(role, content);
  }

  // ═══════════════════════════════════════════════════════════════════════
  // COMMAND HANDLING
  // ═══════════════════════════════════════════════════════════════════════

  function handleCommand(text) {
    const core = window.TestifyAI;
    const trimmed = text.trim();

    // /yardim, /help
    if (/^\s*\/(yardim|help)\s*$/i.test(trimmed)) {
      sendAIMessage(HELP_MESSAGE, 'ai');
      return true;
    }

    // /örnekler
    if (/^\s*\/örnekler\s*$/i.test(trimmed)) {
      sendAIMessage(EXAMPLES_MESSAGE, 'ai');
      return true;
    }

    // /sistem
    if (/^\s*\/sistem\s*$/i.test(trimmed)) {
      if (core && typeof core.systemCheck === 'function') {
        const health = core.systemCheck();
        sendAIMessage(
          `## 🔧 Sistem Durumu\n\n` +
          `**Platform:** Testify Professional\n` +
          `**Versiyon:** ${health.version}\n` +
          `**Model:** ${health.model}\n` +
          `**Servis:** AI Teacher (GPT-4o)\n` +
          `**Dil:** ${health.language}\n` +
          `**Arşiv:** ${health.archive} test\n\n` +
          `✅ Sistem aktif ve hazır!`,
          'ai'
        );
      }
      return true;
    }

    // /temizle
    if (/^\s*\/temizle\s*$/i.test(trimmed)) {
      if (core && typeof core.clearChat === 'function') {
        core.clearChat();
      } else {
        clearChatDom();
      }
      clearChatHistory();
      sendAIMessage(
        `## 🧹 Sohbet Temizlendi\n\n` +
        `Yeni başlangıç için hazırız!\n\n` +
        `Ne öğrenmek istersiniz?`,
        'ai'
      );
      return true;
    }

    // /arşiv
    if (/^\s*\/arşiv\s*$/i.test(trimmed)) {
      if (core && typeof core.getArchive === 'function') {
        const archive = core.getArchive();
        if (archive.length === 0) {
          sendAIMessage(
            `## 📚 Arşiv Boş\n\n` +
            `Henüz test oluşturmadınız.\n\n` +
            `Hemen başlayın! Örnek:\n\`\`\`\nYKS Matematik 10 soru\n\`\`\``,
            'ai'
          );
        } else {
          let msg = '## 📚 Test Arşivi\n\n';
          archive.slice(0, 10).forEach((item, idx) => {
            const date = new Date(item.timestamp).toLocaleDateString('tr-TR');
            msg += `**${idx + 1}.** ${item.title}\n`;
            msg += `   ${item.questionCount} soru • ${item.difficulty} • ${date}\n\n`;
          });
          sendAIMessage(msg, 'ai');
        }
      } else {
        sendAIMessage(
          `## 📚 Arşiv\n\n` +
          `Bu özellik henüz aktif değil.`,
          'ai'
        );
      }
      return true;
    }

    // /dışa-aktar
    if (/^\s*\/dışa-aktar\s*$/i.test(trimmed)) {
      if (exportChatHistory()) {
        sendAIMessage('✅ Sohbet başarıyla dışa aktarıldı!', 'ai');
      } else {
        sendAIMessage('❌ Dışa aktarma başarısız.', 'ai');
      }
      return true;
    }

    // Unknown command
    if (trimmed.startsWith('/')) {
      sendAIMessage(
        `❌ **Bilinmeyen komut:** \`${trimmed}\`\n\n` +
        `Kullanılabilir komutlar: \`/yardim\``,
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
        `## ❌ Sistem Hatası\n\n` +
        `Master Teacher AI modülü yüklenemedi veya tanımlı değil.\n\n` +
        `Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.`,
        'ai'
      );
      console.error('TestifyAI core not found or generateTestFromAI missing');
      return;
    }

    // isGenerating bir alan ise kontrol edelim
    if (typeof core.isGenerating === 'boolean' && core.isGenerating) {
      sendAIMessage(
        `## ⏳ İşlem Devam Ediyor\n\n` +
        `Profesyonel içerik hazırlanıyor.\n` +
        `Lütfen mevcut işlemin tamamlanmasını bekleyin.\n\n` +
        `💡 **Not:** Kaliteli içerik için biraz zaman gerekir.`,
        'ai'
      );
      return;
    }

    try {
      core.generateTestFromAI(text);
    } catch (error) {
      console.error('AI routing error:', error);
      sendAIMessage(
        `## ❌ Beklenmeyen Hata\n\n` +
        `**Hata:** ${error.message}\n\n` +
        `Lütfen tekrar deneyin veya farklı parametreler kullanın.`,
        'ai'
      );
    }
  }

  // ═══════════════════════════════════════════════════════════════════════
  // DRAG / TAŞIMA İŞLEVİ
  // ═══════════════════════════════════════════════════════════════════════

  function initChatDrag(widget, header) {
    if (!widget || !header) return;

    let isDragging = false;
    let startX, startY;
    let startRight, startBottom;

    const startDrag = (clientX, clientY) => {
      isDragging = true;

      const styles = window.getComputedStyle(widget);
      startRight = parseFloat(styles.right) || 0;
      startBottom = parseFloat(styles.bottom) || 0;

      startX = clientX;
      startY = clientY;

      widget.dataset.dragging = 'true';
      const oldTransition = widget.style.transition;
      widget.dataset.oldTransition = oldTransition;
      widget.style.transition = 'none';
    };

    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      startDrag(e.clientX, e.clientY);

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      widget.style.right = (startRight - dx) + 'px';
      widget.style.bottom = (startBottom - dy) + 'px';
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      widget.style.transition = widget.dataset.oldTransition || '';
      delete widget.dataset.dragging;
      delete widget.dataset.oldTransition;
    };

    const onTouchStart = (e) => {
      const touch = e.touches[0];
      if (!touch) return;
      e.preventDefault();
      startDrag(touch.clientX, touch.clientY);

      document.addEventListener('touchmove', onTouchMove, { passive: false });
      document.addEventListener('touchend', onTouchEnd);
      document.addEventListener('touchcancel', onTouchEnd);
    };

    const onTouchMove = (e) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      if (!touch) return;

      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;

      widget.style.right = (startRight - dx) + 'px';
      widget.style.bottom = (startBottom - dy) + 'px';
    };

    const onTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;

      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchcancel', onTouchEnd);

      widget.style.transition = widget.dataset.oldTransition || '';
      delete widget.dataset.dragging;
      delete widget.dataset.oldTransition;
    };

    header.addEventListener('mousedown', onMouseDown);
    header.addEventListener('touchstart', onTouchStart);
  }

  // ═══════════════════════════════════════════════════════════════════════
  // KEYBOARD SHORTCUTS
  // ═══════════════════════════════════════════════════════════════════════

  function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        const input = $('#aiInput');
        if (input) {
          input.value = '/';
          input.focus();
        }
      }

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
  // INITIALIZATION
  // ═══════════════════════════════════════════════════════════════════════

  function initChatBridge() {
    console.log('═'.repeat(80));
    console.log(`🎓 TESTIFY CHAT BRIDGE v${VERSION}`);
    console.log('Professional AI Education Platform');
    console.log('═'.repeat(80));

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

    // Drag / taşıma
    const header = widget.querySelector('.chat-header');
    initChatDrag(widget, header);

    // Toggle
    on(toggleBtn, 'click', () => {
      widget.classList.add('chat-widget--open');
      if (toggleBtn) toggleBtn.classList.add('chat-toggle-btn--hidden');
      setTimeout(() => input && input.focus(), 100);
    });

    // Minimize
    on(minimizeBtn, 'click', () => {
      widget.classList.toggle('chat-widget--minimized');
    });

    // Close
    on(closeBtn, 'click', () => {
      widget.classList.remove('chat-widget--open');
      widget.classList.remove('chat-widget--minimized');
      if (toggleBtn) toggleBtn.classList.remove('chat-toggle-btn--hidden');
    });

    // Submit
    function submit() {
      if (!input) return;
      const text = input.value.trim();
      if (!text) return;

      input.value = '';
      input.focus();

      sendUserMessage(text);

      if (!handleCommand(text)) {
        routeToAI(text);
      }
    }

    on(sendBtn, 'click', submit);
    on(input, 'keydown', (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || !e.shiftKey)) {
        e.preventDefault();
        submit();
      }
    });

    // Welcome message (first time)
    const WELCOMED_KEY = 'testify_welcomed_v11.1_pro';
    if (!localStorage.getItem(WELCOMED_KEY)) {
      setTimeout(() => {
        sendAIMessage(WELCOME_MESSAGE, 'ai');
        localStorage.setItem(WELCOMED_KEY, 'true');
      }, 500);
    }

    // Load history (son 20 mesaj)
    const history = loadChatHistory();
    if (history.length > 0) {
      const core = window.TestifyAI;
      if (core && typeof core.clearChat === 'function') {
        core.clearChat();
      } else {
        clearChatDom();
      }

      history.slice(-20).forEach(msg => {
        const c = window.TestifyAI;
        if (c && typeof c.addMessage === 'function') {
          c.addMessage(msg.content, msg.role);
        } else {
          renderMessageToDom(msg.content, msg.role);
        }
      });
    }

    initKeyboardShortcuts();

    console.log('✓ Chat bridge initialized');
    console.log('✓ Professional service ready');
    console.log('═'.repeat(80));
  }

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatBridge);
  } else {
    initChatBridge();
  }

  // Export
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
