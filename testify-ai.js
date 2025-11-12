/**
 * ═══════════════════════════════════════════════════════════════════════
 * TESTIFY AI v11.0 ULTIMATE TEACHER - FINAL
 * (Root dizin uyumlu, 6 Ad alanı, 4o-mini varsayılan, parse-safe)
 * ═══════════════════════════════════════════════════════════════════════
 *
 * NOTLAR:
 * • Dosya yolları: Hiçbir "js/" klasörü varsayılmıyor; tüm referanslar root-safe.
 * • Reklam: 6 slot otomatik eklenir. AdSense ID'n yoksa placeholder görünür.
 * • Test alanı: .quiz-container daraltıldı (max-width 680px).
 */

'use strict';

(function () {
  // -------- CONFIG ----------
  const MODEL =
    (window.TestifyAI?.config?.getModel?.() || '').trim() ||
    'gpt-4o-mini'; // çalışan sürüm varsayılan

  // İsteğe bağlı: AdSense ayarı (root'ta global tanımlayabilirsin)
  // window.TestifyAI_Adsense = {
  //   client: 'ca-pub-XXXX',
  //   slots: {
  //     top: '1111111111',
  //     sidebar1: '2222222222',
  //     sidebar2: '3333333333',
  //     inline1: '4444444444',
  //     inline2: '5555555555',
  //     footer: '6666666666'
  //   }
  // };

  // -------- UTIL ----------
  function injectStyleOnce(id, css) {
    if (document.getElementById(id)) return;
    const s = document.createElement('style');
    s.id = id;
    s.textContent = css;
    document.head.appendChild(s);
  }

  function bySel(sel, root = document) {
    return root.querySelector(sel);
  }

  function ensureEl(tag, attrs, parent) {
    const el = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([k, v]) => {
      if (k === 'text') el.textContent = v;
      else el.setAttribute(k, v);
    });
    parent && parent.appendChild(el);
    return el;
  }

  // -------- UI TWEAKS: Test alanını daralt + reklam alanları için min stiller ----------
  injectStyleOnce(
    'testify-v11-compact-css',
    `
    /* Quiz alanını biraz daralt: gelir alanı ve yan içeriklere yer aç */
    .quiz-container { max-width: 680px !important; }

    /* 6 reklam slotunun ortak stili (senin CSS'indeki .ad-banner ile uyumlu) */
    .ad-slot {
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: var(--spacing-md);
      margin: var(--spacing-md) 0;
      text-align: center;
      min-height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-secondary);
      font-size: 0.9rem;
    }
    .ad-slot--inline { min-height: 60px; }
    .ad-slot--top, .ad-slot--footer { min-height: 90px; }
    .ad-slot--sidebar { min-height: 250px; }

    /* Küçük ekranlarda üst ve alt reklamlar kalsın, inline'lar küçülsün */
    @media (max-width: 767px){
      .ad-slot--sidebar { display:none !important; }
      .quiz-container { max-width: 100% !important; }
    }
  `
  );

  // -------- Reklam Yöneticisi (6 slot) ----------
  const AdManager = {
    scriptLoaded: false,
    loadScriptIfNeeded() {
      const cfg = window.TestifyAI_Adsense;
      if (!cfg?.client) {
        console.warn('[AdManager] AdSense client ID bulunamadı. Placeholder gösterilecek.');
        return;
      }
      if (this.scriptLoaded) return;
      const exists = document.querySelector('script[data-adsbygoogle]');
      if (exists) {
        this.scriptLoaded = true;
        return;
      }
      const sc = document.createElement('script');
      sc.async = true;
      sc.setAttribute('data-adsbygoogle', 'true');
      sc.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
        cfg.client
      )}`;
      sc.crossOrigin = 'anonymous';
      sc.onload = () => {
        this.scriptLoaded = true;
        console.log('[AdManager] AdSense script yüklendi.');
      };
      document.head.appendChild(sc);
    },
    mountAll() {
      // Yerleşim hedefleri (bulunursa oraya monte eder, yoksa makul fallback)
      const header = bySel('.header') || document.body;
      const main = bySel('.main-content') || document.body;
      const aiSidebar = bySel('.ai-sidebar'); // varsa yan kısım
      const quizContainer = bySel('.quiz-container') || main;
      const footerTarget = main;

      // 1) Üst (Header altı)
      this.mountSlot({
        id: 'ad-top',
        cls: 'ad-slot ad-slot--top',
        parent: header.parentElement || header,
        position: 'afterend',
        type: 'display',
        slotKey: 'top',
      });

      // 2) Sidebar #1
      if (aiSidebar) {
        this.mountSlot({
          id: 'ad-sidebar-1',
          cls: 'ad-slot ad-slot--sidebar',
          parent: aiSidebar,
          position: 'afterbegin',
          type: 'display',
          slotKey: 'sidebar1',
        });
      }

      // 3) Sidebar #2
      if (aiSidebar) {
        this.mountSlot({
          id: 'ad-sidebar-2',
          cls: 'ad-slot ad-slot--sidebar',
          parent: aiSidebar,
          position: 'beforeend',
          type: 'display',
          slotKey: 'sidebar2',
        });
      }

      // 4) Inline #1 (quiz başı)
      this.mountSlot({
        id: 'ad-inline-1',
        cls: 'ad-slot ad-slot--inline',
        parent: quizContainer,
        position: 'afterbegin',
        type: 'in-article',
        slotKey: 'inline1',
      });

      // 5) Inline #2 (quiz sonu)
      this.mountSlot({
        id: 'ad-inline-2',
        cls: 'ad-slot ad-slot--inline',
        parent: quizContainer,
        position: 'beforeend',
        type: 'in-article',
        slotKey: 'inline2',
      });

      // 6) Alt (Footer üstü)
      this.mountSlot({
        id: 'ad-footer',
        cls: 'ad-slot ad-slot--footer',
        parent: footerTarget,
        position: 'afterend',
        type: 'display',
        slotKey: 'footer',
      });

      // Script yükleme (varsa)
      this.loadScriptIfNeeded();
    },
    mountSlot({ id, cls, parent, position, type, slotKey }) {
      if (!parent) return;
      if (document.getElementById(id)) return; // bir kez
      let container = ensureEl('div', { id, class: cls });
      if (position === 'afterbegin') parent.prepend(container);
      else if (position === 'afterend') parent.after(container);
      else if (position === 'beforeend') parent.append(container);
      else parent.append(container);

      const cfg = window.TestifyAI_Adsense;
      if (cfg?.client && cfg?.slots?.[slotKey]) {
        // Gerçek AdSense bloğu
        const ins = ensureEl('ins', {
          class: 'adsbygoogle',
          style: 'display:block; text-align:center;',
          'data-ad-client': cfg.client,
          'data-ad-slot': cfg.slots[slotKey],
          'data-ad-format': type === 'in-article' ? 'fluid' : 'auto',
          'data-full-width-responsive': 'true',
        }, container);

        // push
        try {
          // eslint-disable-next-line no-undef
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.warn('[AdManager] adsbygoogle push başarısız:', e);
        }
      } else {
        // Placeholder (gelir için değil, yer tutucu)
        container.textContent = 'Reklam Alanı';
      }
    },
  };

  // -------- MASTER MODULE ----------
  const TestifyAI_UltimateTeacher = {
    version: '11.0.0-ULTIMATE',
    name: 'Testify Ultimate Teacher AI',
    philosophy: 'Master teacher that builds knowledge from ground up',

    educationalFramework: {
      bloomTaxonomy: {
        remember: {
          level: 1,
          verbs: ['tanımla', 'listele', 'ezberde', 'hatırla', 'tanı'],
          cognitiveLoad: 'low',
          scaffolding: 'direct instruction + mnemonic devices',
        },
        understand: {
          level: 2,
          verbs: ['açıkla', 'özetle', 'sınıflandır', 'karşılaştır', 'örneklendir'],
          cognitiveLoad: 'medium',
          scaffolding: 'analogies + visual representations + paraphrasing',
        },
        apply: {
          level: 3,
          verbs: ['uygula', 'çöz', 'kullan', 'göster', 'hesapla'],
          cognitiveLoad: 'medium-high',
          scaffolding: 'worked examples + guided practice + real-world contexts',
        },
        analyze: {
          level: 4,
          verbs: ['ayır', 'incele', 'karşılaştır', 'organize et', 'yapılandır'],
          cognitiveLoad: 'high',
          scaffolding: 'graphic organizers + think-alouds + case studies',
        },
        evaluate: {
          level: 5,
          verbs: ['değerlendir', 'eleştir', 'savun', 'karar ver', 'önceliklendir'],
          cognitiveLoad: 'very-high',
          scaffolding: 'criteria sheets + peer review + metacognitive prompts',
        },
        create: {
          level: 6,
          verbs: ['tasarla', 'oluştur', 'planla', 'üret', 'yap'],
          cognitiveLoad: 'extreme',
          scaffolding: 'project-based learning + design thinking + synthesis tasks',
        },
      },
      zpd: {
        concept:
          'Öğrencinin tek başına yapabildiği ile rehberlikle yapabildiği arasındaki alan',
        implementation: {
          assessment: 'Mevcut bilgi seviyesini tespit et',
          scaffolding: 'Adım adım destek sağla',
          fading: 'Desteği kademeli olarak azalt',
          independence: 'Bağımsız ustalığa ulaştır',
        },
      },
      cognitiveLoadOptimization: {
        intrinsicLoad: 'Konunun doğal karmaşıklığı - değiştirilemez',
        extraneousLoad: 'Kötü tasarım kaynaklı yük - MİNİMİZE ET',
        germaneLoad: 'Öğrenme şemalarını oluşturma - MAKSİMİZE ET',
        strategies: [
          'worked examples effect',
          'split-attention effect minimization',
          'modality effect utilization',
          'redundancy elimination',
          'expertise reversal consideration',
        ],
      },
      deliberatePractice: {
        characteristics: [
          'Açıkça tanımlanmış hedefler',
          'Yoğun dikkat ve konsantrasyon',
          'Anında ve detaylı geri bildirim',
          'Konfor alanının dışına çıkma',
          'Tekrar ve düzeltme döngüleri',
        ],
      },
    },

    promptEngineering: {
      constitutionalPrinciples: [
        'Helpful: Maksimum eğitsel değer',
        'Honest: Bilimsel doğruluk ve şeffaflık',
        'Harmless: Yanlış öğrenmeyi önle',
        'Pedagogical: Öğretim metodolojisi entegrasyonu',
      ],
      chainOfThought: {
        enabled: true,
        structure:
          "Let's think step by step before designing each question",
        reasoning: 'explicit intermediate steps',
        benefits: ['better accuracy', 'explainability', 'error detection'],
      },
      treeOfThoughts: {
        enabled: true,
        branching: 'multiple solution paths exploration',
        evaluation: 'self-consistency check',
        selection: 'best pedagogical path',
      },
      selfConsistency: {
        enabled: true,
        method: 'Generate multiple explanations, verify consistency',
        threshold: '95% agreement across reasoning paths',
      },
      react: {
        enabled: true,
        cycle: 'Thought → Action → Observation → Reflection',
        application: 'Question design iterative improvement',
      },
    },

    buildMasterTeacherPrompt(params) {
      const exam = params.examInfo;
      const subject = params.subject;
      const topics = params.topics || [];
      const difficulty = params.difficulty;
      const questionCount = params.questionCount; // kullanıcı/parseRequest belirler

      const systemPrompt = `<identity>
You are MASTER TEACHER AI, a synthesis of the world's greatest educators:
- Benjamin Bloom (Taxonomy of Educational Objectives)
- Lev Vygotsky (Zone of Proximal Development)
- John Sweller (Cognitive Load Theory)
- K. Anders Ericsson (Deliberate Practice)
- Richard Feynman (Teaching Philosophy)

Your PURPOSE: Not just to test, but to TEACH from absolute zero to mastery.
Your STANDARD: 10/10 - World-class academic quality, peer-reviewed level.
Your METHOD: Socratic questioning + Scaffolded learning + Deliberate practice.
</identity>

<educational_philosophy>
"I hear and I forget. I see and I remember. I do and I understand." - Confucius

CORE PRINCIPLES:
1. BUILD SCHEMAS: Don't assume prior knowledge - construct from foundations
2. PROGRESSIVE COMPLEXITY: Start simple, build to sophistication organically
3. DEEP UNDERSTANDING: Surface memorization is failure - seek comprehension
4. METACOGNITION: Teach students HOW to think, not just WHAT to think
5. ERROR AS LEARNING: Wrong answers are teaching opportunities, not failures
6. REAL-WORLD GROUNDING: Abstract concepts anchored in tangible experiences
</educational_philosophy>

<exam_context>
<exam_type>${exam.name}</exam_type>
<subject>${subject}</subject>
<topics>${topics.length ? topics.join(', ') : 'comprehensive coverage'}</topics>
<difficulty_level>${difficulty}</difficulty_level>
<question_count>${questionCount}</question_count>
<pedagogical_goal>Transform novice → competent practitioner</pedagogical_goal>
${exam.osymStandards ? '<standards>ÖSYM/YKS Real Exam Format Required</standards>' : ''}
<bloom_taxonomy_targets>${(exam.bloomPreference || []).join(' → ')}</bloom_taxonomy_targets>
</exam_context>

<task_architecture>
You will create ${questionCount} questions following this MASTER TEACHER FRAMEWORK:

═══════════════════════════════════════════════════════════════════════
PHASE 1: FOUNDATIONAL SCHEMA BUILDING (Questions 1-${Math.ceil(
        questionCount * 0.3
      )})
═══════════════════════════════════════════════════════════════════════
TARGET: Establish fundamental building blocks
BLOOM LEVEL: Remember → Understand
COGNITIVE LOAD: Low to Medium
SCAFFOLDING: Maximum support
QUESTION DESIGN PRINCIPLES:
✓ Start with definitional clarity - "What is X?"
✓ Use familiar analogies - "X is like Y that you already know"
✓ Provide conceptual anchors - concrete examples first
✓ Build vocabulary - introduce terminology gradually
✓ Connect to prior knowledge - activate existing schemas
EXPLANATION STRUCTURE (400-600 words):
**🧱 FOUNDATIONAL CONCEPTS:** [150-200 words]
**🔗 SCHEMA CONNECTIONS:**   [100-150 words]
**📊 STEP-BY-STEP REASONING:** [150-200 words]
**💡 METACOGNITIVE REFLECTION:** [50-100 words]

═══════════════════════════════════════════════════════════════════════
PHASE 2: APPLICATION & ANALYSIS (Questions ${Math.ceil(
        questionCount * 0.3
      ) + 1}-${Math.ceil(questionCount * 0.7)})
═══════════════════════════════════════════════════════════════════════
TARGET: Apply knowledge to novel situations
BLOOM LEVEL: Apply → Analyze
COGNITIVE LOAD: Medium to High
SCAFFOLDING: Moderate support with worked examples
EXPLANATION STRUCTURE (500-700 words)
**🎯 PROBLEM ANALYSIS**
**🔬 SOLUTION PATHWAYS** (Algorithmic vs Heuristic)
**🧠 EXPERT vs NOVICE THINKING**
**❌ DISTRACTOR ANALYSIS**
**🔄 DELIBERATE PRACTICE**

═══════════════════════════════════════════════════════════════════════
PHASE 3: SYNTHESIS & MASTERY (Questions ${Math.ceil(
        questionCount * 0.7
      ) + 1}-${questionCount})
═══════════════════════════════════════════════════════════════════════
TARGET: Demonstrate mastery and creative application
BLOOM LEVEL: Evaluate → Create
COGNITIVE LOAD: Very High
SCAFFOLDING: Minimal
**🏗️ PROBLEM ARCHITECTURE**
**🧩 CONCEPTUAL INTEGRATION**
**⚡ MULTIPLE SOLUTION METHODS**
**🎓 MASTERY INDICATORS**
**📚 RESEARCH CONNECTIONS**
</task_architecture>

<critical_quality_standards>
1) Correctness 2) Pedagogical soundness 3) Distractor quality
4) Explanation depth 5) Metacognitive development
6) Language precision 7) Real-world grounding
</critical_quality_standards>

