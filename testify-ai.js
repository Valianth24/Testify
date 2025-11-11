/**
 * TESTIFY AI v7.2 - TAM ÇALIŞAN SÜRÜM
 * API Key: Dahili
 * Demo Modu: Var
 * Hata Yönetimi: Mükemmel
 */

'use strict';

const TestifyAI = {
    config: {
        name: 'Testify Test Oluşturucu',
        version: '7.2',
        
        // API Anahtarı
        getApiKey() {
            // LocalStorage'dan kontrol et
            let apiKey = localStorage.getItem('testify_api_key');
            
            // Yoksa varsayılan anahtarı kullan
            if (!apiKey) {
                apiKey = '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';
            }
            
            return apiKey;
        },
        
        // API anahtarını güncelle
        setApiKey(newKey) {
            if (newKey && newKey.trim().length > 20) {
                localStorage.setItem('testify_api_key', newKey.trim());
                return true;
            }
            return false;
        },
        
        // API anahtarını temizle
        clearApiKey() {
            localStorage.removeItem('testify_api_key');
        }
    },

    messages: [],
    isGenerating: false,
    lastRequest: null,

    /**
     * MESAJ GÖNDER
     */
    sendMessage(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
        
        const input = document.getElementById('aiInput');
        if (!input) {
            console.error('❌ Input bulunamadı');
            return;
        }
        
        const message = input.value.trim();
        if (!message) {
            console.warn('⚠️ Boş mesaj');
            return;
        }
        
        console.log('📤 Mesaj:', message);
        
        this.addMessage(message, 'user');
        input.value = '';
        input.focus();
        
        this.processMessage(message);
    },

    /**
     * MESAJI İŞLE
     */
    async processMessage(message) {
        const msg = message.toLowerCase().trim();
        
        // Rate limiting
        const now = Date.now();
        if (this.lastRequest && (now - this.lastRequest) < 5000) {
            this.addMessage(
                "⏳ **Lütfen bekle!**\n\nÇok hızlı mesaj gönderiyorsun. 5 saniye bekle.",
                'ai'
            );
            return;
        }
        
        // Selamlaşma
        if (['merhaba', 'selam', 'hey', 'hi', 'hello', 'iyi günler'].some(g => msg.includes(g))) {
            this.addMessage(
                "👋 **Merhaba! Ben Testify AI!**\n\n" +
                "Sana özel testler oluşturabilirim!\n\n" +
                "**📝 NASIL ÇALIŞIR?**\n" +
                "1. Bana konu söyle\n" +
                "2. Test oluştururum (15-30 saniye)\n" +
                "3. \"Test Çöz\" sekmesine git\n" +
                "4. Testini çöz!\n\n" +
                "**💡 ÖRNEKLER:**\n" +
                "• \"Linux komutları hakkında 15 soruluk test oluştur\"\n" +
                "• \"Biyoloji kalıtım konusunda test yap\"\n" +
                "• \"Windows işletim sistemi 20 soru\"\n" +
                "• \"Matematik türev konusu test\"\n\n" +
                "Haydi başlayalım! 🚀",
                'ai'
            );
            return;
        }
        
        // Yardım
        if (msg.includes('yardım') || msg.includes('help') || msg.includes('komut')) {
            this.showHelp();
            return;
        }
        
        // Demo test
        if (msg.includes('demo')) {
            this.addMessage("📝 Demo test yükleniyor...", 'ai');
            setTimeout(() => this.loadDemoTest('Demo Test'), 1000);
            return;
        }
        
        // API yönetimi
        if (msg.includes('api') && (msg.includes('kontrol') || msg.includes('durum'))) {
            const key = this.config.getApiKey();
            const masked = key ? `${key.substring(0, 10)}...${key.substring(key.length - 4)}` : 'Yok';
            this.addMessage(
                `🔑 **API DURUMU**\n\n` +
                `Anahtar: ${masked}\n` +
                `Durum: ${key ? '✅ Mevcut' : '❌ Yok'}\n\n` +
                `Komutlar:\n` +
                `• "demo test" - API olmadan dene\n` +
                `• Test oluştur komutu - API ile çalış`,
                'ai'
            );
            return;
        }
        
        // Test oluşturma
        if (msg.includes('test') || msg.includes('oluştur') || msg.includes('soru')) {
            await this.generateTestFromAI(message);
            return;
        }
        
        // Varsayılan
        this.addMessage(
            "🤔 **Tam anlayamadım...**\n\n" +
            "Test oluşturmak için:\n" +
            "**\"[Konu] hakkında test oluştur\"**\n\n" +
            "**Örnekler:**\n" +
            "• \"Linux 15 soru\"\n" +
            "• \"Biyoloji test yap\"\n" +
            "• \"Windows komutları 20 soruluk test\"\n\n" +
            "Ya da **\"yardım\"** yaz! 📚",
            'ai'
        );
    },

    /**
     * YARDIM GÖSTER
     */
    showHelp() {
        this.addMessage(
            "📚 **YARDIM REHBERİ**\n\n" +
            "**🎯 Test Oluşturma:**\n" +
            "• \"[Konu] hakkında test oluştur\"\n" +
            "• \"[Konu] için [sayı] soru\"\n\n" +
            "**📝 Örnek Komutlar:**\n" +
            "✅ \"Linux komutları hakkında test oluştur\"\n" +
            "✅ \"Biyoloji kalıtım 15 soru\"\n" +
            "✅ \"Windows işletim sistemi test\"\n" +
            "✅ \"Matematik türev 20 soruluk test\"\n\n" +
            "**⚡ Test Oluştuktan Sonra:**\n" +
            "1. \"📝 Test Çöz\" sekmesine tıkla\n" +
            "2. Test otomatik yüklenecek\n" +
            "3. Çöz ve öğren!\n\n" +
            "**🔑 Diğer Komutlar:**\n" +
            "• \"demo test\" - API olmadan dene\n" +
            "• \"api durum\" - API anahtarı kontrol\n\n" +
            "Başka soru? Sor! 💬",
            'ai'
        );
    },

    /**
     * AI İLE TEST OLUŞTUR
     */
    async generateTestFromAI(userRequest) {
        // Çoklu istek kontrolü
        if (this.isGenerating) {
            this.addMessage(
                "⏳ **Zaten bir test oluşturuluyor!**\n\nLütfen bekle...",
                'ai'
            );
            return;
        }
        
        this.isGenerating = true;
        this.lastRequest = Date.now();
        this.showTypingIndicator();
        
        try {
            const apiKey = this.config.getApiKey();
            
            console.log('🔑 API Key mevcut:', apiKey ? 'Evet' : 'Hayır');
            console.log('📤 API isteği gönderiliyor...');
            
            // API İSTEĞİ
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: [
                        {
                            role: "system",
                            content: `Sen bir eğitim test oluşturma uzmanısın. Kullanıcının isteğine göre çoktan seçmeli test oluştur.

ÇIKTI FORMATI (SADECE JSON):
{
  "title": "Test Başlığı (Türkçe)",
  "description": "Kısa açıklama (Türkçe)",
  "questions": [
    {
      "q": "Soru metni (Türkçe)",
      "o": ["Şık 1", "Şık 2", "Şık 3", "Şık 4"],
      "a": "Doğru cevap (TAM METIN, şıklardan biri)",
      "explanation": "Detaylı açıklama (Türkçe, en az 2-3 cümle)",
      "difficulty": "easy veya medium veya hard"
    }
  ]
}

KURALLAR:
✅ Minimum 10, maksimum 30 soru
✅ Her soru 4 şıklı olmalı
✅ "a" alanına doğru cevabın TAM METNİNİ yaz (A, B, C, D değil!)
✅ Doğru cevap mutlaka "o" dizisindeki şıklardan biri olmalı
✅ Açıklamalar öğretici, anlaşılır ve detaylı olsun
✅ Türkçe karakterleri kullan (ı, ş, ğ, ü, ö, ç, İ)
✅ SADECE JSON döndür, başka hiçbir şey yazma
✅ Markdown formatı kullanma (**, *, vb. YASAK)

ÖNEMLİ: Yanıtın SADECE ve SADECE JSON objesi olmalı!`
                        },
                        {
                            role: "user",
                            content: userRequest
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 4000,
                    response_format: { type: "json_object" }
                })
            });

            console.log('📥 API yanıtı alındı, status:', response.status);

            // HATA KONTROLÜ
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error('❌ API Hatası:', errorData);
                
                let errorMessage = 'Bilinmeyen hata';
                
                if (response.status === 401) {
                    errorMessage = 'API anahtarı geçersiz veya süresi dolmuş';
                } else if (response.status === 429) {
                    errorMessage = 'Çok fazla istek. 1 dakika bekle.';
                } else if (response.status === 500) {
                    errorMessage = 'OpenAI sunucu hatası. Tekrar dene.';
                } else if (response.status === 503) {
                    errorMessage = 'OpenAI servisi şu an meşgul. Tekrar dene.';
                } else if (errorData.error) {
                    errorMessage = errorData.error.message || errorData.error.type;
                }
                
                throw new Error(errorMessage);
            }

            // YANIT PARSE
            const data = await response.json();
            console.log('✅ API yanıtı parse edildi');

            if (!data.choices || !data.choices[0] || !data.choices[0].message) {
                throw new Error('API yanıtı geçersiz formatta');
            }

            let aiResponse = data.choices[0].message.content;
            console.log('📝 AI Yanıtı (ilk 200 karakter):', aiResponse.substring(0, 200));
            
            // JSON TEMİZLEME
            aiResponse = aiResponse
                .replace(/```json\n?/g, '')
                .replace(/```\n?/g, '')
                .replace(/^[^{]*/, '')
                .replace(/[^}]*$/, '')
                .trim();
            
            console.log('🧹 Temizlenmiş yanıt (ilk 200 karakter):', aiResponse.substring(0, 200));
            
            // JSON PARSE
            let testData;
            try {
                testData = JSON.parse(aiResponse);
            } catch (parseError) {
                console.error('❌ JSON Parse Hatası:', parseError);
                console.error('Başarısız metin:', aiResponse.substring(0, 500));
                throw new Error('Test oluşturulamadı: Geçersiz JSON formatı');
            }
            
            // VALİDASYON
            if (!testData.questions || !Array.isArray(testData.questions)) {
                throw new Error('Test soruları bulunamadı');
            }
            
            if (testData.questions.length === 0) {
                throw new Error('Hiç soru oluşturulmadı');
            }
            
            // HER SORUYU KONTROL ET
            let validQuestions = 0;
            const cleanedQuestions = [];
            
            for (let i = 0; i < testData.questions.length; i++) {
                const q = testData.questions[i];
                
                // Temel kontroller
                if (!q.q || !q.o || !Array.isArray(q.o) || !q.a) {
                    console.warn(`⚠️ Soru ${i+1} eksik alanlar içeriyor, atlanıyor`);
                    continue;
                }
                
                // 4 şık kontrolü
                if (q.o.length !== 4) {
                    console.warn(`⚠️ Soru ${i+1} 4 şıklı değil (${q.o.length} şık), atlanıyor`);
                    continue;
                }
                
                // Doğru cevap kontrolü
                if (!q.o.includes(q.a)) {
                    console.warn(`⚠️ Soru ${i+1} doğru cevap şıklarda yok:`, q.a);
                    console.warn('Şıklar:', q.o);
                    // İlk şıkkı doğru kabul et
                    q.a = q.o[0];
                    console.warn('Düzeltildi, yeni doğru cevap:', q.a);
                }
                
                // Açıklama kontrolü
                if (!q.explanation || q.explanation.length < 10) {
                    q.explanation = 'Bu sorunun açıklaması oluşturulamadı.';
                }
                
                // Zorluk kontrolü
                if (!['easy', 'medium', 'hard'].includes(q.difficulty)) {
                    q.difficulty = 'medium';
                }
                
                cleanedQuestions.push(q);
                validQuestions++;
            }
            
            if (validQuestions < 5) {
                throw new Error(`Yeterli geçerli soru oluşturulamadı (${validQuestions}/10)`);
            }
            
            testData.questions = cleanedQuestions;
            
            console.log(`✅ ${validQuestions} geçerli soru oluşturuldu`);
            
            // TESTİ KAYDET
            this.saveGeneratedTest(testData);
            
            this.hideTypingIndicator();
            
            // BAŞARI MESAJI
            this.addMessage(
                `✅ **TEST BAŞARIYLA OLUŞTURULDU!**\n\n` +
                `📋 **${testData.title}**\n` +
                `${testData.description}\n\n` +
                `📊 **Soru Sayısı:** ${testData.questions.length}\n` +
                `⏱️ **Tahmini Süre:** ${Math.ceil(testData.questions.length * 1.5)} dakika\n\n` +
                `🎯 **ŞİMDİ NE YAPMALIYIM?**\n` +
                `1️⃣ Yukarıdaki **"📝 Test Çöz"** sekmesine tıkla\n` +
                `2️⃣ Herhangi bir test modunu seç\n` +
                `3️⃣ Testini çöz!\n\n` +
                `💡 **İPUCU:** Test 24 saat boyunca saklanır.\n\n` +
                `Bol şans! 🍀`,
                'ai'
            );
            
            // TEST ÇÖZ SEKMESİNİ VURGULA
            this.highlightTestTab();
            
        } catch (error) {
            console.error('❌ Test oluşturma hatası:', error);
            this.hideTypingIndicator();
            
            let errorMessage = error.message || 'Bilinmeyen hata';
            
            // HATA MESAJI
            this.addMessage(
                `❌ **TEST OLUŞTURULAMADI**\n\n` +
                `**Hata:** ${errorMessage}\n\n` +
                `**💡 ÇÖZÜMLER:**\n` +
                `• Daha açık bir konu belirt\n` +
                `• Soru sayısını belirt (10-20 arası)\n` +
                `• Birkaç saniye bekleyip tekrar dene\n` +
                `• **"demo test"** yazarak API olmadan dene\n\n` +
                `**Örnek doğru format:**\n` +
                `"Linux temel komutları hakkında 15 soruluk test oluştur"\n\n` +
                `Tekrar dener misin? 🔄`,
                'ai'
            );
        } finally {
            this.isGenerating = false;
        }
    },

    /**
     * DEMO TEST YÜKLE
     */
    loadDemoTest(userRequest) {
        const demoTest = {
            title: `${userRequest} - Demo Test`,
            description: 'Bu bir demo testtir. API ile daha kapsamlı testler oluşturabilirsiniz.',
            questions: [
                {
                    q: "Linux'ta hangi komut dosya ve dizinleri listeler?",
                    o: ["ls", "cd", "pwd", "mkdir"],
                    a: "ls",
                    explanation: "ls (list) komutu mevcut dizindeki dosya ve klasörleri listeler. ls -la komutu ile detaylı liste alınır.",
                    difficulty: "easy"
                },
                {
                    q: "Windows Registry nedir?",
                    o: [
                        "Sistem ayarlarının saklandığı merkezi veritabanı",
                        "Dosya yedekleme sistemi",
                        "Antivirüs programı",
                        "İnternet tarayıcısı"
                    ],
                    a: "Sistem ayarlarının saklandığı merkezi veritabanı",
                    explanation: "Windows Registry, tüm sistem ve uygulama ayarlarının saklandığı hiyerarşik bir veritabanıdır. Regedit ile düzenlenebilir.",
                    difficulty: "medium"
                },
                {
                    q: "Linux'ta chmod 755 komutu ne anlama gelir?",
                    o: [
                        "Sahip: rwx, Grup ve Diğerleri: r-x",
                        "Tüm izinleri kaldırır",
                        "Sadece okuma izni verir",
                        "Dosyayı siler"
                    ],
                    a: "Sahip: rwx, Grup ve Diğerleri: r-x",
                    explanation: "chmod 755: Sahip tüm izinlere (okuma, yazma, çalıştırma), grup ve diğer kullanıcılar okuma ve çalıştırma iznine sahip olur.",
                    difficulty: "hard"
                },
                {
                    q: "İşletim sisteminin kalbi nedir?",
                    o: ["Kernel (Çekirdek)", "Shell", "GUI", "BIOS"],
                    a: "Kernel (Çekirdek)",
                    explanation: "Kernel (çekirdek), işletim sisteminin en temel bileşenidir ve donanım ile yazılım arasında köprü görevi görür.",
                    difficulty: "medium"
                },
                {
                    q: "Windows'ta hangi komut IP adresini gösterir?",
                    o: ["ipconfig", "netstat", "ping", "tracert"],
                    a: "ipconfig",
                    explanation: "ipconfig komutu, bilgisayarın IP adresi ve ağ yapılandırma bilgilerini gösterir. ipconfig /all ile detaylı bilgi alınır.",
                    difficulty: "easy"
                },
                {
                    q: "Linux'ta cd komutu ne yapar?",
                    o: ["Dizin değiştirir", "Dosya kopyalar", "Yetki verir", "Ağ bağlantısı kurar"],
                    a: "Dizin değiştirir",
                    explanation: "cd (change directory) komutu, farklı dizinler arasında geçiş yapmak için kullanılır. 'cd ..' üst dizine çıkar.",
                    difficulty: "easy"
                },
                {
                    q: "Linux'ta rm komutu ne yapar?",
                    o: ["Dosya siler", "Dosya kopyalar", "Dizin oluşturur", "İzin değiştirir"],
                    a: "Dosya siler",
                    explanation: "rm (remove) komutu dosya silmek için kullanılır. rm -rf ile dizin ve içindekiler zorla silinir (dikkatli kullanılmalı!).",
                    difficulty: "medium"
                },
                {
                    q: "pwd komutu ne gösterir?",
                    o: ["Mevcut dizinin tam yolu", "Dosya listesi", "Sistem saati", "IP adresi"],
                    a: "Mevcut dizinin tam yolu",
                    explanation: "pwd (print working directory) komutu, bulunduğunuz dizinin tam yolunu gösterir.",
                    difficulty: "easy"
                },
                {
                    q: "mkdir komutu ne yapar?",
                    o: ["Yeni dizin oluşturur", "Dizin siler", "Dosya açar", "Program çalıştırır"],
                    a: "Yeni dizin oluşturur",
                    explanation: "mkdir (make directory) komutu yeni klasör/dizin oluşturmak için kullanılır. mkdir -p ile iç içe dizinler oluşturulabilir.",
                    difficulty: "easy"
                },
                {
                    q: "cat komutu ne yapar?",
                    o: ["Dosya içeriğini gösterir", "Dosya siler", "Dizin oluşturur", "Ağ bağlantısı kurar"],
                    a: "Dosya içeriğini gösterir",
                    explanation: "cat (concatenate) komutu dosya içeriğini ekrana yazdırır. cat file1 file2 > file3 ile birden fazla dosyayı birleştirebilir.",
                    difficulty: "medium"
                },
                {
                    q: "Task Manager'ı açmak için hangi kısayol tuşu kullanılır?",
                    o: ["Ctrl + Shift + Esc", "Ctrl + Alt + Del", "Alt + F4", "Win + R"],
                    a: "Ctrl + Shift + Esc",
                    explanation: "Ctrl + Shift + Esc ile doğrudan Task Manager (Görev Yöneticisi) açılır. Ctrl + Alt + Del ile de seçenekler menüsünden erişilebilir.",
                    difficulty: "easy"
                },
                {
                    q: "Linux'ta hangi komut sistem kaynaklarını gerçek zamanlı gösterir?",
                    o: ["top", "ps", "free", "df"],
                    a: "top",
                    explanation: "top komutu CPU, RAM kullanımını ve çalışan işlemleri gerçek zamanlı olarak gösterir. htop daha gelişmiş bir alternatiftir.",
                    difficulty: "medium"
                },
                {
                    q: "NTFS dosya sisteminin avantajı nedir?",
                    o: [
                        "Güvenlik ve izin yönetimi",
                        "Sadece küçük dosyalar için hızlı",
                        "Çok eski sistemlerde çalışır",
                        "İnternet bağlantısı gerektirir"
                    ],
                    a: "Güvenlik ve izin yönetimi",
                    explanation: "NTFS (New Technology File System), dosya izinleri, şifreleme ve büyük dosya desteği gibi gelişmiş özelliklere sahiptir.",
                    difficulty: "medium"
                },
                {
                    q: "Linux'ta root kullanıcısının UID'si nedir?",
                    o: ["0", "1", "-1", "100"],
                    a: "0",
                    explanation: "Root kullanıcısı (sistem yöneticisi) her zaman 0 UID'sine sahiptir. Normal kullanıcılar genellikle 1000'den başlar.",
                    difficulty: "hard"
                },
                {
                    q: "Hangi işletim sistemi açık kaynak kodludur?",
                    o: ["Linux", "Windows", "macOS", "iOS"],
                    a: "Linux",
                    explanation: "Linux açık kaynak kodlu bir işletim sistemidir. Kaynak kodu herkes tarafından görülebilir ve değiştirilebilir.",
                    difficulty: "easy"
                }
            ]
        };
        
        this.saveGeneratedTest(demoTest);
        
        this.addMessage(
            `✅ **DEMO TEST YÜKLENDI!**\n\n` +
            `📋 **${demoTest.title}**\n` +
            `${demoTest.description}\n\n` +
            `📊 **Soru Sayısı:** ${demoTest.questions.length}\n\n` +
            `⚠️ **NOT:** Bu bir demo testtir.\n` +
            `Gerçek ve kapsamlı testler için:\n` +
            `"[Konu] hakkında test oluştur" yazın.\n\n` +
            `🎯 Şimdi **"Test Çöz"** sekmesine git ve çöz!`,
            'ai'
        );
        
        this.highlightTestTab();
    },

    /**
     * TESTİ KAYDET
     */
    saveGeneratedTest(testData) {
        try {
            const testToSave = {
                ...testData,
                id: 'ai_' + Date.now(),
                createdAt: Date.now(),
                expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24 saat
            };
            
            localStorage.setItem('testify_generated_test', JSON.stringify(testToSave));
            console.log('💾 Test kaydedildi:', testData.title);
            
            // Aktivite kaydet
            if (window.StorageManager) {
                window.StorageManager.saveActivity({
                    type: 'test_created',
                    data: {
                        title: testData.title,
                        questionCount: testData.questions.length,
                        source: 'ai'
                    },
                    timestamp: Date.now()
                });
            }
            
        } catch (error) {
            console.error('❌ Test kaydetme hatası:', error);
        }
    },

    /**
     * TEST ÇÖZ SEKMESİNİ VURGULA
     */
    highlightTestTab() {
        const testTab = document.querySelector('[data-tab="test"]');
        if (testTab) {
            testTab.style.animation = 'pulse 0.6s ease-in-out 4';
            testTab.style.background = 'rgba(99, 102, 241, 0.15)';
            
            setTimeout(() => {
                testTab.style.animation = '';
                testTab.style.background = '';
            }, 2400);
        }
    },

    /**
     * MESAJ EKLE
     */
    addMessage(text, sender = 'ai') {
        const chatContainer = document.getElementById('aiChat');
        if (!chatContainer) {
            console.error('❌ Chat container bulunamadı');
            return;
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = sender === 'user' ? 'ai-message user-message' : 'ai-message';
        messageDiv.style.animation = 'slideIn 0.3s ease-out';
        
        const formattedText = this.formatMessage(text);
        
        if (sender === 'ai') {
            messageDiv.innerHTML = `
                <div class="ai-avatar">🤖</div>
                <div class="message-content">${formattedText}</div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">${this.sanitizeHTML(text)}</div>
            `;
        }
        
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        
        this.messages.push({
            text,
            sender,
            timestamp: Date.now()
        });
    },

    /**
     * MESAJ FORMATLAMA
     */
    formatMessage(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/•/g, '&bull;')
            .replace(/✅/g, '<span style="color: var(--success);">✅</span>')
            .replace(/❌/g, '<span style="color: var(--danger);">❌</span>')
            .replace(/⚠️/g, '<span style="color: var(--warning);">⚠️</span>')
            .replace(/💡/g, '<span style="color: var(--info);">💡</span>');
    },

    /**
     * HTML TEMİZLE
     */
    sanitizeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    /**
     * TYPING INDICATOR GÖSTER
     */
    showTypingIndicator() {
        const chatContainer = document.getElementById('aiChat');
        if (!chatContainer) return;
        
        this.hideTypingIndicator();
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="ai-avatar">🤖</div>
            <div class="message-content">
                <div class="typing-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <p style="margin-top: 8px; font-size: 0.85em; color: var(--text-secondary); animation: pulse 2s infinite;">
                    Test oluşturuluyor, lütfen bekle... (15-30 saniye)
                </p>
            </div>
        `;
        
        chatContainer.appendChild(typingDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    },

    /**
     * TYPING INDICATOR GİZLE
     */
    hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => indicator.remove(), 300);
        }
    },

    /**
     * EVENT LISTENER'LARI KUR
     */
    setupEventListeners() {
        console.log('🔧 Event listener\'lar kuruluyor...');
        
        const input = document.getElementById('aiInput');
        const sendBtn = document.getElementById('aiSendBtn');
        
        if (!input || !sendBtn) {
            console.error('❌ Input veya buton bulunamadı');
            setTimeout(() => this.setupEventListeners(), 500);
            return;
        }
        
        console.log('✅ Input ve buton bulundu');
        
        // Enter tuşu
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                console.log('⌨️ Enter tuşuna basıldı');
                this.sendMessage(e);
            }
        });
        
        // Gönder butonu
        sendBtn.addEventListener('click', (e) => {
            console.log('🖱️ Gönder butonuna tıklandı');
            this.sendMessage(e);
        });
        
        console.log('✅ Event listener\'lar kuruldu');
    },

    /**
     * BAŞLAT
     */
    init() {
        console.log('🎓 Testify AI v7.2 başlatılıyor...');
        
        // Event listener'ları kur
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupEventListeners();
            });
        } else {
            this.setupEventListeners();
        }
        
        // Hoş geldin mesajı
        setTimeout(() => {
            this.addMessage(
                "👋 **Merhaba! Ben Testify AI!**\n\n" +
                "Sana özel testler oluşturabilirim!\n\n" +
                "**🚀 Hızlı Başlangıç:**\n" +
                "1️⃣ Bana bir konu söyle\n" +
                "2️⃣ Test oluştururum (15-30 saniye)\n" +
                "3️⃣ \"Test Çöz\" sekmesine git\n" +
                "4️⃣ Çöz ve öğren!\n\n" +
                "**💡 Örnek Komutlar:**\n" +
                "• \"Linux komutları hakkında 15 soruluk test oluştur\"\n" +
                "• \"Biyoloji kalıtım konusu test\"\n" +
                "• \"demo test\" - API olmadan dene\n\n" +
                "Haydi başlayalım! 🎯",
                'ai'
            );
        }, 500);
        
        console.log('✅ Testify AI hazır!');
    }
};

// Başlat
if (!window.TestifyAI) {
    document.addEventListener('DOMContentLoaded', () => {
        TestifyAI.init();
    });
    window.TestifyAI = TestifyAI;
    window.aiChat = TestifyAI;
} else {
    console.log('⚠️ TestifyAI zaten yüklü');
}

// Yedek çözüm
window.addEventListener('load', () => {
    const sendBtn = document.getElementById('aiSendBtn');
    if (sendBtn && !sendBtn.onclick) {
        sendBtn.onclick = (e) => {
            e.preventDefault();
            console.log('🆘 Yedek çözüm tetiklendi');
            TestifyAI.sendMessage(e);
        };
        console.log('✅ Yedek çözüm kuruldu');
    }
});

/* =========================================================
   TESTIFY FLOATING CHAT WIDGET – AÇ/KAPA + KÜÇÜLT + SÜRÜKLE
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    const widget    = document.querySelector('.chat-widget');
    const wrapper   = document.querySelector('.chat-widget-wrapper');
    const toggleBtn = document.querySelector('.chat-toggle-btn');

    if (!widget || !toggleBtn) return;

    const header        = widget.querySelector('.chat-header');
    const headerButtons = widget.querySelectorAll('.chat-header-btn');
    const chatBody      = widget.querySelector('.chat-body');
    const pageHeader    = document.querySelector('.header');

    const minimizeBtn = headerButtons[0] || null;
    const closeBtn    = headerButtons[1] || null;

    // Üstte kalsın
    widget.style.zIndex = '9999';
    if (wrapper) wrapper.style.zIndex = '9998';

    // Eski onclick & listener’ları mümkün olduğunca devre dışı bırak
    toggleBtn.onclick = null;
    if (minimizeBtn) minimizeBtn.onclick = null;
    if (closeBtn)    closeBtn.onclick    = null;

    const ensureDisplayFlex = () => {
        // Eğer başka script display:none yaptıysa geri al
        if (getComputedStyle(widget).display === 'none') {
            widget.style.display = 'flex';
        }
    };

    const openWidget = () => {
        ensureDisplayFlex();
        widget.classList.add('chat-widget--open');
        widget.classList.remove('chat-widget--minimized');
    };

    const closeWidget = () => {
        widget.classList.remove('chat-widget--open', 'chat-widget--minimized');
        // display'i ellemiyoruz; görünürlüğü CSS kontrol ediyor
    };

    const getSafeTop = () => {
        if (!pageHeader) return 8;
        const rect = pageHeader.getBoundingClientRect();
        // header sticky olduğu için her zaman viewport’ta
        return rect.bottom + 8; // header’ın hemen altı
    };

    const toggleWidgetVisibility = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        }

        if (widget.classList.contains('chat-widget--open')) {
            closeWidget();
        } else {
            openWidget();
        }
    };

    // Sağ alttaki "Testify" butonu – capture fazı ile diğer handler'ları iptal
    toggleBtn.addEventListener('click', toggleWidgetVisibility, true);

    // Küçült butonu
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            ensureDisplayFlex();
            if (!widget.classList.contains('chat-widget--open')) {
                openWidget();
                return;
            }
            widget.classList.toggle('chat-widget--minimized');
        }, true);
    }

    // Çarpı (tam kapat)
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            closeWidget();
        }, true);
    }

    // ==== SÜRÜKLEME ====
    if (header) {
        let isDragging = false;
        let offsetX = 0;
        let offsetY = 0;

        header.style.cursor = 'grab';

        const startDrag = (clientX, clientY) => {
            isDragging = true;
            header.style.cursor = 'grabbing';

            const rect = widget.getBoundingClientRect();
            offsetX = clientX - rect.left;
            offsetY = clientY - rect.top;

            widget.classList.add('chat-widget--dragging');

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchmove', onTouchMove, { passive: false });
            document.addEventListener('touchend', stopDrag);
        };

        const onMouseDown = (e) => {
            if (e.button !== 0) return;
            e.preventDefault();
            startDrag(e.clientX, e.clientY);
        };

        const onTouchStart = (e) => {
            const t = e.touches[0];
            if (!t) return;
            startDrag(t.clientX, t.clientY);
        };

        const updatePosition = (clientX, clientY) => {
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const rect = widget.getBoundingClientRect();

            let left = clientX - offsetX;
            let top  = clientY - offsetY;

            const padding = 8;
            const minTop  = getSafeTop();
            const maxLeft = vw - rect.width  - padding;
            const maxTop  = vh - rect.height - padding;

            if (left < padding) left = padding;
            if (left > maxLeft) left = maxLeft;
            if (top  < minTop)  top  = minTop;
            if (top  > maxTop)  top  = maxTop;

            widget.style.left   = `${left}px`;
            widget.style.top    = `${top}px`;
            widget.style.right  = 'auto';
            widget.style.bottom = 'auto';
        };

        const onMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            updatePosition(e.clientX, e.clientY);
        };

        const onTouchMove = (e) => {
            if (!isDragging) return;
            const t = e.touches[0];
            if (!t) return;
            e.preventDefault();
            updatePosition(t.clientX, t.clientY);
        };

        const stopDrag = () => {
            if (!isDragging) return;
            isDragging = false;
            header.style.cursor = 'grab';
            widget.classList.remove('chat-widget--dragging');

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchmove', onTouchMove);
            document.removeEventListener('touchend', stopDrag);
        };

        header.addEventListener('mousedown', onMouseDown);
        header.addEventListener('touchstart', onTouchStart, { passive: true });
    }

    // Chat içi kaydırma ayarı
    if (chatBody) {
        chatBody.style.scrollBehavior = 'smooth';
        chatBody.style.overscrollBehavior = 'contain';
    }
});

/* ================================================
   TEST OLUŞTUR MENÜSÜ → TESTIFY AI ENTEGRASYONU
   (TestifyAI koduna dokunmadan ek katman)
   ================================================ */

(function () {
    'use strict';

    function buildPromptFromForm() {
        const topic      = (document.getElementById('testTopic')?.value || '').trim();
        const count      = document.getElementById('questionCount')?.value || '15';
        const diff       = document.getElementById('difficulty')?.value || 'mixed';
        const examType   = document.getElementById('examType')?.value || 'genel';
        const extra      = (document.getElementById('testNotes')?.value || '').trim();
        const lang       = document.getElementById('language')?.value || 'tr';

        let diffText;
        if (diff === 'easy')      diffText = 'kolay';
        else if (diff === 'medium') diffText = 'orta seviyede';
        else if (diff === 'hard')   diffText = 'zor';
        else                       diffText = 'karışık zorlukta';

        let examText = examType.toUpperCase();
        if (examType === 'genel') examText = 'genel';

        let prompt;

        if (lang === 'tr') {
            prompt =
                `${topic} konusunda, ${diffText}, ` +
                `${count} soruluk, ${examText} tarzında çoktan seçmeli bir test hazırla. ` +
                `Her soruda 4 şık olsun, doğru cevap şıklardan biri olsun ve her soru için detaylı açıklama yaz.`;
            if (extra) {
                prompt += ` Ek isteğim: ${extra}.`;
            }
        } else {
            // İngilizce istenirse
            let diffEn;
            if (diff === 'easy')      diffEn = 'easy';
            else if (diff === 'medium') diffEn = 'medium level';
            else if (diff === 'hard')   diffEn = 'hard';
            else                       diffEn = 'mixed difficulty';

            prompt =
                `Create a ${count}-question multiple choice test in English about ${topic}, ` +
                `${diffEn} difficulty, in the style of ${examText} exam. ` +
                `Each question must have 4 options, the correct answer must be one of the options, and include a detailed explanation.`;
            if (extra) {
                prompt += ` Extra instructions: ${extra}.`;
            }
        }

        return prompt;
    }

    function attachCreateTestHandler() {
        const form = document.getElementById('createTestForm');
        if (!form) return;

        form.addEventListener('submit', async function (e) {
            // App.handleCreateTest'i devre dışı bırakmak için:
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();

            const topicInput = document.getElementById('testTopic') || form.testTitle;
            const topicValue = topicInput ? topicInput.value.trim() : '';

            if (!topicValue) {
                if (window.Utils && typeof Utils.showToast === 'function') {
                    Utils.showToast('Lütfen test konusu / açıklaması gir.', 'error');
                }
                topicInput && topicInput.focus();
                return;
            }

            if (!window.TestifyAI || typeof TestifyAI.generateTestFromAI !== 'function') {
                console.error('TestifyAI bulunamadı veya hazır değil');
                if (window.Utils && typeof Utils.showToast === 'function') {
                    Utils.showToast('AI test oluşturucu yüklenemedi.', 'error');
                }
                return;
            }

            const prompt = buildPromptFromForm();

            if (window.Utils && typeof Utils.showToast === 'function') {
                Utils.showToast(
                    '🤖 Test AI ile oluşturuluyor. Sağ alttaki Testfy sohbet penceresini takip et.',
                    'info',
                    4000
                );
            }

            try {
                await TestifyAI.generateTestFromAI(prompt);
                // İstersen formu temizle:
                // form.reset();
            } catch (err) {
                console.error('AI test oluşturma hatası (menü):', err);
                if (window.Utils && typeof Utils.handleError === 'function') {
                    Utils.handleError(err, 'CreateTestMenu');
                } else if (window.Utils && typeof Utils.showToast === 'function') {
                    Utils.showToast('Test oluşturulurken bir hata oluştu.', 'error');
                }
            }
        }, true); // capture:true → önce bu çalışsın
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', attachCreateTestHandler);
    } else {
        attachCreateTestHandler();
    }
})();
