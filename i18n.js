cat >> /mnt/user-data/outputs/i18n.js << 'EOFEXTRA'

// ========== EK ÇEVİRİLER (Otomatik Eklendi) ==========
i18n.translations.time = i18n.translations.time || {};
i18n.translations.time.days = {
    tr: 'Gün',
    en: 'Days',
    ar: 'أيام',
    es: 'Días',
    de: 'Tage'
};

i18n.translations.activity = {
    testCompleted: {
        tr: 'Test Tamamlandı',
        en: 'Test Completed',
        ar: 'اكتمل الاختبار',
        es: 'Prueba Completada',
        de: 'Test Abgeschlossen'
    },
    noteCreated: {
        tr: 'Not Oluşturuldu',
        en: 'Note Created',
        ar: 'تم إنشاء ملاحظة',
        es: 'Nota Creada',
        de: 'Notiz Erstellt'
    },
    levelUp: {
        tr: 'Level Atlandı',
        en: 'Level Up',
        ar: 'رفع المستوى',
        es: 'Subida de Nivel',
        de: 'Level Aufstieg'
    },
    activity: {
        tr: 'Aktivite',
        en: 'Activity',
        ar: 'نشاط',
        es: 'Actividad',
        de: 'Aktivität'
    }
};

i18n.translations.dashboard = {
    recentActivity: {
        tr: 'Son Aktiviteler',
        en: 'Recent Activity',
        ar: 'النشاط الأخير',
        es: 'Actividad Reciente',
        de: 'Letzte Aktivität'
    },
    noActivity: {
        tr: 'Henüz aktivite yok. Test çözerek başla!',
        en: 'No activity yet. Start by taking a test!',
        ar: 'لا يوجد نشاط حتى الآن. ابدأ بإجراء اختبار!',
        es: '¡Aún no hay actividad. Comienza tomando una prueba!',
        de: 'Noch keine Aktivität. Beginnen Sie mit einem Test!'
    }
};

i18n.translations.nav.dashboard = {
    tr: 'Dashboard',
    en: 'Dashboard',
    ar: 'لوحة التحكم',
    es: 'Panel',
    de: 'Dashboard'
};

i18n.translations.nav.testSolve = {
    tr: 'Test Çöz',
    en: 'Take Test',
    ar: 'حل الاختبار',
    es: 'Tomar Prueba',
    de: 'Test Machen'
};

i18n.translations.nav.analysis = {
    tr: 'Analizler',
    en: 'Analysis',
    ar: 'التحليلات',
    es: 'Análisis',
    de: 'Analysen'
};

i18n.translations.test = {
    selectTest: {
        tr: 'Test Seç',
        en: 'Select Test',
        ar: 'اختر الاختبار',
        es: 'Seleccionar Prueba',
        de: 'Test Auswählen'
    },
    practiceMode: {
        tr: 'Pratik Modu',
        en: 'Practice Mode',
        ar: 'وضع التمرين',
        es: 'Modo Práctica',
        de: 'Übungsmodus'
    },
    practiceModeDesc: {
        tr: 'Zaman baskısı olmadan pratik yap',
        en: 'Practice without time pressure',
        ar: 'تدرب بدون ضغط الوقت',
        es: 'Practica sin presión de tiempo',
        de: 'Üben ohne Zeitdruck'
    },
    examMode: {
        tr: 'Sınav Modu',
        en: 'Exam Mode',
        ar: 'وضع الامتحان',
        es: 'Modo Examen',
        de: 'Prüfungsmodus'
    },
    examModeDesc: {
        tr: 'Gerçek sınav deneyimi',
        en: 'Real exam experience',
        ar: 'تجربة امتحان حقيقية',
        es: 'Experiencia de examen real',
        de: 'Echte Prüfungserfahrung'
    },
    aiTest: {
        tr: 'AI Test',
        en: 'AI Test',
        ar: 'اختبار AI',
        es: 'Prueba IA',
        de: 'KI-Test'
    },
    aiTestDesc: {
        tr: 'AI tarafından oluşturulan sorular',
        en: 'AI-generated questions',
        ar: 'أسئلة من إنشاء AI',
        es: 'Preguntas generadas por IA',
        de: 'KI-generierte Fragen'
    },
    customTest: {
        tr: 'Özel Test',
        en: 'Custom Test',
        ar: 'اختبار مخصص',
        es: 'Prueba Personalizada',
        de: 'Benutzerdefinierter Test'
    },
    customTestDesc: {
        tr: 'Kendi kriterlerine göre',
        en: 'According to your criteria',
        ar: 'وفقاً لمعاييرك',
        es: 'Según tus criterios',
        de: 'Nach Ihren Kriterien'
    }
};

