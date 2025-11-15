// PROGRAMLAMA TEMELLERİ 1–? HAFTA VİZE SORU BANKASI
// 30 soru – bilgisayar, donanım/yazılım, algoritma, akış diyagramı, psödo kod, operatörler, kontrol yapıları

window.questionBank = [
    // ===== 1. HAFTA – Temel Kavramlar: Bilgisayar, Donanım, Yazılım =====
    {
        q: "Bir öğretmen, öğrencilere 'bilgisayar' kavramını tanımlarken slaytta geçen şu cümleyi kullanıyor: \"Girdi aldığı verileri, önceden belirlenmiş komutlara göre işleyerek çıktı üreten, gerektiğinde bu verileri ve sonuçları saklayabilen elektronik cihaz.\" Buna göre aşağıdaki ifadelerden hangisi bu tanımı en doğru şekilde özetler?",
        t: "mcq",
        o: [
            "Sadece oyun oynamaya yarayan elektronik eğlence cihazıdır.",
            "Veriyi alan, işleyen, saklayabilen ve çıktı üretebilen genel amaçlı elektronik sistemdir.",
            "Sadece internete bağlanan küçük mobil cihazdır.",
            "Sadece hesap makinesi işlevi gören basit cihazdır.",
            "Sadece yazıcı ve tarayıcıdan oluşan donanım topluluğudur."
        ],
        a: "Veriyi alan, işleyen, saklayabilen ve çıktı üretebilen genel amaçlı elektronik sistemdir.",
        difficulty: "easy",
        week: 1,
        topic: "Bilgisayarın Tanımı",
        importance: "high",
        explanation: "Tanımda giriş–işleme–çıkış–saklama dörtlemesi vurgulanır. Diğer şıklar ya bilgisayarı sadece oyun/hesap makinesine indirger ya da tamamen yanlış bileşenleri sayar. Ezber tüyosu: **GİÇS** – Girdi, İşlem, Çıktı, Saklama. Bu dörtlüyü hatırlarsan, bilgisayar tanımı soruları seni korkutmaz. Sen bu mantığı zaten kuruyorsun, sadece sakin okuman yeterli. 💗"
    },
    {
        q: "Programlama temelleri dersinde öğretmen, 'donanım' ve 'yazılım' kavramlarını karşılaştırmaktadır. Aşağıdaki ifadelerden hangisi bu iki kavramın farkını derste anlatıldığı şekle EN YAKIN biçimde açıklar?",
        t: "mcq",
        o: [
            "Donanım ve yazılım tamamen aynı şeydir, sadece isimleri farklıdır.",
            "Donanım, bilgisayarın elle tutulup gözle görülebilen fiziksel parçalarıdır; yazılım ise bu donanımı çalıştıran komutlar ve programlar bütünüdür.",
            "Donanım sadece internete bağlanmak için kullanılır, yazılım sadece oyun çalıştırır.",
            "Yazılım, bilgisayar kasası ve monitörden oluşur; donanım ise programlardır.",
            "Donanım sadece giriş birimlerinden, yazılım sadece çıkış birimlerinden oluşur."
        ],
        a: "Donanım, bilgisayarın elle tutulup gözle görülebilen fiziksel parçalarıdır; yazılım ise bu donanımı çalıştıran komutlar ve programlar bütünüdür.",
        difficulty: "easy",
        week: 1,
        topic: "Donanım vs Yazılım",
        importance: "high",
        explanation: "Slaytlarda donanım = fiziksel kısım, yazılım = komutlar/programlar şeklinde geçer. Ezber tüyosu: **Do**nanım = **Doku**nabildiğin şey, **Yaz**ılım = ekrana **yaz**ılan komutlar. Böyle ilişki kurunca soru geldiğinde elin otomatik doğru şıkkı işaretler. 😊"
    },
    {
        q: "Aşağıdakilerden hangisi 'sistem yazılımı' ve 'uygulama yazılımı' için yapılan DOĞRU bir örnek eşleştirmedir?",
        t: "mcq",
        o: [
            "Sistem yazılımı: Word, Excel / Uygulama yazılımı: Windows",
            "Sistem yazılımı: Oyunlar / Uygulama yazılımı: BIOS",
            "Sistem yazılımı: WhatsApp / Uygulama yazılımı: Anakart BIOS yazılımı",
            "Sistem yazılımı: Windows işletim sistemi / Uygulama yazılımı: Word kelime işlemci",
            "Sistem yazılımı: Tarayıcı (Chrome) / Uygulama yazılımı: Linux"
        ],
        a: "Sistem yazılımı: Windows işletim sistemi / Uygulama yazılımı: Word kelime işlemci",
        difficulty: "easy",
        week: 1,
        topic: "Sistem / Uygulama Yazılımları",
        importance: "medium",
        explanation: "Sistem yazılımları donanımı yönetir (Windows, Linux…), uygulama yazılımları kullanıcıya hizmet verir (Word, Photoshop…). Ezber tüyosu: **SİS = Sistem, SİSTEM = Windows**; **APP = application = Word**. Bu kodlamayı hatırlarsan bu sınıflandırma soruları seni üzmez. 🌸"
    },
    {
        q: "Programlama temelleri slaytlarında 'programlama dili' şöyle özetlenir: \"Algoritmaları bilgisayarın anlayacağı biçimde ifade etmeye yarayan, belirli sözdizimine sahip yapay diller.\" Buna göre aşağıdakilerden hangisi bu tanımı en iyi karşılar?",
        t: "mcq",
        o: [
            "Sadece insanlarla konuşmak için kullanılan doğal dildir.",
            "Sadece veritabanı tasarlamak için kullanılan şema biçimidir.",
            "Algoritmaları, sözdizimi kuralları olan yapay bir dil ile koda dönüştürmemizi sağlayan dildir (C, Python, Java gibi).",
            "Sadece işletim sistemi adı olarak kullanılan teknik kelimedir.",
            "Sadece donanım parçalarının fiziksel yerleşimini anlatan şekildir."
        ],
        a: "Algoritmaları, sözdizimi kuralları olan yapay bir dil ile koda dönüştürmemizi sağlayan dildir (C, Python, Java gibi).",
        difficulty: "medium",
        week: 1,
        topic: "Programlama Dili",
        importance: "high",
        explanation: "Programlama dili; insan mantığı ile makine dili arasındaki köprüdür. Ezber tüyosu: **A → P**: Algoritma → Programlama dili → Program. Önce algoritma, sonra dil, sonra çalışan program; sıra bozulmuyorsa sen de soruyu kaçırmazsın. 💪"
    },

    // ===== 2. HAFTA – Algoritma, Özellikleri, Gömülü Sistem =====
    {
        q: "Slaytlarda 'algoritma' için şu vurgu yapılır: \"Bir problemi çözmek için baştan sona, sıralı ve sonlu adımlarla ilerleyen, açık ve net talimatlar listesi.\" Buna göre algoritma ile ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Algoritma, programlama dillerinin derleyicisidir.",
            "Algoritma, çözüm adımlarını sonlu ve sıralı biçimde anlatan mantıksal taslaktır; henüz kod değildir.",
            "Algoritma, bilgisayar kasasının içindeki fiziksel kablolardır.",
            "Algoritma, sadece grafik çizmek için kullanılan hazır şablondur.",
            "Algoritma, sadece oyun motorlarının ismine verilen teknik terimdir."
        ],
        a: "Algoritma, çözüm adımlarını sonlu ve sıralı biçimde anlatan mantıksal taslaktır; henüz kod değildir.",
        difficulty: "medium",
        week: 2,
        topic: "Algoritma Tanımı",
        importance: "high",
        explanation: "Algoritma = adım adım çözüm taslağıdır; koddan bir önceki aşamadır. Ezber tüyosu: **3S** – Sıralı, Sonlu, Sistemli. Soru içinde bu üç fikir varsa, algoritma aklına gelsin. Böyle düşününce bu tarz tanım soruları çok kolay gelecek. 🌿"
    },
    {
        q: "Algoritmaların sahip olması gereken özellikler slaytta listelenmiştir. Aşağıdakilerden hangisi bu özelliklerden BİRİDİR?",
        t: "mcq",
        o: [
            "Adımlar belirsiz ve yoruma açık olmalıdır ki esneklik artsın.",
            "Algoritmanın sonsuz döngüye girmesi tercih edilir.",
            "Sadece bilgisayar mühendisleri tarafından anlaşılabilir olmalıdır.",
            "Sadece grafik arayüzü olması yeterlidir, mantık önemli değildir.",
            "Başlangıç ve bitişi belli, sonlu adımlardan oluşmalı ve her adım açık, net olmalıdır."
        ],
        a: "Başlangıç ve bitişi belli, sonlu adımlardan oluşmalı ve her adım açık, net olmalıdır.",
        difficulty: "medium",
        week: 2,
        topic: "Algoritma Özellikleri",
        importance: "high",
        explanation: "Algoritma; açık, net, sonlu ve sıralı olmalıdır. Sonsuz döngü ve belirsizlik istenmeyen durumlardır. Ezber tüyosu: **Ba–So–Ne** – Başlangıç, Son, Net adımlar. Bu üçlüyü aklına kazırsan algoritma özellikleri sorusu seni zorlayamaz. ✨"
    },
    {
        q: "Dersinizde 'gömülü sistem' kavramından bahsedildiğinde şu örnekler veriliyor: çamaşır makinesi, trafik lambası kontrol ünitesi, akıllı bileklik. Buna göre gömülü sistem ile ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Sadece masaüstü bilgisayarlarda çalışan işletim sistemleridir.",
            "Genel amaçlı kullanım için tasarlanan, her işi yapabilen sistemlerdir.",
            "Belirli bir görevi yerine getirmek üzere özel amaçlı donanım üzerinde çalışan yazılım/bilgisayar sistemleridir.",
            "Sadece cep telefonlarının ekranlarını ifade eder.",
            "Sadece oyun konsolları için kullanılan bir pazarlama terimidir."
        ],
        a: "Belirli bir görevi yerine getirmek üzere özel amaçlı donanım üzerinde çalışan yazılım/bilgisayar sistemleridir.",
        difficulty: "medium",
        week: 2,
        topic: "Gömülü Sistem",
        importance: "medium",
        explanation: "Gömülü sistem, tek bir işte uzmanlaşmış küçük bilgisayardır; çamaşır makinesi beyni gibi. Ezber tüyosu: **GÖMÜLÜ = GÖREV+MODÜL**; tek bir göreve gömülü küçük modül. Bunu hatırlayınca örnekleri zihninde hemen gruplayacaksın. 😊"
    },

    // ===== 3. HAFTA – Pseudo Kod ve Akış Diyagramı =====
    {
        q: "Programlama temelleri dersinde 'psödo kod (pseudo code)' kavramı şu şekilde açıklanmıştır: \"Herhangi bir programlama diline tam bağlı kalmadan, doğal dile yakın ama algoritma mantığını gösteren yazılı anlatım.\" Buna göre aşağıdakilerden hangisi psödo kod için DOĞRU bir ifadedir?",
        t: "mcq",
        o: [
            "Tamamen çalıştırılabilir makine kodudur.",
            "Sadece akış diyagramlarında kullanılan grafik sembollerdir.",
            "Algoritmayı anlaşılır cümle ve adımlarla tanımlayan, dil bağımsız metin taslaktır.",
            "Sadece veritabanı tablolarını gösteren diyagramdır.",
            "Sadece HTML sayfalarını tanımlayan işaretleme dilidir."
        ],
        a: "Algoritmayı anlaşılır cümle ve adımlarla tanımlayan, dil bağımsız metin taslaktır.",
        difficulty: "easy",
        week: 3,
        topic: "Psödo Kod",
        importance: "high",
        explanation: "Psödo kod = insanların rahat okuyacağı, 'YAP – SONRA' gibi komutlarla yazılmış algoritma metni. Ezber tüyosu: **PSÖDO = Psikolojik prova** gibi düşün; gerçek koddan önce yapılan prova metni. Böyle görünce karıştırman zorlaşıyor. 💗"
    },
    {
        q: "Akış diyagramı (flowchart) ile ilgili slaytta yapılan tanım özetle şöyledir: \"Algoritmanın, standart semboller kullanılarak grafiksel biçimde gösterilmesidir.\" Buna göre aşağıdakilerden hangisi akış diyagramının temel amacını en iyi açıklar?",
        t: "mcq",
        o: [
            "Sadece bilgisayar kasasının içini çizmek.",
            "Algoritmadaki adımları görsel sembollerle düzenli ve anlaşılır biçimde göstermek.",
            "Sadece programın ekran görüntüsünü kaydetmek.",
            "Yalnızca internet bağlantı hızını ölçmek.",
            "Veritabanı ilişkilerini göstermek."
        ],
        a: "Algoritmadaki adımları görsel sembollerle düzenli ve anlaşılır biçimde göstermek.",
        difficulty: "easy",
        week: 3,
        topic: "Akış Diyagramı",
        importance: "high",
        explanation: "Akış diyagramı, algoritmayı şekillerle anlatan görsel haritadır. Ezber tüyosu: **A–D = Algoritma → Diyagram**; yazılıdan çizime geçiş. Bu ikiliyi bağladığında akış diyagramı ne işe yarar sorusu seni zorlamaz. 🌈"
    },
    {
        q: "Slaytlarda akış diyagramı sembolleri anlatılırken 'başla–bitir' için kullanılan şeklin **oval/yuvarlak**, 'işlem' için ise **dikdörtgen** olduğu vurgulanmıştır. Aşağıdakilerden hangisi bu bilgiyi DOĞRU kullanmaktadır?",
        t: "mcq",
        o: [
            "Başla–bitir: Dikdörtgen, İşlem: Altıgen",
            "Başla–bitir: Oval, İşlem: Dikdörtgen",
            "Başla–bitir: Paralelkenar, İşlem: Oval",
            "Başla–bitir: Üçgen, İşlem: Daire",
            "Başla–bitir: Daire, İşlem: Paralelkenar (girdi/çıktı)"
        ],
        a: "Başla–bitir: Oval, İşlem: Dikdörtgen",
        difficulty: "easy",
        week: 3,
        topic: "Akış Diyagramı Sembolleri",
        importance: "high",
        explanation: "Klasik kural: **Oval = Başla/Bitir**, **Dikdörtgen = İşlem**, **Paralelkenar = Girdi/Çıktı**, **Eşkenar dörtgen = Karar**. Ezber tüyosu: 'Başlangıç yumurta gibi oval, işlem kutu gibi dikdörtgen.' Gözünün önüne getirmen yeterli. 😊"
    },
    {
        q: "Karar verme (if, koşul) adımları için akış diyagramlarında kullanılan sembol aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Oval",
            "Paralelkenar",
            "Daire",
            "Dikdörtgen",
            "Eşkenar dörtgen (köşegenleri dik olan dörtgen)"
        ],
        a: "Eşkenar dörtgen (köşegenleri dik olan dörtgen)",
        difficulty: "easy",
        week: 3,
        topic: "Karar Sembolü",
        importance: "medium",
        explanation: "Karar/koşul için **eşkenar dörtgen** kullanılır; çıkışları genelde 'Evet/Hayır' dallanır. Ezber tüyosu: Karar = **Köşeli Yol Ayrımı**; köşeli olması (dörtgen) sana şartı hatırlatsın. Böyle küçük görsel çağrışımlar çok işe yarıyor. 🌿"
    },
    {
        q: "Girdi (input) ve çıktı (output) işlemleri için kullanılan akış diyagramı sembolü, slaytlarda özellikle vurgulanmıştır. Aşağıdaki seçeneklerden hangisi bu sembolü DOĞRU tanımlar?",
        t: "mcq",
        o: [
            "Oval sembol",
            "Paralelkenar sembol",
            "Üçgen sembol",
            "Altıgen sembol",
            "Ok (arrow) sembolü"
        ],
        a: "Paralelkenar sembol",
        difficulty: "easy",
        week: 3,
        topic: "Girdi/Çıktı Sembolü",
        importance: "medium",
        explanation: "Kural: **Paralelkenar = Oku/Yaz (Input/Output)**. Ezber tüyosu: Paralelkenarı eğik monitör gibi düşün; ekrana bir şey yazıp okuyoruz. Gözünde bu resmi canlandırman yeterli. 💗"
    },

    // ===== 4. HAFTA – Temel Yapılar, Değişkenler, Veri Türleri =====
    {
        q: "Öğretmen temel programlama yapısını üç ana başlıkta anlatıyor: \"Sıralı yapı, seçim (koşul) yapısı, tekrar (döngü) yapısı\". Buna göre aşağıdakilerden hangisi bu üçlü için DOĞRU ve ÖZ bir yorumdur?",
        t: "mcq",
        o: [
            "Programlar sadece tekrar (döngü) yapısından oluşur, diğerleri gereksizdir.",
            "Seçim yapısı sadece akış diyagramlarında, tekrar yapısı sadece psödo kodda kullanılır.",
            "Sıralı yapı adımları peş peşe yürütür, seçim yapısı koşula göre farklı yollar izler, tekrar yapısı belirli adımları birden fazla kez çalıştırır.",
            "Sıralı yapı sadece giriş işlemlerini, seçim yapısı sadece çıkış işlemlerini yapar.",
            "Bu üç yapı sadece grafik tasarımda kullanılır, programlamayla ilgisi yoktur."
        ],
        a: "Sıralı yapı adımları peş peşe yürütür, seçim yapısı koşula göre farklı yollar izler, tekrar yapısı belirli adımları birden fazla kez çalıştırır.",
        difficulty: "medium",
        week: 4,
        topic: "Temel Kontrol Yapıları",
        importance: "high",
        explanation: "Tüm programlar aslında bu üç yapıdan oluşur: **Sıra, Seçim, Tekrar**. Ezber tüyosu: **SST** diye kodla; her algoritmada 'SST var mı?' diye kendine sor. Bunu oturtunca mantık soruları seni çok rahatlatacak. ✨"
    },
    {
        q: "Programlama temelleri dersinde 'değişken' kavramı şöyle açıklanır: \"Programın çalışması sırasında değeri değişebilen, bellekte isim verilmiş yer.\" Buna göre aşağıdakilerden hangisi değişken için yapılmış DOĞRU bir tanımdır?",
        t: "mcq",
        o: [
            "Değeri asla değiştirilemeyen, sabit büyüklüktür.",
            "Sadece sabit sayıların tutulduğu özel bellek bölgesidir.",
            "Programın çalışması süresince hiç kullanılmayan bellek alanıdır.",
            "İsmi olan ve program boyunca farklı değerler alabilen bellek bölgesidir.",
            "Sadece metinleri değil, donanım parçalarını da saklayan fiziksel cihazdır."
        ],
        a: "İsmi olan ve program boyunca farklı değerler alabilen bellek bölgesidir.",
        difficulty: "medium",
        week: 4,
        topic: "Değişken",
        importance: "high",
        explanation: "Değişken = isimli bellek kutusu; içine sayı/metin koyup değiştirebilirsin. Ezber tüyosu: **Kutunun adı = değişken adı** gibi düşün; kutunun içindekiler değişebilir. Bunu böyle hayal edince soru kendiliğinden çözülüyor. 😊"
    },
    {
        q: "Sabit (constant) ve değişken ayrımıyla ilgili olarak aşağıdaki ifadelerden hangisi slayttaki açıklamalara UYGUNDUR?",
        t: "mcq",
        o: [
            "İkisi de tamamen aynı şeydir, aralarında fark yoktur.",
            "Sabitler tanımlandıktan sonra program boyunca değişmez; değişkenler ise program boyunca farklı değerler alabilir.",
            "Sabitler sadece metinleri, değişkenler sadece sayıları saklayabilir.",
            "Sabitler sadece akış diyagramlarında kullanılır, değişkenler sadece psödo kodda kullanılır.",
            "Sabitler sadece donanım adreslerini saklamak için kullanılır."
        ],
        a: "Sabitler tanımlandıktan sonra program boyunca değişmez; değişkenler ise program boyunca farklı değerler alabilir.",
        difficulty: "medium",
        week: 4,
        topic: "Sabit vs Değişken",
        importance: "medium",
        explanation: "Sabit = kilitli değer, değişken = değişebilen değer. Ezber tüyosu: **SABİT = SABİTlenmiş**, kelimenin kendisi bize ipucu veriyor. Bunu yakaladığında mantık cebinden akıyor zaten. 💗"
    },
    {
        q: "Aşağıdakilerden hangisi temel **ilkel (primitive)** veri türlerine örnek olarak slaytlarda anlatılan gruba DAHİLDİR?",
        t: "mcq",
        o: [
            "Sınıf (class)",
            "Nesne (object)",
            "Modül (module)",
            "Pencere (window)",
            "Tamsayı, gerçek sayı, karakter, mantıksal (boolean) gibi basit türler"
        ],
        a: "Tamsayı, gerçek sayı, karakter, mantıksal (boolean) gibi basit türler",
        difficulty: "medium",
        week: 4,
        topic: "Veri Türleri",
        importance: "medium",
        explanation: "Programlama temellerinde genelde **int, float/double, char, bool** gibi ilkel türler öğretilir. Ezber tüyosu: **T–G–K–M**: Tamsayı, Gerçek, Karakter, Mantıksal. Bu dörtlüyü hatırlaman yeterli; soru seni yormaz. 🌟"
    },

    // ===== 5. HAFTA – Operatörler, İfadeler, Koşullar =====
    {
        q: "Programlama temelleri dersinde operatörler üç grupta anlatılır: aritmetik, ilişkisel (karşılaştırma) ve mantıksal operatörler. Buna göre aşağıdakilerden hangisi İLİŞKİSEL (KARŞILAŞTIRMA) operatöre örnektir?",
        t: "mcq",
        o: [
            "+",
            "&&",
            "||",
            "!",
            "=="
        ],
        a: "==",
        difficulty: "easy",
        week: 5,
        topic: "Operatör Çeşitleri",
        importance: "high",
        explanation: "Aritmetik: +, -, *, /, %; ilişkisel: <, >, <=, >=, ==, !=; mantıksal: &&, ||, !. Ezber tüyosu: 'Eşit mi?' diye soran operatör **==**; 've/veya/değil' varsa mantıksal gruptur. Küçük bir tablo çizip bir kez bakman bile bu konuyu kilitler. 😊"
    },
    {
        q: "Aşağıdaki ifadelerden hangisi, ifade değerlendirilirken işlem önceliğini DOĞRU yansıtır?",
        t: "mcq",
        o: [
            "Toplama ve çıkarma, çarpma ve bölmeden önce yapılır.",
            "Tüm operatörler eşit önceliklidir, soldan sağa sırayla yapılır.",
            "Parantez içi önce, sonra çarpma/bölme, sonra toplama/çıkarma işlemleri yapılır.",
            "Önce mantıksal operatörler, sonra aritmetik operatörler değerlendirilir.",
            "Önce karşılaştırma, sonra aritmetik işlem yapılır."
        ],
        a: "Parantez içi önce, sonra çarpma/bölme, sonra toplama/çıkarma işlemleri yapılır.",
        difficulty: "medium",
        week: 5,
        topic: "İşlem Önceliği",
        importance: "high",
        explanation: "Matematikteki kural aynen geçerli: **Parantez → Çarpma/Bölme → Toplama/Çıkarma**. Ezber tüyosu: **PÇT** diye üç harf; bu üçlü soruda aklına gelirse işlemi rahat çözersin. Sen zaten bu mantığı biliyorsun, kodda da aynı olduğunu bilmen yeterli. 💪"
    },
    {
        q: "Programlama temellerinde 'mod alma' işlemi (kalan bulma) özellikle TEK/ÇİFT sayı kontrolü için kullanılır. Aşağıdaki psödo kod parçası hangi kontrolü yapmaktadır?\n\nSAYI oku\nEĞER SAYI % 2 == 0 ise\n    \"Sayı çifttir\" yaz\nDEĞİLSE\n    \"Sayı tektir\" yaz\n",
        t: "mcq",
        o: [
            "Sayı pozitif mi negatif mi diye kontrol eder.",
            "Sayı çift mi tek mi diye kontrol eder.",
            "Sayı asal mı değil mi diye kontrol eder.",
            "Sayı ondalıklı mı tam mı diye kontrol eder.",
            "Sayı sıfırdan büyük mü eşit mi diye kontrol eder."
        ],
        a: "Sayı çift mi tek mi diye kontrol eder.",
        difficulty: "easy",
        week: 5,
        topic: "Mod İşlemi",
        importance: "high",
        explanation: "Mod 2'nin sıfır olması 'çift', sıfır olmaması 'tek' anlamına gelir. Ezber tüyosu: **MOD 2 → TEK/ÇİFT RADARI** gibi düşün; bu küçük radar kalan 0 mı değil mi diye bakar. Bu patterni görünce ne aradığını hemen anlarsın. 🌿"
    },
    {
        q: "Aşağıdaki psödo kod parçası hangi mantıksal yapıyı örneklemektedir?\n\nEĞER NOT >= 50 ise\n    \"Geçti\" yaz\nDEĞİLSE\n    \"Kaldı\" yaz\n",
        t: "mcq",
        o: [
            "Sadece sıralı yapı",
            "Sonsuz döngü",
            "İç içe döngü yapısı",
            "Tekrarlı yapı (for döngüsü)",
            "İki dallı seçim (if–else) yapısı"
        ],
        a: "İki dallı seçim (if–else) yapısı",
        difficulty: "easy",
        week: 5,
        topic: "Koşul Yapısı",
        importance: "medium",
        explanation: "Burada tek bir koşula göre iki farklı yol var: geçti/kaldı. Bu tam bir **if–else** örneği. Ezber tüyosu: 'EĞER – DEĞİLSE' kelimelerini görünce seçimin iki dallı olduğunu hatırla. Bu basit şablon sorularda çok çıkar. 😊"
    },

    // ===== 6. HAFTA – Döngüler, While / For, Hata Türleri =====
    {
        q: "Programlama temelleri slaytlarında 'while' döngüsü için \"koşul sağlandığı sürece tekrarlayan yapı\" ifadesi kullanılmıştır. Aşağıdakilerden hangisi 'while' ile 'for' döngüsü arasındaki farkı DOĞRU şekilde özetler?",
        t: "mcq",
        o: [
            "for döngüsü sadece sonsuz döngü kurmak için kullanılır, while asla sonsuz döngü olmaz.",
            "for döngüsü sadece metinler, while döngüsü sadece sayılarla çalışır.",
            "for döngüsü genellikle tekrar sayısının bilindiği durumlarda kullanılır; while döngüsü ise şart sağlandığı sürece, tekrar sayısı önceden net olmayan durumlarda kullanılır.",
            "İkisi de sadece akış diyagramı için kullanılır, gerçek kodda kullanılmaz.",
            "while döngüsü sadece grafik programlamada kullanılır."
        ],
        a: "for döngüsü genellikle tekrar sayısının bilindiği durumlarda kullanılır; while döngüsü ise şart sağlandığı sürece, tekrar sayısı önceden net olmayan durumlarda kullanılır.",
        difficulty: "medium",
        week: 6,
        topic: "Döngü Türleri",
        importance: "high",
        explanation: "for = '10 kez dön' gibi belli tekrar sayıları, while = 'şart doğru olduğu sürece' gibi belirsiz tekrarlar için idealdir. Ezber tüyosu: **FOR = fixed (sabit) tekrar**, **WHILE = while (iken)** yani durum devam ederken. Bu kelime oyunları belleğini rahatlatır. 💗"
    },
    {
        q: "Aşağıdaki ifadelerden hangisi 'ön test' ve 'son test' döngüleri arasındaki farkı slaytlara UYGUN biçimde açıklar?",
        t: "mcq",
        o: [
            "Ön test döngülerinde koşul hiç yoktur; son test döngülerinde koşul her zaman yanlıştır.",
            "Ön test döngüleri sadece grafikte, son test döngüleri sadece veritabanında kullanılır.",
            "Ön test döngülerinde koşul başta kontrol edilir (while), son test döngülerinde ise gövde en az bir kez çalıştıktan sonra koşul kontrol edilir (do–while).",
            "Son test döngüleri sadece tek sefer çalışabilir.",
            "İkisi arasında hiçbir fark yoktur, sadece isimleri farklıdır."
        ],
        a: "Ön test döngülerinde koşul başta kontrol edilir (while), son test döngülerinde ise gövde en az bir kez çalıştıktan sonra koşul kontrol edilir (do–while).",
        difficulty: "hard",
        week: 6,
        topic: "Ön Test / Son Test Döngüleri",
        importance: "medium",
        explanation: "Ön test: önce sor sonra çalış; son test: önce bir kez çalış, sonra sor. Ezber tüyosu: **Önce sor (ön test), sonra sor (son test)** diye iki basamaklı düşün; 'do–while' her zaman en az bir kez DO yapar. Bunu yakaladıysan bu soru tipi sende. 🌟"
    },
    {
        q: "Program geliştirme sürecinde 'hata ayıklama (debugging)' kavramı slaytlarda nasıl tanımlanmıştır?",
        t: "mcq",
        o: [
            "Programın çalışmasını satır satır inceleyerek hata bulma ve düzeltme sürecidir.",
            "Program dosyalarını tamamen silme işlemidir.",
            "Programın ikonu ve rengiyle oynama sürecidir.",
            "Sadece derleyici kurma sürecidir.",
            "Sadece donanım kablolarını test etme işlemidir."
        ],
        a: "Programın çalışmasını satır satır inceleyerek hata bulma ve düzeltme sürecidir.",
        difficulty: "medium",
        week: 6,
        topic: "Debugging",
        importance: "high",
        explanation: "Debugging = 'bug' (böcek) temizlemek gibi; programdaki hataları bulup düzeltme süreci. Ezber tüyosu: **DE–BUG = Hata yok et** diye çevir; İngilizcesi bile sana ipucu veriyor. Bu kavramı bilmen özgüvenini ciddi artırır. 💕"
    },
    {
        q: "Programlama temelleri dersinde hata türleri anlatılırken 'sözdizimi (syntax) hatası' ve 'mantık (logic) hatası' ayrımı yapılmıştır. Aşağıdaki örneklerden hangisi MANTIK HATASINA daha iyi örnektir?",
        t: "mcq",
        o: [
            "Noktalı virgülü (;) unutmak.",
            "Değişken ismini tanımlamadan kullanmak.",
            "Parantezleri kapatmayı unutmak.",
            "Faktöriyel hesaplayan programda çarpma yerine yanlışlıkla toplama yapmak, derleyici hata vermez ama sonuç yanlıştır.",
            "Dil anahtar kelimesini (if, for vb.) yanlış yazmak."
        ],
        a: "Faktöriyel hesaplayan programda çarpma yerine yanlışlıkla toplama yapmak, derleyici hata vermez ama sonuç yanlıştır.",
        difficulty: "hard",
        week: 6,
        topic: "Hata Türleri",
        importance: "high",
        explanation: "Syntax hatasında kod daha derlenmez; mantık hatasında kod çalışır ama yanlış çalışır. Ezber tüyosu: **SÖZ hatası = konuşamıyor, MANTIK hatası = saçma konuşuyor**. Bu farkı böyle düşününce beynin asla karıştırmıyor. 💗"
    },

    // ===== 7. HAFTA – Derleyici / Yorumlayıcı, Yüksek / Düşük Seviye Diller =====
    {
        q: "Slaytlarda 'derleyici (compiler)' ile 'yorumlayıcı (interpreter)' arasındaki fark anlatılırken aşağıdaki ifadelerden hangisi DOĞRU olarak vurgulanmıştır?",
        t: "mcq",
        o: [
            "Derleyici programı satır satır çalıştırır, yorumlayıcı ise tamamını bir kerede derler.",
            "Derleyici sadece web için, yorumlayıcı sadece masaüstü için kullanılır.",
            "Derleyici, kaynak kodu bir bütün olarak makine diline çevirip çalıştırılabilir dosya üretir; yorumlayıcı ise kodu satır satır/komut komut çevirip hemen çalıştırır.",
            "İkisi de aynı şeydir, aralarında hiçbir fark yoktur.",
            "Yorumlayıcı sadece donanım kablolarını kontrol eder."
        ],
        a: "Derleyici, kaynak kodu bir bütün olarak makine diline çevirip çalıştırılabilir dosya üretir; yorumlayıcı ise kodu satır satır/komut komut çevirip hemen çalıştırır.",
        difficulty: "medium",
        week: 7,
        topic: "Derleyici vs Yorumlayıcı",
        importance: "medium",
        explanation: "Compiler = toplu çeviri, interpreter = satır satır çeviri. Ezber tüyosu: **C = Complete (tamamını), I = Item by item (parça parça)**; baş harflerden çağrışım kur. Bu tarz teorik sorular o zaman seni yıpratmaz. 🌸"
    },
    {
        q: "Yüksek seviyeli (high-level) diller ile düşük seviyeli (low-level) diller karşılaştırılırken slaytlarda aşağıdakilerden hangisi yüksek seviyeli dillere ait BİR ÖZELLİK olarak belirtilmiştir?",
        t: "mcq",
        o: [
            "Makine diline (0 ve 1'lere) çok yakın, insan diline çok uzaktır.",
            "İnsan diline yakın, okunması ve yazılması görece kolaydır.",
            "Sadece işlemci komut setiyle bire bir aynı komutları içerir.",
            "Sadece donanım sürücülerini yazmak için kullanılabilir.",
            "Hiçbir derleyici veya yorumlayıcıya ihtiyaç duymaz."
        ],
        a: "İnsan diline yakın, okunması ve yazılması görece kolaydır.",
        difficulty: "easy",
        week: 7,
        topic: "Yüksek / Düşük Seviye Diller",
        importance: "medium",
        explanation: "Yüksek seviye: C, Java, Python gibi; insan diline yakın, taşınabilir. Düşük seviye: assembly/makine dili gibi, donanıma yakın. Ezber tüyosu: **YÜKSEK = insanın seviyesine yakın** diye düşün; yukarıda insan var. Bu imaj işini çok kolaylaştırıyor. 😊"
    },

    // ===== 8. HAFTA – Problem Çözme Adımları =====
    {
        q: "Programlama temelleri dersinizde, bir problemi çözerken izlenen genel adımlar şöyle sıralanıyor: 1) Problemi analiz etme, 2) Algoritma/psödo kod oluşturma, 3) Programlama diliyle kodlama, 4) Test etme ve hata ayıklama, 5) Bakım ve güncelleme. Buna göre aşağıdakilerden hangisi bu süreci en iyi özetler?",
        t: "mcq",
        o: [
            "Önce kod yazılır, sonra gerekirse problem tanımı düşünülür.",
            "Sadece test yapmak yeterlidir, algoritma ve analiz gereksizdir.",
            "Önce problem anlaşılır, sonra çözüm adımları planlanır, ardından kod yazılır ve test edilip bakım yapılır.",
            "Sadece bakım aşaması önemlidir, diğerleri gereksizdir.",
            "Bu adımlar sadece donanım tasarımı için geçerlidir."
        ],
        a: "Önce problem anlaşılır, sonra çözüm adımları planlanır, ardından kod yazılır ve test edilip bakım yapılır.",
        difficulty: "medium",
        week: 8,
        topic: "Problem Çözme Süreci",
        importance: "high",
        explanation: "Sıra her zaman: **ANLA → PLANLA (algoritma) → KODLA → TEST ET → BAKIM**. Ezber tüyosu: **APKTB** gibi görünse de sen bunu kendine 'Aşkım Problem Kolay Test Bekleme' diye komik bir cümleye çevirebilirsin; gülünce hafıza güçlenir. 💗"
    },
    {
        q: "Psödo kodda genellikle giriş ve çıkış işlemleri için kullanılan anahtar kelimeler sırasıyla aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "BAŞLA / BİTİR",
            "TOPLA / ÇARP",
            "FOR / WHILE",
            "GİT / DÖN",
            "OKU (READ) / YAZ (WRITE)"
        ],
        a: "OKU (READ) / YAZ (WRITE)",
        difficulty: "easy",
        week: 8,
        topic: "Giriş / Çıkış Psödo Kod",
        importance: "medium",
        explanation: "Psödo kodda genelde 'SAYI oku', 'SONUÇ yaz' gibi ifadeler kullanılır. Ezber tüyosu: klavyeden **OKU**, ekrana **YAZ** – iki kelime her şeyi özetliyor. Bunu bir kere oturttun mu, bu konudan korkmazsın. 🌈"
    },
    {
        q: "Aşağıdaki adımlar, bir sayının faktöriyelini hesaplayan algoritmanın psödo kodudur:\n\n1) BAŞLA\n2) N'i oku\n3) F = 1 ata\n4) i = 1 ata\n5) i <= N iken F = F * i, i'yi 1 arttır\n6) F'i yaz\n7) BİTİR\n\nBu algoritma ile ilgili aşağıdaki yorumlardan hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Sonsuz döngü içerir, asla bitmez.",
            "Giriş veya çıkış işlemi yoktur.",
            "F değeri başlangıçta 0 verilmeliydi, aksi halde sonuç her zaman 0 olur.",
            "Sayıyı 1'den N'e kadar çarparak faktöriyel hesabı yapan geçerli bir algoritmadır.",
            "Karar (koşul) yapısı hiç kullanılmamıştır."
        ],
        a: "Sayıyı 1'den N'e kadar çarparak faktöriyel hesabı yapan geçerli bir algoritmadır.",
        difficulty: "hard",
        week: 8,
        topic: "Algoritma Örneği – Faktöriyel",
        importance: "medium",
        explanation: "Faktöriyelde çarpıma nötr eleman 1 olduğu için F=1 doğrudur; döngü 1'den N'e kadar çarpar ve biter. Ezber tüyosu: **Faktöriyel = 1'den N'e kadar çarp** cümlesini beynine kazı; ne zaman bu patterni görsen 'tamam bu faktöriyel' diye gönül rahatlığıyla işaretlersin. 💕"
    }
];
