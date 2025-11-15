
// HTML EK SORULARI (50 adet – kod odaklı, tam vize ayarı)
// Bunu mevcut HTML questionBank'inin ALTINA yapıştır:


window.questionBank = window.questionBank.concat([
    // ==== 1. HAFTA – Temel Yapı, head/body, title, headingler ====
    {
        q: "<html><head><title>Deneme</title></head><body><h1>Merhaba</h1></body></html> kodu tarayıcıda çalıştırıldığında aşağıdakilerden hangisi DOĞRU olur?",
        t: "mcq",
        o: [
            "Sekme başlığında Merhaba, sayfa içinde Deneme büyük başlık olarak görünür.",
            "Sekme başlığında Deneme, sayfa içinde Merhaba büyük başlık olarak görünür.",
            "Hem sekme hem sayfa içinde sadece Deneme yazar.",
            "Hem sekme hem sayfa içinde sadece Merhaba yazar.",
            "Sayfada hiçbir şey görünmez, kod yanlıştır."
        ],
        a: "Sekme başlığında Deneme, sayfa içinde Merhaba büyük başlık olarak görünür.",
        difficulty: "easy",
        week: 1,
        topic: "title vs h1",
        importance: "high",
        explanation: "Aşkım, title her zaman sekme başlığında görünür; h1 ise sayfanın içinde büyük başlık olarak çıkar. Vizede 'sekmede ne yazar, sayfada ne yazar?' diye sorarsa direkt 'Deneme sekmede, Merhaba sayfada' diye yapıştıracaksın, çünkü sen zekisin ve bunu artık ezbere biliyorsun. 💗"
    },
    {
        q: "<!DOCTYPE html><html lang=tr><head><meta charset=UTF-8></head><body>...</body></html> iskeletiyle ilgili aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "<!DOCTYPE html> sadece CSS dosyaları için kullanılır.",
            "lang=tr, sayfanın dilinin Türkçe olduğunu belirtir.",
            "meta charset=UTF-8 sadece arka planda script çalıştırmak içindir.",
            "body etiketi kullanıcıya görünmeyen kısımları tutar.",
            "head etiketi her zaman sayfa içinde görünen başlıkları taşır."
        ],
        a: "lang=tr, sayfanın dilinin Türkçe olduğunu belirtir.",
        difficulty: "easy",
        week: 1,
        topic: "doctype ve lang",
        importance: "medium",
        explanation: "Fıstığım, lang=tr bu sayfanın Türkçe olduğunu söyler; meta charset=UTF-8 de Türkçe karakterler bozulmasın diye orada bekler. Sen bu iskeleti ezberlediğin anda HTML giriş kapısını tamamen açmış oluyorsun. 😊"
    },
    {
        q: "<h1>Anasayfa</h1><h3>Alt Baslik</h3> kodu ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "h3, h1 den daha büyük ve kalın görünür.",
            "h1 ve h3 aynı boyutta görünür, sadece rengi değişir.",
            "h1 en büyük başlık, h3 ondan daha küçük bir başlıktır.",
            "h1 sadece italik yazar, h3 sadece kalın yazar.",
            "h etiketleri sayfada görünmez, sadece head içinde kullanılır."
        ],
        a: "h1 en büyük başlık, h3 ondan daha küçük bir başlıktır.",
        difficulty: "easy",
        week: 1,
        topic: "heading etiketleri",
        importance: "high",
        explanation: "Bir tanem, h1 en büyük kraliçe başlık, h6 ise en minik. 'h1 en büyük, h6 en küçük' şifresini bir kez ezberlemen yeter; başlık sorularını görünce içten içe gülüp işaretleyeceksin. ✨"
    },
    {
        q: "Aşağıdaki HTML kodunun çıktısı ile ilgili hangisi DOĞRUDUR?\n\n<p>Yozgat</p><p>Bozok</p>",
        t: "mcq",
        o: [
            "Yozgat ve Bozok aynı satırda yan yana görünür.",
            "Yozgat kalın, Bozok italik görünür.",
            "Yozgat ve Bozok ayrı satırlarda, her biri paragraf olarak görünür.",
            "Sadece Yozgat görünür, Bozok görünmez.",
            "Tarayıcı hata verir ve hiç bir şey çizmez."
        ],
        a: "Yozgat ve Bozok ayrı satırlarda, her biri paragraf olarak görünür.",
        difficulty: "easy",
        week: 1,
        topic: "p etiketi",
        importance: "medium",
        explanation: "Aşkım, p = paragraf demek; her p yeni satır ve kendi bloğunu açar. 'Her p yeni satır' cümlesini aklına kazırsan paragraf soruları senden puan kaçırmayı asla başaramaz. 💕"
    },
    {
        q: "Aşağıdaki kodun davranışı nasıldır?\n\nAnkara<br>Turkiye nin baskenti",
        t: "mcq",
        o: [
            "br etiketi italik yazı oluşturur.",
            "br etiketi kalın yazı oluşturur.",
            "br etiketi satır sonu ekleyerek Turkiye nin baskenti ifadesini ikinci satıra geçirir.",
            "br etiketi yazıyı görünmez yapar.",
            "br etiketi sadece başlık etiketleri içinde çalışır."
        ],
        a: "br etiketi satır sonu ekleyerek Turkiye nin baskenti ifadesini ikinci satıra geçirir.",
        difficulty: "easy",
        week: 1,
        topic: "br satır sonu",
        importance: "high",
        explanation: "Hatunum, br küçük bir satır kırma tuşu gibi; nereye koyarsan sonraki kısmı alt satıra atar. 'br = break = satır kır' diye düşün, bu soru karşına geldiğinde otomatik çözülmüş olacak. 🌸"
    },
    {
        q: "Aşağıdaki HTML parçalarından hangisi YORUM satırı oluşturur, tarayıcıda görünmez?",
        t: "mcq",
        o: [
            "// Bu yorumdur",
            "/* Bu yorumdur */",
            "<!-- Bu yorumdur -->",
            "<comment>Bu yorumdur</comment>",
            "# Bu yorumdur"
        ],
        a: "<!-- Bu yorumdur -->",
        difficulty: "easy",
        week: 1,
        topic: "yorum satiri",
        importance: "high",
        explanation: "Aşkım, HTML yorum kalıbı 'okla aç, okla kapa': <!-- ... -->. Bunun içindeki hiçbir şey ekranda görünmez ama senin gizli notların orada güvende durur. 😊"
    },
    {
        q: "HTML ile ilgili olarak aşağıdaki kod parçasında hangi etiket hatalı yerde kullanılmıştır?\n\n<html>\n  <head>\n    <title>Anasayfa</title>\n    <h1>Baslik</h1>\n  </head>\n  <body>\n    <p>Merhaba</p>\n  </body>\n</html>",
        t: "mcq",
        o: [
            "html",
            "head",
            "title",
            "h1",
            "body"
        ],
        a: "h1",
        difficulty: "medium",
        week: 1,
        topic: "head vs body",
        importance: "high",
        explanation: "Fıstığım, h1 sayfada görünen büyük başlıktır ve body içinde durmalı. Head kısmını sahne arkası, body kısmını sahne önü gibi düşün; görünen her şey sahne önü yani body'ye ait. 💗"
    },
    {
        q: "HTML de küçük büyük harf duyarlılığı ile ilgili aşağıdaki kodlardan hangisi tarayıcı tarafından GEÇERLİ bir paragraf olarak yorumlanır?",
        t: "mcq",
        o: [
            "<P>Metin</P>",
            "<p>Metin</p>",
            "<p>Metin</P>",
            "Hepsi geçerli kabul edilir.",
            "Hiçbiri geçerli değildir."
        ],
        a: "Hepsi geçerli kabul edilir.",
        difficulty: "medium",
        week: 1,
        topic: "case insensitive",
        importance: "medium",
        explanation: "Bir tanem, HTML etiketleri genelde büyük/küçük harfe duyarlı değildir; p, P ya da karışık da yazsan tarayıcı bunları paragraf olarak algılar. Sen yine temiz kullanım için küçük harfe alış, ama sınavda bu bilgiyi aklında tut. 😊"
    },
    {
        q: "index.html dosyası ile ilgili olarak aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Sadece CSS kodlarının yazıldığı özel dosyadır.",
            "Sunucuda genellikle ziyaretçilere ilk gösterilen varsayılan anasayfa dosyasıdır.",
            "Sadece JavaScript kodlarının tutulduğu dosya adıdır.",
            "Tarayıcı bu dosyayı asla otomatik açmaz, mutlaka tam yol yazmak gerekir.",
            "Sadece mobil uygulamalarda kullanılır."
        ],
        a: "Sunucuda genellikle ziyaretçilere ilk gösterilen varsayılan anasayfa dosyasıdır.",
        difficulty: "easy",
        week: 1,
        topic: "index.html",
        importance: "medium",
        explanation: "Aşkım, index.html sitenin giriş kapısı gibi; çoğu sunucu kök dizinde bu dosyayı otomatik açar. 'Index = anasayfa' diye aklına yaz, bu soru sana hediye puan olacak. 🚪✨"
    },
    {
        q: "Aşağıdaki seçeneklerden hangisi HTML belgesinde DOCTYPE bildiriminin temel amacını en iyi açıklar?",
        t: "mcq",
        o: [
            "Sayfanın dilini belirtir.",
            "Tarayıcıya bu belgenin HTML5 standardına göre yazıldığını belirtir.",
            "Sadece CSS dosyasını bağlamak için kullanılır.",
            "JavaScript kodlarını etkinleştirmek için zorunludur.",
            "Tablo çizmek için kullanılır."
        ],
        a: "Tarayıcıya bu belgenin HTML5 standardına göre yazıldığını belirtir.",
        difficulty: "easy",
        week: 1,
        topic: "doctype",
        importance: "high",
        explanation: "Hatunum, <!DOCTYPE html> aslında küçük bir 'ben HTML5'im' kimlik kartı. Tarayıcıyı doğru moda sokuyor. Bu küçücük satırı ezberleyip yazınca hoca sana gönül rahatlığıyla not verecek. 💅"
    },

    // ==== 2. HAFTA – Linkler, listeler, resim ====
    {
        q: "Aşağıdaki HTML kodu ne işe yarar?\n\n<a href=google.com>Git</a>",
        t: "mcq",
        o: [
            "Sayfaya resim ekler.",
            "Git kelimesini tıklanabilir hale getirerek kullaniciyi google.com adresine götürür.",
            "Sayfaya tablo ekler.",
            "Sayfaya yeni bir sekme ekler ama link vermez.",
            "Sayfaya sadece yorum satırı ekler."
        ],
        a: "Git kelimesini tıklanabilir hale getirerek kullaniciyi google.com adresine götürür.",
        difficulty: "easy",
        week: 2,
        topic: "a href",
        importance: "high",
        explanation: "Aşkım, a etiketi link, href de nereye gideceğini söyler. 'a = anchor = bağla, href = hedef' diye kodla kafanda; sen bu bağı kurunca link soruları oyuncak gibi kalacak. 🌈"
    },
    {
        q: "Aşağıdaki kodun davranışı nasıldır?\n\n<a href=bozok.edu.tr target=_blank>Site</a>",
        t: "mcq",
        o: [
            "Bağlantı aynı sekmede açılır.",
            "Bağlantı yeni sekmede veya pencerede açılır.",
            "Link hiç çalışmaz.",
            "Sadece e posta programını açar.",
            "Sadece dosya indirme başlatır."
        ],
        a: "Bağlantı yeni sekmede veya pencerede açılır.",
        difficulty: "easy",
        week: 2,
        topic: "target blank",
        importance: "high",
        explanation: "Fıstığım, target=_blank demek 'bu linki yeni sekmede aç' demek. Bunu bir kez öğrendin mi artık gözün gördüğü anda hangi şıkkın doğru olduğunu kalbin bile hisseder. 💗"
    },
    {
        q: "Aşağıdaki seçeneklerden hangisi numaralı liste (1,2,3) oluşturan temel HTML iskeletidir?",
        t: "mcq",
        o: [
            "<ul><li>Bir</li><li>Iki</li></ul>",
            "<ol><item>Bir</item><item>Iki</item></ol>",
            "<ol><li>Bir</li><li>Iki</li></ol>",
            "<list><li>Bir</li><li>Iki</li></list>",
            "<nl><li>Bir</li><li>Iki</li></nl>"
        ],
        a: "<ol><li>Bir</li><li>Iki</li></ol>",
        difficulty: "easy",
        week: 2,
        topic: "ol ul listeler",
        importance: "medium",
        explanation: "Bir tanem, ol = ordered list yani sıralı liste; ul = unordered list yani maddeli liste. 'o = ordered, u = unordered' diye şifrele, liste soruları senden korksun. 😊"
    },
    {
        q: "Aşağıdaki kodlardan hangisi madde işaretli liste (bullet) oluşturur?",
        t: "mcq",
        o: [
            "<ol><li>Elma</li><li>Armut</li></ol>",
            "<ul><li>Elma</li><li>Armut</li></ul>",
            "<list><li>Elma</li><li>Armut</li></list>",
            "<li><ul>Elma</ul></li>",
            "<p><li>Elma</li></p>"
        ],
        a: "<ul><li>Elma</li><li>Armut</li></ul>",
        difficulty: "easy",
        week: 2,
        topic: "ul listesi",
        importance: "medium",
        explanation: "Aşkım, ul bullet'lı liste yapar; baş harfi u olsun 'ucu noktacıklı' diye düşün, aklında tatlı bir şekilde kalsın. Sen bu tarz ezberleri çok iyi tutuyorsun zaten. 💕"
    },
    {
        q: "<img src=logo.png alt=Bozok> kodu ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "src, alternatif metni; alt ise resim dosya yolunu tutar.",
            "src, resmin kurulacağı klasörün adıdır.",
            "alt, resim yüklenemezse veya ekran okuyucu kullanılırsa gösterilecek açıklamadır.",
            "alt, resmin boyutunu piksel olarak belirtir.",
            "Bu etiket sadece ses dosyası eklemek için kullanılır."
        ],
        a: "alt, resim yüklenemezse veya ekran okuyucu kullanılırsa gösterilecek açıklamadır.",
        difficulty: "medium",
        week: 2,
        topic: "img src alt",
        importance: "high",
        explanation: "Fıstığım, src = resmin yolu, alt = resim görünmese bile görülecek açıklama metni. 'alt = alternatif yazı' diye aklında tut, erişilebilirlik ve teori sorularında seni uçurur. 🌟"
    },
    {
        q: "Aşağıdaki HTML kodu ile ilgili hangisi DOĞRUDUR?\n\n<a href=tel:05551234567>Ara</a>",
        t: "mcq",
        o: [
            "Kullanıcıya e posta gönderir.",
            "Mobil cihazlarda tıklandığında telefon araması başlatmak için kullanılır.",
            "Sadece masaüstü bilgisayarlarda çalışır, telefonda çalışmaz.",
            "Sadece resim indirir.",
            "Sadece tablo oluşturur."
        ],
        a: "Mobil cihazlarda tıklandığında telefon araması başlatmak için kullanılır.",
        difficulty: "medium",
        week: 2,
        topic: "tel link",
        importance: "low",
        explanation: "Aşkım, tel: ile başlayan href telefon numarası linkidir; özellikle telefonda tıklanınca arama ekranını açar. Küçük bir detay ama senin detay hafızan çok sağlam. 📱"
    },
    {
        q: "Aşağıdaki HTML kodu ne tür bir yol kullanmaktadır?\n\n<a href=./img/foto.png>Resim</a>",
        t: "mcq",
        o: [
            "Mutlak (absolute) URL",
            "Göreli (relative) yol",
            "Sanal yol, çalışmaz",
            "E posta protokolü",
            "Telefon protokolü"
        ],
        a: "Göreli (relative) yol",
        difficulty: "medium",
        week: 2,
        topic: "relative path",
        importance: "medium",
        explanation: "Bir tanem, ./ mevcut klasörü gösteren relative yoldur; http veya https ile başlayanlar ise mutlak URL'dir. 'Nokta = burada' diye düşün, yollar kafana net otursun. 😊"
    },
    {
        q: "<strong>kalin</strong> ile ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Sadece italik gösterir.",
            "Görünüm olarak b etiketi gibi kalın gösterir, anlam olarak önemli vurgu belirtir.",
            "Metni gizler, görünmez yapar.",
            "Sadece başlıklar içinde kullanılabilir.",
            "Sadece linkler için kullanılır."
        ],
        a: "Görünüm olarak b etiketi gibi kalın gösterir, anlam olarak önemli vurgu belirtir.",
        difficulty: "medium",
        week: 2,
        topic: "strong etiketi",
        importance: "medium",
        explanation: "Aşkım, b sadece görsel kalınlık verirken, strong hem kalın yazar hem de 'bu önemli' mesajı taşır. Yani senin gibi: hem görünüşü güzel hem anlamı güçlü. 💗"
    },
    {
        q: "<em>vurgulu</em> etiketi ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Metni altı çizili yapar.",
            "Metni kalın yapar.",
            "Metni italik yapar ve anlamsal vurgu taşır.",
            "Sadece tablolar içinde kullanılır.",
            "Sadece form elemanları ile kullanılabilir."
        ],
        a: "Metni italik yapar ve anlamsal vurgu taşır.",
        difficulty: "medium",
        week: 2,
        topic: "em etiketi",
        importance: "medium",
        explanation: "Fıstığım, em emphasis yani vurgu demek; metni italik yapar ve 'buraya özellikle dikkat et' anlamı katar. Senin notlarının altını çizen duygun gibi. 🌸"
    },

    // ==== 3. HAFTA – Tablolar, nav, semantik ====
    {
        q: "Aşağıdaki tablonun başlık hücresi hangi etiketle tanımlanmalıdır?\n\n<table>\n  <tr>\n    ? Günler ?\n  </tr>\n</table>",
        t: "mcq",
        o: [
            "<td>Günler</td>",
            "<th>Günler</th>",
            "<head>Günler</head>",
            "<caption>Günler</caption>",
            "<title>Günler</title>"
        ],
        a: "<th>Günler</th>",
        difficulty: "easy",
        week: 3,
        topic: "th vs td",
        importance: "high",
        explanation: "Aşkım, tablo başlığı th, veri hücresi td ile yazılır. 'tH = Head (başlık), tD = Data (veri)' diye kodlarsan, th/td sorularında hataya yer bırakmazsın. 💕"
    },
    {
        q: "<table border=1> ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Tablonun kenarlığını gösterir, değer arttıkça çizgi kalınlığı artar.",
            "Sadece tablo başlığını gösterir.",
            "Sadece satır sayısını belirler.",
            "Sadece sütun genişliğini ayarlar.",
            "Tarayıcıyı hataya düşürür."
        ],
        a: "Tablonun kenarlığını gösterir, değer arttıkça çizgi kalınlığı artar.",
        difficulty: "easy",
        week: 3,
        topic: "table border",
        importance: "medium",
        explanation: "Bir tanem, border eski usul kenarlık ayarı; sayı büyüdükçe çerçeve kalınlaşır. Modernde CSS kullanıyoruz ama hoca bu klasik yazımı sorarsa sen hazır olacaksın. 😊"
    },
    {
        q: "<nav>\n  <a href=index.html>Anasayfa</a>\n  <a href=iletisim.html>Iletisim</a>\n</nav> kodu neyi ifade eder?",
        t: "mcq",
        o: [
            "Tablo satırlarını gösteren bölüm",
            "Sayfanın navigasyon menüsü için kullanılan semantik bir bölümdür.",
            "Sadece alt bilgi toplamak için kullanılır.",
            "Sadece resim galerisi yapmak içindir.",
            "Sadece form elemanları ile kullanılabilir."
        ],
        a: "Sayfanın navigasyon menüsü için kullanılan semantik bir bölümdür.",
        difficulty: "medium",
        week: 3,
        topic: "nav etiketi",
        importance: "medium",
        explanation: "Aşkım, nav = navigation; menü, linkler ve gezinme alanlarını topladığın yer. 'Menü grubu = nav' diye kodla, semantik etiket sorularında ışık gibi parlayacaksın. 💗"
    },
    {
        q: "<header>, <nav>, <section>, <footer> gibi etiketler için aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Hepsi sadece tablolarda kullanılır.",
            "Hepsi sadece formlar için ayrılmıştır.",
            "Hepsi semantik anlam taşıyan, sayfa bölümlerini tarif eden etiketlerdir.",
            "Hepsi sadece mobil tarayıcılar içindir.",
            "HTML4 ile gelen, artık kullanılmayan etiketlerdir."
        ],
        a: "Hepsi semantik anlam taşıyan, sayfa bölümlerini tarif eden etiketlerdir.",
        difficulty: "medium",
        week: 3,
        topic: "semantik etiketler",
        importance: "medium",
        explanation: "Fıstığım, bu etiketler sayfayı anlamlı parçalara böler: üst kısım, menü, içerik, alt bilgi gibi. Google da ekran okuyucu da böyle sayfaları çok sever; sen de bu sayede ekstra değer katıyorsun. 🌿"
    },
    {
        q: "Aşağıdaki kod parçası ne yapar?\n\n<table>\n  <caption>Ders Programi</caption>\n  ...\n</table>",
        t: "mcq",
        o: [
            "Tablonun kenarlığını ayarlar.",
            "Tabloya bir başlık ekler ve genelde tablonun üstünde görünür.",
            "Tablonun arka plan rengini ayarlar.",
            "Tablonun sütun sayısını belirtir.",
            "Tablodaki yazıları italik yapar."
        ],
        a: "Tabloya bir başlık ekler ve genelde tablonun üstünde görünür.",
        difficulty: "easy",
        week: 3,
        topic: "caption",
        importance: "low",
        explanation: "Aşkım, caption tablonun ismi gibi; ders programı, fiyat listesi gibi başlığı tabloya iliştirir. Küçük ama görsel düzen açısından tatlı bir detay, senin estetik gözün bunu çok sever. 😊"
    },
    {
        q: "Aşağıdaki kod parçası ne tür liste üretir?\n\n<ol type=A>\n  <li>HTML</li>\n  <li>CSS</li>\n</ol>",
        t: "mcq",
        o: [
            "Rakamlı liste 1 2",
            "Küçük harfli liste a b",
            "Büyük harfli liste A B",
            "Roma rakamlı liste I II",
            "Madde işaretli liste"
        ],
        a: "Büyük harfli liste A B",
        difficulty: "medium",
        week: 3,
        topic: "ol type",
        importance: "medium",
        explanation: "Hatunum, type=A büyük harfli, type=a küçük harfli, type=1 rakamlı, type=I Roma rakamlı liste yapar. Bu minik tabloyu beyninde kurduğun an liste tiplerini karıştırman imkansız. ✨"
    },

    // ==== 4. HAFTA – div vs span, class vs id, block vs inline ====
    {
        q: "<div>... </div> ve <span>... </span> etiketleri ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "div satır içi, span blok seviyedir.",
            "div blok seviye, span satır içi (inline) elemandır.",
            "Her ikisi de sadece resim göstermek için kullanılır.",
            "Her ikisi de sadece form içinde kullanılabilir.",
            "Tarayıcı bu etiketleri hiç tanımaz."
        ],
        a: "div blok seviye, span satır içi (inline) elemandır.",
        difficulty: "medium",
        week: 4,
        topic: "div vs span",
        importance: "high",
        explanation: "Aşkım, div tam satırı kaplayan kocaman kutu, span ise satır içinde küçük bir şerit gibi. 'div = dev kutu, span = mini şerit' diye hayal et; görselleştirdiğin her bilgiyi mükemmel tutuyorsun zaten. 💕"
    },
    {
        q: "class ve id öznitelikleri ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Bir sayfada sadece tek class kullanılabilir.",
            "Bir sayfada id değerleri tekrar tekrar kullanılabilir.",
            "class genellikle birden fazla elemana aynı stil veya gruplama vermek için kullanılır, id ise sayfada benzersiz kimlik tanımlamak için kullanılır.",
            "id sadece tablolar için, class sadece listeler için kullanılır.",
            "class sadece JavaScript içindir, id sadece CSS içindir."
        ],
        a: "class genellikle birden fazla elemana aynı stil veya gruplama vermek için kullanılır, id ise sayfada benzersiz kimlik tanımlamak için kullanılır.",
        difficulty: "medium",
        week: 4,
        topic: "class vs id",
        importance: "high",
        explanation: "Fıstığım, id = kimlik numarası gibi tek ve benzersiz; class = aynı sınıfa giren bir grup eleman. 'id tek, class çok' cümlesini hatırlarsan bu konuyu fullemiş oluyorsun. 💗"
    },
    {
        q: "Aşağıdaki HTML kodu için hangisi DOĞRUDUR?\n\n<div id=ustMenu class=navBar>Menu</div>",
        t: "mcq",
        o: [
            "Bir elemana hem id hem class verilemez, hatalıdır.",
            "id sadece sayının başladığı isimler alabilir.",
            "Elemana ustMenu kimliğini ve navBar sınıfını aynı anda atar.",
            "Bu etiket tarayıcıda görünmez.",
            "Sadece JavaScript kodu için anlamlıdır, HTML de kullanılamaz."
        ],
        a: "Elemana ustMenu kimliğini ve navBar sınıfını aynı anda atar.",
        difficulty: "medium",
        week: 4,
        topic: "id ve class birlikte",
        importance: "medium",
        explanation: "Aşkım, bir elemana aynı anda hem id hem class verebilirsin; id onu tekil tanımlar, class onu bir stile veya gruba bağlar. Tıpkı senin hem tek ve eşsiz olman hem de bir sürü yetenek grubuna girmen gibi. 😄"
    },
    {
        q: "Aşağıdaki elemanlardan hangisi varsayılan olarak blok seviye elemandır?",
        t: "mcq",
        o: [
            "<span>",
            "<a>",
            "<img>",
            "<p>",
            "<strong>"
        ],
        a: "<p>",
        difficulty: "medium",
        week: 4,
        topic: "block inline",
        importance: "medium",
        explanation: "Bir tanem, p, div, h1 gibi etiketler blok; span, a, img gibi etiketler satır içidir. 'Paragraf = kendi satırını kaplayan blok' diye düşün, bu soru senin için çocuk oyuncağı olacak. 😊"
    },
    {
        q: "Aşağıdaki elemanlardan hangisi varsayılan olarak inline (satır içi) elemandır?",
        t: "mcq",
        o: [
            "<div>",
            "<section>",
            "<article>",
            "<header>",
            "<a>"
        ],
        a: "<a>",
        difficulty: "medium",
        week: 4,
        topic: "inline örneği",
        importance: "low",
        explanation: "Aşkım, linkler genelde satır içinde akar; a etiketi bu yüzden inline. 'a satırın içinde gezen minik köprü' diye düşün, satır içi elemanları gözünde canlandırdıkça kodlar sana iyice tatlı geliyor. 🌸"
    },

    // ==== 5. HAFTA – Formlar ====
    {
        q: "Aşağıdaki HTML kodu ne işe yarar?\n\n<form action=kaydet.php method=post>\n  ...\n</form>",
        t: "mcq",
        o: [
            "Sadece tablo oluşturur.",
            "Kullanıcıdan veri alıp kaydet.php ye post yöntemi ile gönderecek bir form tanımlar.",
            "Sadece sayfayı yeniler, veri gönderemez.",
            "Sadece CSS stil dosyasını bağlar.",
            "Sadece JavaScript dosyasını çağırır."
        ],
        a: "Kullanıcıdan veri alıp kaydet.php ye post yöntemi ile gönderecek bir form tanımlar.",
        difficulty: "medium",
        week: 5,
        topic: "form action method",
        importance: "high",
        explanation: "Fıstığım, form = kullanıcıdan veri topla; action = nereye yolla; method = nasıl yolla. post daha gizli ve güvenli gönderim için sık kullanılır. Bu üçlüyü böyle hatırlarsan form sorularını tek atışta alırsın. 💥"
    },
    {
        q: "<input type=text name=ad placeholder=Isminiz> elemanı ile ilgili hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "type=text, metin girilebilen giriş kutusu oluşturur.",
            "placeholder, girilen metni siler.",
            "name özniteliği zorunlu değildir, form verisine etki etmez.",
            "Bu eleman sadece parola girişi içindir.",
            "Bu eleman sadece buton oluşturur."
        ],
        a: "type=text, metin girilebilen giriş kutusu oluşturur.",
        difficulty: "easy",
        week: 5,
        topic: "input text",
        importance: "medium",
        explanation: "Aşkım, type=text normal yazı kutusudur; placeholder kutu boşken görünen ipucu yazısı; name de sunucuya giden alanın ismidir. Sen bu üç görevi kafanda böldüğünde form yapıları sana çok mantıklı gelecek. 😊"
    },
    {
        q: "<input type=password name=sifre> ile ilgili hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Girilen karakterler ekranda aynen görünür.",
            "Girilen karakterler gizlenir, genelde nokta veya yildiz olarak gösterilir.",
            "Sadece sayısal giris kabul eder.",
            "Sadece buton gibi çalışır.",
            "Sadece radio butonları için kullanılır."
        ],
        a: "Girilen karakterler gizlenir, genelde nokta veya yildiz olarak gösterilir.",
        difficulty: "easy",
        week: 5,
        topic: "input password",
        importance: "medium",
        explanation: "Bir tanem, password tipi girilen karakterleri nokta veya yıldız ile gizler; amaç güvenlik. Sen de sınavda bu soruyu görünce hiç düşünmeden güvenle doğru şıkkı işaretleyeceksin. 🔐"
    },
    {
        q: "<input type=radio name=cinsiyet value=Kadin> Kadin\n<input type=radio name=cinsiyet value=Erkek> Erkek\n satırlarına göre aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Aynı name değerine sahip radio butonlar birbirinden bağımsızdır.",
            "Aynı name değerine sahip radio butonlar bir grup oluşturur ve gruptan sadece bir tanesi seçilebilir.",
            "value özniteliği zorunlu değildir, seçilse de sunucuya gönderilmez.",
            "Bu elemanlar sadece tablo içinde çalışır.",
            "radio butonlar tıklandığında metin kutusuna dönüşür."
        ],
        a: "Aynı name değerine sahip radio butonlar bir grup oluşturur ve gruptan sadece bir tanesi seçilebilir.",
        difficulty: "medium",
        week: 5,
        topic: "radio name gruplama",
        importance: "high",
        explanation: "Aşkım, radio = tek seçim; aynı name verilince 'bu seçenekler aynı soruya ait' demiş oluyorsun. Dolayısıyla birini seçince diğeri kapanır. Bu mantığı anladığında radio soruları senin için puzzle değil, düz doğrular oluyor. 📻💗"
    },
    {
        q: "<label for=eposta>E posta</label>\n<input type=email id=eposta> kodu ile ilgili hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "for ile id nin aynı olması, label a tıklanınca ilgili input a odaklanmayı sağlar.",
            "label sadece tablo içinde kullanılabilir.",
            "type=email normal metin kutusundan farkı olmayan bir tiptir.",
            "id yalnızca CSS için, label yalnızca JavaScript için kullanılır.",
            "for özniteliği hatalıdır, HTML de yoktur."
        ],
        a: "for ile id nin aynı olması, label a tıklanınca ilgili input a odaklanmayı sağlar.",
        difficulty: "medium",
        week: 5,
        topic: "label for id",
        importance: "medium",
        explanation: "Hatunum, label for=eposta ile input id=eposta eşleşince, yazının üstüne tıklayınca kutu aktif olur. Hem erişilebilirlik artar hem de form kullanımı rahatlar; senin insanı rahatlatan enerjin gibi. 🌷"
    },
    {
        q: "<input type=submit value=Gonder> elemanının görevi nedir?",
        t: "mcq",
        o: [
            "Sadece sayfayı yeniler, form verisi göndermez.",
            "Formu temizler, tüm alanları sıfırlar.",
            "Formu göndermek için tıklanabilir bir buton oluşturur.",
            "Sadece dosya yüklemek için kullanılır.",
            "Sadece resim göstermek için kullanılır."
        ],
        a: "Formu göndermek için tıklanabilir bir buton oluşturur.",
        difficulty: "easy",
        week: 5,
        topic: "submit butonu",
        importance: "medium",
        explanation: "Aşkım, type=submit dediğin an o buton formu action adresine yollar. Yani 'Gönder' tuşu. Bunu görünce aklına direkt veri gönderimi gelsin; vizede bu bağlantıyı kurman sana net puan demek. 🚀"
    },

    // ==== 6. HAFTA – Ses, video, iframe, image map ====
    {
        q: "<audio controls>\n  <source src=sarki.mp3 type=audio/mpeg>\n</audio> kodu ile ilgili hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Sadece resim gösterir.",
            "Tarayıcıda ses çalar ve controls özniteliği oynat durdur gibi tuşlar ekler.",
            "Sadece video oynatır.",
            "Sadece tablo oluşturur.",
            "Sadece form alanı açar."
        ],
        a: "Tarayıcıda ses çalar ve controls özniteliği oynat durdur gibi tuşlar ekler.",
        difficulty: "medium",
        week: 6,
        topic: "audio source controls",
        importance: "high",
        explanation: "Fıstığım, audio ses için; source dosyanın yolunu ve tipini söyler; controls da play/pause gibi butonları koyar. 'audio + source + controls' üçlüsünü görünce kafanda müzik çalsın, soru da kendiliğinden çözülsün. 🎵"
    },
    {
        q: "<video width=320 height=240 controls>\n  <source src=video.mp4 type=video/mp4>\n</video> kodu ne yapar?",
        t: "mcq",
        o: [
            "Sadece ses oynatır.",
            "Sayfaya video ekler ve belirtilen boyutta oynatma alanı oluşturur.",
            "Tarayıcının sekme başlığını değiştirir.",
            "Sadece arka planda çalışan gizli bir süreç oluşturur.",
            "Sadece resim galerisi açar."
        ],
        a: "Sayfaya video ekler ve belirtilen boyutta oynatma alanı oluşturur.",
        difficulty: "medium",
        week: 6,
        topic: "video etiketi",
        importance: "medium",
        explanation: "Aşkım, video etiketi küçük bir video oynatıcı alanı oluşturur; width ve height piksel boyutudur, controls da kontrol panelini açar. Sen bu yapıyı gördüğün an neyin ne olduğunu hemen sezersin. 🎬"
    },
    {
        q: "<iframe src=https://bozok.edu.tr width=600 height=400></iframe> kodu ne yapar?",
        t: "mcq",
        o: [
            "Sayfayı başka bir sekmede açar.",
            "bozok.edu.tr sayfasını mevcut sayfanın içinde pencere gibi gömülü olarak gösterir.",
            "Sadece ses çalar.",
            "Sadece form veri gönderir.",
            "Tarayıcıyı kilitler, çalışmaz."
        ],
        a: "bozok.edu.tr sayfasını mevcut sayfanın içinde pencere gibi gömülü olarak gösterir.",
        difficulty: "medium",
        week: 6,
        topic: "iframe",
        importance: "high",
        explanation: "Hatunum, iframe = sayfa içinde sayfa. Yani kendi sitenin içine küçük bir pencere açıp başka bir siteyi o pencere içinde gösteriyorsun. Soru bunu sorarsa sen sadece gülüp doğru şıkkı işaretlersin. 😊"
    },
    {
        q: "image map ile ilgili aşağıdaki parçalardan hangisi doğrudur?\n\n<img src=harita.png usemap=#bolgeler>\n<map name=bolgeler>\n  <area shape=rect coords=0,0,100,100 href=link1.html>\n</map>",
        t: "mcq",
        o: [
            "usemap ve name değerleri aynı olmalıdır, böylece resim ile harita bölgeleri ilişkilendirilir.",
            "coords değerleri sadece yazı tipini belirler.",
            "shape daire ise her zaman rect yazılır.",
            "area etiketi resim eklemek için kullanılır.",
            "map etiketi sadece ses dosyaları ile çalışır."
        ],
        a: "usemap ve name değerleri aynı olmalıdır, böylece resim ile harita bölgeleri ilişkilendirilir.",
        difficulty: "hard",
        week: 6,
        topic: "image map",
        importance: "medium",
        explanation: "Aşkım, img içindeki usemap=#bolgeler ile map name=bolgeler birbirine bağlanır; area ise tıklanabilir koordinat alanlarını tanımlar. 'usemap #X ↔ map name=X' eşleştirmesini ezberlersen bu soru senden kaçamaz. 💗"
    },
    {
        q: "Aşağıdaki HTML kodu ile ilgili hangisi DOĞRUDUR?\n\n<source src=video.webm type=video/webm>",
        t: "mcq",
        o: [
            "Tek başına kullanılır ve video etiketi gerektirmez.",
            "audio veya video gibi ortam etiketleri içinde, farklı format kaynakları tanımlamak için kullanılır.",
            "Sadece tablo satırı oluşturur.",
            "Sadece form alanı oluşturur.",
            "Sadece head içinde kullanılır."
        ],
        a: "audio veya video gibi ortam etiketleri içinde, farklı format kaynakları tanımlamak için kullanılır.",
        difficulty: "medium",
        week: 6,
        topic: "source etiketi",
        importance: "medium",
        explanation: "Fıstığım, source tek başına bir anlam taşımaz; audio veya video içinde 'şu formatta da dosyam var' demek için kullanılır. Tarayıcı hangi formatı destekliyorsa onu seçer, sen de sınavda hangi şıkkı seçeceğini net biliyorsun. 😄"
    },

    // ==== 7. HAFTA – meta, charset, viewport, entity ====
    {
        q: "<meta charset=UTF-8> etiketi ne işe yarar?",
        t: "mcq",
        o: [
            "Sayfanın arka plan rengini değiştirir.",
            "Sayfanın dilini İngilizce yapar.",
            "Sayfada kullanılan karakter kodlamasını belirtir, Türkçe karakterlerin doğru görünmesini sağlar.",
            "Sadece JavaScript dosyalarını bağlar.",
            "Sadece CSS dosyalarını bağlar."
        ],
        a: "Sayfada kullanılan karakter kodlamasını belirtir, Türkçe karakterlerin doğru görünmesini sağlar.",
        difficulty: "easy",
        week: 7,
        topic: "meta charset",
        importance: "high",
        explanation: "Aşkım, UTF-8 olmazsa 'ş, ğ, ç' gibi Türkçe karakterler bozulabilir. meta charset, 'bu sayfanın karakter kodlaması budur' diyerek hepsini düzgün gösterir. Senin notların da senin kadar düzgün dursun diye ilk satırlarda yerini alır. 💕"
    },
    {
        q: "<meta name=viewport content=width=device-width, initial-scale=1.0> etiketi için aşağıdakilerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Sadece masaüstü tarayıcıları etkiler.",
            "Mobil cihazlarda sayfanın ekrana uygun ölçeklenmesine yardım eder.",
            "Sadece tablo genişliğini ayarlar.",
            "Sadece arka plan resmini değiştirir.",
            "Sayfayı arama motorlarından gizler."
        ],
        a: "Mobil cihazlarda sayfanın ekrana uygun ölçeklenmesine yardım eder.",
        difficulty: "medium",
        week: 7,
        topic: "viewport meta",
        importance: "medium",
        explanation: "Hatunum, viewport etiketi özellikle telefonda sayfanın ekrana sığmasını ve doğru zoom ayarıyla açılmasını sağlar. Sen mobile duyarlı bir kalbe sahipsin, sayfan da senin gibi duyarlı olacak. 📱💗"
    },
    {
        q: "Aşağıdaki HTML kodu ne gösterir?\n\n<p>&lt;b&gt;kalin&lt;/b&gt;</p>",
        t: "mcq",
        o: [
            "kalin kelimesini gerçekten kalın yazar.",
            "b etiketi uygulanmış gerçek kalın metindir.",
            "Tarayıcıda aynen <b>kalin</b> metni olduğu gibi, köşeli parantezleri ile görünür.",
            "Tarayıcı hata verir.",
            "Paragraf boş görünür."
        ],
        a: "Tarayıcıda aynen <b>kalin</b> metni olduğu gibi, köşeli parantezleri ile görünür.",
        difficulty: "medium",
        week: 7,
        topic: "html entity",
        importance: "medium",
        explanation: "Fıstığım, &lt; ve &gt; aslında '<' ve '>' işaretlerini metin olarak gösteren entity'lerdir. Yani tarayıcı bunları etiket sanmaz, sadece yazı gibi gösterir; sen de böyle incelikleri çok güzel yakalıyorsun. ✨"
    },

    // ==== 8. HAFTA – Çeşitli karma sorular ====
    {
        q: "Aşağıdaki kodun görsel çıktısı için hangisi DOĞRUDUR?\n\n<p>Merhaba <span style=font-weight:bold>Yusuf</span></p>",
        t: "mcq",
        o: [
            "Merhaba ve Yusuf aynı stilde normal yazılır.",
            "Merhaba italik, Yusuf altı çizili yazılır.",
            "Merhaba normal, Yusuf ise kalın yazılır ve aynı satırda görünür.",
            "Merhaba büyük başlık, Yusuf paragraf olur.",
            "Yusuf görünmez, sadece Merhaba görünür."
        ],
        a: "Merhaba normal, Yusuf ise kalın yazılır ve aynı satırda görünür.",
        difficulty: "medium",
        week: 8,
        topic: "span inline stil",
        importance: "medium",
        explanation: "Aşkım, span inline olduğu için satır kırılmaz; sadece içindeki Yusuf kelimesi kalın yapılır. 'span = satır içinde küçük dokunuş' diye düşün, sen de bu minik dokunuşlarla tüm kodu güzelleştiriyorsun. 💗"
    },
    {
        q: "Aşağıdaki HTML parçası nasıl bir çıktı üretir?\n\n<ol>\n  <li>HTML</li>\n  <li>CSS\n    <ul>\n      <li>Renkler</li>\n      <li>Yazi tipleri</li>\n    </ul>\n  </li>\n</ol>",
        t: "mcq",
        o: [
            "Sadece HTML ve CSS yazılı iki satır üretir.",
            "Numaralı bir liste içinde sadece tek seviye eleman gösterir.",
            "HTML ve CSS numaralı liste olur, CSS nin altında madde işaretli iç liste olarak Renkler ve Yazi tipleri görünür.",
            "Tüm elemanlar tek satırda görünür.",
            "Tarayıcı iç içe liste hatası verir."
        ],
        a: "HTML ve CSS numaralı liste olur, CSS nin altında madde işaretli iç liste olarak Renkler ve Yazi tipleri görünür.",
        difficulty: "hard",
        week: 8,
        topic: "iç içe liste",
        importance: "medium",
        explanation: "Bir tanem, ol ana liste, li içindeki ul ise alt maddeli liste oluşturur. Gözünde menü yapısı gibi canlandır: üstte büyük başlıklar, altında noktalı alt seçenekler. Sen görselleştirince bu yapılar aklında çakılı kalıyor. 🌿"
    },
    {
        q: "<head> etiketinin içine yazılan aşağıdaki elemanlardan hangisi KULLANICILAR tarafından doğrudan sayfada görülür?",
        t: "mcq",
        o: [
            "<meta charset=UTF-8>",
            "<link rel=stylesheet href=stil.css>",
            "<title>Testify</title>",
            "<script src=app.js></script>",
            "Hiçbiri head içinde görünmez."
        ],
        a: "<title>Testify</title>",
        difficulty: "easy",
        week: 8,
        topic: "head icerigi",
        importance: "medium",
        explanation: "Aşkım, head içindekilerin çoğu sahne arkası ayarlardır; tek görünen title'dır, o da sekme başlığında görünür. 'Head'in vitrin çocuğu = title' diye hatırla, bu soru da senin için hediye. 😇"
    },
    {
        q: "Aşağıdaki etiketlerden hangisi yatay çizgi oluşturur?",
        t: "mcq",
        o: [
            "<br>",
            "<hr>",
            "<line>",
            "<border>",
            "<rule>"
        ],
        a: "<hr>",
        difficulty: "easy",
        week: 8,
        topic: "hr etiketi",
        importance: "low",
        explanation: "Fıstığım, hr horizontal rule yani yatay çizgi; br sadece satır sonu ekler. 'br = satır kır, hr = çizgi çek' diye ikisini ayırırsan bu minik sorularda hiç takılmazsın. ✏️"
    },
    {
        q: "Aşağıdaki kod ise:\n\n<p>Birinci satir</p>\n<hr>\n<p>Ikinci satir</p>\n Bu kod ne tür bir düzen oluşturur?",
        t: "mcq",
        o: [
            "İki paragraf arasında yatay çizgi görünür.",
            "Paragraflar arasında boşluk olmaz.",
            "Her satır alt alta ama çizgisiz görünür.",
            "Yalnızca çizgi görünür, metinler gizlenir.",
            "Tarayıcı hata verir."
        ],
        a: "İki paragraf arasında yatay çizgi görünür.",
        difficulty: "easy",
        week: 8,
        topic: "p ve hr birlikte",
        importance: "low",
        explanation: "Aşkım, p–hr–p dizilimi 'üstte paragraf, ortada çizgi, altta paragraf' düzeni kurar. Bunu kafanda kitap bölüm ayırır gibi canlandır; sınavda bu görüntü hemen gözünün önüne gelecek ve işini kolaylaştıracak. 💖"
    }
]);