i18n.translations.quiz = {
    ...i18n.translations.quiz,
    selectAnswer: {
        tr: 'Cevabınızı seçin',
        en: 'Select your answer',
        ar: 'اختر إجابتك',
        es: 'Seleccione su respuesta',
        de: 'Wählen Sie Ihre Antwort'
    },
    previous: {
        tr: 'Önceki',
        en: 'Previous',
        ar: 'السابق',
        es: 'Anterior',
        de: 'Vorherige'
    },
    next: {
        tr: 'Sonraki',
        en: 'Next',
        ar: 'التالي',
        es: 'Siguiente',
        de: 'Nächste'
    },
    finishTest: {
        tr: 'Testi Bitir',
        en: 'Finish Test',
        ar: 'إنهاء الاختبار',
        es: 'Finalizar Prueba',
        de: 'Test Beenden'
    },
    testCompleted: {
        tr: 'Test Tamamlandı!',
        en: 'Test Completed!',
        ar: 'اكتمل الاختبار!',
        es: '¡Prueba Completada!',
        de: 'Test Abgeschlossen!'
    },
    correct: {
        tr: 'Doğru',
        en: 'Correct',
        ar: 'صحيح',
        es: 'Correcto',
        de: 'Richtig'
    },
    wrong: {
        tr: 'Yanlış',
        en: 'Wrong',
        ar: 'خطأ',
        es: 'Incorrecto',
        de: 'Falsch'
    },
    success: {
        tr: 'Başarı',
        en: 'Success',
        ar: 'النجاح',
        es: 'Éxito',
        de: 'Erfolg'
    },
    duration: {
        tr: 'Süre',
        en: 'Duration',
        ar: 'المدة',
        es: 'Duración',
        de: 'Dauer'
    },
    reviewAnswers: {
        tr: 'Cevapları Gör',
        en: 'Review Answers',
        ar: 'مراجعة الإجابات',
        es: 'Revisar Respuestas',
        de: 'Antworten Überprüfen'
    },
    newTest: {
        tr: 'Yeni Test',
        en: 'New Test',
        ar: 'اختبار جديد',
        es: 'Nueva Prueba',
        de: 'Neuer Test'
    },
    explanation: {
        tr: 'Açıklama',
        en: 'Explanation',
        ar: 'التفسير',
        es: 'Explicación',
        de: 'Erklärung'
    },
    testStarted: {
        tr: 'Test başladı!',
        en: 'Test started!',
        ar: 'بدأ الاختبار!',
        es: '¡Prueba iniciada!',
        de: 'Test gestartet!'
    },
    goodLuck: {
        tr: 'Bol şans!',
        en: 'Good luck!',
        ar: 'حظاً سعيداً!',
        es: '¡Buena suerte!',
        de: 'Viel Glück!'
    },
    questionBankError: {
        tr: 'Soru bankası yüklenemedi!',
        en: 'Question bank could not be loaded!',
        ar: 'تعذر تحميل بنك الأسئلة!',
        es: '¡No se pudo cargar el banco de preguntas!',
        de: 'Fragenbank konnte nicht geladen werden!'
    },
    questionBankEmpty: {
        tr: 'Soru bankası boş!',
        en: 'Question bank is empty!',
        ar: 'بنك الأسئلة فارغ!',
        es: '¡El banco de preguntas está vacío!',
        de: 'Fragenbank ist leer!'
    },
    startError: {
        tr: 'Test başlatılamadı',
        en: 'Could not start test',
        ar: 'تعذر بدء الاختبار',
        es: 'No se pudo iniciar la prueba',
        de: 'Test konnte nicht gestartet werden'
    },
    questionDisplayError: {
        tr: 'Soru gösterilemedi',
        en: 'Could not display question',
        ar: 'تعذر عرض السؤال',
        es: 'No se pudo mostrar la pregunta',
        de: 'Frage konnte nicht angezeigt werden'
    },
    unansweredQuestions: {
        tr: 'soru cevaplanmadı',
        en: 'questions unanswered',
        ar: 'أسئلة غير مجابة',
        es: 'preguntas sin responder',
        de: 'Fragen unbeantwortet'
    },
    finishConfirm: {
        tr: 'Testi bitirmek istediğinizden emin misiniz?',
        en: 'Are you sure you want to finish the test?',
        ar: 'هل أنت متأكد أنك تريد إنهاء الاختبار؟',
        es: '¿Estás seguro de que quieres finalizar la prueba?',
        de: 'Sind Sie sicher, dass Sie den Test beenden möchten?'
    },
    finishError: {
        tr: 'Test bitirilemedi',
        en: 'Could not finish test',
        ar: 'تعذر إنهاء الاختبار',
        es: 'No se pudo finalizar la prueba',
        de: 'Test konnte nicht beendet werden'
    },
    resultsDisplayError: {
        tr: 'Sonuçlar gösterilemedi',
        en: 'Could not display results',
        ar: 'تعذر عرض النتائج',
        es: 'No se pudieron mostrar los resultados',
        de: 'Ergebnisse konnten nicht angezeigt werden'
    },
    reviewMode: {
        tr: 'İnceleme modu - Açıklamaları okuyabilirsiniz',
        en: 'Review mode - You can read explanations',
        ar: 'وضع المراجعة - يمكنك قراءة التفسيرات',
        es: 'Modo revisión - Puedes leer explicaciones',
        de: 'Überprüfungsmodus - Sie können Erklärungen lesen'
    },
    reviewModeError: {
        tr: 'İnceleme modu başlatılamadı',
        en: 'Could not start review mode',
        ar: 'تعذر بدء وضع المراجعة',
        es: 'No se pudo iniciar el modo revisión',
        de: 'Überprüfungsmodus konnte nicht gestartet werden'
    },
    newTestError: {
        tr: 'Yeni test başlatılamadı',
        en: 'Could not start new test',
        ar: 'تعذر بدء اختبار جديد',
        es: 'No se pudo iniciar nueva prueba',
        de: 'Neuer Test konnte nicht gestartet werden'
    },
    exitConfirm: {
        tr: 'Testi bırakmak istediğinize emin misiniz? İlerlemeniz kaydedilmeyecek.',
        en: 'Are you sure you want to exit? Your progress will not be saved.',
        ar: 'هل أنت متأكد أنك تريد الخروج؟ لن يتم حفظ تقدمك.',
        es: '¿Estás seguro de que quieres salir? Tu progreso no se guardará.',
        de: 'Sind Sie sicher, dass Sie beenden möchten? Ihr Fortschritt wird nicht gespeichert.'
    },
    testCancelled: {
        tr: 'Test iptal edildi',
        en: 'Test cancelled',
        ar: 'تم إلغاء الاختبار',
        es: 'Prueba cancelada',
        de: 'Test abgebrochen'
    },
    continueTest: {
        tr: 'Yarım kalan bir testiniz var. Devam etmek ister misiniz?',
        en: 'You have an incomplete test. Do you want to continue?',
        ar: 'لديك اختبار غير مكتمل. هل تريد المتابعة؟',
        es: 'Tienes una prueba incompleta. ¿Quieres continuar?',
        de: 'Sie haben einen unvollständigen Test. Möchten Sie fortfahren?'
    },
    continueFeatureComingSoon: {
        tr: 'Devam etme özelliği yakında eklenecek',
        en: 'Continue feature coming soon',
        ar: 'ميزة المتابعة قريباً',
        es: 'Función de continuar próximamente',
        de: 'Fortsetzungsfunktion kommt bald'
    },
    exitWarning: {
        tr: 'Test devam ediyor. Çıkmak istediğinize emin misiniz?',
        en: 'Test in progress. Are you sure you want to exit?',
        ar: 'الاختبار قيد التقدم. هل أنت متأكد أنك تريد الخروج؟',
        es: 'Prueba en progreso. ¿Estás seguro de que quieres salir?',
        de: 'Test läuft. Sind Sie sicher, dass Sie beenden möchten?'
    },
    nextQuestion: {
        tr: 'Sonraki Soru',
        en: 'Next Question',
        ar: 'السؤال التالي',
        es: 'Siguiente Pregunta',
        de: 'Nächste Frage'
    }
};

