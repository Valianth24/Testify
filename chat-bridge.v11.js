
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
  // WELCOME MESSAGE - VISION & PHILOSOPHY
  // ═══════════════════════════════════════════════════════════════════════
  
  const WELCOME_MESSAGE = `
# 🎓 Testify AI'ya Hoş Geldin!

**"Bir test sadece değerlendirme aracı değil, öğrenme yolculuğunun ta kendisidir."**  
*- Benjamin Bloom*

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🌟 VİZYONUMUZ

Sadece test üreten bir sistem değiliz - **öğretmeniz**iz.  
Her soru bir öğretim anı, her açıklama bir bilgi fırtınası.

AI destekli eğitimde Türkiye'nin ve dünyanın **en kaliteli** platformu olmak için çalışıyoruz.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 💡 FELSEFEMİZ

✓ **Öğrenme Merkezli**: Test değil, öğrenme önceliğimiz  
✓ **Kalite Standardı**: 10/10 - Dünya çapında mükemmeliyet  
✓ **Bilimsel Temel**: Bloom, Vygotsky, Sweller araştırmaları  
✓ **Erişilebilir**: Her öğrenci, her seviyeden  
✓ **Şeffaf**: Her adım açıklanabilir

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🚀 NASIL ÇALIŞIR?

### 1️⃣ **API Anahtarını Kaydet**
\`\`\`
/key sk-proj-your-openai-api-key-here
\`\`\`

### 2️⃣ **Test İste** (Doğal dille!)
\`\`\`
AI test: YKS Matematik 15 soru orta seviye
AI test: KPSS tarih 20 soru zor
AI test: Python programlama 10 soru kolay
\`\`\`

### 3️⃣ **Öğren ve Geliş**
Her sorunun **500-900 kelimelik** derinlemesine açıklaması var!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📚 HIZLI KOMUTLAR

- \`/key <anahtar>\` - API anahtarını kaydet  
- \`/yardim\` veya \`/help\` - Yardım menüsü  
- \`/örnekler\` - Örnek istekler  
- \`/sistem\` - Sistem durumu  
- \`/temizle\` - Sohbeti temizle  

**Kısayol:** Ctrl+K - Komut paleti

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 🎯 ÖNEMLİ HATIRLATMA

Bu sadece bir AI değil - **Master Teacher AI**.  
GPT-4o'nun tüm zekası + dünya çapında pedagojik araştırmalar.

**Her açıklama**, bir mini ders.  
**Her yanlış cevap**, bir öğrenme fırsatı.  
**Her test**, sıfırdan ustalığa bir yolculuk.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hazırsan, API anahtarını kaydet ve **öğrenme yolculuğuna başla!** 🚀
`;

  const HELP_MESSAGE = `
## 📖 YARDIM & KOMUTLAR

### 🔑 API Anahtarı Yönetimi
\`/key <anahtar>\` - OpenAI API anahtarını kaydet  
Örnek: \`/key sk-proj-abc123...\`

**Nereden alınır?**  
👉 https://platform.openai.com/api-keys

**Güvenlik:** Anahtarınız sadece cihazınızda (localStorage) saklanır.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 📝 Test İsteme Örnekleri

**YKS/LGS/KPSS:**
\`\`\`
AI test: YKS Matematik 20 soru orta
AI test: LGS Türkçe 10 soru kolay
AI test: KPSS Tarih 15 soru zor
\`\`\`

**Üniversite Dersleri:**
\`\`\`
AI test: İşletim Sistemleri 10 soru
AI test: Veri Yapıları ve Algoritmalar 15 soru
AI test: Fizik 2 - Elektromanyetik 20 soru orta
\`\`\`

**Programlama:**
\`\`\`
AI test: Python temelleri 10 soru kolay
AI test: JavaScript ES6 15 soru orta
AI test: React Hooks 10 soru zor
\`\`\`

**Dil Sınavları:**
\`\`\`
AI test: İngilizce grammar 20 soru orta
AI test: TOEFL reading 15 soru
AI test: YÖKDİL vocabulary 10 soru
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⚙️ Sistem Komutları

\`/yardim\` veya \`/help\` - Bu yardım mesajı  
\`/örnekler\` - Daha fazla örnek  
\`/sistem\` - Sistem sağlığı ve ayarları  
\`/temizle\` - Sohbet geçmişini temizle  
\`/arşiv\` - Oluşturulan testleri göster  
\`/dışa-aktar\` - Sohbeti dışa aktar  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### ⌨️ Klavye Kısayolları

**Ctrl+K** - Komut paleti  
**Ctrl+Enter** - Mesaj gönder  
**Esc** - Sohbeti kapat  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💡 İPUÇLARI

**1. Spesifik Ol**
❌ "Matematik testi yap"  
✅ "YKS Matematik integral 15 soru orta"

**2. Zorluk Belirt**
kolay, orta, zor, karışık

**3. Açıklamaları Oku**
Her sorunun 500-900 kelimelik derinlemesine açıklaması var!

**4. Yavaş Öğren**
Acele etme. Her açıklama bir mini ders.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Başka sorun varsa, sadece sor! 😊
`;

  const EXAMPLES_MESSAGE = `
## 📚 ÖRNEK TEST İSTEKLERİ

### 🎯 YKS Sınavları

**TYT (Temel Yeterlilik Testi):**
\`\`\`
AI test: YKS TYT Matematik 40 soru karışık
AI test: YKS TYT Türkçe 20 soru orta
AI test: YKS TYT Fen Bilimleri 15 soru
\`\`\`

**AYT (Alan Yeterlilik Testi):**
\`\`\`
AI test: YKS AYT Matematik 30 soru zor
AI test: YKS AYT Fizik elektrik ve manyetizma 20 soru
AI test: YKS AYT Kimya organik bileşikler 15 soru
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🎓 LGS Sınavları

\`\`\`
AI test: LGS Matematik 20 soru orta
AI test: LGS Fen Bilimleri 15 soru
AI test: LGS Türkçe sözcük anlamı 10 soru kolay
AI test: LGS İngilizce 15 soru karışık
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 📋 KPSS Sınavları

\`\`\`
AI test: KPSS Tarih Osmanlı Dönemi 20 soru orta
AI test: KPSS Coğrafya Türkiye'nin iklimi 15 soru
AI test: KPSS Vatandaşlık anayasa 10 soru
AI test: KPSS Matematik temel kavramlar 20 soru kolay
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💻 Bilgisayar Bilimleri

**Temel Konular:**
\`\`\`
AI test: Veri Yapıları linked list 10 soru orta
AI test: Algoritmalar sorting algorithms 15 soru
AI test: İşletim Sistemleri process scheduling 20 soru zor
AI test: Veritabanı normalizasyon 10 soru
\`\`\`

**Programlama Dilleri:**
\`\`\`
AI test: Python list comprehension 10 soru kolay
AI test: JavaScript promises ve async/await 15 soru orta
AI test: C++ pointers ve memory management 10 soru zor
AI test: Java OOP principles 20 soru orta
\`\`\`

**Web Development:**
\`\`\`
AI test: HTML5 semantic elements 10 soru kolay
AI test: CSS Grid ve Flexbox 15 soru orta
AI test: React Hooks useState ve useEffect 10 soru
AI test: Node.js Express middleware 15 soru zor
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🌍 Dil Sınavları

**İngilizce:**
\`\`\`
AI test: TOEFL Reading Comprehension 15 soru orta
AI test: IELTS Academic Writing Task 1 10 soru
AI test: YÖKDİL vocabulary advanced 20 soru zor
AI test: İngilizce grammar tenses 15 soru kolay
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🔬 Fen Bilimleri

**Fizik:**
\`\`\`
AI test: Fizik Newton yasaları 15 soru orta
AI test: Fizik elektromanyetik indüksiyon 10 soru zor
AI test: Fizik optik mercekler 20 soru kolay
\`\`\`

**Kimya:**
\`\`\`
AI test: Kimya periyodik tablo 10 soru kolay
AI test: Kimya organik reaksiyonlar 15 soru orta
AI test: Kimya asit-baz dengesi 20 soru zor
\`\`\`

**Biyoloji:**
\`\`\`
AI test: Biyoloji hücre bölünmesi 15 soru orta
AI test: Biyoloji genetik Mendel yasaları 10 soru
AI test: Biyoloji ekosistem 20 soru kolay
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 💼 İşletme & Ekonomi

\`\`\`
AI test: İşletme yönetim fonksiyonları 15 soru orta
AI test: Muhasebe bilanço 10 soru
AI test: Ekonomi makro politikalar 20 soru zor
AI test: Pazarlama 4P 15 soru kolay
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### 🎨 Diğer Alanlar

\`\`\`
AI test: Türk Edebiyatı Divan Edebiyatı 15 soru
AI test: Felsefe Antik Yunan 10 soru orta
AI test: Sosyoloji toplumsal kurumlar 20 soru
AI test: Psikoloji gelişim dönemleri 15 soru kolay
\`\`\`

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 **İpucu:** Daha spesifik olursan, daha iyi sonuç alırsın!
`;

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
