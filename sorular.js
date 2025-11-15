// WEB TASARIMI / HTML 1–6 HAFTA VİZE SORU BANKASI
// 100 soru – HTML iskelet, etiketler, link, resim, tablo, liste, form, medya, iframe, entity

window.questionBank = [
    // ================== HAFTA 1 – WEB, İNTERNET, DOMAIN, HOSTING (15 SORU) ==================
    {
        q: "Bir web sitesinin internet üzerinden herkese açık olarak yayınlanabilmesi için aşağıdakilerden hangisi zorunludur?",
        t: "mcq",
        o: [
            "Domain ve hosting hizmeti",
            "Sadece metin editörü",
            "Sadece yazıcı",
            "Sadece antivirüs programı"
        ],
        a: "Domain ve hosting hizmeti",
        difficulty: "easy",
        week: 1,
        topic: "Genel Web",
        importance: "high",
        explanation: "Domain adres, hosting ise sitenin dosyalarının saklandığı sunucudur; ikisi olmadan site yayınlanamaz."
    },
    {
        q: "Aşağıdakilerden hangisi alan adına (domain) örnektir?",
        t: "mcq",
        o: [
            "bozok.edu.tr",
            "C:\\Users\\Anil\\masaustu",
            "192.168.1.1",
            "index.html"
        ],
        a: "bozok.edu.tr",
        difficulty: "easy",
        week: 1,
        topic: "Domain",
        importance: "high",
        explanation: "bozok.edu.tr gibi okunabilir adresler domain olarak adlandırılır."
    },
    {
        q: "Web hosting (barındırma) hizmeti en doğru şekilde nasıl tanımlanır?",
        t: "mcq",
        o: [
            "Web site dosyalarının internete bağlı bir sunucuda saklanması",
            "Bilgisayara antivirüs kurma işlemi",
            "Sadece domain satın alma işlemi",
            "PDF dosyası oluşturma"
        ],
        a: "Web site dosyalarının internete bağlı bir sunucuda saklanması",
        difficulty: "easy",
        week: 1,
        topic: "Hosting",
        importance: "high",
        explanation: "Hosting, sitenin dosyalarını 7/24 açık bir sunucuda tutma hizmetidir."
    },
    {
        q: "Aşağıdakilerden hangisi bir URL (Uniform Resource Locator) parçası DEĞİLDİR?",
        t: "mcq",
        o: [
            "Protokol (http, https)",
            "Alan adı (domain)",
            "Dosya yolu (path)",
            "RAM kapasitesi"
        ],
        a: "RAM kapasitesi",
        difficulty: "easy",
        week: 1,
        topic: "URL",
        importance: "medium",
        explanation: "RAM kapasitesi bilgisayar donanımıyla ilgilidir; URL yapısının parçası değildir."
    },
    {
        q: "Tarayıcı (browser) için aşağıdakilerden hangisi doğrudur?",
        t: "mcq",
        o: [
            "Web sayfalarını görüntülememizi sağlayan yazılımdır",
            "Sadece veritabanı yönetim sistemidir",
            "Yalnızca PDF düzenleyicisidir",
            "Sadece işletim sistemidir"
        ],
        a: "Web sayfalarını görüntülememizi sağlayan yazılımdır",
        difficulty: "easy",
        week: 1,
        topic: "Tarayıcı",
        importance: "high",
        explanation: "Chrome, Edge, Firefox gibi yazılımlar web tarayıcılarıdır."
    },
    {
        q: "Aşağıdakilerden hangisi istemci–sunucu (client–server) yapısında İSTEMCİYE örnektir?",
        t: "mcq",
        o: [
            "Kullanıcının bilgisayarındaki web tarayıcısı",
            "Veri merkezindeki web sunucusu",
            "Veritabanı sunucusu",
            "Router (yönlendirici) cihazı"
        ],
        a: "Kullanıcının bilgisayarındaki web tarayıcısı",
        difficulty: "easy",
        week: 1,
        topic: "Client–Server",
        importance: "medium",
        explanation: "İstemci, sunucudan hizmet isteyen taraftır; tarayıcı da istemcidir."
    },
    {
        q: "Bir öğrencinin kendi bilgisayarında .html dosyasını açıp sadece kendisinin görmesi aşağıdakilerden hangisi ile ifade edilir?",
        t: "mcq",
        o: [
            "Yerel (local) çalışma",
            "Hosting",
            "Domain alma",
            "DNS çözümleme"
        ],
        a: "Yerel (local) çalışma",
        difficulty: "easy",
        week: 1,
        topic: "Genel Web",
        importance: "medium",
        explanation: "Dosyayı sadece kendi bilgisayarında görüntülüyorsa henüz yayınlanmamıştır, local çalışmadır."
    },
    {
        q: "Aşağıdakilerden hangisi web projesi geliştirirken kullanılan basit metin editörlerine örnek verilebilir?",
        t: "mcq",
        o: [
            "Not Defteri (Notepad)",
            "Fotoğraf makinesi",
            "Yazıcı",
            "Tarayıcı (scanner)"
        ],
        a: "Not Defteri (Notepad)",
        difficulty: "easy",
        week: 1,
        topic: "Editör",
        importance: "medium",
        explanation: "HTML düz metin olduğundan Notepad gibi basit editörlerle yazılabilir."
    },
    {
        q: "Aşağıdaki uzantılardan hangisi tipik bir HTML dosya uzantısıdır?",
        t: "mcq",
        o: [
            ".html",
            ".exe",
            ".mp3",
            ".psd"
        ],
        a: ".html",
        difficulty: "easy",
        week: 1,
        topic: "HTML Giriş",
        importance: "high",
        explanation: "Web sayfaları genellikle .html uzantısıyla kaydedilir."
    },
    {
        q: "Bir web sayfasını açmak için tarayıcının adres çubuğuna yazdığımız ifade aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "URL",
            "CPU",
            "RAM",
            "ZIP"
        ],
        a: "URL",
        difficulty: "easy",
        week: 1,
        topic: "URL",
        importance: "medium",
        explanation: "Adres çubuğuna yazılan bağlantı URL olarak adlandırılır."
    },
    {
        q: "Aşağıdakilerden hangisi '.tr' uzantısı ile ilgili doğru bir ifadedir?",
        t: "mcq",
        o: [
            "Türkiye’ye ait ülke kodu üst seviye alan adıdır",
            "Sadece üniversitelere özeldir",
            "Sadece ticari firmalara verilir",
            "Sadece devlet kurumlarına verilir"
        ],
        a: "Türkiye’ye ait ülke kodu üst seviye alan adıdır",
        difficulty: "medium",
        week: 1,
        topic: "Domain",
        importance: "medium",
        explanation: ".tr ülke kodu ccTLD (country code top level domain) olarak Türkiye’yi gösterir."
    },
    {
        q: "Aşağıdakilerden hangisi iyi bir web sitesi için temel gereksinimlerden biri DEĞİLDİR?",
        t: "mcq",
        o: [
            "Kullanıcı dostu arayüz",
            "Anlaşılır içerik",
            "Uygun sunucu (hosting)",
            "Elektrik devresi çizimi"
        ],
        a: "Elektrik devresi çizimi",
        difficulty: "easy",
        week: 1,
        topic: "Genel Web",
        importance: "low",
        explanation: "Elektrik devresi çizimi web tasarımının doğrudan parçası değildir."
    },
    {
        q: "Kullanıcı ile web sitesi arasındaki iletişimde veri alışverişini sağlayan temel protokol aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "HTTP / HTTPS",
            "FTP",
            "SMTP",
            "POP3"
        ],
        a: "HTTP / HTTPS",
        difficulty: "medium",
        week: 1,
        topic: "Protokoller",
        importance: "medium",
        explanation: "Web sayfalarının taşınmasında HTTP/HTTPS protokolleri kullanılır."
    },
    {
        q: "HTTPS protokolündeki 'S' harfi neyi ifade eder?",
        t: "mcq",
        o: [
            "Secure (güvenli)",
            "Simple",
            "Static",
            "Server"
        ],
        a: "Secure (güvenli)",
        difficulty: "medium",
        week: 1,
        topic: "Güvenlik",
        importance: "medium",
        explanation: "HTTPS, şifreli ve güvenli bağlantı anlamına gelir."
    },
    {
        q: "Bir web projesine başlamadan önce gereksinimleri belirleme, amaç ve hedef kitleyi tanımlama aşaması aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Analiz aşaması",
            "Kodlama aşaması",
            "Bakım aşaması",
            "Yedekleme aşaması"
        ],
        a: "Analiz aşaması",
        difficulty: "medium",
        week: 1,
        topic: "Proje Süreci",
        importance: "medium",
        explanation: "Analiz aşamasında 'ne yapılacağı' netleştirilir."
    },

    // ================== HAFTA 2 – HTML İSKELET, HEAD/BODY, TEMEL ETİKETLER (20 SORU) ==================
    {
        q: "HTML kısaltmasının açılımı aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "Hyper Transfer Main Language"
        ],
        a: "Hyper Text Markup Language",
        difficulty: "easy",
        week: 2,
        topic: "HTML Temelleri",
        importance: "high",
        explanation: "HTML, web sayfalarını tanımlamak için kullanılan işaretleme dilidir."
    },
    {
        q: "Aşağıdakilerden hangisi geçerli bir HTML belge başlangıç bildirimi (doctype) örneğidir?",
        t: "mcq",
        o: [
            "<!DOCTYPE html>",
            "<DOCTYPE html>",
            "<html doctype>",
            "<!html>"
        ],
        a: "<!DOCTYPE html>",
        difficulty: "easy",
        week: 2,
        topic: "HTML Temelleri",
        importance: "high",
        explanation: "HTML5 belgelerinde en üstte <!DOCTYPE html> bildirimi kullanılır."
    },
    {
        q: "HTML belgesindeki tüm içeriği saran kök etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<html>",
            "<body>",
            "<head>",
            "<title>"
        ],
        a: "<html>",
        difficulty: "easy",
        week: 2,
        topic: "HTML Yapısı",
        importance: "high",
        explanation: "Tüm HTML belgesi <html> ... </html> etiket çifti içinde yer alır."
    },
    {
        q: "Kullanıcıya görünen içeriklerin yazıldığı bölüm aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<body> ... </body>",
            "<head> ... </head>",
            "<meta> ... </meta>",
            "<title> ... </title>"
        ],
        a: "<body> ... </body>",
        difficulty: "easy",
        week: 2,
        topic: "HTML Yapısı",
        importance: "high",
        explanation: "Body, sayfanın görünen kısmını temsil eder."
    },
    {
        q: "Sayfanın başlığını (tarayıcı sekmesinde görünen isim) belirleyen etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<title>",
            "<h1>",
            "<meta>",
            "<p>"
        ],
        a: "<title>",
        difficulty: "easy",
        week: 2,
        topic: "Head Bölümü",
        importance: "high",
        explanation: "<title> etiketi head bölümünde kullanılır ve sekme başlığını gösterir."
    },
    {
        q: "Bozok Üniversitesi web sayfasında kullanılan örnek kodda favicon (site ikonu) için hangi etiket kullanılmıştır?",
        t: "mcq",
        o: [
            "<link>",
            "<icon>",
            "<img>",
            "<meta>"
        ],
        a: "<link>",
        difficulty: "medium",
        week: 2,
        topic: "Head Bölümü",
        importance: "medium",
        explanation: "Favicon için genellikle <link rel=\"shortcut icon\" ...> kullanılır."
    },
    {
        q: "Türkçe karakterlerin (ç, ğ, ü) doğru görünmesi için kullanılan meta etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<meta charset=\"utf-8\">",
            "<meta language=\"tr\">",
            "<meta type=\"turkish\">",
            "<meta code=\"1254\">"
        ],
        a: "<meta charset=\"utf-8\">",
        difficulty: "easy",
        week: 2,
        topic: "Meta Etiketleri",
        importance: "high",
        explanation: "UTF-8 karakter seti Türkçe dahil pek çok dili destekler."
    },
    {
        q: "Mobil uyumlu (responsive) tasarım için kullanılan ve örnek kodda da geçen meta etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
            "<meta name=\"mobile\" content=\"yes\">",
            "<meta name=\"device\" content=\"phone\">",
            "<meta name=\"screen\" content=\"auto\">"
        ],
        a: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
        difficulty: "medium",
        week: 2,
        topic: "Meta Etiketleri",
        importance: "high",
        explanation: "Viewport etiketi, sayfanın cihaz genişliğine göre ölçeklenmesini sağlar."
    },
    {
        q: "Aşağıdakilerden hangisi HTML yorum satırı yazımına örnektir?",
        t: "mcq",
        o: [
            "<!--Yorum satırısajdaslkdjaslda-->",
            "// Bu bir yorum satırı",
            "/* Bu bir yorum satırı */",
            "# Bu bir yorum satırı"
        ],
        a: "<!--Yorum satırısajdaslkdjaslda-->",
        difficulty: "easy",
        week: 2,
        topic: "Yorum",
        importance: "high",
        explanation: "HTML’de yorumlar <!-- ... --> arasında yazılır."
    },
    {
        q: "Aşağıdakilerden hangisi HTML’de paragraf tanımlamak için kullanılır?",
        t: "mcq",
        o: [
            "<p>",
            "<para>",
            "<paragraph>",
            "<txt>"
        ],
        a: "<p>",
        difficulty: "easy",
        week: 2,
        topic: "Metin",
        importance: "high",
        explanation: "<p> ... </p> arasında kalan kısım paragraf olarak görüntülenir."
    },
    {
        q: "HTML’de yeni satıra geçmek için kullanılan tek satırlık etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<br>",
            "<nl>",
            "<newline>",
            "<hr>"
        ],
        a: "<br>",
        difficulty: "easy",
        week: 2,
        topic: "Metin",
        importance: "high",
        explanation: "<br> etiketi satır sonu (line break) oluşturur."
    },
    {
        q: "Başlık (heading) etiketleri ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "<h1> en büyük, <h6> en küçük başlığı temsil eder",
            "<h1> en küçük, <h6> en büyük başlığı temsil eder",
            "Sadece <h3> ve <h4> etiketleri vardır",
            "Başlık etiketlerinin kapatma etiketi yoktur"
        ],
        a: "<h1> en büyük, <h6> en küçük başlığı temsil eder",
        difficulty: "easy",
        week: 2,
        topic: "Heading",
        importance: "high",
        explanation: "HTML’de 6 seviye başlık vardır; h1 en üst seviyedir."
    },
    {
        q: "Örnek derste yer alan kodda “Anıl”, “Bozok”, “Yozgat” gibi kelimeleri farklı büyüklükte yazmak için hangi etiketler kullanılmıştır?",
        t: "mcq",
        o: [
            "<h1>–<h6>",
            "<p>",
            "<span>",
            "<strong>"
        ],
        a: "<h1>–<h6>",
        difficulty: "easy",
        week: 2,
        topic: "Heading",
        importance: "medium",
        explanation: "h1’den h6’ya kadar farklı büyüklükte başlıklar için kullanılmıştır."
    },
    {
        q: "HTML etiketleriyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        t: "mcq",
        o: [
            "Bazı etiketlerin açılış ve kapanış hali vardır",
            "Bazı etiketler (örneğin <br>) tek başına kullanılabilir",
            "Etiket isimleri büyük/küçük harf duyarlı değildir (HTML’de)",
            "Her etiketin mutlaka kapanış etiketi olmak zorundadır"
        ],
        a: "Her etiketin mutlaka kapanış etiketi olmak zorundadır",
        difficulty: "medium",
        week: 2,
        topic: "HTML Temelleri",
        importance: "medium",
        explanation: "br, img gibi boş etiketler tek başına kullanılabilir."
    },
    {
        q: "Aşağıdakilerden hangisi HTML’de 'attribute' (özellik) kullanımı için doğru bir örnektir?",
        t: "mcq",
        o: [
            "<a href=\"https://bozok.edu.tr/\">Bozok</a>",
            "<a(\"https://bozok.edu.tr\")>Bozok</a>",
            "<a:href=\"https://bozok.edu.tr\">Bozok</a>",
            "<a link=\"https://bozok.edu.tr\">Bozok</a>"
        ],
        a: "<a href=\"https://bozok.edu.tr/\">Bozok</a>",
        difficulty: "medium",
        week: 2,
        topic: "Attribute",
        importance: "high",
        explanation: "Attribute yazımı etiketAdı attribute=\"değer\" şeklindedir."
    },
    {
        q: "SEO açısından sayfanın kısa tanımının yazıldığı meta etiketi aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<meta name=\"description\" content=\"...\">",
            "<meta name=\"author\" content=\"...\">",
            "<meta name=\"keywords\" content=\"...\">",
            "<meta name=\"viewport\" content=\"...\">"
        ],
        a: "<meta name=\"description\" content=\"...\">",
        difficulty: "medium",
        week: 2,
        topic: "Meta Etiketleri",
        importance: "medium",
        explanation: "Description etiketi arama motorlarında görünen kısa açıklamayı içerir."
    },
    {
        q: "Sayfayı yazan kişi veya kurum bilgisini belirtmek için kullanılan meta etiketi aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<meta name=\"author\" content=\"Anıl Kuş\">",
            "<meta name=\"writer\" content=\"Anıl Kuş\">",
            "<meta name=\"owner\" content=\"Anıl Kuş\">",
            "<meta name=\"coder\" content=\"Anıl Kuş\">"
        ],
        a: "<meta name=\"author\" content=\"Anıl Kuş\">",
        difficulty: "easy",
        week: 2,
        topic: "Meta Etiketleri",
        importance: "medium",
        explanation: "author meta etiketi sayfa yazarını belirtmek için kullanılır."
    },
    {
        q: "HTML dosyasına bağlı harici bir CSS dosyasını eklemek için aşağıdaki etiketlerden hangisi kullanılır?",
        t: "mcq",
        o: [
            "<link rel=\"stylesheet\" href=\"style.css\">",
            "<meta rel=\"stylesheet\" href=\"style.css\">",
            "<css src=\"style.css\">",
            "<style src=\"style.css\">"
        ],
        a: "<link rel=\"stylesheet\" href=\"style.css\">",
        difficulty: "medium",
        week: 2,
        topic: "Head Bölümü",
        importance: "medium",
        explanation: "Harici stil dosyası <link> etiketiyle head kısmına eklenir."
    },
    {
        q: "HTML bir işaretleme dilidir; bunun anlamı aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Sayfanın yapısını ve içeriğin nasıl görüneceğini tanımlar",
            "Sadece matematiksel işlemleri hesaplar",
            "Veritabanı sorguları çalıştırır",
            "Sadece işletim sistemi kurar"
        ],
        a: "Sayfanın yapısını ve içeriğin nasıl görüneceğini tanımlar",
        difficulty: "easy",
        week: 2,
        topic: "HTML Temelleri",
        importance: "high",
        explanation: "HTML, programlama dili gibi akış kontrolü değil, yapı tanımı yapar."
    },

    // ================== HAFTA 3 – LİNKLER, RESİMLER, LİSTELER (20 SORU) ==================
    {
        q: "Temel bir hyperlink (bağlantı) oluşturmak için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<a>",
            "<link>",
            "<url>",
            "<href>"
        ],
        a: "<a>",
        difficulty: "easy",
        week: 3,
        topic: "Linkler",
        importance: "high",
        explanation: "Bağlantılar <a> ... </a> etiketi ile oluşturulur."
    },
    {
        q: "<a href=\"https://bozok.edu.tr/\">Buraya Tıkla</a> kodunda 'href' özelliği neyi belirtir?",
        t: "mcq",
        o: [
            "Bağlantının gideceği adresi",
            "Bağlantının rengini",
            "Bağlantının yazı tipini",
            "Bağlantının boyutunu"
        ],
        a: "Bağlantının gideceği adresi",
        difficulty: "easy",
        week: 3,
        topic: "Linkler",
        importance: "high",
        explanation: "href, 'hyper reference' anlamında, linkin hedef adresini belirtir."
    },
    {
        q: "<a href=\"https://www.youtube.com/\" target=\"_blank\">Youtube</a> kodunda 'target=\"_blank\"' ne anlama gelir?",
        t: "mcq",
        o: [
            "Bağlantıyı yeni sekmede açar",
            "Bağlantıyı hiç açmaz",
            "Bağlantıyı aynı sekmede açar",
            "Bağlantıyı gizler"
        ],
        a: "Bağlantıyı yeni sekmede açar",
        difficulty: "easy",
        week: 3,
        topic: "Linkler",
        importance: "high",
        explanation: "_blank yeni sekme/pencere anlamına gelir."
    },
    {
        q: "Bir resmi HTML sayfasına eklemek için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<img>",
            "<image>",
            "<pic>",
            "<photo>"
        ],
        a: "<img>",
        difficulty: "easy",
        week: 3,
        topic: "Resimler",
        importance: "high",
        explanation: "<img> etiketi resim eklemek için kullanılır."
    },
    {
        q: "<img src=\"img/yozgat.jpg\" alt=\"\"> kodunda 'src' özelliği neyi ifade eder?",
        t: "mcq",
        o: [
            "Resmin dosya yolunu",
            "Resmin boyutunu",
            "Resmin rengini",
            "Resmin sayfadaki hizalamasını"
        ],
        a: "Resmin dosya yolunu",
        difficulty: "easy",
        week: 3,
        topic: "Resimler",
        importance: "high",
        explanation: "src (source), resim dosyasının yolunu belirtir."
    },
    {
        q: "Bir resim için 'alt' (alternatif metin) özelliği neden önemlidir?",
        t: "mcq",
        o: [
            "Resim yüklenmezse açıklama metni göstermek ve erişilebilirliği artırmak için",
            "Resmi büyütmek için",
            "Resmi küçültmek için",
            "Resmi renklendirmek için"
        ],
        a: "Resim yüklenmezse açıklama metni göstermek ve erişilebilirliği artırmak için",
        difficulty: "medium",
        week: 3,
        topic: "Resimler",
        importance: "high",
        explanation: "Alt metin ekran okuyucular için de gereklidir, engelli kullanıcılar açısından önemlidir."
    },
    {
        q: "Bir resmi tıklanabilir link haline getirmek için aşağıdakilerden hangisi yapılır?",
        t: "mcq",
        o: [
            "<a> etiketinin içine <img> etiketi yerleştirilir",
            "<img> etiketinin içine <a> etiketi yerleştirilir",
            "Sadece style ile yapılır",
            "Mümkün değildir"
        ],
        a: "<a> etiketinin içine <img> etiketi yerleştirilir",
        difficulty: "medium",
        week: 3,
        topic: "Linkler & Resimler",
        importance: "high",
        explanation: "Örnek derste Youtube linki olarak resmin etrafına <a> etiketi sarılmıştır."
    },
    {
        q: "Sıralı (numaralı) liste oluşturmak için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<ol>",
            "<ul>",
            "<li>",
            "<dl>"
        ],
        a: "<ol>",
        difficulty: "easy",
        week: 3,
        topic: "Listeler",
        importance: "high",
        explanation: "ol = ordered list; numaralı listedir."
    },
    {
        q: "Sırasız (madde işaretli) liste oluşturmak için hangi etiket kullanılır?",
        t: "mcq",
        o: [
            "<ul>",
            "<ol>",
            "<li>",
            "<dt>"
        ],
        a: "<ul>",
        difficulty: "easy",
        week: 3,
        topic: "Listeler",
        importance: "high",
        explanation: "ul = unordered list; madde işaretlidir."
    },
    {
        q: "Liste elemanlarını temsil eden etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<li>",
            "<list>",
            "<item>",
            "<dt>"
        ],
        a: "<li>",
        difficulty: "easy",
        week: 3,
        topic: "Listeler",
        importance: "high",
        explanation: "<li> list item (liste elemanı) anlamına gelir."
    },
    {
        q: "<ol type=\"I\"> ... </ol> kodunda 'type=\"I\"' neyi değiştirir?",
        t: "mcq",
        o: [
            "Numaralandırma stilini (I, II, III gibi Roma rakamları)",
            "Liste rengini",
            "Liste hizalamasını",
            "Liste yüksekliğini"
        ],
        a: "Numaralandırma stilini (I, II, III gibi Roma rakamları)",
        difficulty: "medium",
        week: 3,
        topic: "Listeler",
        importance: "medium",
        explanation: "type özelliği numaralandırma türünü belirler."
    },
    {
        q: "Tanım listesi (definition list) için kullanılan etiketler hangi seçenekte doğru verilmiştir?",
        t: "mcq",
        o: [
            "<dl>, <dt>, <dd>",
            "<ul>, <li>, <dd>",
            "<ol>, <li>, <dt>",
            "<list>, <item>, <desc>"
        ],
        a: "<dl>, <dt>, <dd>",
        difficulty: "medium",
        week: 3,
        topic: "Listeler",
        importance: "medium",
        explanation: "dl: definition list, dt: terim, dd: açıklama."
    },
    {
        q: "Aşağıdakilerden hangisi HTML’de yatay çizgi (ayraç) oluşturmak için kullanılan etikettir?",
        t: "mcq",
        o: [
            "<hr>",
            "<line>",
            "<border>",
            "<div>"
        ],
        a: "<hr>",
        difficulty: "easy",
        week: 3,
        topic: "Metin",
        importance: "medium",
        explanation: "<hr> horizontal rule anlamında yatay çizgi çizer."
    },
    {
        q: "Metni kalın (bold) göstermek için anlamsal olarak daha doğru kabul edilen etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<strong>",
            "<bigger>",
            "<u>",
            "<mark>"
        ],
        a: "<strong>",
        difficulty: "medium",
        week: 3,
        topic: "Metin",
        importance: "medium",
        explanation: "<strong> hem kalın hem de içerik vurgulu anlamındadır."
    },
    {
        q: "Metni italik (eğik) vurgulu yazmak için tercih edilen etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<em>",
            "<i>",
            "<u>",
            "<sup>"
        ],
        a: "<em>",
        difficulty: "medium",
        week: 3,
        topic: "Metin",
        importance: "medium",
        explanation: "<em> emphasis (vurgu) anlamına gelir ve genelde italik görünür."
    },
    {
        q: "Bir paragraf içinde hem normal metin hem de satır sonu kırılması gerektiğinde hangi yapı doğrudur?",
        t: "mcq",
        o: [
            "<p>Ankara <br>Türkiyenin başkentidir..</p>",
            "<p>Ankara</p><br>Türkiyenin başkentidir..",
            "<p>Ankara</p><p><br>Türkiyenin başkentidir..</p>",
            "Ankara <break>Türkiyenin başkentidir..</break>"
        ],
        a: "<p>Ankara <br>Türkiyenin başkentidir..</p>",
        difficulty: "medium",
        week: 3,
        topic: "Metin",
        importance: "high",
        explanation: "Örnek derste de olduğu gibi br etiketi paragraf içinde satır kırmak için kullanılır."
    },
    {
        q: "Aşağıdakilerden hangisi e-posta linki oluşturmak için doğru kullanımdır?",
        t: "mcq",
        o: [
            "<a href=\"mailto:ornek@mail.com\">Mail Gönder</a>",
            "<a mail=\"ornek@mail.com\">Mail Gönder</a>",
            "<mail href=\"ornek@mail.com\">Mail Gönder</mail>",
            "<a href=\"mail:ornek@mail.com\">Mail Gönder</a>"
        ],
        a: "<a href=\"mailto:ornek@mail.com\">Mail Gönder</a>",
        difficulty: "medium",
        week: 3,
        topic: "Linkler",
        importance: "medium",
        explanation: "mailto: şeması e-posta istemcisini açmak için kullanılır."
    },
    {
        q: "Bir HTML sayfasında aynı sayfa içinde belli bir başlığa atlamak için aşağıdakilerden hangisi kullanılır?",
        t: "mcq",
        o: [
            "Hedef elemana id verilip <a href=\"#idAdi\"> bağlantısı oluşturulur",
            "<a href=\"top\"> kullanılır",
            "Sadece <br> etiketi kullanılır",
            "Sadece <p> etiketi kullanılır"
        ],
        a: "Hedef elemana id verilip <a href=\"#idAdi\"> bağlantısı oluşturulur",
        difficulty: "medium",
        week: 3,
        topic: "Linkler",
        importance: "medium",
        explanation: "id değeri #idAdi ile adreslenerek sayfa içi linkleme yapılır."
    },

    // ================== HAFTA 4 – TABLOLAR, IMAGE MAP, IFRAME, MEDYA (15 SORU) ==================
    {
        q: "HTML’de tablo oluşturmak için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<table>",
            "<tab>",
            "<grid>",
            "<layout>"
        ],
        a: "<table>",
        difficulty: "easy",
        week: 4,
        topic: "Tablolar",
        importance: "high",
        explanation: "<table> etiketi tabloyu tanımlar."
    },
    {
        q: "Tabloda satır (row) tanımlamak için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<tr>",
            "<td>",
            "<th>",
            "<row>"
        ],
        a: "<tr>",
        difficulty: "easy",
        week: 4,
        topic: "Tablolar",
        importance: "high",
        explanation: "tr = table row; tablo satırını temsil eder."
    },
    {
        q: "Tabloda veri hücresi (normal hücre) tanımlamak için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<td>",
            "<tr>",
            "<th>",
            "<cell>"
        ],
        a: "<td>",
        difficulty: "easy",
        week: 4,
        topic: "Tablolar",
        importance: "high",
        explanation: "td = table data; veri hücresi için kullanılır."
    },
    {
        q: "Tablo başlık hücresi (başlık satırındaki hücreler) için kullanılan etiket hangisidir?",
        t: "mcq",
        o: [
            "<th>",
            "<thead>",
            "<caption>",
            "<header>"
        ],
        a: "<th>",
        difficulty: "easy",
        week: 4,
        topic: "Tablolar",
        importance: "high",
        explanation: "th = table header; tablo başlık hücresidir."
    },
    {
        q: "<table border=\"1\"> ifadesi ne işe yarar?",
        t: "mcq",
        o: [
            "Tablo hücrelerine kenarlık çizgisi ekler",
            "Tablo sütun sayısını belirler",
            "Tabloyu sayfanın ortasına alır",
            "Tabloyu gizler"
        ],
        a: "Tablo hücrelerine kenarlık çizgisi ekler",
        difficulty: "easy",
        week: 4,
        topic: "Tablolar",
        importance: "medium",
        explanation: "border özniteliği tablo çevresine çerçeve ekler (modern HTML’de CSS önerilir)."
    },
    {
        q: "<th colspan=\"3\">Ders Programı</th> kodunda 'colspan=\"3\"' ne anlama gelir?",
        t: "mcq",
        o: [
            "Hücrenin yatayda üç sütunu birleştirmesi",
            "Hücrenin dikeyde üç satırı birleştirmesi",
            "Hücrenin üç kez tekrar etmesi",
            "Hücrenin gizlenmesi"
        ],
        a: "Hücrenin yatayda üç sütunu birleştirmesi",
        difficulty: "medium",
        week: 4,
        topic: "Tablolar",
        importance: "medium",
        explanation: "colspan sütun (column) birleştirmek için kullanılır."
    },
    {
        q: "Tabloda bir hücrenin alt alta birden fazla satırı kaplaması için kullanılan özellik aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "rowspan",
            "colspan",
            "rowmerge",
            "colmerge"
        ],
        a: "rowspan",
        difficulty: "medium",
        week: 4,
        topic: "Tablolar",
        importance: "medium",
        explanation: "rowspan satırları (row) dikey yönde birleştirir."
    },
    {
        q: "Bir tabloya başlık/isim vermek için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<caption>",
            "<title>",
            "<legend>",
            "<header>"
        ],
        a: "<caption>",
        difficulty: "medium",
        week: 4,
        topic: "Tablolar",
        importance: "low",
        explanation: "<caption> tablo üstüne kısa başlık ekler."
    },
    {
        q: "Örnek kodda 'Günler', 'Takımlar', 'Üniversiteler' gibi hücrelerin bulunduğu satır hangi etiket ile oluşturulmuştur?",
        t: "mcq",
        o: [
            "<tr> içinde <th> hücreleri",
            "<tr> içinde <td> hücreleri",
            "<thead> içinde <td> hücreleri",
            "<header> içinde <th> hücreleri"
        ],
        a: "<tr> içinde <th> hücreleri",
        difficulty: "medium",
        week: 4,
        topic: "Tablolar",
        importance: "medium",
        explanation: "Başlık satırlarında genelde th kullanılır."
    },
    {
        q: "<img src=\"img/foto.jpg\" usemap=\"#anil\"> ifadesinde 'usemap=\"#anil\"' ne anlama gelir?",
        t: "mcq",
        o: [
            "Resmin tıklanabilir bölgelerini tanımlayan haritayı (map) kullanır",
            "Resmi arka plana taşır",
            "Resmi şeffaf yapar",
            "Resmi döndürür"
        ],
        a: "Resmin tıklanabilir bölgelerini tanımlayan haritayı (map) kullanır",
        difficulty: "medium",
        week: 4,
        topic: "Image Map",
        importance: "high",
        explanation: "usemap özelliği resmin hangi map ile ilişkilendirileceğini belirtir."
    },
    {
        q: "<map name=\"anil\"> ... </map> içinde kullanılan <area> etiketi aşağıdakilerden hangisi için kullanılır?",
        t: "mcq",
        o: [
            "Resim üzerinde tıklanabilir bölgeler tanımlamak",
            "Resmi sayfadan silmek",
            "Resmi arka plana atmak",
            "Resmi gri yapmak"
        ],
        a: "Resim üzerinde tıklanabilir bölgeler tanımlamak",
        difficulty: "medium",
        week: 4,
        topic: "Image Map",
        importance: "high",
        explanation: "area etiketleri ile dikdörtgen, daire gibi tıklanabilir alanlar tanımlanır."
    },
    {
        q: "Bir web sayfasının içinde başka bir web sayfasını gömmek (embed) için kullanılan HTML etiketi aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<iframe>",
            "<frame>",
            "<img>",
            "<embedpage>"
        ],
        a: "<iframe>",
        difficulty: "easy",
        week: 4,
        topic: "Iframe",
        importance: "high",
        explanation: "<iframe> ile başka bir sayfa içeriği, harita veya video gömülebilir."
    },
    {
        q: "Örnek kodda 'Bozok' web sitesini sayfa içine getiren iframe etiketinde hangi özellikler kullanılmıştır?",
        t: "mcq",
        o: [
            "src, height, width, title",
            "href, height, width",
            "src, border, alt",
            "href, charset, title"
        ],
        a: "src, height, width, title",
        difficulty: "medium",
        week: 4,
        topic: "Iframe",
        importance: "medium",
        explanation: "iframe src, boyutlar ve erişilebilirlik için title ile tanımlanır."
    },
    {
        q: "Video dosyasını HTML sayfasına eklemek için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<video>",
            "<movie>",
            "<play>",
            "<media>"
        ],
        a: "<video>",
        difficulty: "easy",
        week: 4,
        topic: "Medya",
        importance: "high",
        explanation: "<video> etiketi video oynatmak için kullanılır."
    },

    // ================== HAFTA 5 – FORMLAR, INPUT TÜRLERİ, LABEL, SELECT (15 SORU) ==================
    {
        q: "HTML’de kullanıcıdan veri almak için kullanılan form yapısı hangi etiketle başlar?",
        t: "mcq",
        o: [
            "<form>",
            "<input>",
            "<label>",
            "<textarea>"
        ],
        a: "<form>",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "Tüm form elemanları <form> ... </form> bloğu içinde toplanır."
    },
    {
        q: "Bir formun sunucuya gönderileceği adresi belirten özellik aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "action",
            "method",
            "type",
            "name"
        ],
        a: "action",
        difficulty: "medium",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "action özelliği formun gönderileceği URL’yi belirtir."
    },
    {
        q: "Formun gönderim türünü (GET/POST) belirleyen özellik aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "method",
            "action",
            "target",
            "enctype"
        ],
        a: "method",
        difficulty: "medium",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "method=\"GET\" veya method=\"POST\" şeklinde kullanılır."
    },
    {
        q: "Kullanıcıdan tek satırlı metin almak için kullanılan input türü aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<input type=\"text\">",
            "<input type=\"button\">",
            "<input type=\"checkbox\">",
            "<input type=\"radio\">"
        ],
        a: "<input type=\"text\">",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "type=\"text\" klasik metin giriş alanıdır."
    },
    {
        q: "Şifre alanı (girilen karakterleri nokta/çizgi şeklinde gizleyen alan) için kullanılan input türü aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<input type=\"password\">",
            "<input type=\"secret\">",
            "<input type=\"text\">",
            "<input type=\"hidden\">"
        ],
        a: "<input type=\"password\">",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "Örnek kodda 'Şifre:' alanı type=\"password\" olarak kullanılmıştır."
    },
    {
        q: "Kullanıcıdan çok satırlı metin almak için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<textarea>",
            "<textbox>",
            "<multitext>",
            "<p>"
        ],
        a: "<textarea>",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "textarea satır ve sütun sayısı ile çok satırlı metin alanı sağlar."
    },
    {
        q: "Radio butonları için aşağıdakilerden hangisi DOĞRU ifadedir?",
        t: "mcq",
        o: [
            "Aynı 'name' değerine sahip radio butonlardan aynı anda yalnızca biri seçilebilir",
            "Bir formda radio buton kullanmak yasaktır",
            "Radio butonlar her zaman çoklu seçim içindir",
            "Radio butonların 'value' özelliği olamaz"
        ],
        a: "Aynı 'name' değerine sahip radio butonlardan aynı anda yalnızca biri seçilebilir",
        difficulty: "medium",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "Aynı grup ismine sahip radio butonlar tek seçimli seçenekler oluşturur."
    },
    {
        q: "Checkbox ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        t: "mcq",
        o: [
            "Birden fazla seçeneğin aynı anda işaretlenmesine izin verir",
            "Sadece tek bir seçeneğin seçilmesine izin verir",
            "Formu gönderir",
            "Sadece sayıyı artırır"
        ],
        a: "Birden fazla seçeneğin aynı anda işaretlenmesine izin verir",
        difficulty: "medium",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "Checkbox kutuları çoklu seçim için kullanılır."
    },
    {
        q: "Form üzerinde 'Gönder' butonu oluşturmak için en uygun seçenek aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<input type=\"submit\">",
            "<input type=\"button\">",
            "<input type=\"reset\">",
            "<button type=\"clear\">"
        ],
        a: "<input type=\"submit\">",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "Submit butonu formun sunucuya gönderilmesini sağlar."
    },
    {
        q: "Formdaki tüm alanları varsayılan değerlerine döndürmek için kullanılan buton türü aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<input type=\"reset\">",
            "<input type=\"submit\">",
            "<input type=\"clear\">",
            "<input type=\"default\">"
        ],
        a: "<input type=\"reset\">",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "medium",
        explanation: "Reset butonu tüm alanları sıfırlar."
    },
    {
        q: "Örnek formda 'Email:' alanı için hangi input türü kullanılmıştır?",
        t: "mcq",
        o: [
            "<input type=\"email\">",
            "<input type=\"text\">",
            "<input type=\"mail\">",
            "<input type=\"url\">"
        ],
        a: "<input type=\"email\">",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "medium",
        explanation: "type=\"email\" temel düzeyde e-posta formatı kontrolü yapar."
    },
    {
        q: "Kullanıcıdan sadece sayı (integer) girişi almak için kullanılan input türü aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<input type=\"number\">",
            "<input type=\"digit\">",
            "<input type=\"int\">",
            "<input type=\"count\">"
        ],
        a: "<input type=\"number\">",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "medium",
        explanation: "type=\"number\" sayısal giriş için uygundur."
    },
    {
        q: "Bir label etiketini ilgili input ile ilişkilendirmek için aşağıdaki yapıdan hangisi doğrudur?",
        t: "mcq",
        o: [
            "<label for=\"ad\">Adınız:</label> <input id=\"ad\" type=\"text\">",
            "<label id=\"ad\">Adınız:</label> <input for=\"ad\" type=\"text\">",
            "<label name=\"ad\">Adınız:</label> <input id=\"ad\" type=\"text\">",
            "<label>Adınız:</label id=\"ad\"> <input type=\"text\">"
        ],
        a: "<label for=\"ad\">Adınız:</label> <input id=\"ad\" type=\"text\">",
        difficulty: "medium",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "for özelliği, label’i aynı id’ye sahip input ile bağlar."
    },
    {
        q: "Aşağıdakilerden hangisi açılır liste (dropdown) oluşturmak için kullanılan temel etiket çiftidir?",
        t: "mcq",
        o: [
            "<select> ... </select>",
            "<list> ... </list>",
            "<option> ... </option>",
            "<dropdown> ... </dropdown>"
        ],
        a: "<select> ... </select>",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "high",
        explanation: "select etiketi içinde option etiketleri kullanılarak dropdown oluşturulur."
    },
    {
        q: "Bir select içinde varsayılan olarak seçili gelmesini istediğimiz seçenek için hangi attribute kullanılır?",
        t: "mcq",
        o: [
            "selected",
            "checked",
            "default",
            "choice"
        ],
        a: "selected",
        difficulty: "easy",
        week: 5,
        topic: "Formlar",
        importance: "medium",
        explanation: "<option value=\"saab\" selected>Galatasaray</option> gibi."
    },

    // ================== HAFTA 6 – AUDIO/VIDEO, YOUTUBE & MAP IFRAME, HTML ENTITIES (15 SORU) ==================
    {
        q: "Bir ses dosyasını HTML sayfasına eklemek için kullanılan etiket aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "<audio>",
            "<sound>",
            "<music>",
            "<voice>"
        ],
        a: "<audio>",
        difficulty: "easy",
        week: 6,
        topic: "Medya",
        importance: "high",
        explanation: "Örnek kodda mp3 dosyası <audio> etiketiyle oynatılmıştır."
    },
    {
        q: "<audio controls> ... </audio> ifadesinde 'controls' ne işe yarar?",
        t: "mcq",
        o: [
            "Oynatma, durdurma gibi kontrol butonlarını gösterir",
            "Sesi tamamen kapatır",
            "Dosyayı indirir",
            "Sesi ters çalar"
        ],
        a: "Oynatma, durdurma gibi kontrol butonlarını gösterir",
        difficulty: "easy",
        week: 6,
        topic: "Medya",
        importance: "high",
        explanation: "controls attribute’u kullanıcıya oynatma arayüzü sağlar."
    },
    {
        q: "<source src=\"img/a.mp4\" type=\"video/mp4\"> satırındaki 'type' özelliği neyi belirtir?",
        t: "mcq",
        o: [
            "Dosyanın MIME türünü",
            "Dosyanın boyutunu",
            "Dosyanın adını",
            "Dosyanın indirilme hızını"
        ],
        a: "Dosyanın MIME türünü",
        difficulty: "medium",
        week: 6,
        topic: "Medya",
        importance: "medium",
        explanation: "Tarayıcı, type bilgisine bakarak dosyayı destekleyip desteklemediğini anlar."
    },
    {
        q: "YouTube videosunu sayfaya gömmek için hangi etiket ve hangi özellik kullanılmıştır?",
        t: "mcq",
        o: [
            "<iframe src=\"https://www.youtube.com/embed/...\">",
            "<video src=\"https://www.youtube.com/watch?...\">",
            "<embed src=\"https://www.youtube.com/watch?...\">",
            "<img src=\"https://www.youtube.com/embed/...\">"
        ],
        a: "<iframe src=\"https://www.youtube.com/embed/...\">",
        difficulty: "medium",
        week: 6,
        topic: "Iframe",
        importance: "high",
        explanation: "YouTube embed kodu iframe ile sağlanır."
    },
    {
        q: "Google Maps haritasını HTML sayfasına yerleştirmek için kullanılan çözüm aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Google Maps’in verdiği iframe kodunu kullanmak",
            "<map> etiketine direkt koordinat yazmak",
            "<img> etiketiyle ekran görüntüsü koymak",
            "Sadece <a> etiketi kullanmak"
        ],
        a: "Google Maps’in verdiği iframe kodunu kullanmak",
        difficulty: "medium",
        week: 6,
        topic: "Iframe",
        importance: "high",
        explanation: "Örnek kodda da Google Maps embed için iframe kullanılmıştır."
    },
    {
        q: "HTML entity ile ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Özel karakterleri (&, <, >, € gibi) kodla gösterme yöntemidir",
            "Sadece resim eklemek için kullanılır",
            "Sadece CSS için geçerlidir",
            "Sadece JavaScript için geçerlidir"
        ],
        a: "Özel karakterleri (&, <, >, € gibi) kodla gösterme yöntemidir",
        difficulty: "medium",
        week: 6,
        topic: "Entities",
        importance: "high",
        explanation: "Entity’ler tarayıcının özel anlam verdiği karakterleri doğru göstermek için kullanılır."
    },
    {
        q: "Örnek kodda Euro simgesini göstermek için kullanılan entity aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "&euro;",
            "&e;",
            "&europe;",
            "&euro-sign;"
        ],
        a: "&euro;",
        difficulty: "easy",
        week: 6,
        topic: "Entities",
        importance: "high",
        explanation: "Metinde 'I will display &euro;' örneği kullanılmıştır."
    },
    {
        q: "Euro işaretini ondalık (decimal) kodla göstermek için kullanılan ifade aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "&#8364;",
            "&#320AC;",
            "&#20;",
            "&8364;"
        ],
        a: "&#8364;",
        difficulty: "medium",
        week: 6,
        topic: "Entities",
        importance: "medium",
        explanation: "&#8364; Euro karakterinin decimal Unicode karşılığıdır."
    },
    {
        q: "Euro işaretini onaltılık (hex) kodla göstermek için kullanılan ifade aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "&#x20AC;",
            "&x20AC;",
            "&#20AC;",
            "&20AC;"
        ],
        a: "&#x20AC;",
        difficulty: "medium",
        week: 6,
        topic: "Entities",
        importance: "medium",
        explanation: "Örnek kodda 'I will display &#x20AC;' satırı kullanılmıştır."
    },
    {
        q: "<h2>&#128514;</h2> satırında gösterilen ifade ile ilgili aşağıdakilerden hangisi doğrudur?",
        t: "mcq",
        o: [
            "Unicode emoji kodu ile gülen yüz ifadesi gösterilmiştir",
            "Sadece yazı tipi boyutu ayarlanmıştır",
            "HTML hatası oluşturur",
            "Sadece boş satır ekler"
        ],
        a: "Unicode emoji kodu ile gülen yüz ifadesi gösterilmiştir",
        difficulty: "easy",
        week: 6,
        topic: "Emoji",
        importance: "medium",
        explanation: "128514 kodu '😂' emojisine karşılık gelir."
    },
    {
        q: "Bir iframe etiketinde 'width' ve 'height' özellikleri neyi belirler?",
        t: "mcq",
        o: [
            "Gösterilecek çerçevenin genişliği ve yüksekliğini",
            "Çerçevenin kenarlık kalınlığını",
            "Sayfanın toplam boyutunu",
            "Sayfanın arka plan rengini"
        ],
        a: "Gösterilecek çerçevenin genişliği ve yüksekliğini",
        difficulty: "easy",
        week: 6,
        topic: "Iframe",
        importance: "medium",
        explanation: "iframe içine gömülen içeriğin görüneceği alan boyutları width/height ile ayarlanır."
    },
    {
        q: "Video etiketi ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?",
        t: "mcq",
        o: [
            "controls ile oynatma butonları gösterilebilir",
            "width ve height ile boyut verilebilir",
            "src özelliği ile kaynak verilir, source etiketi gerekmez",
            "Birden fazla source etiketi eklenerek farklı format desteği sağlanabilir"
        ],
        a: "src özelliği ile kaynak verilir, source etiketi gerekmez",
        difficulty: "medium",
        week: 6,
        topic: "Medya",
        importance: "medium",
        explanation: "video etiketinde doğrudan src kullanılabilir ama birden fazla format için source etiketi tercih edilir."
    },
    {
        q: "HTML5 ile birlikte gelen ve medya etiketlerinde sık kullanılan 'controls' attribute’u aşağıdakilerden hangisi için KULLANILMAZ?",
        t: "mcq",
        o: [
            "<img>",
            "<audio>",
            "<video>",
            "Hepsi için kullanılır"
        ],
        a: "<img>",
        difficulty: "medium",
        week: 6,
        topic: "Medya",
        importance: "medium",
        explanation: "controls sadece oynatılabilir medya (audio/video) etiketleri için geçerlidir; img’de kullanılmaz."
    }
];