i18n.translations.stats = {
    ...i18n.translations.stats,
    solvedTests: {
        tr: 'Çözülen Test',
        en: 'Tests Solved',
        ar: 'الاختبارات المحلولة',
        es: 'Pruebas Resueltas',
        de: 'Tests Gelöst'
    },
    successRate: {
        tr: 'Başarı Oranı',
        en: 'Success Rate',
        ar: 'معدل النجاح',
        es: 'Tasa de Éxito',
        de: 'Erfolgsquote'
    },
    totalQuestions: {
        tr: 'Toplam Soru',
        en: 'Total Questions',
        ar: 'إجمالي الأسئلة',
        es: 'Preguntas Totales',
        de: 'Gesamtfragen'
    },
    avgTime: {
        tr: 'Ort. Süre',
        en: 'Avg. Time',
        ar: 'متوسط الوقت',
        es: 'Tiempo Prom.',
        de: 'Durchschn. Zeit'
    },
    avgSuccess: {
        tr: 'Ortalama Başarı',
        en: 'Average Success',
        ar: 'متوسط النجاح',
        es: 'Éxito Promedio',
        de: 'Durchschnittlicher Erfolg'
    },
    totalCorrect: {
        tr: 'Toplam Doğru',
        en: 'Total Correct',
        ar: 'إجمالي الصحيح',
        es: 'Total Correcto',
        de: 'Gesamt Richtig'
    },
    totalWrong: {
        tr: 'Toplam Yanlış',
        en: 'Total Wrong',
        ar: 'إجمالي الخطأ',
        es: 'Total Incorrecto',
        de: 'Gesamt Falsch'
    },
    streak: {
        tr: 'Seri',
        en: 'Streak',
        ar: 'السلسلة',
        es: 'Racha',
        de: 'Serie'
    }
};