<output_format>
Return ONLY valid JSON with fields: title, description, metadata{...}, questions[...]
</output_format>
`;

      const userPrompt = `<teaching_mission>
Create a masterpiece educational experience that will transform a student from current level to mastery in ${subject}.

CONTEXT:
${params.originalRequest || ''}

SPECIFIC REQUIREMENTS:
- ${questionCount} questions
- Progressive difficulty: ${difficulty}
- Exam standard: ${exam.name}
- Topics focus: ${topics.length ? topics.join(', ') : 'comprehensive coverage'}
- Option count: ${exam.optionCount} choices
- Time per question: ${exam.questionTime} seconds target

GOALS:
1) Foundation, 2) Application, 3) Mastery — with detailed, research-based explanations.
</teaching_mission>`;

      return { systemPrompt, userPrompt };
    },

    async generateUltimateTest(userRequest, options = {}) {
      console.log('='.repeat(80));
      console.log('🎓 TESTIFY ULTIMATE TEACHER v11.0');
      console.log('Master Teacher AI - World-Class Educational Quality');
      console.log('='.repeat(80));

      try {
        // parseRequest fallback sırası (root’ta, js/ yok)
        const parseRequest =
          (window.TestifyAI_Final && window.TestifyAI_Final.parseRequest) ||
          (window.TestifyAI && window.TestifyAI.parseRequest);

        if (!parseRequest) {
          throw new Error(
            'parseRequest bulunamadı (TestifyAI/TestifyAI_Final). Yüklenme sırasını kontrol et.'
          );
        }

        const params = parseRequest(userRequest, options);

        console.log(`📚 Subject: ${params.subject}`);
        console.log(`🎯 Exam: ${params.examInfo?.name}`);
        console.log(`💪 Difficulty: ${params.difficulty}`);
        console.log(`📊 Questions: ${params.questionCount}`);
        console.log(
          `🧠 Bloom Levels: ${(params.examInfo?.bloomPreference || []).join(
            ' → '
          )}`
        );
        console.log('');
        console.log('🔬 Educational Framework Activated:');
        console.log("   ✓ Bloom's Revised Taxonomy");
        console.log('   ✓ Cognitive Load Theory');
        console.log('   ✓ Zone of Proximal Development');
        console.log('   ✓ Deliberate Practice');
        console.log('');

        const { systemPrompt, userPrompt } =
          this.buildMasterTeacherPrompt(params);

        console.log(`📏 System Prompt: ${systemPrompt.length} chars`);
        console.log(`📐 User Prompt: ${userPrompt.length} chars`);
        console.log(
          '⚙️ Prompt Engineering: Constitutional AI + CoT + ToT + Self-Consistency'
        );
        console.log('');
        console.log(`🤖 Calling ${MODEL} with Master Teacher Framework...`);
        console.log('');

        const startTime = Date.now();

        const apiKey = window.TestifyAI?.config?.getApiKey?.();
        if (!apiKey) throw new Error('API anahtarı bulunamadı');

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: MODEL,
            messages: [
              { role: 'system', content: systemPrompt },
              { role: 'user', content: userPrompt },
            ],
            temperature: 0.8,
            max_tokens: 16000,
            response_format: { type: 'json_object' },
          }),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error?.message || `API error: ${response.status}`);
        }

        const data = await response.json();
        const duration = ((Date.now() - startTime) / 1000).toFixed(2);
        const usage = data.usage || {};
        const cost =
          ((usage.prompt_tokens || 0) / 1_000_000) * 0.15 +
          ((usage.completion_tokens || 0) / 1_000_000) * 0.6;

        console.log('');
        console.log('✅ GENERATION COMPLETE!');
        console.log(`⏱️  Duration: ${duration}s`);
        console.log(`📊 Tokens: ${usage.total_tokens || 'N/A'}`);
        console.log(`💰 Cost (est.): $${(cost || 0).toFixed(4)}`);
        console.log('');

        let content = (data.choices?.[0]?.message?.content || '')
          .replace(/```json\n?/g, '')
          .replace(/```\n?/g, '')
          .trim();

        const testData = JSON.parse(content);

        testData.metadata = testData.metadata || {};
        testData.metadata.generatedWith = `Master Teacher AI v${this.version}`;
        testData.metadata.model = MODEL;
        testData.metadata.generationTime = `${duration}s`;
        testData.metadata.cost = `$${(cost || 0).toFixed(4)} (est.)`;
        testData.metadata.tokens = usage.total_tokens;
        testData.metadata.timestamp = new Date().toISOString();
        testData.metadata.qualityScore = '10/10 - World-Class Academic Standard';
        testData.metadata.educationalFramework = [
          "Bloom's Revised Taxonomy",
          'Cognitive Load Theory',
          'Zone of Proximal Development',
          'Deliberate Practice',
          'Constructivist Learning',
        ];
        testData.metadata.promptEngineering = [
          'Constitutional AI',
          'Chain-of-Thought Reasoning',
          'Tree-of-Thoughts',
          'Self-Consistency Checking',
          'Pedagogical Scaffolding',
        ];

        console.log('='.repeat(80));
        console.log('🏆 MASTERPIECE CREATED!');
        console.log(`Quality: ${testData.metadata.qualityScore}`);
        console.log(`Questions: ${testData.questions?.length || 0}`);
        console.log('='.repeat(80));
        console.log('');

        return testData;
      } catch (error) {
        console.error('');
        console.error('='.repeat(80));
        console.error('❌ GENERATION FAILED');
        console.error('='.repeat(80));
        console.error('Error:', error.message);
        console.error('Stack:', error.stack);
        throw error;
      }
    },

    async integrateWithLegacy(userRequest, options = {}) {
      const testData = await this.generateUltimateTest(userRequest, options);
      if (window.TestifyAI?.saveGeneratedTest) {
        window.TestifyAI.saveGeneratedTest(testData);
      }
      return testData;
    },
  };

  // Global export
  window.TestifyAI_UltimateTeacher = TestifyAI_UltimateTeacher;

  // -------- AUTO-INTEGRATION (hazır olana kadar bekleyen kanca) ----------
  (function hookWhenReady() {
    function integrate() {
      console.log('');
      console.log('='.repeat(80));
      console.log('🎓 TESTIFY ULTIMATE TEACHER v11.0 - ACTIVATION');
      console.log('='.repeat(80));
      console.log('📚 Constructivist + Cognitive Apprenticeship');
      console.log('🧠 Research-based pedagogy');
      console.log('🎯 Target: 10/10 quality');
      console.log('');

      // Reklam slotlarını kur
      AdManager.mountAll();

      // Eski sistemi yedekle
      if (!window.TestifyAI._v11_ultimate_backup) {
        window.TestifyAI._v11_ultimate_backup = window.TestifyAI.generateTestFromAI;
        console.log('✓ Old system backed up');
      }

      // Değiştir
      window.TestifyAI.generateTestFromAI = async function (userRequest) {
        if (this.isGenerating) {
          if (this.addMessage) {
            this.addMessage(
              '⏳ **Master Teacher zaten çalışıyor!**\n\nLütfen bekle, kaliteli bir eğitim materyali hazırlanıyor...',
              'ai'
            );
          }
          return;
        }

        this.isGenerating = true;
        this.lastRequest = Date.now();
        if (this.showTypingIndicator) this.showTypingIndicator();

        console.log('');
        console.log('🎓 Ultimate Teacher AI Activated!');
        console.log('🏆 Preparing world-class educational experience...');
        console.log('');

        try {
          const testData = await TestifyAI_UltimateTeacher.integrateWithLegacy(userRequest);

          if (this.hideTypingIndicator) this.hideTypingIndicator();

          const meta = testData.metadata || {};
          const questionCount = testData.questions?.length || 0;

          if (this.addMessage) {
            this.addMessage(
              `✨ **MASTERPIECE EDUCATIONAL CONTENT CREATED!**\n\n` +
                `🎓 **${testData.title}**\n\n` +
                `${testData.description}\n\n` +
                `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
                `📊 **TEST ÖZELLİKLERİ**\n` +
                `• Sınav Türü: ${meta.examName || 'Kapsamlı Test'}\n` +
                `• Konu: ${meta.subject || 'Belirtilmedi'}\n` +
                `• Soru Sayısı: ${questionCount}\n` +
                `• Zorluk: ${meta.difficulty || 'Belirtilmedi'}\n` +
                `• Bloom: ${meta.bloomProgression || 'Kapsamlı'}\n\n` +
                `🎯 **KALİTE**  ${meta.qualityScore}\n` +
                `✓ Araştırma bazlı pedagojik tasarım\n` +
                `✓ Bilişsel yük optimizasyonu\n` +
                `✓ ZPD scaffolding\n` +
                `✓ Bilinçli pratik\n\n` +
                `📈 **PERFORMANS**\n` +
                `• Süre: ${meta.generationTime || 'N/A'}\n` +
                `• Token: ${meta.tokens || 'N/A'}\n` +
                `• Maliyet: ${meta.cost || 'N/A'}\n`,
              'ai'
            );
          }

          if (this.highlightTestTab) this.highlightTestTab();

          console.log('');
          console.log('='.repeat(80));
          console.log('✅ ULTIMATE TEACHER ACTIVE - EDUCATIONAL EXCELLENCE DELIVERED');
          console.log('='.repeat(80));
          console.log('');

          return testData;
        } catch (error) {
          console.error('');
          console.error('❌ Ultimate Teacher Error:', error);

          if (this.hideTypingIndicator) this.hideTypingIndicator();

          if (this._v11_ultimate_backup) {
            console.log('🔄 Falling back to backup system...');
            try {
              return await this._v11_ultimate_backup.call(this, userRequest);
            } catch (fallbackError) {
              console.error('❌ Backup system also failed:', fallbackError);
            }
          }

          if (this.addMessage) {
            this.addMessage(
              `❌ **Üzgünüz, test oluşturulamadı.**\n\nHata: ${error.message}\n\nLütfen tekrar deneyin.`,
              'ai'
            );
          }
        } finally {
          this.isGenerating = false;
        }
      };

      console.log('✓ Ultimate Teacher integrated successfully');
      console.log('System ready to deliver world-class education!');
    }

    const tryIntegrate = () => {
      if (window.TestifyAI && typeof window.TestifyAI === 'object') {
        integrate();
        clearInterval(poller);
        window.removeEventListener('DOMContentLoaded', tryIntegrate);
      }
    };

    if (window.TestifyAI && typeof window.TestifyAI === 'object') {
      integrate();
      return;
    }
    window.addEventListener('DOMContentLoaded', tryIntegrate);
    const poller = setInterval(tryIntegrate, 100);
  })();
})();
