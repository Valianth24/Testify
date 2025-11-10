/**
 * TESTIFY LIBRARY MANAGER
 * AI ile oluşturulan testleri yönetir, PDF indirme sağlar
 */

(function (window, document) {
    'use strict';

    const LibraryManager = {
        /**
         * Kütüphaneyi yükler ve gösterir
         */
        loadLibrary() {
            console.log('📚 Kütüphane yükleniyor...');

            const tests = this.getSavedTests();
            const libraryList = document.getElementById('libraryList');

            if (!libraryList) {
                console.error('❌ Library list bulunamadı');
                return;
            }

            if (tests.length === 0) {
                libraryList.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon" aria-hidden="true">📚</div>
                        <p>Henüz test oluşturmadın</p>
                        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 8px;">
                            AI'dan "test oluştur" diyerek başla!
                        </p>
                    </div>
                `;
                return;
            }

            libraryList.innerHTML = tests.map(test => this.createTestCard(test)).join('');

            console.log(`✅ ${tests.length} test listelendi`);
        },

        /**
         * Test kartı HTML'i oluşturur
         */
        createTestCard(test) {
            const now = Date.now();
            const remainingTime = test.expiresAt - now;
            const hoursRemaining = Math.floor(remainingTime / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

            const timeColor = hoursRemaining < 6 ? 'var(--danger)' : 'var(--text-secondary)';

            return `
                <div class="library-card" data-test-id="${test.id}">
                    <div class="library-card-header">
                        <div>
                            <h3 class="library-card-title">📝 ${Utils.sanitizeHTML(test.title)}</h3>
                            <p class="library-card-desc">${Utils.sanitizeHTML(test.description)}</p>
                        </div>
                        <button class="btn-icon" onclick="LibraryManager.deleteTest('${test.id}')" 
                                aria-label="Testi sil" title="Sil">
                            🗑️
                        </button>
                    </div>
                    
                    <div class="library-card-info">
                        <div class="library-info-item">
                            <span class="info-icon">📊</span>
                            <span>${test.questions.length} Soru</span>
                        </div>
                        <div class="library-info-item">
                            <span class="info-icon">⏱️</span>
                            <span>~${Math.ceil(test.questions.length * 1.5)} dk</span>
                        </div>
                        <div class="library-info-item">
                            <span class="info-icon">📅</span>
                            <span>${Utils.formatDate(test.createdAt)}</span>
                        </div>
                        <div class="library-info-item" style="color: ${timeColor};">
                            <span class="info-icon">⏰</span>
                            <span>${hoursRemaining}s ${minutesRemaining}dk kaldı</span>
                        </div>
                    </div>
                    
                    <div class="library-card-actions">
                        <button class="btn btn-primary" onclick="LibraryManager.startTest('${test.id}')" 
                                style="flex: 1;">
                            🎯 Teste Başla
                        </button>
                        <button class="btn btn-secondary" onclick="LibraryManager.downloadTestPDF('${test.id}')"
                                title="PDF olarak indir">
                            📥 PDF İndir
                        </button>
                        <button class="btn btn-secondary" onclick="LibraryManager.viewTestDetails('${test.id}')"
                                title="Detayları gör">
                            👁️ İncele
                        </button>
                    </div>
                </div>
            `;
        },

        /**
         * Kaydedilmiş testleri getirir
         */
        getSavedTests() {
            try {
                const tests = [];

                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);

                    if (key && key.startsWith('testify_library_')) {
                        try {
                            const raw = localStorage.getItem(key);
                            if (!raw) continue;

                            const test = JSON.parse(raw);

                            // Süresi dolmuş mu kontrol et
                            if (test.expiresAt && Date.now() < test.expiresAt) {
                                tests.push(test);
                            } else {
                                // Süresi dolmuş, sil
                                localStorage.removeItem(key);
                                console.log('🗑️ Süresi dolmuş test silindi:', test.title);
                            }
                        } catch (parseError) {
                            console.error('Test parse hatası:', parseError);
                        }
                    }
                }

                // En yeniden eskiye sırala
                tests.sort((a, b) => b.createdAt - a.createdAt);

                return tests;
            } catch (error) {
                console.error('❌ Test yükleme hatası:', error);
                return [];
            }
        },

        /**
         * Testi kütüphaneye kaydet
         */
        saveTestToLibrary(testData) {
            try {
                const testToSave = {
                    ...testData,
                    id: testData.id || 'test_' + Date.now(),
                    createdAt: testData.createdAt || Date.now(),
                    expiresAt: testData.expiresAt || (Date.now() + (24 * 60 * 60 * 1000)) // 24 saat
                };

                const key = `testify_library_${testToSave.id}`;
                localStorage.setItem(key, JSON.stringify(testToSave));

                console.log('💾 Test kütüphaneye kaydedildi:', testToSave.title);

                // Aktivite kaydet
                if (window.StorageManager) {
                    window.StorageManager.saveActivity({
                        type: 'test_saved',
                        data: {
                            title: testToSave.title,
                            questionCount: testToSave.questions.length
                        },
                        timestamp: Date.now()
                    });
                }

                return true;
            } catch (error) {
                console.error('❌ Test kaydetme hatası:', error);
                Utils.showToast('Test kaydedilemedi!', 'error');
                return false;
            }
        },

        /**
         * Testi siler
         */
        async deleteTest(testId) {
            const confirmed = await Utils.confirm('Bu testi silmek istediğinden emin misin?');

            if (!confirmed) return;

            try {
                const key = `testify_library_${testId}`;
                localStorage.removeItem(key);

                // Kütüphaneyi yenile
                this.loadLibrary();

                Utils.showToast('Test silindi!', 'success');
                console.log('🗑️ Test silindi:', testId);
            } catch (error) {
                console.error('❌ Test silme hatası:', error);
                Utils.showToast('Test silinemedi!', 'error');
            }
        },

        /**
         * Teste başla
         */
        startTest(testId) {
            try {
                const key = `testify_library_${testId}`;
                const raw = localStorage.getItem(key);
                if (!raw) {
                    Utils.showToast('Test bulunamadı!', 'error');
                    return;
                }

                const testData = JSON.parse(raw);

                // Testi geçici alana kopyala (QuizManager için)
                localStorage.setItem('testify_generated_test', JSON.stringify(testData));

                // Test Çöz sekmesine geç
                const testTab = document.querySelector('[data-tab="test"]');
                if (testTab) {
                    testTab.click();
                }

                // Quiz'i başlat
                setTimeout(() => {
                    if (window.QuizManager && typeof QuizManager.startQuiz === 'function') {
                        QuizManager.startQuiz('ai');
                    }
                }, 500);

                Utils.showToast('Test başlatılıyor...', 'info');
            } catch (error) {
                console.error('❌ Test başlatma hatası:', error);
                Utils.showToast('Test başlatılamadı!', 'error');
            }
        },

        /**
         * Test detaylarını göster
         */
        viewTestDetails(testId) {
            try {
                const key = `testify_library_${testId}`;
                const raw = localStorage.getItem(key);
                if (!raw) {
                    Utils.showToast('Test bulunamadı!', 'error');
                    return;
                }

                const testData = JSON.parse(raw);

                // Modal oluştur
                const modal = document.createElement('div');
                modal.className = 'modal-overlay';
                modal.innerHTML = `
                    <div class="modal-content" style="max-width: 600px; max-height: 80vh; overflow-y: auto;">
                        <div class="modal-header">
                            <h2>📝 ${Utils.sanitizeHTML(testData.title)}</h2>
                            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
                        </div>
                        <div class="modal-body">
                            <p style="color: var(--text-secondary); margin-bottom: 20px;">
                                ${Utils.sanitizeHTML(testData.description)}
                            </p>
                            
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 20px;">
                                <div class="stat-card">
                                    <div class="stat-icon">📊</div>
                                    <div class="stat-value">${testData.questions.length}</div>
                                    <div class="stat-label">Soru Sayısı</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-icon">⏱️</div>
                                    <div class="stat-value">${Math.ceil(testData.questions.length * 1.5)} dk</div>
                                    <div class="stat-label">Tahmini Süre</div>
                                </div>
                            </div>
                            
                            <h3 style="margin-bottom: 15px;">Sorular:</h3>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                ${testData.questions.map((q, i) => `
                                    <div style="padding: 10px; background: var(--bg-secondary); border-radius: 8px;">
                                        <strong>${i + 1}. ${Utils.sanitizeHTML(q.q)}</strong>
                                        <p style="margin-top: 5px; color: var(--text-secondary); font-size: 0.9rem;">
                                            Zorluk: ${this.getDifficultyBadge(q.difficulty)}
                                        </p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">
                                Kapat
                            </button>
                            <button class="btn btn-primary" onclick="LibraryManager.startTest('${testId}'); this.closest('.modal-overlay').remove();">
                                🎯 Teste Başla
                            </button>
                        </div>
                    </div>
                `;

                document.body.appendChild(modal);

                // Arka plana tıklayınca kapat
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.remove();
                    }
                });

            } catch (error) {
                console.error('❌ Test detay hatası:', error);
                Utils.showToast('Test detayları gösterilemedi!', 'error');
            }
        },

        /**
         * Zorluk rozeti
         */
        getDifficultyBadge(difficulty) {
            const badges = {
                easy: '<span style="color: var(--success);">✅ Kolay</span>',
                medium: '<span style="color: var(--warning);">⚠️ Orta</span>',
                hard: '<span style="color: var(--danger);">🔥 Zor</span>'
            };
            return badges[difficulty] || badges.medium;
        },

        /**
         * PDF olarak indir (jsPDF kullanarak)
         */
        async downloadTestPDF(testId) {
            try {
                const key = `testify_library_${testId}`;
                const raw = localStorage.getItem(key);
                if (!raw) {
                    Utils.showToast('Test bulunamadı!', 'error');
                    return;
                }

                const testData = JSON.parse(raw);

                Utils.showToast('PDF oluşturuluyor...', 'info', 2000);

                // jsPDF kontrolü
                if (typeof window.jspdf === 'undefined') {
                    Utils.showToast('PDF kütüphanesi yüklenmedi!', 'error');
                    return;
                }

                const { jsPDF } = window.jspdf;
                const doc = new jsPDF({
                    orientation: 'portrait',
                    unit: 'mm',
                    format: 'a4'
                });

                let yPos = 20;
                const pageHeight = 297; // A4 yüksekliği
                const marginBottom = 20;
                const lineHeight = 7;

                // Başlık
                doc.setFontSize(18);
                doc.setFont(undefined, 'bold');
                doc.text(testData.title, 15, yPos);
                yPos += 10;

                // Açıklama
                doc.setFontSize(11);
                doc.setFont(undefined, 'normal');
                doc.text(testData.description, 15, yPos);
                yPos += 10;

                // Bilgiler
                doc.setFontSize(10);
                doc.text(`Soru Sayisi: ${testData.questions.length}`, 15, yPos);
                yPos += 6;
                doc.text(`Tahmini Sure: ${Math.ceil(testData.questions.length * 1.5)} dakika`, 15, yPos);
                yPos += 6;
                doc.text(`Olusturulma: ${new Date(testData.createdAt).toLocaleDateString('tr-TR')}`, 15, yPos);
                yPos += 15;

                // Sorular
                doc.setFontSize(12);
                doc.setFont(undefined, 'bold');
                doc.text('SORULAR', 15, yPos);
                yPos += 10;

                doc.setFontSize(10);
                doc.setFont(undefined, 'normal');

                testData.questions.forEach((q, index) => {
                    // Sayfa kontrolü
                    if (yPos > pageHeight - marginBottom) {
                        doc.addPage();
                        yPos = 20;
                    }

                    // Soru
                    doc.setFont(undefined, 'bold');
                    const questionText = `${index + 1}. ${q.q}`;
                    const questionLines = doc.splitTextToSize(questionText, 180);
                    doc.text(questionLines, 15, yPos);
                    yPos += questionLines.length * lineHeight;

                    // Şıklar
                    doc.setFont(undefined, 'normal');
                    const letters = ['A', 'B', 'C', 'D'];
                    q.o.forEach((option, i) => {
                        if (yPos > pageHeight - marginBottom) {
                            doc.addPage();
                            yPos = 20;
                        }
                        const optionText = `${letters[i]}) ${option}`;
                        const optionLines = doc.splitTextToSize(optionText, 175);
                        doc.text(optionLines, 20, yPos);
                        yPos += optionLines.length * lineHeight;
                    });

                    yPos += 5; // Sorular arası boşluk
                });

                // Yeni sayfa - Cevap Anahtarı
                doc.addPage();
                yPos = 20;

                doc.setFontSize(14);
                doc.setFont(undefined, 'bold');
                doc.text('CEVAP ANAHTARI', 15, yPos);
                yPos += 10;

                doc.setFontSize(10);
                doc.setFont(undefined, 'normal');

                testData.questions.forEach((q, index) => {
                    if (yPos > pageHeight - marginBottom) {
                        doc.addPage();
                        yPos = 20;
                    }

                    const answerIndex = q.o.indexOf(q.a);
                    const answerLetter = ['A', 'B', 'C', 'D'][answerIndex] || '?';

                    doc.text(`${index + 1}. ${answerLetter}`, 15, yPos);
                    yPos += lineHeight;
                });

                // PDF'i kaydet
                const fileName = `${testData.title.replace(/[^a-z0-9]/gi, '_')}.pdf`;
                doc.save(fileName);

                Utils.showToast('PDF indirildi!', 'success');

                // Aktivite kaydet
                if (window.StorageManager) {
                    window.StorageManager.saveActivity({
                        type: 'test_exported',
                        data: {
                            title: testData.title,
                            format: 'pdf'
                        },
                        timestamp: Date.now()
                    });
                }

            } catch (error) {
                console.error('❌ PDF oluşturma hatası:', error);
                Utils.showToast('PDF oluşturulamadı!', 'error');
            }
        },

        /**
         * Süresi dolmuş testleri temizle
         */
        cleanExpiredTests() {
            try {
                let cleaned = 0;

                for (let i = localStorage.length - 1; i >= 0; i--) {
                    const key = localStorage.key(i);

                    if (key && key.startsWith('testify_library_')) {
                        try {
                            const raw = localStorage.getItem(key);
                            if (!raw) {
                                localStorage.removeItem(key);
                                cleaned++;
                                continue;
                            }

                            const test = JSON.parse(raw);

                            if (test.expiresAt && Date.now() >= test.expiresAt) {
                                localStorage.removeItem(key);
                                cleaned++;
                                console.log('🗑️ Süresi dolmuş test temizlendi:', test.title);
                            }
                        } catch (parseError) {
                            // Geçersiz veri, sil
                            localStorage.removeItem(key);
                            cleaned++;
                        }
                    }
                }

                if (cleaned > 0) {
                    console.log(`🧹 ${cleaned} süresi dolmuş test temizlendi`);
                }
            } catch (error) {
                console.error('❌ Temizleme hatası:', error);
            }
        },

        /**
         * Başlat
         */
        init() {
            console.log('📚 Library Manager başlatılıyor...');

            // Süresi dolmuş testleri temizle
            this.cleanExpiredTests();

            // Periyodik temizlik (her 10 dakikada bir)
            setInterval(() => {
                this.cleanExpiredTests();
            }, 10 * 60 * 1000);

            console.log('✅ Library Manager hazır!');
        }
    };

    // DOM hazır olduğunda başlat
    document.addEventListener('DOMContentLoaded', () => {
        LibraryManager.init();
    });

    // Global export (HTML onclick için)
    window.LibraryManager = LibraryManager;

})(window, document);