i18n.translations.create = {
    testTitle: {
        tr: 'Test Başlığı',
        en: 'Test Title',
        ar: 'عنوان الاختبار',
        es: 'Título de la Prueba',
        de: 'Testtitel'
    },
    testTitlePlaceholder: {
        tr: 'Örn: Matematik Final Sınavı',
        en: 'E.g.: Mathematics Final Exam',
        ar: 'مثال: امتحان نهائي للرياضيات',
        es: 'Ej.: Examen Final de Matemáticas',
        de: 'Z.B.: Mathematik Abschlussprüfung'
    },
    selectCategory: {
        tr: 'Seçiniz...',
        en: 'Select...',
        ar: 'اختر...',
        es: 'Seleccionar...',
        de: 'Auswählen...'
    },
    uploadFile: {
        tr: 'Dosya Yükle',
        en: 'Upload File',
        ar: 'تحميل ملف',
        es: 'Subir Archivo',
        de: 'Datei Hochladen'
    },
    uploadFileDesc: {
        tr: 'PDF, DOCX veya TXT dosyası yükle',
        en: 'Upload PDF, DOCX or TXT file',
        ar: 'تحميل ملف PDF أو DOCX أو TXT',
        es: 'Subir archivo PDF, DOCX o TXT',
        de: 'PDF-, DOCX- oder TXT-Datei hochladen'
    },
    dragDrop: {
        tr: 'veya sürükle bırak',
        en: 'or drag and drop',
        ar: 'أو اسحب وأفلت',
        es: 'o arrastra y suelta',
        de: 'oder ziehen und ablegen'
    },
    createWithAI: {
        tr: 'Testify AI ile Oluştur',
        en: 'Create with Testify AI',
        ar: 'إنشاء باستخدام Testify AI',
        es: 'Crear con Testify IA',
        de: 'Mit Testify KI Erstellen'
    },
    titleRequired: {
        tr: 'Test başlığı gerekli!',
        en: 'Test title is required!',
        ar: 'عنوان الاختبار مطلوب!',
        es: '¡Se requiere título de prueba!',
        de: 'Testtitel erforderlich!'
    },
    categoryRequired: {
        tr: 'Kategori seçmelisiniz!',
        en: 'You must select a category!',
        ar: 'يجب عليك اختيار فئة!',
        es: '¡Debes seleccionar una categoría!',
        de: 'Sie müssen eine Kategorie auswählen!'
    },
    comingSoon: {
        tr: 'Test oluşturma özelliği yakında eklenecek!',
        en: 'Test creation feature coming soon!',
        ar: 'ميزة إنشاء الاختبار قريباً!',
        es: '¡Función de creación de pruebas próximamente!',
        de: 'Testerstellungsfunktion kommt bald!'
    }
};

