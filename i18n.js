/**
 * TESTIFY INTERNATIONALIZATION (i18n)
 * Çoklu Dil Sistemi - Multi Language Support
 * Desteklenen Diller: Türkçe, İngilizce, Arapça, İspanyolca, Almanca
 */

'use strict';

const i18n = {
    // Mevcut dil
    currentLanguage: 'tr',
    
    // Varsayılan dil
    defaultLanguage: 'tr',
    
    // Desteklenen diller
    languages: {
        tr: {
            name: 'Türkçe',
            nativeName: 'Türkçe',
            flag: '🇹🇷',
            dir: 'ltr'
        },
        en: {
            name: 'English',
            nativeName: 'English',
            flag: '🇬🇧',
            dir: 'ltr'
        },
        ar: {
            name: 'Arabic',
            nativeName: 'العربية',
            flag: '🇸🇦',
            dir: 'rtl'
        },
        es: {
            name: 'Spanish',
            nativeName: 'Español',
            flag: '🇪🇸',
            dir: 'ltr'
        },
        de: {
            name: 'German',
            nativeName: 'Deutsch',
            flag: '🇩🇪',
            dir: 'ltr'
        }
    },
    
    // TÜM ÇEVİRİLER
    translations: {
        // ========== GENEL ==========
        appName: {
            tr: 'Testify',
            en: 'Testify',
            ar: 'تستيفاي',
            es: 'Testify',
            de: 'Testify'
        },
        welcome: {
            tr: 'Hoş Geldiniz',
            en: 'Welcome',
            ar: 'مرحباً',
            es: 'Bienvenido',
            de: 'Willkommen'
        },
        loading: {
            tr: 'Yükleniyor...',
            en: 'Loading...',
            ar: 'جاري التحميل...',
            es: 'Cargando...',
            de: 'Laden...'
        },
        save: {
            tr: 'Kaydet',
            en: 'Save',
            ar: 'حفظ',
            es: 'Guardar',
            de: 'Speichern'
        },
        cancel: {
            tr: 'İptal',
            en: 'Cancel',
            ar: 'إلغاء',
            es: 'Cancelar',
            de: 'Abbrechen'
        },
        delete: {
            tr: 'Sil',
            en: 'Delete',
            ar: 'حذف',
            es: 'Eliminar',
            de: 'Löschen'
        },
        edit: {
            tr: 'Düzenle',
            en: 'Edit',
            ar: 'تعديل',
            es: 'Editar',
            de: 'Bearbeiten'
        },
        close: {
            tr: 'Kapat',
            en: 'Close',
            ar: 'إغلاق',
            es: 'Cerrar',
            de: 'Schließen'
        },
        confirm: {
            tr: 'Onayla',
            en: 'Confirm',
            ar: 'تأكيد',
            es: 'Confirmar',
            de: 'Bestätigen'
        },
        back: {
            tr: 'Geri',
            en: 'Back',
            ar: 'رجوع',
            es: 'Volver',
            de: 'Zurück'
        },
        next: {
            tr: 'İleri',
            en: 'Next',
            ar: 'التالي',
            es: 'Siguiente',
            de: 'Weiter'
        },
        search: {
            tr: 'Ara',
            en: 'Search',
            ar: 'بحث',
            es: 'Buscar',
            de: 'Suchen'
        },
        
        // ========== NAVIGATION ==========
        nav: {
            home: {
                tr: 'Ana Sayfa',
                en: 'Home',
                ar: 'الرئيسية',
                es: 'Inicio',
                de: 'Startseite'
            },
            tests: {
                tr: 'Testler',
                en: 'Tests',
                ar: 'الاختبارات',
                es: 'Pruebas',
                de: 'Tests'
            },
            create: {
                tr: 'Test Oluştur',
                en: 'Create Test',
                ar: 'إنشاء اختبار',
                es: 'Crear Prueba',
                de: 'Test Erstellen'
            },
            leaderboard: {
                tr: 'Lider Tablosu',
                en: 'Leaderboard',
                ar: 'لوحة المتصدرين',
                es: 'Tabla de Líderes',
                de: 'Bestenliste'
            },
            profile: {
                tr: 'Profil',
                en: 'Profile',
                ar: 'الملف الشخصي',
                es: 'Perfil',
                de: 'Profil'
            },
            settings: {
                tr: 'Ayarlar',
                en: 'Settings',
                ar: 'الإعدادات',
                es: 'Configuración',
                de: 'Einstellungen'
            },
            notes: {
                tr: 'Notlarım',
                en: 'My Notes',
                ar: 'ملاحظاتي',
                es: 'Mis Notas',
                de: 'Meine Notizen'
            },
            aiChat: {
                tr: 'AI Sohbet',
                en: 'AI Chat',
                ar: 'محادثة AI',
                es: 'Chat IA',
                de: 'KI-Chat'
            }
        },
        
        // ========== AUTHENTICATION ==========
        auth: {
            login: {
                tr: 'Giriş Yap',
                en: 'Login',
                ar: 'تسجيل الدخول',
                es: 'Iniciar Sesión',
                de: 'Anmelden'
            },
            register: {
                tr: 'Kayıt Ol',
                en: 'Register',
                ar: 'التسجيل',
                es: 'Registrarse',
                de: 'Registrieren'
            },
            logout: {
                tr: 'Çıkış Yap',
                en: 'Logout',
                ar: 'تسجيل الخروج',
                es: 'Cerrar Sesión',
                de: 'Abmelden'
            },
            username: {
                tr: 'Kullanıcı Adı',
                en: 'Username',
                ar: 'اسم المستخدم',
                es: 'Nombre de Usuario',
                de: 'Benutzername'
            },
            email: {
                tr: 'E-posta',
                en: 'Email',
                ar: 'البريد الإلكتروني',
                es: 'Correo Electrónico',
                de: 'E-Mail'
            },
            password: {
                tr: 'Şifre',
                en: 'Password',
                ar: 'كلمة المرور',
                es: 'Contraseña',
                de: 'Passwort'
            }
        },
        
        // ========== QUIZ/TEST ==========
        quiz: {
            startTest: {
                tr: 'Teste Başla',
                en: 'Start Test',
                ar: 'بدء الاختبار',
                es: 'Iniciar Prueba',
                de: 'Test Starten'
            },
            question: {
                tr: 'Soru',
                en: 'Question',
                ar: 'السؤال',
                es: 'Pregunta',
                de: 'Frage'
            },
            questions: {
                tr: 'Sorular',
                en: 'Questions',
                ar: 'الأسئلة',
                es: 'Preguntas',
                de: 'Fragen'
            },
            answer: {
                tr: 'Cevap',
                en: 'Answer',
                ar: 'الإجابة',
                es: 'Respuesta',
                de: 'Antwort'
            },
            correctAnswer: {
                tr: 'Doğru Cevap',
                en: 'Correct Answer',
                ar: 'الإجابة الصحيحة',
                es: 'Respuesta Correcta',
                de: 'Richtige Antwort'
            },
            wrongAnswer: {
                tr: 'Yanlış Cevap',
                en: 'Wrong Answer',
                ar: 'إجابة خاطئة',
                es: 'Respuesta Incorrecta',
                de: 'Falsche Antwort'
            },
            timeRemaining: {
                tr: 'Kalan Süre',
                en: 'Time Remaining',
                ar: 'الوقت المتبقي',
                es: 'Tiempo Restante',
                de: 'Verbleibende Zeit'
            },
            score: {
                tr: 'Puan',
                en: 'Score',
                ar: 'النقاط',
                es: 'Puntuación',
                de: 'Punktzahl'
            },
            results: {
                tr: 'Sonuçlar',
                en: 'Results',
                ar: 'النتائج',
                es: 'Resultados',
                de: 'Ergebnisse'
            },
            category: {
                tr: 'Kategori',
                en: 'Category',
                ar: 'الفئة',
                es: 'Categoría',
                de: 'Kategorie'
            },
            difficulty: {
                tr: 'Zorluk',
                en: 'Difficulty',
                ar: 'الصعوبة',
                es: 'Dificultad',
                de: 'Schwierigkeit'
            },
            easy: {
                tr: 'Kolay',
                en: 'Easy',
                ar: 'سهل',
                es: 'Fácil',
                de: 'Einfach'
            },
            medium: {
                tr: 'Orta',
                en: 'Medium',
                ar: 'متوسط',
                es: 'Medio',
                de: 'Mittel'
            },
            hard: {
                tr: 'Zor',
                en: 'Hard',
                ar: 'صعب',
                es: 'Difícil',
                de: 'Schwer'
            },
            completeTest: {
                tr: 'Testi Tamamla',
                en: 'Complete Test',
                ar: 'إكمال الاختبار',
                es: 'Completar Prueba',
                de: 'Test Abschließen'
            }
        },
        
        // ========== STATISTICS ==========
        stats: {
            statistics: {
                tr: 'İstatistikler',
                en: 'Statistics',
                ar: 'الإحصائيات',
                es: 'Estadísticas',
                de: 'Statistiken'
            },
            totalTests: {
                tr: 'Toplam Test',
                en: 'Total Tests',
                ar: 'إجمالي الاختبارات',
                es: 'Pruebas Totales',
                de: 'Gesamttests'
            },
            correctAnswers: {
                tr: 'Doğru Cevaplar',
                en: 'Correct Answers',
                ar: 'الإجابات الصحيحة',
                es: 'Respuestas Correctas',
                de: 'Richtige Antworten'
            },
            accuracy: {
                tr: 'Doğruluk Oranı',
                en: 'Accuracy',
                ar: 'نسبة الدقة',
                es: 'Precisión',
                de: 'Genauigkeit'
            },
            level: {
                tr: 'Seviye',
                en: 'Level',
                ar: 'المستوى',
                es: 'Nivel',
                de: 'Stufe'
            },
            xp: {
                tr: 'Deneyim Puanı',
                en: 'Experience Points',
                ar: 'نقاط الخبرة',
                es: 'Puntos de Experiencia',
                de: 'Erfahrungspunkte'
            },
            rank: {
                tr: 'Sıralama',
                en: 'Rank',
                ar: 'الترتيب',
                es: 'Rango',
                de: 'Rang'
            }
        },
        
        // ========== CATEGORIES ==========
        categories: {
            matematik: {
                tr: 'Matematik',
                en: 'Mathematics',
                ar: 'الرياضيات',
                es: 'Matemáticas',
                de: 'Mathematik'
            },
            fen: {
                tr: 'Fen Bilimleri',
                en: 'Science',
                ar: 'العلوم',
                es: 'Ciencias',
                de: 'Naturwissenschaften'
            },
            turkce: {
                tr: 'Türkçe',
                en: 'Turkish',
                ar: 'اللغة التركية',
                es: 'Turco',
                de: 'Türkisch'
            },
            sosyal: {
                tr: 'Sosyal Bilgiler',
                en: 'Social Studies',
                ar: 'الدراسات الاجتماعية',
                es: 'Estudios Sociales',
                de: 'Sozialwissenschaften'
            },
            ingilizce: {
                tr: 'İngilizce',
                en: 'English',
                ar: 'اللغة الإنجليزية',
                es: 'Inglés',
                de: 'Englisch'
            },
            tarih: {
                tr: 'Tarih',
                en: 'History',
                ar: 'التاريخ',
                es: 'Historia',
                de: 'Geschichte'
            },
            cografya: {
                tr: 'Coğrafya',
                en: 'Geography',
                ar: 'الجغرافيا',
                es: 'Geografía',
                de: 'Geografie'
            },
            fizik: {
                tr: 'Fizik',
                en: 'Physics',
                ar: 'الفيزياء',
                es: 'Física',
                de: 'Physik'
            },
            kimya: {
                tr: 'Kimya',
                en: 'Chemistry',
                ar: 'الكيمياء',
                es: 'Química',
                de: 'Chemie'
            },
            biyoloji: {
                tr: 'Biyoloji',
                en: 'Biology',
                ar: 'علم الأحياء',
                es: 'Biología',
                de: 'Biologie'
            }
        },
        
        // ========== MESSAGES ==========
        messages: {
            success: {
                saved: {
                    tr: 'Başarıyla kaydedildi!',
                    en: 'Successfully saved!',
                    ar: 'تم الحفظ بنجاح!',
                    es: '¡Guardado exitosamente!',
                    de: 'Erfolgreich gespeichert!'
                },
                deleted: {
                    tr: 'Başarıyla silindi!',
                    en: 'Successfully deleted!',
                    ar: 'تم الحذف بنجاح!',
                    es: '¡Eliminado exitosamente!',
                    de: 'Erfolgreich gelöscht!'
                },
                updated: {
                    tr: 'Başarıyla güncellendi!',
                    en: 'Successfully updated!',
                    ar: 'تم التحديث بنجاح!',
                    es: '¡Actualizado exitosamente!',
                    de: 'Erfolgreich aktualisiert!'
                },
                testCompleted: {
                    tr: 'Test tamamlandı!',
                    en: 'Test completed!',
                    ar: 'تم إكمال الاختبار!',
                    es: '¡Prueba completada!',
                    de: 'Test abgeschlossen!'
                },
                copied: {
                    tr: 'Panoya kopyalandı!',
                    en: 'Copied to clipboard!',
                    ar: 'تم النسخ إلى الحافظة!',
                    es: '¡Copiado al portapapeles!',
                    de: 'In die Zwischenablage kopiert!'
                }
            },
            error: {
                network: {
                    tr: 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.',
                    en: 'Connection error. Please check your internet connection.',
                    ar: 'خطأ في الاتصال. يرجى التحقق من اتصال الإنترنت.',
                    es: 'Error de conexión. Por favor, verifique su conexión a Internet.',
                    de: 'Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung.'
                },
                server: {
                    tr: 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.',
                    en: 'Server error. Please try again later.',
                    ar: 'خطأ في الخادم. يرجى المحاولة مرة أخرى لاحقاً.',
                    es: 'Error del servidor. Por favor, inténtelo de nuevo más tarde.',
                    de: 'Serverfehler. Bitte versuchen Sie es später erneut.'
                },
                validation: {
                    tr: 'Geçersiz veri. Lütfen bilgilerinizi kontrol edin.',
                    en: 'Invalid data. Please check your information.',
                    ar: 'بيانات غير صالحة. يرجى التحقق من معلوماتك.',
                    es: 'Datos no válidos. Por favor, verifique su información.',
                    de: 'Ungültige Daten. Bitte überprüfen Sie Ihre Informationen.'
                },
                fileSize: {
                    tr: 'Dosya boyutu çok büyük.',
                    en: 'File size is too large.',
                    ar: 'حجم الملف كبير جداً.',
                    es: 'El tamaño del archivo es demasiado grande.',
                    de: 'Dateigröße ist zu groß.'
                },
                generic: {
                    tr: 'Bir hata oluştu. Lütfen tekrar deneyin.',
                    en: 'An error occurred. Please try again.',
                    ar: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
                    es: 'Ocurrió un error. Por favor, inténtelo de nuevo.',
                    de: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
                }
            },
            warning: {
                unsavedChanges: {
                    tr: 'Kaydedilmemiş değişiklikler var. Devam etmek istiyor musunuz?',
                    en: 'You have unsaved changes. Do you want to continue?',
                    ar: 'لديك تغييرات غير محفوظة. هل تريد المتابعة؟',
                    es: 'Tiene cambios sin guardar. ¿Desea continuar?',
                    de: 'Sie haben nicht gespeicherte Änderungen. Möchten Sie fortfahren?'
                },
                deleteConfirm: {
                    tr: 'Silmek istediğinize emin misiniz?',
                    en: 'Are you sure you want to delete?',
                    ar: 'هل أنت متأكد أنك تريد الحذف؟',
                    es: '¿Está seguro de que desea eliminar?',
                    de: 'Sind Sie sicher, dass Sie löschen möchten?'
                }
            }
        },
        
        // ========== SETTINGS ==========
        settings: {
            language: {
                tr: 'Dil',
                en: 'Language',
                ar: 'اللغة',
                es: 'Idioma',
                de: 'Sprache'
            },
            theme: {
                tr: 'Tema',
                en: 'Theme',
                ar: 'السمة',
                es: 'Tema',
                de: 'Design'
            },
            lightMode: {
                tr: 'Açık Mod',
                en: 'Light Mode',
                ar: 'الوضع الفاتح',
                es: 'Modo Claro',
                de: 'Heller Modus'
            },
            darkMode: {
                tr: 'Koyu Mod',
                en: 'Dark Mode',
                ar: 'الوضع الداكن',
                es: 'Modo Oscuro',
                de: 'Dunkler Modus'
            },
            notifications: {
                tr: 'Bildirimler',
                en: 'Notifications',
                ar: 'الإشعارات',
                es: 'Notificaciones',
                de: 'Benachrichtigungen'
            },
            sound: {
                tr: 'Ses',
                en: 'Sound',
                ar: 'الصوت',
                es: 'Sonido',
                de: 'Ton'
            }
        },
        
        // ========== AI CHAT ==========
        aiChat: {
            askQuestion: {
                tr: 'Bir soru sorun...',
                en: 'Ask a question...',
                ar: 'اطرح سؤالاً...',
                es: 'Haga una pregunta...',
                de: 'Stellen Sie eine Frage...'
            },
            thinking: {
                tr: 'Düşünüyor...',
                en: 'Thinking...',
                ar: 'يفكر...',
                es: 'Pensando...',
                de: 'Denken...'
            },
            send: {
                tr: 'Gönder',
                en: 'Send',
                ar: 'إرسال',
                es: 'Enviar',
                de: 'Senden'
            }
        },
        
        // ========== LEADERBOARD ==========
        leaderboard: {
            daily: {
                tr: 'Günlük',
                en: 'Daily',
                ar: 'يومي',
                es: 'Diario',
                de: 'Täglich'
            },
            weekly: {
                tr: 'Haftalık',
                en: 'Weekly',
                ar: 'أسبوعي',
                es: 'Semanal',
                de: 'Wöchentlich'
            },
            monthly: {
                tr: 'Aylık',
                en: 'Monthly',
                ar: 'شهري',
                es: 'Mensual',
                de: 'Monatlich'
            },
            allTime: {
                tr: 'Tüm Zamanlar',
                en: 'All Time',
                ar: 'كل الأوقات',
                es: 'Todos los Tiempos',
                de: 'Alle Zeiten'
            }
        },
        
        // ========== TIME ==========
        time: {
            justNow: {
                tr: 'Az önce',
                en: 'Just now',
                ar: 'الآن',
                es: 'Justo ahora',
                de: 'Gerade eben'
            },
            minutesAgo: {
                tr: 'dakika önce',
                en: 'minutes ago',
                ar: 'منذ دقائق',
                es: 'hace minutos',
                de: 'vor Minuten'
            },
            hoursAgo: {
                tr: 'saat önce',
                en: 'hours ago',
                ar: 'منذ ساعات',
                es: 'hace horas',
                de: 'vor Stunden'
            },
            daysAgo: {
                tr: 'gün önce',
                en: 'days ago',
                ar: 'منذ أيام',
                es: 'hace días',
                de: 'vor Tagen'
            }
        }
    },
    
    /**
     * Dili değiştir
     */
    setLanguage(lang) {
        if (!this.languages[lang]) {
            console.error(`Desteklenmeyen dil: ${lang}`);
            return false;
        }
        
        this.currentLanguage = lang;
        
        // LocalStorage'a kaydet
        localStorage.setItem('testify_language', lang);
        
        // HTML lang attribute
        document.documentElement.lang = lang;
        
        // RTL desteği
        document.documentElement.dir = this.languages[lang].dir;
        
        // Sayfayı güncelle
        this.updatePageTranslations();
        
        // Event dispatch
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang } 
        }));
        
        return true;
    },
    
    /**
     * Çeviriyi al
     */
    t(key, replacements = {}) {
        // Nested key desteği (örn: "nav.home")
        const keys = key.split('.');
        let value = this.translations;
        
        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                console.warn(`Çeviri bulunamadı: ${key}`);
                return key;
            }
        }
        
        // Dil değerini al
        let translation = value[this.currentLanguage] || value[this.defaultLanguage] || key;
        
        // Değişken değiştirme (örn: "Merhaba {name}" -> "Merhaba Ali")
        Object.keys(replacements).forEach(replaceKey => {
            translation = translation.replace(
                new RegExp(`{${replaceKey}}`, 'g'), 
                replacements[replaceKey]
            );
        });
        
        return translation;
    },
    
    /**
     * Sayfadaki tüm çevirileri güncelle
     */
    updatePageTranslations() {
        // data-i18n attribute'u olan tüm elementler
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });
        
        // data-i18n-placeholder attribute'u olan tüm elementler
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.placeholder = this.t(key);
        });
        
        // data-i18n-title attribute'u olan tüm elementler
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.title = this.t(key);
        });
    },
    
    /**
     * Mevcut dili al
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    },
    
    /**
     * Dil listesini al
     */
    getLanguages() {
        return this.languages;
    },
    
    /**
     * Başlangıçta çalışır
     */
    init() {
        // LocalStorage'dan dil tercihi
        const savedLang = localStorage.getItem('testify_language');
        
        // Tarayıcı dilini kontrol et
        const browserLang = navigator.language.split('-')[0];
        
        // Dil önceliği: Kaydedilmiş > Tarayıcı > Varsayılan
        const lang = savedLang || 
                    (this.languages[browserLang] ? browserLang : this.defaultLanguage);
        
        this.setLanguage(lang);
        
        // Dil değiştirici oluştur
        this.createLanguageSwitcher();
    },
    
    /**
     * Dil değiştirici UI oluştur
     */
    createLanguageSwitcher() {
        // Zaten varsa oluşturma
        if (document.getElementById('languageSwitcher')) return;
        
        const switcher = document.createElement('div');
        switcher.id = 'languageSwitcher';
        switcher.className = 'language-switcher';
        
        const currentLang = this.languages[this.currentLanguage];
        
        switcher.innerHTML = `
            <button class="language-btn" aria-label="Dil Seçimi">
                <span class="flag">${currentLang.flag}</span>
                <span class="lang-name">${currentLang.nativeName}</span>
                <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" stroke-width="2"/>
                </svg>
            </button>
            <div class="language-dropdown">
                ${Object.entries(this.languages).map(([code, lang]) => `
                    <button class="language-option ${code === this.currentLanguage ? 'active' : ''}" 
                            data-lang="${code}">
                        <span class="flag">${lang.flag}</span>
                        <span class="lang-name">${lang.nativeName}</span>
                        ${code === this.currentLanguage ? '<span class="check">✓</span>' : ''}
                    </button>
                `).join('')}
            </div>
        `;
        
        // Navbar'a ekle
        const navbar = document.querySelector('.navbar') || document.querySelector('header');
        if (navbar) {
            navbar.appendChild(switcher);
        }
        
        // Event listeners
        const btn = switcher.querySelector('.language-btn');
        const dropdown = switcher.querySelector('.language-dropdown');
        
        btn.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });
        
        // Dil seçimi
        switcher.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                this.setLanguage(lang);
                dropdown.classList.remove('active');
                
                // Butonu güncelle
                const newLang = this.languages[lang];
                btn.querySelector('.flag').textContent = newLang.flag;
                btn.querySelector('.lang-name').textContent = newLang.nativeName;
                
                // Active class'ları güncelle
                switcher.querySelectorAll('.language-option').forEach(opt => {
                    opt.classList.remove('active');
                    opt.querySelector('.check')?.remove();
                });
                option.classList.add('active');
                option.innerHTML += '<span class="check">✓</span>';
            });
        });
        
        // Dışarı tıklandığında kapat
        document.addEventListener('click', (e) => {
            if (!switcher.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
};

// CSS ekle
const style = document.createElement('style');
style.textContent = `
    .language-switcher {
        position: relative;
        z-index: 1000;
    }
    
    .language-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: var(--bg-secondary, #f3f4f6);
        border: 1px solid var(--border-color, #e5e7eb);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s;
    }
    
    .language-btn:hover {
        background: var(--bg-tertiary, #e5e7eb);
    }
    
    .language-btn .flag {
        font-size: 20px;
    }
    
    .language-btn .lang-name {
        font-size: 14px;
        font-weight: 500;
    }
    
    .language-btn .dropdown-icon {
        transition: transform 0.2s;
    }
    
    .language-dropdown.active + .language-btn .dropdown-icon,
    .language-btn:hover .dropdown-icon {
        transform: rotate(180deg);
    }
    
    .language-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        min-width: 200px;
        background: var(--bg-primary, white);
        border: 1px solid var(--border-color, #e5e7eb);
        border-radius: 8px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.2s;
    }
    
    .language-dropdown.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    .language-option {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 12px 16px;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        transition: background 0.2s;
    }
    
    .language-option:hover {
        background: var(--bg-secondary, #f3f4f6);
    }
    
    .language-option.active {
        background: var(--primary-color, #6366f1);
        color: white;
    }
    
    .language-option .flag {
        font-size: 20px;
    }
    
    .language-option .lang-name {
        flex: 1;
        font-size: 14px;
    }
    
    .language-option .check {
        color: white;
        font-weight: bold;
    }
    
    /* RTL Desteği */
    [dir="rtl"] .language-dropdown {
        right: auto;
        left: 0;
    }
    
    [dir="rtl"] .language-option {
        text-align: right;
    }
`;
document.head.appendChild(style);

// Otomatik başlat
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}

// Export
window.i18n = i18n;
