/*
 * TESTIFY CORE v11
 * Merkez uygulama çekirdeği ve UI köprüleri
 * Bu dosya, Testify platformunda global TestifyAI nesnesini sağlar.
 */
(function (window, document) {
  'use strict';

  
  const t = window.t || function (key, fallback) { return fallback || key; };
  const log = (...args) => console.log('[TestifyCore]', ...args);

  // Güvenli JSON
  function safeStringify(obj) {
    try { return JSON.stringify(obj); } catch { return '{}'; }
  }

  // =============================
  // CONFIG ve Depolama Anahtarları
  // =============================
  const LS_KEYS = {
    API_KEY: 'testify_api_key',
    GENERATED_TEST: 'testify_generated_test',
    GENERATED_TESTS: 'testify_generated_tests'
  };

  // =============================
  // Çekirdek Nesne
  // =============================
  const TestifyAI = {
    version: '11.0.0-core',
    isGenerating: false,

    config: {
      getApiKey() {
        try {
          // Eğer Config.js içinde bir getter varsa onu kullan
          if (window.Config && window.Config.getOpenAIKey) {
            return window.Config.getOpenAIKey();
          }
          return localStorage.getItem(LS_KEYS.API_KEY) || '';
        } catch { return ''; }
      },
      setApiKey(key) {
        try { localStorage.setItem(LS_KEYS.API_KEY, key || ''); } catch {}
      }
    },

    /**
     * Basit istek ayrıştırıcı (Ultimate Teacher, TestifyAI_Final.parseRequest kullanır)
     */
    Final: {
      parseRequest(userRequest, options = {}) {
        // Serbest metinden bir kaç temel parametre çıkar
        const text = String(userRequest || '').toLowerCase();
        const out = {
          originalRequest: userRequest || '',
          examType: 'custom',
          subject: options.subject || 'Genel',
          topics: Array.isArray(options.topics) ? options.topics : [],
          difficulty: options.difficulty || (/zor|advanced/.test(text) ? 'hard' : /kolay|easy/.test(text) ? 'easy' : 'medium'),
          questionCount: Math.max(1, Math.min(50, Number(options.questionCount) || (/\b(5|10|15|20|25|30)\b/.test(text) ? Number(RegExp.$1) : 10))),
          examInfo: {
            name: options.examName || (/yks|ösym|tyt|ayt/.test(text) ? 'YKS / ÖSYM' : 'Custom Practice'),
            optionCount: Number(options.optionCount) || 4,
            bloomPreference: ['Remember', 'Understand', 'Apply', 'Analyze', 'Evaluate', 'Create'],
            questionTime: Number(options.questionTime) || (/sinav|exam/.test(text) ? 75 : 60),
            osymStandards: /yks|ösym|tyt|ayt/.test(text)
          }
        };

        // Heuristik konu/başlık çıkarımı
        if (!options.subject) {
          const m = text.match(/(fizik|kimya|biyoloji|mat(e)?matik|tarih|cografya|ingilizce|edebiyat|işletim sistemleri|database|veri yapıları)/);
          if (m) out.subject = (m[0] || 'Genel').replace('mate', 'mate').replace(/\b\w/g, c => c.toUpperCase());
        }
        if (!out.topics.length) {
          const topics = [];
          ['çarpanlara ayırma','türev','integral','os','thread','process','bellek yönetimi','oop','sql','normalizasyon','ağ','tcp','http'].forEach(k => {
            if (text.includes(k)) topics.push(k);
          });
          out.topics = topics;
        }
        return out;
      }
    },

    /**
     * Varsayılan üretim (Ultimate Teacher bunu override eder)
     */
    async generateTestFromAI(userRequest) {
      if (this.isGenerating) return;
      this.isGenerating = true;
      this.showTypingIndicator();
      try {
        const params = this.Final.parseRequest(userRequest, {});
        // Minimal dummy içerik – Ultimate Teacher yoksa çalışır
        const test = {
          title: `Hızlı Test - ${params.subject}`,
          description: 'Bu test, çekirdek sistem tarafından hızlıca oluşturulmuş örnek sorulardan oluşur.',
          metadata: {
            examType: params.examType,
            examName: params.examInfo.name,
            subject: params.subject,
            topics: params.topics,
            difficulty: params.difficulty,
            questionCount: params.questionCount,
            bloomProgression: params.examInfo.bloomPreference.join(' → '),
            generatedWith: `Testify Core ${this.version}`
          },
          questions: []
        };
        for (let i = 1; i <= params.questionCount; i++) {
          test.questions.push({
            id: 'q' + i,
            phase: i <= Math.ceil(params.questionCount * .3) ? 'foundation' : i <= Math.ceil(params.questionCount * .7) ? 'application' : 'mastery',
            bloomLevel: 'understand',
            cognitiveLoad: 'low',
            q: `Örnek soru ${i}: ${params.subject} konusunda temel bir kavram nedir?`,
            o: ['A) Doğru cevap', 'B) Tipik yanılgı', 'C) İşlem hatası', 'D) Bilgi boşluğu'],
            a: 'A',
            explanation: 'Bu, sistemin çevrimdışı modda sağladığı şablon açıklamadır.',
            difficulty: params.difficulty,
            estimatedTime: params.examInfo.questionTime,
            topics: [params.subject],
            prerequisites: [],
            learningObjectives: [],
            commonErrors: [],
            expertInsights: '',
            practiceRecommendations: '',
            researchBased: ''
          });
        }
        this.saveGeneratedTest(test);
        this.addMessage('✅ Hızlı bir örnek test oluşturuldu. **Test** sekmesine geçiyorum...', 'ai');
        this.highlightTestTab();
        return test;
      } catch (err) {
        console.error(err);
        this.addMessage('❌ Test oluşturma sırasında bir hata oluştu: ' + (err && err.message ? err.message : err), 'ai');
      } finally {
        this.hideTypingIndicator();
        this.isGenerating = false;
      }
    },

    /** Kaydetme ve kütüphane aktarımı */
    saveGeneratedTest(testData) {
      try {
        localStorage.setItem(LS_KEYS.GENERATED_TEST, safeStringify(testData));
        // Arşive ekle
        let list = [];
        try { list = JSON.parse(localStorage.getItem(LS_KEYS.GENERATED_TESTS) || '[]'); } catch {}
        list.unshift({ id: testData.metadata && testData.metadata.timestamp || Date.now(), title: testData.title, at: Date.now() });
        list = list.slice(0, 20);
        localStorage.setItem(LS_KEYS.GENERATED_TESTS, JSON.stringify(list));

        // LibraryManager varsa kalıcı kaydet
        if (window.LibraryManager && typeof window.LibraryManager.saveToLibrary === 'function') {
          window.LibraryManager.saveToLibrary(testData);
        }

        // Aktivite kaydı
        if (window.StorageManager && typeof window.StorageManager.saveActivity === 'function') {
          window.StorageManager.saveActivity({
            type: 'ai_test_generated',
            data: { title: testData.title, questions: (testData.questions || []).length },
            timestamp: Date.now()
          });
        }
      } catch (e) {
        console.warn('saveGeneratedTest error', e);
      }
    },

    /** UI Yardımcıları (Chat widget ile entegre) */
    addMessage(html, sender = 'ai') {
      const box = document.getElementById('aiChat');
      if (!box) return;
      const wrap = document.createElement('div');
      wrap.className = 'message ' + (sender === 'user' ? 'message-user' : 'message-ai');
      const inner = document.createElement('div');
      inner.className = 'message-content';
      inner.innerHTML = html.replace(/\n/g, '<br>');
      wrap.appendChild(inner);
      box.appendChild(wrap);
      box.scrollTop = box.scrollHeight;
    },

    showTypingIndicator() {
      const statusEl = document.getElementById('chatStatusText');
      if (statusEl) statusEl.textContent = t('chat.typing', 'Yazıyor…');
      const box = document.getElementById('aiChat');
      if (box) {
        let ind = document.getElementById('typingIndicator');
        if (!ind) {
          ind = document.createElement('div');
          ind.id = 'typingIndicator';
          ind.className = 'message message-ai';
          ind.innerHTML = '<div class="message-content">⋯</div>';
          box.appendChild(ind);
        }
        box.scrollTop = box.scrollHeight;
      }
    },

    hideTypingIndicator() {
      const statusEl = document.getElementById('chatStatusText');
      if (statusEl) statusEl.textContent = t('chat.ready', 'Hazır');
      const ind = document.getElementById('typingIndicator');
      if (ind && ind.parentNode) ind.parentNode.removeChild(ind);
    },

    highlightTestTab() {
      try {
        const tabBtn = document.querySelector('[data-tab="test"]');
        const testPanel = document.getElementById('test');
        if (tabBtn && testPanel) {
          // Sekmeleri pasifleştir
          document.querySelectorAll('.nav-tab').forEach(b => {
            b.classList.toggle('active', b === tabBtn);
            b.setAttribute('aria-selected', b === tabBtn ? 'true' : 'false');
          });
          document.querySelectorAll('.tab-content').forEach(sec => {
            sec.classList.toggle('active', sec.id === 'test');
          });
        }
      } catch (e) { /* yut */ }
    },

    /** Başlatıcı */
    init() {
      log('Core init');
      // Chat toggle (varsa)
      const toggle = document.getElementById('chatToggleBtn');
      const widget = document.getElementById('chatWidget');
      if (toggle && widget) {
        toggle.addEventListener('click', () => {
          widget.classList.toggle('chat-widget--open');
          toggle.classList.toggle('chat-toggle-btn--hidden');
          setTimeout(() => {
            const inp = document.getElementById('aiInput');
            inp && inp.focus();
          }, 50);
        });
      }
      // Basit hazır mesaj
      this.addMessage('Merhaba! Ben **Testify Master Teacher** yardımcısıyım. Bana "AI test: işletim sistemleri 10 soru orta" gibi yazabilirsin.', 'ai');
    }
  };

  // Dışa aktar
  window.TestifyAI = TestifyAI;
  // Eski isimle erişim isteyen modüller için alias
  window.TestifyAI_Final = TestifyAI.Final;

  // DOM hazır olduğunda başlat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => TestifyAI.init());
  } else { TestifyAI.init(); }

})(window, document);