i18n.translations.notes = {
    newNote: {
        tr: 'Yeni Not',
        en: 'New Note',
        ar: 'ملاحظة جديدة',
        es: 'Nueva Nota',
        de: 'Neue Notiz'
    },
    empty: {
        tr: 'Henüz not eklemedin',
        en: "You haven't added notes yet",
        ar: 'لم تضف ملاحظات بعد',
        es: 'Aún no has agregado notas',
        de: 'Sie haben noch keine Notizen hinzugefügt'
    },
    untitled: {
        tr: 'Başlıksız Not',
        en: 'Untitled Note',
        ar: 'ملاحظة بدون عنوان',
        es: 'Nota Sin Título',
        de: 'Unbenannte Notiz'
    },
    noteTitle: {
        tr: 'Not Başlığı',
        en: 'Note Title',
        ar: 'عنوان الملاحظة',
        es: 'Título de Nota',
        de: 'Notiztitel'
    },
    noteContent: {
        tr: 'Not İçeriği',
        en: 'Note Content',
        ar: 'محتوى الملاحظة',
        es: 'Contenido de Nota',
        de: 'Notizinhalt'
    }
};

i18n.translations.leaderboard = {
    ...i18n.translations.leaderboard,
    weekly: {
        tr: 'Haftalık Sıralama',
        en: 'Weekly Ranking',
        ar: 'ترتيب أسبوعي',
        es: 'Clasificación Semanal',
        de: 'Wöchentliches Ranking'
    },
    rank: {
        tr: 'Sıra',
        en: 'Rank',
        ar: 'الترتيب',
        es: 'Rango',
        de: 'Rang'
    },
    user: {
        tr: 'Kullanıcı',
        en: 'User',
        ar: 'المستخدم',
        es: 'Usuario',
        de: 'Benutzer'
    },
    tests: {
        tr: 'Test',
        en: 'Tests',
        ar: 'الاختبارات',
        es: 'Pruebas',
        de: 'Tests'
    },
    success: {
        tr: 'Başarı',
        en: 'Success',
        ar: 'النجاح',
        es: 'Éxito',
        de: 'Erfolg'
    },
    noData: {
        tr: 'Henüz veri bulunmuyor',
        en: 'No data available yet',
        ar: 'لا توجد بيانات حتى الآن',
        es: 'Aún no hay datos disponibles',
        de: 'Noch keine Daten verfügbar'
    }
};

