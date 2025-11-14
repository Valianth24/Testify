// BİLGİSAYAR DONANIMI 1–5. HAFTA VİZE SORU BANKASI
// 100 SORU • TÜMÜ ÇOKTAN SEÇMELİ • EĞİTİCİ & TAKTİKLİ AÇIKLAMALI

window.questionBank = [

    // ========= HAFTA 1 – TARİHÇE, TEMEL KAVRAMLAR, BİLİŞİM SİSTEMLERİ =========

    // Q01
    {
        q: "ENIAC bilgisayarının bilgisayar tarihindeki en önemli özelliği nedir?",
        t: "mcq",
        o: [
            "İlk genel amaçlı sayısal elektronik bilgisayar olması",
            "İlk dizüstü bilgisayar olması",
            "İlk grafik arayüzlü bilgisayar olması",
            "İlk kişisel bilgisayar olması"
        ],
        a: "İlk genel amaçlı sayısal elektronik bilgisayar olması",
        difficulty: "easy",
        week: 1,
        topic: "ENIAC",
        importance: "high",
        explanation: "Taktik: ENIAC’ı görünce aklına hemen 'ilk genel amaçlı sayısal elektronik bilgisayar' gelsin."
    },

    // Q02
    {
        q: "ENIAC hangi amaçla geliştirilmiştir?",
        t: "mcq",
        o: [
            "II. Dünya Savaşı’nda askerî hesaplamalar için",
            "Ev kullanıcılarının ofis işleri için",
            "Sadece oyun oynamak için",
            "Sadece internet erişimi için"
        ],
        a: "II. Dünya Savaşı’nda askerî hesaplamalar için",
        difficulty: "easy",
        week: 1,
        topic: "ENIAC",
        importance: "high",
        explanation: "“Savaş = balistik hesaplar = ENIAC” diye eşleştir, sınavda direkt yakalarsın."
    },

    // Q03
    {
        q: "Aşağıdakilerden hangisi ENIAC’ın özelliklerinden biridir?",
        t: "mcq",
        o: [
            "Yaklaşık 30 ton ağırlığında ve 140 kW enerji tüketiyordu",
            "Hafif ve taşınabilir bir cihazdı",
            "Transistör teknolojisi kullanıyordu",
            "Sadece bir masa üstüne sığıyordu"
        ],
        a: "Yaklaşık 30 ton ağırlığında ve 140 kW enerji tüketiyordu",
        difficulty: "medium",
        week: 1,
        topic: "ENIAC",
        importance: "medium",
        explanation: "Akılda tut: 30 ton + 140 kW → devasa, çok enerji harcayan ilk nesil bilgisayar."
    },

    // Q04
    {
        q: "ENIAC hangi sayı sistemini kullanıyor ve hafızasında ne tutabiliyordu?",
        t: "mcq",
        o: [
            "Onluk sayı sistemi, 10 haneli ondalık sayı",
            "İkili sayı sistemi, 1 bitlik veri",
            "Sekizlik sistem, 100 bitlik veri",
            "Onaltılık sistem, 4 haneli sayı"
        ],
        a: "Onluk sayı sistemi, 10 haneli ondalık sayı",
        difficulty: "hard",
        week: 1,
        topic: "ENIAC",
        importance: "medium",
        explanation: "“10–10” ezberi: onluk sistem + 10 haneli ondalık sayı → ENIAC sorularında kurtarıcı."
    },

    // Q05
    {
        q: "Von Neumann mimarisinin temel fikri aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Program ve verilerin aynı ana hafızada saklanması (kayıtlı program kavramı)",
            "Programların delikli kartlarda saklanması",
            "Veri ve programların tamamen ayrı makinelerde olması",
            "Hiç hafıza kullanılmaması"
        ],
        a: "Program ve verilerin aynı ana hafızada saklanması (kayıtlı program kavramı)",
        difficulty: "easy",
        week: 1,
        topic: "Von Neumann",
        importance: "high",
        explanation: "Anahtar kelime: 'kayıtlı program'. Program + veri aynı hafıza → Von Neumann."
    },

    // Q06
    {
        q: "Aşağıdakilerden hangisi Von Neumann mimarisinin temel birimlerinden biri DEĞİLDİR?",
        t: "mcq",
        o: [
            "Grafik İşlem Birimi (GPU)",
            "Ana Hafıza",
            "Aritmetik Mantık Birimi (ALU)",
            "Giriş/Çıkış Birimleri"
        ],
        a: "Grafik İşlem Birimi (GPU)",
        difficulty: "medium",
        week: 1,
        topic: "Von Neumann",
        importance: "medium",
        explanation: "Temel set: Ana hafıza + ALU + Kontrol birimi + G/Ç. GPU sonradan lüks olarak geliyor."
    },

    // Q07
    {
        q: "IAS bilgisayarında hafıza kapasitesi aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "1000 kelime, her biri 40 bit",
            "100 kelime, her biri 8 bit",
            "1024 byte",
            "10 kelime, her biri 10 bit"
        ],
        a: "1000 kelime, her biri 40 bit",
        difficulty: "hard",
        week: 1,
        topic: "IAS",
        importance: "medium",
        explanation: "Ezber: 'IAS = 1000 × 40'. Sayı sorusu gelirse tek hamlede alırsın."
    },

    // Q08
    {
        q: "UNIVAC I bilgisayarının tarihsel önemi nedir?",
        t: "mcq",
        o: [
            "İlk ticari bilgisayar olması",
            "İlk taşınabilir bilgisayar olması",
            "İlk grafik kartına sahip bilgisayar olması",
            "İlk oyun konsolu olması"
        ],
        a: "İlk ticari bilgisayar olması",
        difficulty: "easy",
        week: 1,
        topic: "UNIVAC",
        importance: "high",
        explanation: "UNIVAC I = 'marketle tanışan bilgisayar' → ilk ticari bilgisayar."
    },

    // Q09
    {
        q: "IBM 701 ve IBM 702 daha çok hangi amaçla kullanılan ilk IBM bilgisayarlarıdır?",
        t: "mcq",
        o: [
            "Bilimsel ve iş dünyası uygulamaları için",
            "Sadece oyun oynamak için",
            "Sadece ev eğlencesi için",
            "Sadece askeri radar için"
        ],
        a: "Bilimsel ve iş dünyası uygulamaları için",
        difficulty: "medium",
        week: 1,
        topic: "IBM",
        importance: "medium",
        explanation: "701–702’yi 'bilim + iş' diye kodla; slaytta tam böyle geçiyor."
    },

    // Q10
    {
        q: "Transistörlerin vakum tüplerine göre en önemli avantajlarından biri aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Daha küçük boyut, daha az ısınma ve daha az enerji tüketimi",
            "Daha fazla ısınma ve daha fazla enerji tüketimi",
            "Sadece mekanik parçalardan oluşmaları",
            "Bilgisayarı yavaşlatmaları"
        ],
        a: "Daha küçük boyut, daha az ısınma ve daha az enerji tüketimi",
        difficulty: "easy",
        week: 1,
        topic: "Transistör",
        importance: "high",
        explanation: "Üçlü ezber: Küçük + Az ısı + Az enerji = transistör avantajı."
    },

    // Q11
    {
        q: "Entegre devrelerin (IC) bilgisayar gelişimindeki rolü nedir?",
        t: "mcq",
        o: [
            "Tek yonga üzerinde çok sayıda transistör barındırarak nesil bilgisayarların gelişmesini sağlamak",
            "Bilgisayarların tamamen mekanik olmasını sağlamak",
            "Sadece ekran kartı üretmek",
            "Sadece yazıcı kontrolü yapmak"
        ],
        a: "Tek yonga üzerinde çok sayıda transistör barındırarak nesil bilgisayarların gelişmesini sağlamak",
        difficulty: "medium",
        week: 1,
        topic: "IC",
        importance: "high",
        explanation: "IC = 'çok transistörlü tek çip'. Ne kadar çok, o kadar güçlü ve küçük bilgisayar."
    },

    // Q12
    {
        q: "Moore Kanunu’na göre entegre devre üzerindeki transistör sayısı yaklaşık olarak nasıl değişir?",
        t: "mcq",
        o: [
            "Her 2 yılda bir iki katına çıkar",
            "Her yıl yarıya düşer",
            "Her 10 yılda bir sabit kalır",
            "Her ay sıfırlanır"
        ],
        a: "Her 2 yılda bir iki katına çıkar",
        difficulty: "easy",
        week: 1,
        topic: "Moore Kanunu",
        importance: "high",
        explanation: "Ezber cümle: '2 yılda 2 kat' → Moore Kanunu’nu böyle aklında tut."
    },

    // Q13
    {
        q: "Intel 4004 işlemcisinin bilgisayar tarihindeki önemi nedir?",
        t: "mcq",
        o: [
            "İlk mikroişlemci olması",
            "İlk grafik kartı olması",
            "İlk optik disk sürücüsü olması",
            "İlk işletim sistemi olması"
        ],
        a: "İlk mikroişlemci olması",
        difficulty: "medium",
        week: 1,
        topic: "Mikroişlemci",
        importance: "high",
        explanation: "Intel 4004 → 'ilk mikroişlemci' ezberle; CPU’nun tek yongaya taşındığı nokta."
    },

    // Q14
    {
        q: "Mikroişlemci kavramı aşağıdakilerden hangisini ifade eder?",
        t: "mcq",
        o: [
            "CPU fonksiyonlarının tek bir yonga üzerinde toplanması",
            "RAM ve ROM’un aynı yongaya koyulması",
            "Sadece ekran kartının küçültülmesi",
            "Sadece sabit diskin küçültülmesi"
        ],
        a: "CPU fonksiyonlarının tek bir yonga üzerinde toplanması",
        difficulty: "medium",
        week: 1,
        topic: "Mikroişlemci",
        importance: "medium",
        explanation: "Mikroişlemci = 'tek çipte CPU'. 4004 bunun ilk örneğiydi."
    },

    // Q15
    {
        q: "Altair 8800 ve Apple I bilgisayarları hangi tarihi süreci başlatmıştır?",
        t: "mcq",
        o: [
            "Kişisel bilgisayar devrimi",
            "Sadece askeri bilgisayar dönemini",
            "Tamamen analog hesap makineleri dönemini",
            "Sadece ana bilgisayar (mainframe) dönemini"
        ],
        a: "Kişisel bilgisayar devrimi",
        difficulty: "easy",
        week: 1,
        topic: "PC Tarihi",
        importance: "medium",
        explanation: "Garajda başlayan devrim: Altair 8800 + Apple I → kişisel bilgisayarların doğuşu."
    },

    // Q16
    {
        q: "Kavramsal bilgisayar mimarisinde 'veri işleme birimi' hangi bileşendir?",
        t: "mcq",
        o: [
            "ALU (Aritmetik Mantık Birimi)",
            "RAM",
            "Sabit disk",
            "Monitör"
        ],
        a: "ALU (Aritmetik Mantık Birimi)",
        difficulty: "easy",
        week: 1,
        topic: "Kavramsal Mimari",
        importance: "high",
        explanation: "Veri işleme = hesap yapmak → ALU’nun işi. 'ALU = işlemci kası' diye düşün."
    },

    // Q17
    {
        q: "Kavramsal bilgisayar mimarisinde 'veri saklama birimi' hangi bileşendir?",
        t: "mcq",
        o: [
            "Hafıza (RAM, disk vb.)",
            "ALU",
            "Klavye",
            "Yazıcı"
        ],
        a: "Hafıza (RAM, disk vb.)",
        difficulty: "easy",
        week: 1,
        topic: "Kavramsal Mimari",
        importance: "high",
        explanation: "Veri saklama = depo. Depo deyince RAM + disk gibi bellek birimlerini düşün."
    },

    // Q18
    {
        q: "Aşağıdakilerden hangisi bilgisayarın ana bileşenlerinden BİRİ değildir?",
        t: "mcq",
        o: [
            "Yazıcı kartuşu",
            "CPU (İşlemci)",
            "Ana Hafıza (RAM)",
            "İkincil Saklama (HDD/SSD)"
        ],
        a: "Yazıcı kartuşu",
        difficulty: "easy",
        week: 1,
        topic: "Ana Bileşenler",
        importance: "medium",
        explanation: "CPU + RAM + disk çekirdek sistemdir; yazıcı kartuşu çevre birimidir, çekirdeğe girmez."
    },

    // Q19
    {
        q: "Bir bilişim sisteminin temel öğeleri arasında aşağıdakilerden hangisi YER ALMAZ?",
        t: "mcq",
        o: [
            "Bitki örtüsü",
            "Donanım",
            "Yazılım",
            "Veri, insan ve süreçler"
        ],
        a: "Bitki örtüsü",
        difficulty: "easy",
        week: 1,
        topic: "Bilişim Sistemi",
        importance: "high",
        explanation: "Bilişim sistemi = donanım + yazılım + veri + insan + süreç. Ağaçlar bu ekibin üyesi değil :)"
    },

    // Q20
    {
        q: "Bilişim sisteminin çalışma döngüsü hangi sırayla gerçekleşir?",
        t: "mcq",
        o: [
            "Girdi → İşleme → Çıktı → Geri bildirim",
            "Girdi → Çıktı → İşleme → Geri bildirim",
            "İşleme → Girdi → Çıktı",
            "Çıktı → Geri bildirim → Girdi"
        ],
        a: "Girdi → İşleme → Çıktı → Geri bildirim",
        difficulty: "easy",
        week: 1,
        topic: "Bilişim Sistemi",
        importance: "high",
        explanation: "Klasik ezber: INPUT → PROCESS → OUTPUT → FEEDBACK. Soru kalıbı sık gelir."
    },

    // Q21
    {
        q: "Aşağıdakilerden hangisi bilişim sistemi çeşitlerinden biri DEĞİLDİR?",
        t: "mcq",
        o: [
            "Spor destek sistemleri",
            "İşlem süreç sistemleri",
            "Karar destek sistemleri",
            "Üst düzey yönetici destek sistemleri"
        ],
        a: "Spor destek sistemleri",
        difficulty: "medium",
        week: 1,
        topic: "Bilişim Türleri",
        importance: "high",
        explanation: "Slayttaki 6’lı listeyi ezberle: İşlem süreç, Ofis, Bilgi temelli, Karar destek, İşletme bilgi, Yönetici destek."
    },

    // Q22
    {
        q: "Bilişim sistemlerinin olumlu etkilerinden biri aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "İş süreçlerinin hızlanması ve kağıt işlerinin azalması",
            "Her alanda daha fazla kâğıt kullanılması",
            "Karar destek mekanizmalarının yok olması",
            "Müşteri verilerinin analiz edilememesi"
        ],
        a: "İş süreçlerinin hızlanması ve kağıt işlerinin azalması",
        difficulty: "easy",
        week: 1,
        topic: "Olumlu Etkiler",
        importance: "medium",
        explanation: "Olumlu = hız, verimlilik, analiz, çevrim içi hizmet. Kağıt azalması da bunun doğal sonucu."
    },

    // Q23
    {
        q: "Bilişim sistemlerinin olumsuz etkilerinden biri aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "İnsan iş gücünün yerini alarak işsizlik riski oluşturması",
            "Tıpta ilerlemeye katkı sağlaması",
            "Müşteri davranışlarını analiz etmeyi kolaylaştırması",
            "Karar destek sağlaması"
        ],
        a: "İnsan iş gücünün yerini alarak işsizlik riski oluşturması",
        difficulty: "medium",
        week: 1,
        topic: "Olumsuz Etkiler",
        importance: "high",
        explanation: "Negatifler: işsizlik, mahremiyet sorunları, sistem çökünce hayatın durması, sağlık sorunları."
    },

    // Q24
    {
        q: "Aşağıdakilerden hangisi bilişim sistemleriyle ilgili bir MAHREMİYET (gizlilik) sorunu örneğidir?",
        t: "mcq",
        o: [
            "Kişisel verilerin izinsiz paylaşılması",
            "İş süreçlerinin otomatikleşmesi",
            "Kağıt işlerinin azalması",
            "Karar destek sistemlerinin kullanılması"
        ],
        a: "Kişisel verilerin izinsiz paylaşılması",
        difficulty: "medium",
        week: 1,
        topic: "Mahremiyet",
        importance: "medium",
        explanation: "Mahremiyet = kişisel verilerin korunması. Verilerin sızması doğrudan gizlilik ihlalidir."
    },

    // Q25
    {
        q: "Bir bilişim sisteminde 'sistem kesintisi' yaşanmasının olası sonucu aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Hayatın birçok alanında işlemlerin durma noktasına gelmesi",
            "Her şeyin daha hızlı çalışması",
            "Veri güvenliğinin kendiliğinden artması",
            "Kâğıt işlerinin tamamen bitmesi"
        ],
        a: "Hayatın birçok alanında işlemlerin durma noktasına gelmesi",
        difficulty: "medium",
        week: 1,
        topic: "Olumsuz Etkiler",
        importance: "medium",
        explanation: "Bankacılık, sağlık, ulaşım; hepsi bilişimle çalışıyor. Sistem durursa, hayat da yavaşlar."
    },

    // ========= HAFTA 2 – İŞLEMCİLER (CPU) =========

    // Q26
    {
        q: "İşlemci (CPU) için en uygun tanım aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Bilgisayarın beyni, komutları işleyen birim",
            "Verileri kalıcı olarak saklayan birim",
            "Sadece görüntü üreten birim",
            "Sadece ses işleyen birim"
        ],
        a: "Bilgisayarın beyni, komutları işleyen birim",
        difficulty: "easy",
        week: 2,
        topic: "CPU Tanımı",
        importance: "high",
        explanation: "CPU = beyin ezberi çok önemli; soru gördüğün anda işaretleyebilirsin."
    },

    // Q27
    {
        q: "Aşağıdakilerden hangisi işlemcinin temel görevlerinden biri DEĞİLDİR?",
        t: "mcq",
        o: [
            "Monitörün fiziksel üretimini yapmak",
            "Bellekten komut almak",
            "Aritmetik ve mantıksal işlemleri yapmak",
            "Giriş/çıkış birimlerini koordine etmek"
        ],
        a: "Monitörün fiziksel üretimini yapmak",
        difficulty: "easy",
        week: 2,
        topic: "CPU Görevleri",
        importance: "medium",
        explanation: "CPU donanım üretmez; hazır donanımı kullanır. Diğer üçü gerçek görevidir."
    },

    // Q28
    {
        q: "ALU (Aritmetik Mantık Birimi) hangi tür işlemleri gerçekleştirir?",
        t: "mcq",
        o: [
            "Toplama, çıkarma ve mantıksal işlemler",
            "Sadece veri depolama",
            "Sadece internet bağlantısı",
            "Sadece ses kaydı"
        ],
        a: "Toplama, çıkarma ve mantıksal işlemler",
        difficulty: "easy",
        week: 2,
        topic: "ALU",
        importance: "high",
        explanation: "ALU = hesap makinesi + mantık kapıları. Matematik ve mantık ondan sorulur."
    },

    // Q29
    {
        q: "Kontrol Birimi (CU) için en doğru ifade hangisidir?",
        t: "mcq",
        o: [
            "Komutların sırasını ve işleyişini kontrol eder",
            "Verileri kalıcı olarak saklar",
            "Sadece grafik oluşturur",
            "Sadece güç üretir"
        ],
        a: "Komutların sırasını ve işleyişini kontrol eder",
        difficulty: "medium",
        week: 2,
        topic: "Kontrol Birimi",
        importance: "high",
        explanation: "CU = 'trafik polisi'. Hangi komut ne zaman çalışacak, hepsini o ayarlar."
    },

    // Q30
    {
        q: "Kayıtlar (registers) işlemci içinde ne amaçla kullanılır?",
        t: "mcq",
        o: [
            "İşlem sırasında geçici verileri çok hızlı saklamak için",
            "Uzun süreli yedekleme yapmak için",
            "Monitörü bağlamak için",
            "Sadece ses dosyası tutmak için"
        ],
        a: "İşlem sırasında geçici verileri çok hızlı saklamak için",
        difficulty: "medium",
        week: 2,
        topic: "Register",
        importance: "medium",
        explanation: "Register = CPU’nun minicik ama ultra hızlı not kağıtları gibi düşün."
    },

    // Q31
    {
        q: "Önbellek (cache) belleğiyle ilgili doğru ifade hangisidir?",
        t: "mcq",
        o: [
            "Çok hızlı, küçük boyutlu belleklerdir (L1, L2, L3)",
            "RAM’den daha yavaştır",
            "Sadece sabit disklerde bulunur",
            "Verileri kalıcı saklar"
        ],
        a: "Çok hızlı, küçük boyutlu belleklerdir (L1, L2, L3)",
        difficulty: "medium",
        week: 2,
        topic: "Cache",
        importance: "high",
        explanation: "Cache = CPU’ya yakın turbo bellek. Hızlı ama kapasitesi az."
    },

    // Q32
    {
        q: "Aşağıdakilerden hangisi 'mikroişlemci' kavramını en iyi açıklar?",
        t: "mcq",
        o: [
            "CPU’nun tek bir yonga üzerine entegre edilmesi",
            "Sadece RAM’in küçültülmesi",
            "Sadece ekran kartının büyütülmesi",
            "Sadece sabit diskin küçültülmesi"
        ],
        a: "CPU’nun tek bir yonga üzerine entegre edilmesi",
        difficulty: "medium",
        week: 2,
        topic: "Mikroişlemci",
        importance: "medium",
        explanation: "Mikroişlemci = 'mikro çipte CPU'. 4004 bunun ilk örneğiydi."
    },

    // Q33
    {
        q: "Çok çekirdekli (multi-core) işlemciler için aşağıdakilerden hangisi doğrudur?",
        t: "mcq",
        o: [
            "Aynı anda daha fazla işi paralel olarak yapabilirler",
            "Her zaman tek çekirdekliden daha yavaş çalışırlar",
            "Sadece tek program çalıştırabilirler",
            "Hiçbir zaman enerji tüketmezler"
        ],
        a: "Aynı anda daha fazla işi paralel olarak yapabilirler",
        difficulty: "easy",
        week: 2,
        topic: "Multi-core",
        importance: "high",
        explanation: "Çekirdek sayısı = aynı anda yapılabilecek iş sayısı gibi düşünebilirsin."
    },

    // Q34
    {
        q: "Saat hızı (clock speed) hangi birimle ölçülür?",
        t: "mcq",
        o: [
            "GHz",
            "GB",
            "dpi",
            "MB/s"
        ],
        a: "GHz",
        difficulty: "easy",
        week: 2,
        topic: "Saat Hızı",
        importance: "high",
        explanation: "Frekans = Hz. İşlemcide genelde GHz olarak görürsün."
    },

    // Q35
    {
        q: "Saat hızının artırılması genellikle ne sonuç doğurur?",
        t: "mcq",
        o: [
            "Birim zamanda daha fazla komut işlenir, ısı ve enerji tüketimi artar",
            "Tüm işlemler durur",
            "Her zaman güç tüketimi azalır",
            "Bilgisayarın bileşen sayısı artar"
        ],
        a: "Birim zamanda daha fazla komut işlenir, ısı ve enerji tüketimi artar",
        difficulty: "medium",
        week: 2,
        topic: "Saat Hızı",
        importance: "medium",
        explanation: "Taktik: 'Hız artarsa → performans + ısı + güç' üçü birlikte artar."
    },

    // Q36
    {
        q: "64 bit işlemciler için aşağıdakilerden hangisi doğrudur?",
        t: "mcq",
        o: [
            "Daha fazla bellek adresleyebilir ve günümüzde standarttır",
            "Daha az bellek adresleyebilir",
            "Bellek kullanmaz",
            "Sadece 8 bitlik veriyi işleyebilir"
        ],
        a: "Daha fazla bellek adresleyebilir ve günümüzde standarttır",
        difficulty: "easy",
        week: 2,
        topic: "Bit Mimarisi",
        importance: "high",
        explanation: "32 bit ≈ 4 GB bellek sınırı; 64 bit çok daha fazlasını adresleyebilir."
    },

    // Q37
    {
        q: "L1, L2 ve L3 önbellek seviyeleriyle ilgili doğru ifade hangisidir?",
        t: "mcq",
        o: [
            "L1 en hızlı ve en küçük; L3 daha büyük ama nispeten daha yavaştır",
            "L1 en yavaş, L3 en hızlıdır",
            "Hepsi RAM’den daha yavaştır",
            "Sadece L3 işlemci içinde bulunur"
        ],
        a: "L1 en hızlı ve en küçük; L3 daha büyük ama nispeten daha yavaştır",
        difficulty: "medium",
        week: 2,
        topic: "Cache Seviyeleri",
        importance: "medium",
        explanation: "Ezber: L1 hız kralı, L3 kapasite kralı. Üçü de RAM’den çok hızlıdır."
    },

    // Q38
    {
        q: "RISC (Reduced Instruction Set Computer) mimarisi için hangisi doğrudur?",
        t: "mcq",
        o: [
            "Daha az ve basit komut setine sahiptir, komutlar genelde tek saat vuruşunda çalışır",
            "Çok karmaşık ve sayıca fazla komut içerir",
            "Hiç komut içermez",
            "Sadece masaüstü bilgisayarlarda kullanılır"
        ],
        a: "Daha az ve basit komut setine sahiptir, komutlar genelde tek saat vuruşunda çalışır",
        difficulty: "hard",
        week: 2,
        topic: "RISC",
        importance: "medium",
        explanation: "RISC = 'Reduced' → sade ve az komut. Basitlik üzerinden hız kazanır."
    },

    // Q39
    {
        q: "CISC (Complex Instruction Set Computer) mimarisi için hangisi doğrudur?",
        t: "mcq",
        o: [
            "Daha karmaşık ve çok sayıda komut içerir, tek komutla birden fazla iş yapılabilir",
            "Hiç komut içermez",
            "Sadece mobil cihazlarda kullanılır",
            "Sadece 8 bitlik sistemlerde kullanılır"
        ],
        a: "Daha karmaşık ve çok sayıda komut içerir, tek komutla birden fazla iş yapılabilir",
        difficulty: "hard",
        week: 2,
        topic: "CISC",
        importance: "medium",
        explanation: "CISC = 'Complex' → karmaşık komutlar, örnek: x86 mimarisi."
    },

    // Q40
    {
        q: "Aşağıdakilerden hangisi RISC mimarisine örnektir?",
        t: "mcq",
        o: [
            "ARM tabanlı işlemciler",
            "x86 masaüstü işlemciler",
            "ENIAC tüplü devreleri",
            "UNIVAC ana bilgisayarları"
        ],
        a: "ARM tabanlı işlemciler",
        difficulty: "medium",
        week: 2,
        topic: "RISC Örnek",
        importance: "medium",
        explanation: "Telefon–tablet–Apple M serisi = ARM = RISC dünyası."
    },

    // Q41
    {
        q: "Aşağıdakilerden hangisi CISC mimarisine örnektir?",
        t: "mcq",
        o: [
            "x86 (Intel/AMD) masaüstü işlemciler",
            "ARM tabanlı mobil işlemciler",
            "Sadece GPU’lar",
            "Sadece 8 bitlik mikrodenetleyiciler"
        ],
        a: "x86 (Intel/AMD) masaüstü işlemciler",
        difficulty: "medium",
        week: 2,
        topic: "CISC Örnek",
        importance: "medium",
        explanation: "Evde kullandığın klasik Intel/AMD işlemcilerin çoğu x86-CISC tabanlıdır."
    },

    // Q42
    {
        q: "Aşağıdakilerden hangisi işlemci üreticilerinden biridir?",
        t: "mcq",
        o: [
            "Intel ve AMD",
            "Canon ve Epson",
            "Seagate ve Western Digital",
            "HP ve Samsung yazıcı"
        ],
        a: "Intel ve AMD",
        difficulty: "easy",
        week: 2,
        topic: "Üreticiler",
        importance: "medium",
        explanation: "Intel & AMD → CPU üreticisi; Seagate/W.Disk depolama üreticisidir."
    },

    // Q43
    {
        q: "Apple’ın M serisi işlemcileri hangi mimariyi temel alır?",
        t: "mcq",
        o: [
            "ARM tabanlı mimari",
            "Sadece x86 mimarisi",
            "Vakum tüplü mimari",
            "Hiçbir işlemci mimarisini kullanmaz"
        ],
        a: "ARM tabanlı mimari",
        difficulty: "medium",
        week: 2,
        topic: "Apple M Serisi",
        importance: "low",
        explanation: "Slaytta özellikle vurgulanıyor: Apple M = ARM tabanlı, RISC dünyasına aittir."
    },

    // Q44
    {
        q: "İşlemcilerde üretim teknolojisinin 90 nm’den 7 nm’ye, 3 nm’ye düşmesi ne anlama gelir?",
        t: "mcq",
        o: [
            "Daha küçük transistörler, daha az güç tüketimi ve daha yüksek performans",
            "Daha büyük transistörler ve daha fazla güç tüketimi",
            "Her zaman daha yavaş işlemciler",
            "İşlemcinin hiçbir zaman ısınmaması"
        ],
        a: "Daha küçük transistörler, daha az güç tüketimi ve daha yüksek performans",
        difficulty: "hard",
        week: 2,
        topic: "Üretim Teknolojisi",
        importance: "medium",
        explanation: "nm küçüldükçe aynı alana daha çok transistör sığar → güç/performans verimi artar."
    },

    // Q45
    {
        q: "İşlemcilerin geleceğiyle ilgili hangisi slaytta geçen bir trenddir?",
        t: "mcq",
        o: [
            "Daha fazla çekirdek ve yapay zekâ optimizasyonu",
            "Tamamen mekanik tasarıma dönüş",
            "Vakum tüplerine geri dönülmesi",
            "Belleksiz işlemciler tasarlanması"
        ],
        a: "Daha fazla çekirdek ve yapay zekâ optimizasyonu",
        difficulty: "medium",
        week: 2,
        topic: "Gelecek",
        importance: "low",
        explanation: "Gelecek: çok çekirdek, AI hızlandırma, kuantum ve nöromorfik gibi yeni yaklaşımlar."
    },

    // Q46
    {
        q: "Aşağıdakilerden hangisi işlemci performansını etkileyen bir etken DEĞİLDİR?",
        t: "mcq",
        o: [
            "Kasanın dış rengi",
            "Çekirdek sayısı",
            "Saat hızı",
            "Önbellek (cache) miktarı"
        ],
        a: "Kasanın dış rengi",
        difficulty: "easy",
        week: 2,
        topic: "Performans",
        importance: "medium",
        explanation: "Performans = mimari + çekirdek + saat hızı + cache. Estetik unsurlar etkilemez."
    },

    // Q47
    {
        q: "Sunucu işlemcilerine örnek olarak aşağıdakilerden hangisi verilebilir?",
        t: "mcq",
        o: [
            "Intel Xeon ve AMD EPYC",
            "Intel Celeron",
            "Altair 8800",
            "ENIAC"
        ],
        a: "Intel Xeon ve AMD EPYC",
        difficulty: "medium",
        week: 2,
        topic: "Sunucu İşlemcileri",
        importance: "low",
        explanation: "Slaytta: Xeon & EPYC özellikle sunucular için tasarlanan işlemci aileleridir."
    },

    // Q48
    {
        q: "İşlemcinin ağır çoklu görev (çok sekmeli tarayıcı, video işleme, oyun) senaryosunda avantaj sağlaması için hangisi daha kritiktir?",
        t: "mcq",
        o: [
            "Yeterli çekirdek sayısı ve iyi önbellek",
            "Sadece kasa rengi",
            "Sadece BIOS markası",
            "Sadece RAM yuvasının sayısı"
        ],
        a: "Yeterli çekirdek sayısı ve iyi önbellek",
        difficulty: "medium",
        week: 2,
        topic: "Performans",
        importance: "medium",
        explanation: "Çok iş = çok çekirdek + güçlü cache. Saat hızı da önemli ama tek başına yetmez."
    },

    // Q49
    {
        q: "Aşağıdakilerden hangisi mobil cihazlar için yaygın işlemci mimarisidir?",
        t: "mcq",
        o: [
            "ARM",
            "x86-64 masaüstü",
            "ENIAC tüplü mimarisi",
            "UNIVAC devreleri"
        ],
        a: "ARM",
        difficulty: "easy",
        week: 2,
        topic: "Mobil İşlemciler",
        importance: "medium",
        explanation: "Telefon ve tablet deyince aklına ARM gelsin; enerji verimliliğiyle öne çıkar."
    },

    // Q50
    {
        q: "Aşağıdaki işlemci özelliklerinden hangisi, paralel çalışabilen çoklu uygulamalar için DOĞRUDAN daha büyük avantaj sağlar?",
        t: "mcq",
        o: [
            "Yüksek çekirdek sayısı",
            "Sadece büyük kasa hacmi",
            "Sadece yüksek ekran parlaklığı",
            "Sadece optik sürücü hızı"
        ],
        a: "Yüksek çekirdek sayısı",
        difficulty: "medium",
        week: 2,
        topic: "Çekirdekler",
        importance: "medium",
        explanation: "Birden çok görev = birden çok çekirdek. Çekirdek sayısı arttıkça paralel iş kapasitesi artar."
    },

    // ========= HAFTA 3 – ANAKARTLAR =========

    // Q51
    {
        q: "Anakart için en uygun tanım aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Bilgisayarın tüm bileşenlerini birbirine bağlayan ana devre kartı",
            "Sadece verileri kalıcı saklayan aygıt",
            "Sadece görüntü üreten kart",
            "Sadece güç sağlayan cihaz"
        ],
        a: "Bilgisayarın tüm bileşenlerini birbirine bağlayan ana devre kartı",
        difficulty: "easy",
        week: 3,
        topic: "Anakart Tanımı",
        importance: "high",
        explanation: "Anakart = 'otoban kavşağı'. Tüm donanımlar burada buluşur."
    },

    // Q52
    {
        q: "Aşağıdakilerden hangisi anakartın temel görevlerinden biri DEĞİLDİR?",
        t: "mcq",
        o: [
            "İşletim sistemi yazmak",
            "Donanımlar arası veri iletimini sağlamak",
            "Güç dağılımını düzenlemek",
            "Genişleme ve yükseltme imkânı sunmak"
        ],
        a: "İşletim sistemi yazmak",
        difficulty: "easy",
        week: 3,
        topic: "Anakart Görevleri",
        importance: "medium",
        explanation: "İşletim sistemi yazılım işidir; anakart sadece donanım altyapısını sunar."
    },

    // Q53
    {
        q: "CPU soketinin görevi nedir?",
        t: "mcq",
        o: [
            "İşlemcinin anakarta elektriksel ve mekanik bağlantısını sağlamak",
            "RAM modüllerini yerleştirmek",
            "Sabit diskleri bağlamak",
            "Monitörü bağlamak"
        ],
        a: "İşlemcinin anakarta elektriksel ve mekanik bağlantısını sağlamak",
        difficulty: "easy",
        week: 3,
        topic: "CPU Soketi",
        importance: "high",
        explanation: "Soket = işlemci yuvası. Uyumlu soket olmazsa işlemciyi takamazsın."
    },

    // Q54
    {
        q: "Aşağıdakilerden hangisi tipik işlemci soketi türlerindendir?",
        t: "mcq",
        o: [
            "LGA, PGA, BGA",
            "DDR3, DDR4",
            "HDMI, VGA",
            "RJ-45, RJ-11"
        ],
        a: "LGA, PGA, BGA",
        difficulty: "medium",
        week: 3,
        topic: "Soket Tipleri",
        importance: "medium",
        explanation: "LGA/PGA/BGA = işlemci soketi; DDR bellek, HDMI/VGA görüntü; RJ-45 ağ konnektörüdür."
    },

    // Q55
    {
        q: "RAM slotlarının temel görevi nedir?",
        t: "mcq",
        o: [
            "Bellek modüllerinin anakarta takılmasını sağlamak",
            "İşlemci soğutucusunu bağlamak",
            "Sabit diskleri sabitlemek",
            "Kasa fanlarını bağlamak"
        ],
        a: "Bellek modüllerinin anakarta takılmasını sağlamak",
        difficulty: "easy",
        week: 3,
        topic: "RAM Slotları",
        importance: "high",
        explanation: "RAM modülleri bu yuvalara takılır; DDR nesline göre slot tasarımı değişir."
    },

    // Q56
    {
        q: "Dual channel (çift kanal) RAM yapısı anakartta neyi ifade eder?",
        t: "mcq",
        o: [
            "İki bellek kanalını paralel kullanarak bellek bant genişliğini artırmayı",
            "Sadece tek bir RAM yuvası olmasını",
            "RAM’in sabit diske takılmasını",
            "RAM’in sadece tek çekirdekli çalışmasını"
        ],
        a: "İki bellek kanalını paralel kullanarak bellek bant genişliğini artırmayı",
        difficulty: "medium",
        week: 3,
        topic: "RAM Kanalı",
        importance: "medium",
        explanation: "Dual/quad channel = paralel yol; veri yolu genişliği artar, performans yükselir."
    },

    // Q57
    {
        q: "Chipset (yonga seti) için en doğru ifade hangisidir?",
        t: "mcq",
        o: [
            "Anakartın beyni gibi davranır, bileşenler arası veri akışını yönetir",
            "Sadece kasanın rengini ayarlar",
            "Sadece fan hızını ayarlar",
            "Sadece monitör parlaklığını ayarlar"
        ],
        a: "Anakartın beyni gibi davranır, bileşenler arası veri akışını yönetir",
        difficulty: "medium",
        week: 3,
        topic: "Chipset",
        importance: "high",
        explanation: "Chipset = 'trafik kontrol merkezi'. CPU–RAM–disk–G/Ç arası haberleşmeyi organize eder."
    },

    // Q58
    {
        q: "Klasik ayrımda 'kuzey köprüsü' hangi bağlantıları yönetir?",
        t: "mcq",
        o: [
            "CPU ile RAM ve GPU arasındaki hızlı veri trafiğini",
            "Sadece USB portlarını",
            "Sadece ses giriş/çıkışlarını",
            "Sadece güç kablolarını"
        ],
        a: "CPU ile RAM ve GPU arasındaki hızlı veri trafiğini",
        difficulty: "hard",
        week: 3,
        topic: "Kuzey Köprüsü",
        importance: "medium",
        explanation: "Kuzey = hızlı bileşenler (CPU, RAM, ekran kartı), Güney = daha yavaş G/Ç birimleri."
    },

    // Q59
    {
        q: "Güney köprüsü (southbridge) daha çok hangi bileşenleri yönetir?",
        t: "mcq",
        o: [
            "Diskler, USB, ağ kartı gibi G/Ç birimlerini",
            "Sadece CPU ile RAM bağlantısını",
            "Sadece ekran kartını",
            "Sadece güç kaynağını"
        ],
        a: "Diskler, USB, ağ kartı gibi G/Ç birimlerini",
        difficulty: "medium",
        week: 3,
        topic: "Güney Köprüsü",
        importance: "medium",
        explanation: "Güney = 'çevre yolu'; disk, USB, ağ gibi çevre cihazları onunla konuşur."
    },

    // Q60
    {
        q: "Anakart üzerindeki BIOS/UEFI çipinde ne bulunur?",
        t: "mcq",
        o: [
            "Bilgisayar açılışında çalışan temel sistem yazılımı",
            "Kullanıcı belgeleri",
            "Oyun kayıt dosyaları",
            "Grafik sürücüleri"
        ],
        a: "Bilgisayar açılışında çalışan temel sistem yazılımı",
        difficulty: "easy",
        week: 3,
        topic: "BIOS Çipi",
        importance: "high",
        explanation: "Bu çipte BIOS/UEFI kodu bulunur; açılışta donanımı tanıyan ilk yazılımdır."
    },

    // Q61
    {
        q: "24-pin ATX konnektörü anakart üzerinde hangi amaçla kullanılır?",
        t: "mcq",
        o: [
            "Anakartın ana güç bağlantısını sağlamak",
            "Sadece klavye bağlamak",
            "Sadece monitör bağlamak",
            "Sadece hoparlör bağlamak"
        ],
        a: "Anakartın ana güç bağlantısını sağlamak",
        difficulty: "easy",
        week: 3,
        topic: "Güç Bağlantısı",
        importance: "medium",
        explanation: "Büyük 24-pin fiş = anakarta hayat veren ana güç bağlantısıdır."
    },

    // Q62
    {
        q: "Anakart üzerindeki 4/8-pin ek güç konnektörü genellikle hangi bileşen içindir?",
        t: "mcq",
        o: [
            "CPU (işlemci)",
            "RAM",
            "Sabit disk",
            "Klavye"
        ],
        a: "CPU (işlemci)",
        difficulty: "medium",
        week: 3,
        topic: "CPU Güç",
        importance: "medium",
        explanation: "İşlemcinin ayrı bir güç hattına ihtiyacı vardır; 4/8-pin konnektör bunu sağlar."
    },

    // Q63
    {
        q: "Anakart arka panelindeki G/Ç portları arasında hangisi bulunabilir?",
        t: "mcq",
        o: [
            "USB ve Ethernet portları",
            "RAM slotları",
            "CPU soketi",
            "M.2 NVMe yuvası"
        ],
        a: "USB ve Ethernet portları",
        difficulty: "easy",
        week: 3,
        topic: "G/Ç Portları",
        importance: "medium",
        explanation: "Arka panel: USB, HDMI, Ethernet, ses portları; RAM/CPU/M.2 ise kartın iç yüzünde."
    },

    // Q64
    {
        q: "PCI Express (PCIe) slotları hangi amaçla kullanılır?",
        t: "mcq",
        o: [
            "Genişleme kartlarını (ekran, ses, ağ kartı vb.) takmak için",
            "Sadece güç kablosu bağlamak için",
            "Sadece RAM takmak için",
            "Sadece optik sürücü bağlamak için"
        ],
        a: "Genişleme kartlarını (ekran, ses, ağ kartı vb.) takmak için",
        difficulty: "medium",
        week: 3,
        topic: "PCIe",
        importance: "high",
        explanation: "PCIe = 'ekstra yetenek yuvası'. Ekran kartı genelde x16 PCIe’ye takılır."
    },

    // Q65
    {
        q: "Aşağıdakilerden hangisi PCIe hat genişliği (lane) türlerinden biridir?",
        t: "mcq",
        o: [
            "x1, x4, x8, x16",
            "1 GB, 2 GB",
            "720p, 1080p",
            "12 V, 5 V"
        ],
        a: "x1, x4, x8, x16",
        difficulty: "medium",
        week: 3,
        topic: "PCIe Hatları",
        importance: "medium",
        explanation: "x1–x16 sayıları, verinin aynı anda kaç hat üzerinden taşındığını gösterir."
    },

    // Q66
    {
        q: "SATA portları anakartta hangi tür aygıtları bağlamak için kullanılır?",
        t: "mcq",
        o: [
            "HDD/SSD ve optik sürücüler gibi depolama aygıtları",
            "Klavye ve fare",
            "Monitör",
            "CPU"
        ],
        a: "HDD/SSD ve optik sürücüler gibi depolama aygıtları",
        difficulty: "easy",
        week: 3,
        topic: "SATA",
        importance: "high",
        explanation: "SATA deyince aklına disk hattı gelsin: HDD, SATA SSD, DVD sürücü."
    },

    // Q67
    {
        q: "M.2 NVMe yuvaları genellikle hangi bileşen için kullanılır?",
        t: "mcq",
        o: [
            "Yüksek hızlı SSD’ler",
            "Klavye",
            "Mouse",
            "Yazıcı"
        ],
        a: "Yüksek hızlı SSD’ler",
        difficulty: "medium",
        week: 3,
        topic: "M.2 NVMe",
        importance: "medium",
        explanation: "M.2 NVMe = 'sakız gibi ince, çok hızlı SSD' diye akılda tut."
    },

    // Q68
    {
        q: "IDE bağlantısıyla ilgili doğru ifade hangisidir?",
        t: "mcq",
        o: [
            "Eski nesil anakartlarda kullanılan bir depolama arabirimidir",
            "En yeni NVMe standardıdır",
            "RAM’i bağlamak için kullanılır",
            "Sadece monitörler için kullanılır"
        ],
        a: "Eski nesil anakartlarda kullanılan bir depolama arabirimidir",
        difficulty: "hard",
        week: 3,
        topic: "IDE",
        importance: "low",
        explanation: "IDE/PATA eski; yerini SATA ve NVMe aldı. Tarihsel soru gelebilir."
    },

    // Q69
    {
        q: "Aşağıdakilerden hangisi anakart form faktörlerinden biridir?",
        t: "mcq",
        o: [
            "ATX, Micro-ATX, Mini-ITX",
            "DDR3, DDR4, DDR5",
            "USB 2.0, USB 3.0",
            "HDMI, DisplayPort"
        ],
        a: "ATX, Micro-ATX, Mini-ITX",
        difficulty: "easy",
        week: 3,
        topic: "Form Faktör",
        importance: "medium",
        explanation: "Form faktör = boyut ve yerleşim standardı. ATX en yaygın, Mini-ITX en küçüklerdendir."
    },

    // Q70
    {
        q: "Anakart seçerken aşağıdakilerden hangisine dikkat etmek GEREKMEZ?",
        t: "mcq",
        o: [
            "Monitörün ekran parlaklığına",
            "CPU uyumlu soket tipine",
            "RAM tipi ve maksimum kapasiteye",
            "Genişleme slotları ve port sayısına"
        ],
        a: "Monitörün ekran parlaklığına",
        difficulty: "easy",
        week: 3,
        topic: "Seçim Kriteri",
        importance: "medium",
        explanation: "Anakart seçimi donanım uyumluluğu ile ilgilidir; parlaklık monitör özellikleridir."
    },

    // Q71
    {
        q: "Bir anakartın yükseltme (upgrade) imkânı sunması ne demektir?",
        t: "mcq",
        o: [
            "İleride yeni RAM, ekran kartı veya depolama birimi eklenebilmesi",
            "Kasanın renginin değişebilmesi",
            "Sadece BIOS markasının değişebilmesi",
            "Monitör boyutunun değişebilmesi"
        ],
        a: "İleride yeni RAM, ekran kartı veya depolama birimi eklenebilmesi",
        difficulty: "medium",
        week: 3,
        topic: "Yükseltme",
        importance: "medium",
        explanation: "Boş yuva = gelecekte yükseltme şansı. Sınavda 'genişleme' kelimesine dikkat."
    },

    // Q72
    {
        q: "Aşağıdakilerden hangisi anakart üzerindeki G/Ç portlarından biri DEĞİLDİR?",
        t: "mcq",
        o: [
            "Gaz pedalı girişi",
            "USB portu",
            "Ethernet portu",
            "Ses giriş/çıkışları"
        ],
        a: "Gaz pedalı girişi",
        difficulty: "easy",
        week: 3,
        topic: "G/Ç Portları",
        importance: "low",
        explanation: "USB, Ethernet, ses portları klasik; 'gaz pedalı girişi' otomotivde olur, PC anakartında değil."
    },

    // Q73
    {
        q: "Anakartın 'güç dağılımını düzenleyen' görevi ile ne kastedilmektedir?",
        t: "mcq",
        o: [
            "Güç kaynağından gelen elektriği uygun şekilde bileşenlere dağıtmak",
            "Sadece ekran parlaklığını ayarlamak",
            "Sadece klavye tuşlarını aydınlatmak",
            "Sadece kasanın rengini değiştirmek"
        ],
        a: "Güç kaynağından gelen elektriği uygun şekilde bileşenlere dağıtmak",
        difficulty: "medium",
        week: 3,
        topic: "Güç Dağılımı",
        importance: "medium",
        explanation: "VRM’ler ve güç yolları, anakartın bileşenlere stabil voltaj vermesini sağlar."
    },

    // Q74
    {
        q: "Anakart form faktörü ile kasa seçiminde aşağıdakilerden hangisi doğrudur?",
        t: "mcq",
        o: [
            "Kasanın, anakartın form faktörünü (ATX, mATX vb.) desteklemesi gerekir",
            "Her anakart her kasaya takılabilir",
            "Kasa boyutu önemli değildir",
            "Form faktörü sadece renkle ilgilidir"
        ],
        a: "Kasanın, anakartın form faktörünü (ATX, mATX vb.) desteklemesi gerekir",
        difficulty: "medium",
        week: 3,
        topic: "Form Faktör",
        importance: "medium",
        explanation: "ATX kasa, Mini-ITX anakartı alır ama tersi her zaman olmaz; uyuma dikkat."
    },

    // Q75
    {
        q: "Anakart üzerindeki 'BIOS/UEFI çipi' hangi HAFTA konusu ile de yakından ilişkilidir?",
        t: "mcq",
        o: [
            "4. hafta – BIOS ve CMOS",
            "1. hafta – ENIAC tarihi",
            "2. hafta – Yazılım mühendisliği",
            "5. hafta – Yazıcı teknolojileri"
        ],
        a: "4. hafta – BIOS ve CMOS",
        difficulty: "easy",
        week: 3,
        topic: "Hafta Bağlantısı",
        importance: "low",
        explanation: "Anakart bileşeni olarak görünse de ayrıntılı anlatım 4. haftadaki BIOS/CMOS konusudur."
    },

    // ========= HAFTA 4 – BIOS ve CMOS =========

    // Q76
    {
        q: "BIOS’un açılımı aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Basic Input/Output System",
            "Binary Internal Operating Service",
            "Basic Internet Operation System",
            "Bus Integrated Output Software"
        ],
        a: "Basic Input/Output System",
        difficulty: "easy",
        week: 4,
        topic: "BIOS",
        importance: "high",
        explanation: "BIOS = Temel Giriş/Çıkış Sistemi. 'Input/Output' kelimeleri çok kritik."
    },

    // Q77
    {
        q: "BIOS genellikle anakart üzerinde hangi bellek türünde saklanır?",
        t: "mcq",
        o: [
            "ROM bellek üzerinde",
            "RAM üzerinde",
            "Sabit disk üzerinde",
            "USB bellek üzerinde"
        ],
        a: "ROM bellek üzerinde",
        difficulty: "medium",
        week: 4,
        topic: "BIOS Konumu",
        importance: "high",
        explanation: "BIOS kodu kalıcı olmalı → ROM çipinde tutulur; pil gerektirmez."
    },

    // Q78
    {
        q: "BIOS’un bilgisayar açılışındaki görevlerinden biri AŞAĞIDAKİLERDEN hangisidir?",
        t: "mcq",
        o: [
            "POST (Power On Self Test) yaparak donanımları kontrol etmek",
            "Sadece oyunları başlatmak",
            "Sadece yazıcıya veri göndermek",
            "Sadece masaüstü arka planını değiştirmek"
        ],
        a: "POST (Power On Self Test) yaparak donanımları kontrol etmek",
        difficulty: "easy",
        week: 4,
        topic: "BIOS Görevleri",
        importance: "high",
        explanation: "Açılışta bip sesleri + donanım kontrolü = POST; bunu BIOS başlatır."
    },

    // Q79
    {
        q: "Aşağıdakilerden hangisi BIOS’un görevlerinden BİRİ DEĞİLDİR?",
        t: "mcq",
        o: [
            "Fotoğraf düzenlemek",
            "Boot sırasını belirlemek",
            "Donanımı tanımak (RAM, disk vb.)",
            "Hata durumunda uyarı sesleri vermek"
        ],
        a: "Fotoğraf düzenlemek",
        difficulty: "easy",
        week: 4,
        topic: "BIOS Görevleri",
        importance: "medium",
        explanation: "Fotoğraf düzenleme işletim sistemi ve uygulamaların işidir; BIOS sadece temel açılış görevlerini yapar."
    },

    // Q80
    {
        q: "CMOS’un açılımı aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Complementary Metal-Oxide Semiconductor",
            "Central Memory Operating System",
            "Computer Memory Output Storage",
            "Core Machine Operating Software"
        ],
        a: "Complementary Metal-Oxide Semiconductor",
        difficulty: "hard",
        week: 4,
        topic: "CMOS",
        importance: "medium",
        explanation: "Tam açılımı ezber zor olabilir ama 'CMOS = ayarları saklayan küçük bellek yongası' mantığını bilmen yeter."
    },

    // Q81
    {
        q: "CMOS yongasında hangi tür bilgiler saklanır?",
        t: "mcq",
        o: [
            "BIOS ayarları, tarih, saat ve boot sırası gibi bilgiler",
            "Kullanıcı belgeleri",
            "Fotoğraf dosyaları",
            "Oyun kayıt dosyaları"
        ],
        a: "BIOS ayarları, tarih, saat ve boot sırası gibi bilgiler",
        difficulty: "medium",
        week: 4,
        topic: "CMOS Görevi",
        importance: "high",
        explanation: "CMOS = ayar defteri. BIOS kodu ROM’da, AYARLAR ise CMOS’ta tutulur."
    },

    // Q82
    {
        q: "CMOS yongasındaki bilgilerin korunması için aşağıdakilerden hangisi gereklidir?",
        t: "mcq",
        o: [
            "Küçük bir pil (CMOS pili)",
            "Harici sabit disk",
            "USB bellek",
            "Monitör"
        ],
        a: "Küçük bir pil (CMOS pili)",
        difficulty: "easy",
        week: 4,
        topic: "CMOS Pili",
        importance: "high",
        explanation: "CMOS pili biterse saat/ tarih sıfırlanır, BIOS ayarları defaulta döner."
    },

    // Q83
    {
        q: "CMOS pili biterse aşağıdakilerden hangisi yaşanabilir?",
        t: "mcq",
        o: [
            "Tarih ve saat ayarlarının sıfırlanması",
            "İşlemcinin tamamen yanması",
            "Monitörün patlaması",
            "Sabit diskin fiziksel olarak küçülmesi"
        ],
        a: "Tarih ve saat ayarlarının sıfırlanması",
        difficulty: "medium",
        week: 4,
        topic: "CMOS Pili",
        importance: "medium",
        explanation: "Bilgisayar her açılışta tarihi 2000’lere atıyorsa ilk şüpheli: CMOS pili."
    },

    // Q84
    {
        q: "BIOS ile CMOS arasındaki farkla ilgili AŞAĞIDAKİLERDEN hangisi doğrudur?",
        t: "mcq",
        o: [
            "BIOS ROM bellek üzerindeki programdır, CMOS ise ayarları tutan küçük bellektir",
            "İkisi de tamamen aynı şeydir",
            "CMOS bir program, BIOS sadece pildir",
            "BIOS sadece saat bilgisini saklar, CMOS işletim sistemini saklar"
        ],
        a: "BIOS ROM bellek üzerindeki programdır, CMOS ise ayarları tutan küçük bellektir",
        difficulty: "hard",
        week: 4,
        topic: "BIOS vs CMOS",
        importance: "high",
        explanation: "Ezber: BIOS = program, CMOS = ayar belleği + pil. Bu farkı mutlaka bil."
    },

    // Q85
    {
        q: "Aşağıdakilerden hangisi PİLE İHTİYAÇ DUYAR?",
        t: "mcq",
        o: [
            "CMOS bellek",
            "BIOS kodunun bulunduğu ROM",
            "Sabit disk plakaları",
            "USB bellek"
        ],
        a: "CMOS bellek",
        difficulty: "medium",
        week: 4,
        topic: "Güç Bağımlılığı",
        importance: "medium",
        explanation: "CMOS ayarları pile bağlıdır; BIOS kodu ROM’da kalıcıdır ve pile ihtiyaç duymaz."
    },

    // Q86
    {
        q: "UEFI hakkında aşağıdakilerden hangisi doğrudur?",
        t: "mcq",
        o: [
            "Klasik BIOS’un yerini alan, grafik arayüzlü ve gelişmiş özelliklere sahip sistemdir",
            "Sadece komut satırından kullanılan eski bir BIOS türüdür",
            "Sadece mobil cihazlarda kullanılır",
            "Sabit disklerin manyetik yapısını açıklar"
        ],
        a: "Klasik BIOS’un yerini alan, grafik arayüzlü ve gelişmiş özelliklere sahip sistemdir",
        difficulty: "medium",
        week: 4,
        topic: "UEFI",
        importance: "medium",
        explanation: "UEFI = modern BIOS. Büyük disk desteği, güvenli boot, grafik arayüz gibi ekstra özellikler getirir."
    },

    // Q87
    {
        q: "Aşağıdakilerden hangisi UEFI’nin klasik BIOS’a göre avantajlarından biri DEĞİLDİR?",
        t: "mcq",
        o: [
            "Saat ve tarih bilgisini saklaması",
            "Grafik arayüz desteği",
            "Daha büyük diskleri desteklemesi",
            "Daha fazla yapılandırma imkânı sunması"
        ],
        a: "Saat ve tarih bilgisini saklaması",
        difficulty: "hard",
        week: 4,
        topic: "BIOS vs UEFI",
        importance: "medium",
        explanation: "Saat/tarih CMOS’un işidir; UEFI’nin farkı grafik arayüz ve gelişmiş özelliklerdir."
    },

    // Q88
    {
        q: "Boot sırası (boot order) ile ilgili doğru ifade hangisidir?",
        t: "mcq",
        o: [
            "Bilgisayarın hangi aygıttan (disk, USB vb.) önce işletim sistemi arayacağını belirleyen ayardır",
            "Ekran çözünürlüğünü belirler",
            "RAM frekansını belirler",
            "CPU çekirdek sayısını değiştirir"
        ],
        a: "Bilgisayarın hangi aygıttan (disk, USB vb.) önce işletim sistemi arayacağını belirleyen ayardır",
        difficulty: "medium",
        week: 4,
        topic: "Boot Sırası",
        importance: "high",
        explanation: "USB’den format atmak istiyorsan boot sırasını USB’yi öne alacak şekilde değiştirirsin."
    },

    // Q89
    {
        q: "CMOS sıfırlama (Clear CMOS) işlemi genellikle ne amaçla yapılır?",
        t: "mcq",
        o: [
            "BIOS ayarlarını fabrika varsayılanına döndürmek için",
            "Sabit diski tamamen biçimlendirmek için",
            "İşletim sistemini silmek için",
            "Monitörün parlaklığını artırmak için"
        ],
        a: "BIOS ayarlarını fabrika varsayılanına döndürmek için",
        difficulty: "medium",
        week: 4,
        topic: "Clear CMOS",
        importance: "medium",
        explanation: "Yanlış BIOS ayarı yüzünden sistem açılmıyorsa CMOS sıfırlama hayat kurtarır."
    },

    // Q90
    {
        q: "Aşağıdakilerden hangisi 'BIOS, CMOS, UEFI' üçlüsünün görev paylaşımını en doğru özetler?",
        t: "mcq",
        o: [
            "BIOS/UEFI açılış yazılımıdır; CMOS ise bu yazılıma ait ayarları tutan bellek yongasıdır",
            "BIOS sadece pil, CMOS sadece yazılımdır",
            "Üçü de aynı şeydir, fark yoktur",
            "Sadece işletim sistemi çekirdeğini ifade ederler"
        ],
        a: "BIOS/UEFI açılış yazılımıdır; CMOS ise bu yazılıma ait ayarları tutan bellek yongasıdır",
        difficulty: "hard",
        week: 4,
        topic: "Genel Özet",
        importance: "high",
        explanation: "Tek cümle özeti: BIOS/UEFI = program, CMOS = ayarların saklandığı pil destekli bellek."
    },

    // ========= HAFTA 5 – HAFIZA BİRİMLERİ (BELLEK) =========

    // Q91
    {
        q: "Bilgisayar hafızası (bellek) neyi ifade eder?",
        t: "mcq",
        o: [
            "Verilerin geçici veya kalıcı olarak saklandığı donanım birimlerini",
            "Sadece CPU’nun soğutucusunu",
            "Sadece monitör parlaklığını",
            "Sadece yazıcının kartuşunu"
        ],
        a: "Verilerin geçici veya kalıcı olarak saklandığı donanım birimlerini",
        difficulty: "easy",
        week: 5,
        topic: "Bellek Tanımı",
        importance: "high",
        explanation: "Bellek = bilgisayarın hafızası; RAM, ROM, disk, bulut hepsi bu şemsiyenin altında."
    },

    // Q92
    {
        q: "Aşağıdakilerden hangisi bellek sınıflandırmasında birincil (ana) bellek grubuna girer?",
        t: "mcq",
        o: [
            "RAM ve ROM",
            "HDD ve SSD",
            "CD/DVD ve USB bellek",
            "Bulut depolama"
        ],
        a: "RAM ve ROM",
        difficulty: "medium",
        week: 5,
        topic: "Birincil Bellek",
        importance: "high",
        explanation: "Slayt: Birincil = RAM + ROM; ikincil = HDD/SSD; üçüncül = bulut/harici yedek."
    },

    // Q93
    {
        q: "RAM (Random Access Memory) için aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Bilgisayar kapandığında içeriği silinen, geçici (volatil) bellek türüdür",
            "Verileri elektrik kesilse bile daima saklar",
            "Sadece okunabilir, yazılamaz",
            "Sadece optik disklerde bulunur"
        ],
        a: "Bilgisayar kapandığında içeriği silinen, geçici (volatil) bellek türüdür",
        difficulty: "easy",
        week: 5,
        topic: "RAM",
        importance: "high",
        explanation: "RAM = uçucu. Fiși çekince gider; bu yüzden programlar kapanınca kaydedilmeyen işler kaybolur."
    },

    // Q94
    {
        q: "Aşağıdakilerden hangisi RAM’in kullanım amaçlarından biridir?",
        t: "mcq",
        o: [
            "İşletim sistemi ve çalışan programların geçici verilerini tutmak",
            "DVD filmleri fiziksel olarak saklamak",
            "Kalıcı yedekleme yapmak",
            "Sadece bilgisayarın rengini değiştirmek"
        ],
        a: "İşletim sistemi ve çalışan programların geçici verilerini tutmak",
        difficulty: "medium",
        week: 5,
        topic: "RAM Kullanımı",
        importance: "medium",
        explanation: "Ne açıksa RAM’de. Çok program açarsan RAM doluyor ve sistem yavaşlıyor."
    },

    // Q95
    {
        q: "SRAM ve DRAM ile ilgili hangisi doğrudur?",
        t: "mcq",
        o: [
            "SRAM daha hızlı ve pahalıdır, genelde cache’te; DRAM ise ana bellek için kullanılır",
            "DRAM daha hızlıdır ve sadece cache’te kullanılır",
            "İkisi de sadece sabit disklerde kullanılır",
            "İkisi de sadece ROM türüdür"
        ],
        a: "SRAM daha hızlı ve pahalıdır, genelde cache’te; DRAM ise ana bellek için kullanılır",
        difficulty: "hard",
        week: 5,
        topic: "SRAM vs DRAM",
        importance: "medium",
        explanation: "Ezber: S = Speed (hızlı) → SRAM = cache; D = Daha yaygın → DRAM = sistem belleği."
    },

    // Q96
    {
        q: "ROM (Read Only Memory) için aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Sadece okunabilir, kalıcı (non-volatile) bellek türüdür",
            "Bilgisayar kapanınca içeriği silinir",
            "Hiçbir bilgi tutulamaz",
            "Sadece RAM’i kontrol eder"
        ],
        a: "Sadece okunabilir, kalıcı (non-volatile) bellek türüdür",
        difficulty: "easy",
        week: 5,
        topic: "ROM",
        importance: "high",
        explanation: "ROM = sadece okunur ve kalıcı; BIOS/UEFI kodu gibi açılışta gerekli bilgiler burada tutulur."
    },

    // Q97
    {
        q: "Aşağıdakilerden hangisi ROM türlerinden BİRİ DEĞİLDİR?",
        t: "mcq",
        o: [
            "SDRAM",
            "PROM",
            "EPROM",
            "EEPROM"
        ],
        a: "SDRAM",
        difficulty: "hard",
        week: 5,
        topic: "ROM Türleri",
        importance: "medium",
        explanation: "PROM/EPROM/EEPROM = ROM türleri; SDRAM ise bir RAM türüdür."
    },

    // Q98
    {
        q: "İkincil bellekler için aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "HDD, SSD, CD/DVD gibi verileri kalıcı olarak saklayan belleklerdir",
            "Sadece geçici veri tutar",
            "Sadece CPU içinde bulunur",
            "Sadece RAM yongasıdır"
        ],
        a: "HDD, SSD, CD/DVD gibi verileri kalıcı olarak saklayan belleklerdir",
        difficulty: "medium",
        week: 5,
        topic: "İkincil Bellek",
        importance: "high",
        explanation: "İkincil = kalıcı depolama. Dosyalarımızı normalde burada saklarız."
    },

    // Q99
    {
        q: "SSD ile HDD karşılaştırıldığında aşağıdakilerden hangisi doğrudur?",
        t: "mcq",
        o: [
            "SSD genelde daha hızlı, sessiz ve dayanıklıdır; HDD genelde daha ucuz ve yüksek kapasiteli",
            "HDD her zaman SSD’den daha hızlıdır",
            "SSD mutlaka daha ucuzdur",
            "İkisi arasında hiçbir fark yoktur"
        ],
        a: "SSD genelde daha hızlı, sessiz ve dayanıklıdır; HDD genelde daha ucuz ve yüksek kapasiteli",
        difficulty: "medium",
        week: 5,
        topic: "SSD vs HDD",
        importance: "high",
        explanation: "Tek cümle ezber: Hız istiyorsan SSD, çok kapasite ve ucuzluk istiyorsan HDD."
    },

    // Q100
    {
        q: "Bellek kapasite birimlerinin KÜÇÜKTEN BÜYÜĞE doğru doğru sıralanışı aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Bit < Byte < KB < MB < GB < TB < PB",
            "Byte < Bit < KB < MB < GB < TB < PB",
            "KB < Byte < Bit < MB < GB < TB < PB",
            "Bit < KB < Byte < MB < GB < PB < TB"
        ],
        a: "Bit < Byte < KB < MB < GB < TB < PB",
        difficulty: "easy",
        week: 5,
        topic: "Birimler",
        importance: "high",
        explanation: "Ezber merdiveni: bit → byte → KB → MB → GB → TB → PB. Bir altı 1024 katı şeklinde ilerler."
    }

];
