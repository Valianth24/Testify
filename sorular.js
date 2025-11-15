// WEB TASARIM TEMELLERİ 1–6 HAFTA VİZE SORU BANKASI
// 30 soru – internet & web, HTML temelleri, metin etiketleri, bağlantılar, tablolar, formlar, multimedya

window.questionBank = [
    // ===== HAFTA 1 – Web ve HTML’e Giriş =====
    {
        q: "Bir kurum, kurumsal kimliğini yansıtmak ve ürünlerini hem ulusal hem de uluslararası düzeyde, 7/24 tanıtmak için internet üzerinden herkese açık bir sistem kurmak istemektedir. Bu sistemin oluşturulma SÜRECİNE ve ortaya çıkan SONUCA verilen adlar aşağıdakilerin hangisinde doğru ve eksiksiz olarak verilmiştir?",
        t: "mcq",
        o: [
            "Sürece 'web tasarımı', ortaya çıkan sonuca 'web sitesi' denir.",
            "Sürece 'hosting', ortaya çıkan sonuca 'domain' denir.",
            "Sürece 'web uygulaması', ortaya çıkan sonuca 'web servisi' denir.",
            "Sürece 'grafik tasarım', ortaya çıkan sonuca 'web arayüzü' denir.",
            "Sürece 'proje yönetimi', ortaya çıkan sonuca 'HTML sayfası' denir."
        ],
        a: "Sürece 'web tasarımı', ortaya çıkan sonuca 'web sitesi' denir.",
        difficulty: "medium",
        week: 1,
        topic: "Web Tasarımı Temelleri",
        importance: "high",
        explanation: "Slaytta, ulusal ve uluslararası ağ ortamında yayınlanan online sistemlere WEB SİTESİ, bu sitelerin oluşturulma sürecine WEB TASARIMI denildiği vurgulanır."
    },
    {
        q: "Bir web tasarımcısı, hazırladığı sitede hangi kısımların içerik olarak sıklıkla değişeceğini, hangi alanların sabit kalacağını belirlemek istemektedir. Bu aşamada 'statik' ve 'dinamik' kavramlarını doğru kullanmak zorundadır. Aşağıdaki ifadelerden hangisi statik ve dinamik içerik ayrımını EN DOĞRU şekilde açıklar?",
        t: "mcq",
        o: [
            "Statik içerik, her sayfa yenilendiğinde rastgele değişen içeriktir; dinamik içerik ise asla değişmeyen sabit kısımlardır.",
            "Statik içerik, sadece veritabanına bağlı çalışan içeriktir; dinamik içerik ise düz HTML’den oluşur.",
            "Statik içerik, site yayınlandıktan sonra nadiren değişen sabit metin ve görsellerdir; dinamik içerik ise kullanıcıya, zamana veya veritabanına göre değişebilen bölümlerdir.",
            "Statik içerik yalnızca yönetici panelinden düzenlenebilen içeriktir; dinamik içerik ise hiçbir zaman düzenlenemez.",
            "Statik içerik yalnızca mobilde çalışan kısımlardır; dinamik içerik ise sadece masaüstünde görüntülenebilir."
        ],
        a: "Statik içerik, site yayınlandıktan sonra nadiren değişen sabit metin ve görsellerdir; dinamik içerik ise kullanıcıya, zamana veya veritabanına göre değişebilen bölümlerdir.",
        difficulty: "medium",
        week: 1,
        topic: "Statik ve Dinamik Yapılar",
        importance: "high",
        explanation: "Notlarda, sitenin hangi kısmının statik (sabit) hangi kısmının dinamik (değişebilir) olacağına karar verilmesi gerektiği belirtilir; statik içerik sabit, dinamik içerik ise güncellenmeye ve değişmeye açık kısımlardır."
    },
    {
        q: "Bir kurum yeni web sitesini yayınlamak istemektedir. Alan adını (örneğin bozok.edu.tr) satın almış, fakat dosyalarını barındıracağı fiziksel sunucu hizmetini henüz almamıştır. Web tasarım temellerine göre aşağıdakilerden hangisi bu eksik kalan hizmeti en doğru adlandırır?",
        t: "mcq",
        o: [
            "Domain registry (isim tescil hizmeti)",
            "Görsel tasarım (arayüz tasarımı)",
            "Hosting (yer sağlama / barındırma hizmeti)",
            "Yazılım geliştirme (backend kodlama)",
            "SEO (arama motoru optimizasyonu)"
        ],
        a: "Hosting (yer sağlama / barındırma hizmeti)",
        difficulty: "easy",
        week: 1,
        topic: "Hosting ve Domain",
        importance: "high",
        explanation: "Slaytta web tasarımının dört temel unsuru arasında HOSTING (yer sağlama) ve DOMAIN REGISTRY (isim tescil) ayrı ayrı sayılır. Alan adı varsa ama dosyalar için sunucu yoksa eksik olan kısım hostingtir."
    },
    {
        q: "Bir girişimci, web sitesinin geleneksel reklamlara göre avantajlarını araştırmaktadır. Aşağıdakilerden hangisi web sitesi sahibi olmanın slaytlarda belirtilen AVANTAJLARINDAN BİRİ DEĞİLDİR?",
        t: "mcq",
        o: [
            "Tanıtımın ulusal ve uluslararası düzeyde yapılabilmesini sağlaması",
            "Ürün ve hizmetlerin 7/24 tanıtımına olanak vermesi",
            "Zaman ve imaj kazandırması, kurumsal görünümü güçlendirmesi",
            "Potansiyel müşterilerin doğrudan firmaya ulaşmasını kolaylaştırması",
            "Yazılı basında çıkan tüm reklamların otomatik olarak siteye taşınmasını zorunlu kılması"
        ],
        a: "Yazılı basında çıkan tüm reklamların otomatik olarak siteye taşınmasını zorunlu kılması",
        difficulty: "easy",
        week: 1,
        topic: "Web Sitesinin Avantajları",
        importance: "medium",
        explanation: "Slaytta web sitesinin hesaplı reklam imkânı, ulusal/uluslararası tanıtım, 7/24 erişim gibi avantajlar sayılır; yazılı basın reklamlarının otomatik taşınması gibi bir zorunluluk geçmez."
    },
    {
        q: "Bir web tasarımcısı yeni bir proje planlarken alan adı seçiminden siteye konulacak içerik türüne kadar pek çok kararı baştan vermek zorundadır. Aşağıdakilerden hangisi slaytlarda belirtilen 'alan adı seçimi' için önerilen İLKELERDEN BİRİDİR?",
        t: "mcq",
        o: [
            "Alan adının mümkün olduğunca uzun ve karmaşık şifrelerden oluşması",
            "Alan adının yalnızca rakamlardan oluşması, harf içermemesi",
            "Alan adının kolay okunup yazılabilir olması ve sitenin/firmanın içeriğiyle uyumlu seçilmesi",
            "Alan adının mutlaka '.gov' uzantısıyla bitmesi",
            "Alan adında Türkçe karakterlerin yoğun şekilde kullanılması"
        ],
        a: "Alan adının kolay okunup yazılabilir olması ve sitenin/firmanın içeriğiyle uyumlu seçilmesi",
        difficulty: "medium",
        week: 1,
        topic: "Alan Adı Seçimi",
        importance: "medium",
        explanation: "Slaytta alan adı seçerken kolay okunup yazılabilir olması ve sitenin içeriğiyle/ünvanıyla uyumlu olması gerektiği özellikle vurgulanır."
    },

    // ===== HAFTA 2 – HTML Temelleri ve Sözdizimi =====
    {
        q: "Bir öğrenci, HTML ile ilk web sayfasını hazırlarken, tarayıcının dosyayı 'HTML5 standardına göre' yorumlamasını garanti altına almak istemektedir. Dosyanın en üstüne koyması gereken bildirim aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<HTML5>",
            "<DOCTYPE html5>",
            "<!DOCTYPE HTML SYSTEM>",
            "<!DOCTYPE html>",
            "<?html version=\"5\"?>"
        ],
        a: "<!DOCTYPE html>",
        difficulty: "easy",
        week: 2,
        topic: "HTML Syntax ve Yapı",
        importance: "high",
        explanation: "Slaytlarda verilen örneklerde HTML5 için kullanılan doctype bildirimi '!DOCTYPE html' şeklindedir ve sayfanın en üst satırında yer alır."
    },
    {
        q: "HTML ile hazırlanmış bir sayfada, tarayıcıda görünen tüm içerik (metin, resim, link vb.) belirli bir temel etiketin içinde yer alır. Buna karşın karakter seti, sayfa başlığı, harici CSS dosyası gibi kullanıcıya doğrudan görünmeyen bilgiler başka bir etiketin içinde tutulur. Bu iki temel bölüm için kullanılan etiket ikilisi aşağıdakilerden hangisinde DOĞRU olarak verilmiştir?",
        t: "mcq",
        o: [
            "<content> … </content> ve <meta> … </meta>",
            "<head> … </head> ve <title> … </title>",
            "<body> … </body> ve <footer> … </footer>",
            "<header> … </header> ve <nav> … </nav>",
            "<head> … </head> ve <body> … </body>"
        ],
        a: "<head> … </head> ve <body> … </body>",
        difficulty: "easy",
        week: 2,
        topic: "HTML Belge Yapısı",
        importance: "high",
        explanation: "Slaytlarda <html> etiketinin iki ana bölümü olarak <head> (arka plan bilgileri) ve <body> (kullanıcının gördüğü kısım) anlatılır."
    },
    {
        q: "Aşağıdaki ifadelerden hangisi HTML etiketlerinin yazım kuralları (syntax) açısından DOĞRU bir bilgidir?",
        t: "mcq",
        o: [
            "HTML etiketleri mutlaka büyük harflerle yazılmalıdır; küçük harf kullanmak hatadır.",
            "HTML etiketleri yalnızca tek olarak kullanılabilir, açılış-kapanış çifti kullanılamaz.",
            "HTML etiketleri ' < ' ve ' > ' karakterleri arasında yazılır ve çoğu zaman açılış-kapanış çifti hâlinde kullanılır.",
            "HTML etiketleri sadece sayfa kaydedilirken otomatik oluşur, programcı doğrudan yazmaz.",
            "HTML etiketlerinde Türkçe karakter kullanılması zorunludur."
        ],
        a: "HTML etiketleri ' < ' ve ' > ' karakterleri arasında yazılır ve çoğu zaman açılış-kapanış çifti hâlinde kullanılır.",
        difficulty: "medium",
        week: 2,
        topic: "HTML Syntax",
        importance: "high",
        explanation: "Slaytta HTML etiketlerinin < ve > karakterleri arasında yazıldığı ve genellikle açılış/kapanış çifti (örn. <b> … </b>) olarak kullanıldığı belirtilir; büyük-küçük harf duyarlı olmadığı da ayrıca vurgulanır."
    },
    {
        q: "Bir sayfada tarayıcı sekmesinde görünen başlığın 'Bozok Web Tasarım Dersi' olmasını isteyen bir öğrenci, bu yazıyı hangi etiket çifti arasına yazmalıdır?",
        t: "mcq",
        o: [
            "<h1>Bozok Web Tasarım Dersi</h1>",
            "<title>Bozok Web Tasarım Dersi</title>",
            "<meta>Bozok Web Tasarım Dersi</meta>",
            "<header>Bozok Web Tasarım Dersi</header>",
            "<caption>Bozok Web Tasarım Dersi</caption>"
        ],
        a: "<title>Bozok Web Tasarım Dersi</title>",
        difficulty: "easy",
        week: 2,
        topic: "Head ve Title",
        importance: "high",
        explanation: "Notlarında da vurguladığın gibi <title> etiketi, sekme başlığını belirler ve head içinde yer alır; <h1> ise sayfa içindeki görünür başlıktır."
    },
    {
        q: "HTML ile oluşturulan bir dosya üzerinde çalışan bir öğrenci, 'etiket isimlerinin büyük veya küçük harfle yazılmasının tarayıcı açısından bir fark oluşturmadığını' iddia etmektedir. Aşağıdakilerden hangisi bu durumun SEBEBİNİ en doğru şekilde açıklar?",
        t: "mcq",
        o: [
            "HTML, derlenmiş bir dil olduğu için derleyici harfleri otomatik olarak büyütür.",
            "HTML, yorumlanırken etiket isimlerini büyük-küçük harf duyarlı (case sensitive) olarak algılar.",
            "HTML, yalnızca küçük harfle yazılan etiketleri kabul eder; tarayıcı büyük harfleri otomatik düzeltir.",
            "HTML bir işaretleme dilidir ve etiket isimleri büyük-küçük harfe duyarlı değildir; <body> ile <BODY> aynı etikettir.",
            "HTML etiketleri aslında sayfanın içine yazılmaz, tarayıcı tarafından sonradan eklenir."
        ],
        a: "HTML bir işaretleme dilidir ve etiket isimleri büyük-küçük harfe duyarlı değildir; <body> ile <BODY> aynı etikettir.",
        difficulty: "medium",
        week: 2,
        topic: "Case Sensitivity",
        importance: "medium",
        explanation: "Slayt ve notlarında 'HTML küçük/büyük harfe duyarlı değildir' ifadesi açıkça geçer; buna 'case sensitive değildir' denir."
    },
    {
        q: "HTML sürümleriyle ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "HTML5 tamamen yeni bir dil olup önceki sürümlerdeki etiketlerin hiçbiri geçerli değildir.",
            "HTML 4.01 sürümü yayınlandıktan sonra HTML geliştirimi durdurulmuş, doğrudan CSS3'e geçilmiştir.",
            "HTML'nin farklı sürümlerinde yeni etiketler eklenmiş olsa da temel olarak hepsi aynı işaretleme dilinin devamıdır ve eski etiketler kullanılmaya devam etmektedir.",
            "HTML 2.0 sürümüyle birlikte yalnızca metin tabanlı içerik desteği tamamen kaldırılmıştır.",
            "HTML'nin sürümleri, sadece tarayıcı üreticilerinin verdiği ticari isimlerdir ve teknik bir fark içermez."
        ],
        a: "HTML'nin farklı sürümlerinde yeni etiketler eklenmiş olsa da temel olarak hepsi aynı işaretleme dilinin devamıdır ve eski etiketler kullanılmaya devam etmektedir.",
        difficulty: "hard",
        week: 2,
        topic: "HTML Versiyonları",
        importance: "medium",
        explanation: "Slaytta HTML 1.0’dan 5’e kadar sürümler tablo olarak verilir ve her yeni sürümde yeni etiketler eklense de HTML’nin bir bütün olduğu, eski etiketlerin hala kullanıldığı belirtilir."
    },

    // ===== HAFTA 3 – Metin Biçimlendirme ve Linkler =====
    {
        q: "Bir web sayfasında 'Bozok Üniversitesi' ifadesinin hem kalın hem de önemli (vurgulu) olarak işaretlenmesi istenmektedir. Aşağıdaki etiket çiftlerinden hangisi SEMANTİK AÇIDAN 'önem vurgusu' verdiği için tercih edilmelidir?",
        t: "mcq",
        o: [
            "<b>Bozok Üniversitesi</b>",
            "<i>Bozok Üniversitesi</i>",
            "<strong>Bozok Üniversitesi</strong>",
            "<u>Bozok Üniversitesi</u>",
            "<small>Bozok Üniversitesi</small>"
        ],
        a: "<strong>Bozok Üniversitesi</strong>",
        difficulty: "medium",
        week: 3,
        topic: "Metin ve Görünüm Etiketleri",
        importance: "medium",
        explanation: "Slaytta <b> görsel olarak kalın yazarken, <strong> etiketinin 'önemli metin' anlamı taşıdığı yani semantik vurgusu olduğu anlatılır; bu yüzden önemli içerikte <strong> tercih edilir."
    },
    {
        q: "Bir paragraf içinde 10 üzeri 2 ve H₂O gibi bilimsel gösterimler yazmak isteyen bir öğrenci, HTML’de hangi etiketleri kullanmalıdır?",
        t: "mcq",
        o: [
            "<big> ve <small>",
            "<sup> ve <sub>",
            "<em> ve <strong>",
            "<mark> ve <code>",
            "<u> ve <s>"
        ],
        a: "<sup> ve <sub>",
        difficulty: "easy",
        week: 3,
        topic: "Üst ve Alt Simge",
        importance: "medium",
        explanation: "Slayttaki örnekte 10<sup>2</sup> ve H<sub>2</sub>O gösterimleri verilir; <sup> üst simge, <sub> alt simge için kullanılır."
    },
    {
        q: "Bir sayfada altı çizili, üstü çizili ve normal metinleri aynı satırda göstermek isteyen bir tasarımcı aşağıdaki etiketlerden hangilerini birlikte kullanmalıdır?",
        t: "mcq",
        o: [
            "<u>, <em>, <b>",
            "<u>, <s>, <strong>",
            "<u>, <s>, <i>",
            "<s>, <mark>, <small>",
            "<code>, <pre>, <kbd>"
        ],
        a: "<u>, <s>, <i>",
        difficulty: "medium",
        week: 3,
        topic: "Metin Biçimlendirme",
        importance: "low",
        explanation: "Slaytta örnek kodda altı çizili için <u>, üstü çizili için <s> ve farklı vurgu için <i>/<em> benzeri etiketler birlikte kullanılır; soru genel mantığı yoklamaktadır."
    },
    {
        q: "HTML’de başka bir sayfaya ya da dış bir siteye tıklanabilir bağlantı vermek için kullanılan temel etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<link>",
            "<a>",
            "<url>",
            "<href>",
            "<nav>"
        ],
        a: "<a>",
        difficulty: "easy",
        week: 3,
        topic: "Bağlantı Oluşturma",
        importance: "high",
        explanation: "Slaytlarda bağlantı (köprü) oluşturma konusu işlenirken <a> etiketi ve href özelliğiyle örnekler verilir: <a href=\"…\">Metin</a>."
    },
    {
        q: "Bir bağlantının kullanıcı linke tıkladığında yeni sekmede açılması istenmektedir. Aşağıdaki örneklerden hangisi hem doğru href kullanımı hem de yeni sekmede açılma davranışını birlikte DOĞRU şekilde göstermektedir?",
        t: "mcq",
        o: [
            "<a src=\"https://www.google.com\" newtab>Google</a>",
            "<a link=\"https://www.google.com\" target=\"new\">Google</a>",
            "<a href=\"https://www.google.com\" window=\"_blank\">Google</a>",
            "<a href=\"https://www.google.com\" target=\"_blank\">Google</a>",
            "<a ref=\"https://www.google.com\" open=\"blank\">Google</a>"
        ],
        a: "<a href=\"https://www.google.com\" target=\"_blank\">Google</a>",
        difficulty: "medium",
        week: 3,
        topic: "Bağlantı Özellikleri",
        importance: "high",
        explanation: "Slayt ve notlarda target=\"_blank\" kullanımının linki yeni sekmede açtığı gösterilir; href ise gidilecek adresi belirtir."
    },
    {
        q: "Uzun bir sayfada en üstte 'Sayfanın Altına Git' bağlantısı konulmuş ve bu bağlantıya tıklanınca aynı sayfanın alt kısmındaki belirli bir başlığa atlanması istenmiştir. Aşağıdakilerden hangisi bu işlem için kullanılacak YAKLAŞIMI doğru özetler?",
        t: "mcq",
        o: [
            "Sayfanın altındaki metni <footer> içine almak yeterlidir, ek bir ayara gerek yoktur.",
            "Bağlantı <a href=\"alt\">…</a> şeklinde yazılır, alt kısma özel bir tanımlama yapılmaz.",
            "Bağlantı için <a href=\"#alt\">…</a> yazılır; hedef etikete id=\"alt\" gibi bir kimlik atanır.",
            "Sayfada JavaScript ile otomatik kaydırma yapılır; HTML bağlantısı kullanılamaz.",
            "Bunun için yalnızca <nav> etiketi kullanılır, başka etikete gerek yoktur."
        ],
        a: "Bağlantı için <a href=\"#alt\">…</a> yazılır; hedef etikete id=\"alt\" gibi bir kimlik atanır.",
        difficulty: "medium",
        week: 3,
        topic: "Sayfa İçi Bağlantılar",
        importance: "medium",
        explanation: "Slaytlarda # işaretinin aynı sayfa içinde bir id’ye atlama (anchor) için kullanıldığı örneklenir: <a href=\"#alt\">…</a> ve hedefte id=\"alt\"."
    },

    // ===== HAFTA 4 – Tablolar ve Bağlantı Tekrarı =====
    {
        q: "Bir tablo içinde 'Ad, Soyad, Yaş' başlıklarına sahip bir satır ve altında iki öğrenci kaydı göstermek isteyen bir tasarımcı aşağıdaki etiketlerden hangisini BAŞLIK HÜCRESİ (kolon başlığı) için kullanmalıdır?",
        t: "mcq",
        o: [
            "<td>",
            "<tr>",
            "<th>",
            "<thead>",
            "<caption>"
        ],
        a: "<th>",
        difficulty: "easy",
        week: 4,
        topic: "Tablo İşlemleri",
        importance: "high",
        explanation: "Slaytta 'TABLO İŞLEMLERİ' bölümünde tabloda başlık hücreleri için <th>, veri hücreleri için <td> kullanıldığı açıkça belirtilir."
    },
    {
        q: "Bir tabloya dış çerçeve çizgisi eklemek isteyen bir öğrenci, en basit yoldan HTML’in eski ama hâlâ çalışan bir özelliğini kullanmak istemektedir. Aşağıdaki kullanımlardan hangisi slaytlarda verilen ÖRNEĞE en çok uyan kullanımdır?",
        t: "mcq",
        o: [
            "<table border=\"1\"> … </table>",
            "<table frame=\"1\"> … </table>",
            "<table outline=\"1\"> … </table>",
            "<table style=\"line:1\"> … </table>",
            "<table rule=\"all\"> … </table>"
        ],
        a: "<table border=\"1\"> … </table>",
        difficulty: "easy",
        week: 4,
        topic: "Tablo Kenarlıkları",
        importance: "medium",
        explanation: "Slayttaki örneklerde tablolar <table border=\"1\"> şeklinde oluşturulur; bu öznitelik temel sınav sorusu olmaya uygundur."
    },
    {
        q: "Aşağıdakilerden hangisi tablo yapısı içinde satır ve sütun mantığını DOĞRU eşleştirmiştir?",
        t: "mcq",
        o: [
            "<tr> sütunları, <td> ise satırları temsil eder.",
            "<tr> tablonun başlığını, <th> ise tablonun tamamını temsil eder.",
            "<table> satırı, <tr> ise sütunu temsil eder.",
            "<tr> satırı, <td> ve <th> ise o satırdaki hücreleri (sütunları) temsil eder.",
            "<thead> satırları, <tbody> ise sadece sütunları temsil eder."
        ],
        a: "<tr> satırı, <td> ve <th> ise o satırdaki hücreleri (sütunları) temsil eder.",
        difficulty: "medium",
        week: 4,
        topic: "Tablo Mantığı",
        importance: "medium",
        explanation: "Tablo satırları <tr> etiketleriyle, her satırdaki hücreler ise veri için <td>, başlık için <th> ile tanımlanır."
    },
    {
        q: "Bir web sayfasında üst kısımda site logosu ve yatay menü, orta kısımda içerik, sağ tarafta ise reklamların yer aldığı bir yana sütun vardır. Bu yapıyı semantik HTML etiketleriyle kurmak isteyen bir tasarımcı aşağıdaki kombinasyonlardan hangisini EN UYGUN şekilde kullanmalıdır?",
        t: "mcq",
        o: [
            "<header> üst kısım, <section> içerik, <aside> yan sütun",
            "<nav> üst kısım, <article> içerik, <footer> yan sütun",
            "<section> üst kısım, <header> içerik, <aside> alt kısım",
            "<article> üst kısım, <nav> içerik, <section> yan sütun",
            "<div> üst kısım, <div> içerik, <div> yan sütun; semantik etiket kullanılamaz"
        ],
        a: "<header> üst kısım, <section> içerik, <aside> yan sütun",
        difficulty: "hard",
        week: 4,
        topic: "Semantik Etiketler",
        importance: "high",
        explanation: "Ekran görüntüsünde anlatılan semantik yapı; <header> başlık alanı, <section> ana içerik bölümü, <aside> ise ana içerikten ayrı yan içerik (örneğin reklam/kenar çubuğu) için kullanılır."
    },
    {
        q: "Bir geliştirici, sayfanın farklı bölümlerini sadece kutu kutu ayırmak, CSS ile tasarım uygulamak istiyor ve bu bölümlerin semantik olarak özel bir anlamı yok. Bu durumda aşağıdaki etiketlerden hangisi SEMANTİK ANLAM TAŞIMADAN sadece 'kapsayıcı kutu' olarak kullanılmalıdır?",
        t: "mcq",
        o: [
            "<header>",
            "<section>",
            "<div>",
            "<article>",
            "<footer>"
        ],
        a: "<div>",
        difficulty: "easy",
        week: 4,
        topic: "Div Kullanımı",
        importance: "medium",
        explanation: "Notlarında da belirttiğin gibi <div> etiketi, bölümleri kutu kutu ayırmak için kullanılan, semantik anlam taşımayan genel bir kapsayıcıdır."
    },

    // ===== HAFTA 5 – Formlar ve Temel Elemanlar =====
    {
        q: "Bir kullanıcı kayıt formu hazırlayan öğrenci, form verilerinin 'islem.php' dosyasına gönderilmesini ve verilerin adres çubuğunda görünmemesini istemektedir. Aşağıdaki form tanımlarından hangisi bu isteği DOĞRU karşılar?",
        t: "mcq",
        o: [
            "<form target=\"islem.php\" send=\"hidden\">",
            "<form file=\"islem.php\" type=\"post\">",
            "<form action=\"islem.php\" method=\"get\">",
            "<form action=\"islem.php\" method=\"post\">",
            "<form src=\"islem.php\" hide=\"true\">"
        ],
        a: "<form action=\"islem.php\" method=\"post\">",
        difficulty: "medium",
        week: 5,
        topic: "Form Temelleri",
        importance: "high",
        explanation: "Slaytta method=\"get\" verileri URL’ye ekler, method=\"post\" ise verileri gizli (adres çubuğunda görünmeden) gönderir şeklinde anlatılır."
    },
    {
        q: "Bir formda 'Adınızı giriniz' şeklinde gri ipucu metni gösteren, kullanıcı tıklayınca içi boşalan tek satırlık metin kutusu hangi input türü ve hangi öznitelik ile oluşturulur?",
        t: "mcq",
        o: [
            "<input type=\"text\" title=\"Adınızı giriniz\">",
            "<input type=\"text\" placeholder=\"Adınızı giriniz\">",
            "<input type=\"label\" text=\"Adınızı giriniz\">",
            "<input type=\"hint\" value=\"Adınızı giriniz\">",
            "<input type=\"note\" message=\"Adınızı giriniz\">"
        ],
        a: "<input type=\"text\" placeholder=\"Adınızı giriniz\">",
        difficulty: "easy",
        week: 5,
        topic: "Input Metin Kutusu",
        importance: "medium",
        explanation: "Slaytta örnek olarak <input type=\"text\" name=\"ad\" placeholder=\"Adınızı giriniz\"> kullanılır; placeholder gri ipucu metnidir."
    },
    {
        q: "Bir anket formunda kullanıcılara birden fazla hobi seçme imkânı verilmek isteniyor (Örn: 'Müzik' ve 'Spor' aynı anda seçilebilsin). Aşağıdaki input elemanlarından hangisi bu ihtiyacı KARŞILAMAK için kullanılmalıdır?",
        t: "mcq",
        o: [
            "type=\"radio\"",
            "type=\"password\"",
            "type=\"checkbox\"",
            "type=\"submit\"",
            "type=\"file\""
        ],
        a: "type=\"checkbox\"",
        difficulty: "easy",
        week: 5,
        topic: "Checkbox ve Radio",
        importance: "high",
        explanation: "Slaytta örnek olarak hobiler checkbox ile verilmiştir; checkbox birden fazla seçime izin verir, radio ise aynı grupta tek seçime izin verir."
    },
    {
        q: "Bir kullanıcıya 'Cinsiyet' sorusunu sadece 'Erkek' veya 'Kadın' seçeneklerinden BİRİNİ seçtirecek form elemanını hazırlarken hangi input türü ve ortak özellik kullanılmalıdır?",
        t: "mcq",
        o: [
            "İki ayrı input: type=\"checkbox\" ve name değerleri farklı",
            "İki ayrı input: type=\"radio\" ve name değeri aynı",
            "İki ayrı input: type=\"text\" ve value değerleri farklı",
            "İki ayrı input: type=\"button\" ve onclick değerleri farklı",
            "Tek bir input: type=\"select\" ve multiple özelliği açık"
        ],
        a: "İki ayrı input: type=\"radio\" ve name değeri aynı",
        difficulty: "medium",
        week: 5,
        topic: "Radio Butonlar",
        importance: "high",
        explanation: "Slaytta cinsiyet örneğinde olduğu gibi radio butonlar aynı name değerini paylaşırsa kullanıcı aynı anda yalnızca birini seçebilir."
    },
    {
        q: "Uzun bir 'mesaj' alanı oluşturmak ve kullanıcının birden fazla satır yazabilmesini sağlamak için aşağıdaki form elemanlarından hangisi kullanılmalıdır?",
        t: "mcq",
        o: [
            "<input type=\"text\">",
            "<textarea> … </textarea>",
            "<input type=\"password\">",
            "<select> … </select>",
            "<label> … </label>"
        ],
        a: "<textarea> … </textarea>",
        difficulty: "easy",
        week: 5,
        topic: "Textarea",
        importance: "medium",
        explanation: "Slaytta 'Mesajınızı yazınız…' örneğinde çok satırlı metin girişi için <textarea name=\"mesaj\" rows=\"4\" cols=\"30\"> kullanılır."
    },

    // ===== HAFTA 6 – Gelişmiş Formlar ve Multimedya =====
    {
        q: "Bir üyelik formunda 'E-posta' alanı boş bırakılamasın ve kullanıcı '@' içermeyen geçersiz bir e-posta formatı yazdığında tarayıcı otomatik uyarı versin istenmektedir. HTML5 ile gelen hazır doğrulama özelliklerine göre aşağıdaki input tanımlarından hangisi bu ihtiyacı en iyi şekilde karşılar?",
        t: "mcq",
        o: [
            "<input type=\"text\" name=\"eposta\">",
            "<input type=\"email\" name=\"eposta\">",
            "<input type=\"email\" name=\"eposta\" required>",
            "<input type=\"mail\" name=\"eposta\" validate>",
            "<input type=\"text\" name=\"eposta\" maxlength=\"10\">"
        ],
        a: "<input type=\"email\" name=\"eposta\" required>",
        difficulty: "medium",
        week: 6,
        topic: "Form Doğrulama",
        importance: "high",
        explanation: "Slaytta HTML5 doğrulama örneklerinde type=\"email\" ile e-posta format kontrolü, required ile alanın boş bırakılamaması sağlanır."
    },
    {
        q: "Bir formda kullanıcıdan yaş bilgisi alınırken 18 ile 99 arasında bir değer girilmesi gerekmektedir. HTML5’in yerleşik özellikleri kullanılarak bu sınırlar yalnızca HTML ile konulmak istenmektedir. Aşağıdaki input tanımlarından hangisi slaytlarda verilen örnekle uyumludur?",
        t: "mcq",
        o: [
            "<input type=\"number\" name=\"yas\" min=\"18\" max=\"99\">",
            "<input type=\"text\" name=\"yas\" min=\"18\" max=\"99\">",
            "<input type=\"range\" name=\"yas\" value=\"18-99\">",
            "<input type=\"number\" name=\"yas\" limit=\"18-99\">",
            "<input type=\"number\" name=\"yas\" minlength=\"18\" maxlength=\"99\">"
        ],
        a: "<input type=\"number\" name=\"yas\" min=\"18\" max=\"99\">",
        difficulty: "medium",
        week: 6,
        topic: "Sayı Alanı Doğrulama",
        importance: "medium",
        explanation: "Slaytta HTML5 doğrulama örneklerinde 'type=\"number\"' ile birlikte min ve max öznitelikleri kullanılarak sayısal sınırlar belirlenir."
    },
    {
        q: "Bir formda kullanıcının özgeçmiş dosyasını (PDF veya Word) yükleyebilmesi için uygun giriş alanı eklenmek istenmektedir. Bu dosyanın sunucuya gönderilebilmesi için hem uygun input türü hem de form etiketinde uygun bir ayar gereklidir. Aşağıdakilerden hangisi bu ikiliyi DOĞRU şekilde bir araya getirmiştir?",
        t: "mcq",
        o: [
            "Formda enctype=\"text/plain\" kullanılmalı, input ise type=\"file\" olmalıdır.",
            "Formda enctype=\"multipart/form-data\" kullanılmalı, input ise type=\"file\" olmalıdır.",
            "Formda method=\"get\" kullanılmalı, input ise type=\"upload\" olmalıdır.",
            "Formda action=\"file.php\" kullanılmalı, input ise type=\"text\" olmalıdır.",
            "Formda charset=\"UTF-8\" kullanılmalı, input ise type=\"binary\" olmalıdır."
        ],
        a: "Formda enctype=\"multipart/form-data\" kullanılmalı, input ise type=\"file\" olmalıdır.",
        difficulty: "hard",
        week: 6,
        topic: "Dosya Yükleme",
        importance: "high",
        explanation: "6. hafta kapsamlı form örneğinde dosya yüklemek için input type=\"file\" kullanılır ve form etiketi enctype=\"multipart/form-data\" ayarıyla birlikte gösterilir."
    },
    {
        q: "Bir web sayfasında yerel bir video dosyası HTML5 video etiketi ile oynatılmak istenmektedir. Tarayıcının farklı formatları desteklemesine karşı, aynı video için birden fazla kaynak dosyası tanımlanacaktır. Aşağıdaki kod parçalarından hangisi bu durumu HTML5 STANDARTLARINA EN UYGUN şekilde göstermektedir?",
        t: "mcq",
        o: [
            "<video src=\"video.mp4\" src2=\"video.webm\">Video</video>",
            "<video controls><source file=\"video.mp4\"></video>",
            "<video controls><source src=\"video.mp4\" type=\"video/mp4\"><source src=\"video.webm\" type=\"video/webm\">Tarayıcınız videoyu desteklemiyor.</video>",
            "<video><source href=\"video.mp4\">Video</video>",
            "<video autoplay src=\"video.mp4\" type=\"video/mp4\">Video</video>"
        ],
        a: "<video controls><source src=\"video.mp4\" type=\"video/mp4\"><source src=\"video.webm\" type=\"video/webm\">Tarayıcınız videoyu desteklemiyor.</video>",
        difficulty: "hard",
        week: 6,
        topic: "Video ve Source Kullanımı",
        importance: "medium",
        explanation: "Notlarında video ekleme konusu geçerken <video> etiketi içinde birden fazla <source src=\"…\" type=\"…\"> tanımlanabileceği, tarayıcının desteklediği ilk formatı oynatacağı anlatılır."
    },
    {
        q: "Bir öğretmen, ders notu sunumunda YouTube’daki bir videoyu doğrudan sayfanın içinde, başka bir siteye gitmeden izletmek istemektedir. Bu amaçla YouTube’un verdiği gömme (embed) kodunu HTML sayfasına ekler. Bu işlemde kullanılan temel HTML etiketi aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<frame>",
            "<media>",
            "<iframe>",
            "<layer>",
            "<canvas>"
        ],
        a: "<iframe>",
        difficulty: "easy",
        week: 6,
        topic: "iframe Kullanımı",
        importance: "high",
        explanation: "Hem slaytlarda hem de Kodlar.pdf içinde 'sayfa içinde sayfa' mantığı için iframe örnekleri kullanılır; YouTube ve Google Maps gibi dış içerikler genellikle <iframe> ile gömülür."
    },
    {
        q: "Bir geliştirici, bir resim üzerinde farklı bölgelere farklı linkler vermek istemektedir. Örneğin bir Türkiye haritasında Ankara’ya tıklanınca 'ankara.html', İstanbul’a tıklanınca 'istanbul.html' açılmalıdır. Bu amaçla 'image map' tekniğini kullanacaktır. Aşağıdaki kombinasyonlardan hangisi bu tekniğin TEMEL yapı taşlarını doğru eşleştirir?",
        t: "mcq",
        o: [
            "<img> etiketi ve <area> etiketleri, ancak <map> etiketi kullanılmaz.",
            "<map> etiketi ve <area> etiketleri, ancak resim <img> ile değil <picture> ile gösterilir.",
            "<img usemap=\"…\"> ile resim, <map name=\"…\"> içinde <area shape=\"…\" coords=\"…\" href=\"…\"> ile tıklanabilir bölgeler tanımlanır.",
            "<canvas> üzerinde JavaScript ile alan çizmek zorunludur, HTML etiketleriyle yapılamaz.",
            "Sadece CSS ile background-image kullanılır, herhangi bir HTML etiketi gerekmez."
        ],
        a: "<img usemap=\"…\"> ile resim, <map name=\"…\"> içinde <area shape=\"…\" coords=\"…\" href=\"…\"> ile tıklanabilir bölgeler tanımlanır.",
        difficulty: "hard",
        week: 6,
        topic: "Image Map ve Koordinatlar",
        importance: "medium",
        explanation: "Notlarında 'image map’te koordinat öğrenilir ve o koordinata link eklenir' ifadesi geçer; bunun için <img usemap> ile <map>/<area> yapısı kullanılır."
    }
];