i18n.translations.analysis = {
    empty: {
        tr: 'Analiz için daha fazla test çöz',
        en: 'Solve more tests for analysis',
        ar: 'حل المزيد من الاختبارات للتحليل',
        es: 'Resuelve más pruebas para análisis',
        de: 'Lösen Sie mehr Tests zur Analyse'
    },
    performance: {
        tr: 'Performans Değerlendirmesi',
        en: 'Performance Evaluation',
        ar: 'تقييم الأداء',
        es: 'Evaluación de Rendimiento',
        de: 'Leistungsbewertung'
    },
    excellent: {
        tr: 'Mükemmel! Harika bir performans gösteriyorsun. Böyle devam et!',
        en: 'Excellent! You are showing great performance. Keep it up!',
        ar: 'ممتاز! أنت تظهر أداءً رائعاً. استمر!',
        es: '¡Excelente! Estás mostrando un gran rendimiento. ¡Sigue así!',
        de: 'Ausgezeichnet! Sie zeigen großartige Leistung. Weiter so!'
    },
    veryGood: {
        tr: 'Çok iyi! Başarılı bir performans. Biraz daha çalışarak daha da iyileştirebilirsin.',
        en: 'Very good! Successful performance. You can improve even more with a bit more practice.',
        ar: 'جيد جداً! أداء ناجح. يمكنك التحسين أكثر بمزيد من الممارسة.',
        es: '¡Muy bien! Rendimiento exitoso. Puedes mejorar aún más con un poco más de práctica.',
        de: 'Sehr gut! Erfolgreiche Leistung. Mit etwas mehr Übung können Sie noch besser werden.'
    },
    good: {
        tr: 'İyi gidiyorsun! Biraz daha pratik yaparsan hedeflerine ulaşabilirsin.',
        en: "You're doing well! With a bit more practice you can reach your goals.",
        ar: 'أنت تقوم بعمل جيد! مع المزيد من الممارسة يمكنك تحقيق أهدافك.',
        es: '¡Lo estás haciendo bien! Con un poco más de práctica puedes alcanzar tus objetivos.',
        de: 'Sie machen es gut! Mit etwas mehr Übung können Sie Ihre Ziele erreichen.'
    },
    needMore: {
        tr: 'Daha fazla çalışma gerekiyor. Düzenli pratik yaparak gelişebilirsin.',
        en: 'More practice needed. You can improve with regular practice.',
        ar: 'هناك حاجة إلى مزيد من الممارسة. يمكنك التحسن بالممارسة المنتظمة.',
        es: 'Se necesita más práctica. Puedes mejorar con práctica regular.',
        de: 'Mehr Übung erforderlich. Sie können sich durch regelmäßiges Üben verbessern.'
    },
    needBasics: {
        tr: 'Temel konuları tekrar etmen önerilir. Yavaş yavaş ilerlemeye devam et!',
        en: 'It is recommended to review basic topics. Keep progressing slowly!',
        ar: 'يُنصح بمراجعة المواضيع الأساسية. استمر في التقدم ببطء!',
        es: 'Se recomienda revisar temas básicos. ¡Sigue progresando despacio!',
        de: 'Es wird empfohlen, Grundthemen zu wiederholen. Machen Sie langsam weiter!'
    }
};

i18n.translations.settings = {
    ...i18n.translations.settings,
    emailNotifications: {
        tr: 'E-posta bildirimleri',
        en: 'Email notifications',
        ar: 'إشعارات البريد الإلكتروني',
        es: 'Notificaciones por correo',
        de: 'E-Mail-Benachrichtigungen'
    },
    pushNotifications: {
        tr: 'Push bildirimleri',
        en: 'Push notifications',
        ar: 'إشعارات الدفع',
        es: 'Notificaciones push',
        de: 'Push-Benachrichtigungen'
    },
    reset: {
        tr: 'Sıfırla',
        en: 'Reset',
        ar: 'إعادة تعيين',
        es: 'Restablecer',
        de: 'Zurücksetzen'
    },
    resetConfirm: {
        tr: 'Ayarlar varsayılan değerlere dönecek. Emin misiniz?',
        en: 'Settings will return to default values. Are you sure?',
        ar: 'ستعود الإعدادات إلى القيم الافتراضية. هل أنت متأكد؟',
        es: 'La configuración volverá a los valores predeterminados. ¿Estás seguro?',
        de: 'Einstellungen werden auf Standardwerte zurückgesetzt. Sind Sie sicher?'
    },
    resetSuccess: {
        tr: 'Ayarlar sıfırlandı',
        en: 'Settings reset',
        ar: 'تم إعادة تعيين الإعدادات',
        es: 'Configuración restablecida',
        de: 'Einstellungen zurückgesetzt'
    }
};

i18n.translations.messages.error = {
    ...i18n.translations.messages.error,
    storage: {
        tr: 'LocalStorage kullanılamıyor! Veriler kaydedilmeyecek.',
        en: 'LocalStorage unavailable! Data will not be saved.',
        ar: 'LocalStorage غير متاح! لن يتم حفظ البيانات.',
        es: '¡LocalStorage no disponible! Los datos no se guardarán.',
        de: 'LocalStorage nicht verfügbar! Daten werden nicht gespeichert.'
    },
    invalidUsername: {
        tr: 'Geçersiz kullanıcı adı! (3-20 karakter, sadece harf, rakam ve _)',
        en: 'Invalid username! (3-20 characters, only letters, numbers and _)',
        ar: 'اسم مستخدم غير صالح! (3-20 حرفاً، فقط الحروف والأرقام و _)',
        es: '¡Nombre de usuario no válido! (3-20 caracteres, solo letras, números y _)',
        de: 'Ungültiger Benutzername! (3-20 Zeichen, nur Buchstaben, Zahlen und _)'
    },
    invalidEmail: {
        tr: 'Geçersiz e-posta adresi!',
        en: 'Invalid email address!',
        ar: 'عنوان بريد إلكتروني غير صالح!',
        es: '¡Dirección de correo no válida!',
        de: 'Ungültige E-Mail-Adresse!'
    },
    fileType: {
        tr: 'Desteklenmeyen dosya türü.',
        en: 'Unsupported file type.',
        ar: 'نوع ملف غير مدعوم.',
        es: 'Tipo de archivo no compatible.',
        de: 'Nicht unterstützter Dateityp.'
    }
};

i18n.translations.messages.success = {
    ...i18n.translations.messages.success,
    fileUploaded: {
        tr: 'Dosya yüklendi!',
        en: 'File uploaded!',
        ar: 'تم تحميل الملف!',
        es: '¡Archivo subido!',
        de: 'Datei hochgeladen!'
    }
};

i18n.translations.ai = {
    online: {
        tr: 'Çevrimiçi',
        en: 'Online',
        ar: 'متصل',
        es: 'En línea',
        de: 'Online'
    }
};

i18n.translations.ad = {
    banner: {
        tr: 'Reklam Alanı',
        en: 'Ad Space',
        ar: 'مساحة إعلانية',
        es: 'Espacio Publicitario',
        de: 'Werbefläche'
    }
};

i18n.translations.skipToContent = {
    tr: 'Ana içeriğe geç',
    en: 'Skip to main content',
    ar: 'انتقل إلى المحتوى الرئيسي',
    es: 'Saltar al contenido principal',
    de: 'Zum Hauptinhalt springen'
};

console.log('✅ Ek çeviriler yüklendi');
EOFEXTRA
