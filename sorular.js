// GRAFİK ANİMASYON DERSİ – EK 30 VİZE SORUSU
// Temel Grafik, Renk, Dosya Formatları, Photoshop, Maskeleme, Tipografi, Illustrator

window.questionBank = window.questionBank.concat([

    // ===== HAFTA 1 – Temel Grafik, Renk, Dosya Formatları =====
    {
        q: "Grafik tasarım sürecinde 'mesaj, hedef kitle ve ortam' kavramlarının birlikte ele alınmasının temel nedeni aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Verilmek istenen iletinin doğru kişiye, doğru mecrada ve uygun görsel dil ile ulaşmasını sağlamak",
            "Sadece kullanılan yazı tiplerini ve renkleri seçmek",
            "Bilgisayarın çözünürlüğünü artırarak daha kaliteli donanım kullanmak",
            "Dosya boyutunu küçültüp daha hızlı kaydetmek",
            "Baskı maliyetini her koşulda artırmak"
        ],
        a: "Verilmek istenen iletinin doğru kişiye, doğru mecrada ve uygun görsel dil ile ulaşmasını sağlamak",
        difficulty: "medium",
        week: 1,
        topic: "Temel Grafik ve Görsel İletişim",
        importance: "high",
        explanation: "Görsel iletişim ve grafik tasarımın amacı, sadece güzel görüntü üretmek değil, belirli bir mesajı belirli bir hedef kitleye en uygun ortamda iletmektir. Bu nedenle mesajın içeriği, kimin için hazırlandığı ve hangi ortamda (web, baskı, sosyal medya vb.) gösterileceği birlikte planlanmalıdır."
    },
    {
        q: "Bir afiş hem web ortamında (Instagram hikâyesi) hem de matbaa baskısı için kullanılacaktır. Aşağıdaki çözünürlük ve renk modu eşleştirmelerinden hangisi bu iki kullanım için en DOĞRU yaklaşımdır?",
        t: "mcq",
        o: [
            "Web için 300 dpi CMYK, baskı için 72 dpi RGB",
            "Hem web hem baskı için 72 dpi RGB kullanmak",
            "Hem web hem baskı için 300 dpi CMYK kullanmak",
            "Web için 72 dpi RGB, baskı için 300 dpi CMYK kullanmak",
            "Web için 150 dpi CMYK, baskı için 150 dpi RGB kullanmak"
        ],
        a: "Web için 72 dpi RGB, baskı için 300 dpi CMYK kullanmak",
        difficulty: "hard",
        week: 1,
        topic: "Çözünürlük ve Renk Modları",
        importance: "high",
        explanation: "Ekran için hazırlanan görseller genellikle 72 dpi ve RGB renk modunda; baskı için hazırlanan çalışmalar ise 300 dpi ve CMYK renk modunda hazırlanır. Bu, hem görsel kalitenin korunması hem de baskı renklerinin doğru çıkması için temel bir kuraldır."
    },
    {
        q: "Bir tasarımcı, web için hazırladığı şeffaf arka plana sahip bir logo dosyasını en uygun formatta kaydetmek istemektedir. Aşağıdaki dosya formatlarından hangisi hem şeffaflık desteği hem de web uyumluluğu açısından en uygun seçenektir?",
        t: "mcq",
        o: [
            "JPEG (JPG)",
            "BMP",
            "TIFF (CMYK)",
            "GIF (256 renk)",
            "PNG-24"
        ],
        a: "PNG-24",
        difficulty: "medium",
        week: 1,
        topic: "Dosya Formatları",
        importance: "high",
        explanation: "PNG-24 formatı, şeffaflık (alpha channel) desteği sunduğu ve web tarayıcılarıyla uyumlu olduğu için özellikle logolar ve ikonlar gibi şeffaf arka plan gerektiren grafiklerde tercih edilir. JPEG şeffaflık desteklemez, GIF sınırlı renk sayısına sahiptir, BMP ve TIFF ise web için ağır ve gereksizdir."
    },
    {
        q: "Aşağıdaki eşleştirmelerden hangisi 'raster (piksel tabanlı) – vektör tabanlı' mantığını ve hangi yazılımda hangi tür içerik üretiminin daha uygun olduğunu DOĞRU şekilde açıklar?",
        t: "mcq",
        o: [
            "Photoshop raster, Illustrator vektör temellidir; fotoğraf düzenleme için Photoshop, ölçeklenebilir logo ve ikon için Illustrator tercih edilir.",
            "Photoshop vektör, Illustrator raster temellidir; fotoğraf düzenleme için Illustrator, logo için Photoshop tercih edilir.",
            "Hem Photoshop hem Illustrator yalnızca raster çalışır; vektör kavramı bu programlarda yoktur.",
            "Raster görüntüler sonsuz büyütülebilir, vektör grafikler büyütülünce piksel piksel bozulur.",
            "Raster ve vektör arasında fark yoktur, sadece dosya uzantıları farklıdır."
        ],
        a: "Photoshop raster, Illustrator vektör temellidir; fotoğraf düzenleme için Photoshop, ölçeklenebilir logo ve ikon için Illustrator tercih edilir.",
        difficulty: "medium",
        week: 1,
        topic: "Raster / Vektör Mantığı",
        importance: "high",
        explanation: "Photoshop piksel (raster) tabanlıdır ve fotoğraf düzenleme, fotomontaj gibi işler için uygundur. Illustrator ise vektör tabanlıdır ve logo, ikon, illüstrasyon gibi büyütüldüğünde bozulmaması gereken grafikler için tercih edilir."
    },
    {
        q: "Aşağıdaki dosya formatı – kullanım amacı eşleştirmelerinden hangisi grafik animasyon dersi kapsamında öğretilen temellere göre YANLIŞTIR?",
        t: "mcq",
        o: [
            "PSD → Photoshop çalışma dosyası, katmanlı düzeni saklamak için",
            "AI → Illustrator vektör çalışma dosyası, logo ve illüstrasyonlar için",
            "JPEG → Fotoğraf ve gölge/renk geçişi bol, sıkıştırmalı web görselleri için",
            "PNG → Şeffaf arka planlı logolar ve ikonlar için",
            "GIF → Yüksek kaliteli CMYK baskı katalogları için ana format"
        ],
        a: "GIF → Yüksek kaliteli CMYK baskı katalogları için ana format",
        difficulty: "medium",
        week: 1,
        topic: "Dosya Formatları",
        importance: "medium",
        explanation: "GIF sınırlı renk (256) ve web odaklı bir formattır; baskı katalogları için uygun değildir. PSD, AI, JPEG ve PNG için belirtilen kullanımlar ise temel grafik tasarım pratikleriyle uyumludur."
    },
    {
        q: "Aşağıdaki ifadelerden hangisi RGB ve CMYK renk modları arasındaki farkı grafik tasarım açısından EN DOĞRU şekilde özetler?",
        t: "mcq",
        o: [
            "RGB baskı için, CMYK ise sadece ekran için kullanılır.",
            "RGB ışığa dayalı (ekran), CMYK ise boyaya/mürekkebe dayalı (baskı) renk uzayını temsil eder.",
            "RGB siyah-beyaz çalışmalar için, CMYK ise sadece kırmızı tonları için kullanılır.",
            "RGB ve CMYK arasında pratikte fark yoktur, ikisi de aynı sonucu üretir.",
            "RGB sadece logolar, CMYK sadece fotoğraflar için kullanılır."
        ],
        a: "RGB ışığa dayalı (ekran), CMYK ise boyaya/mürekkebe dayalı (baskı) renk uzayını temsil eder.",
        difficulty: "medium",
        week: 1,
        topic: "Renk Modları",
        importance: "high",
        explanation: "RGB, ekranlarda (monitor, telefon, TV) kullanılan ışık tabanlı renk mode­lidir; CMYK ise baskıda mürekkep karışımına dayalıdır. Bu nedenle web tasarımda RGB, baskı tasarımında CMYK kullanımı temeldir."
    },

    // ===== HAFTA 2–3 – Photoshop Temelleri, Katmanlar, Çalışma Mantığı =====
    {
        q: "Photoshop'ta katman (layer) mantığı ile ilgili aşağıdaki ifadelerden hangisi TEMEL MANTIĞI en doğru şekilde açıklar?",
        t: "mcq",
        o: [
            "Katmanlar, tek bir arka plan üzerinde çalışmayı zorlaştırmak için kullanılır.",
            "Katmanlar, görselin tüm parçalarını tek bir düzeyde birleştirip tek seferde silmek için kullanılır.",
            "Katmanlar, görselin farklı parçalarını ayrı ayrı düzenlemeye, gizlemeye, taşımaya ve efekt uygulamaya imkân veren şeffaf sayfalar gibi düşünülebilir.",
            "Katmanlar sadece yazı tiplerini saklamak için kullanılır.",
            "Katmanlar sadece baskı alınırken görünen kısımları belirler, ekranda bir etkisi yoktur."
        ],
        a: "Katmanlar, görselin farklı parçalarını ayrı ayrı düzenlemeye, gizlemeye, taşımaya ve efekt uygulamaya imkân veren şeffaf sayfalar gibi düşünülebilir.",
        difficulty: "medium",
        week: 2,
        topic: "Photoshop Katman Mantığı",
        importance: "high",
        explanation: "Katmanlar, Photoshop'ta her öğeyi ayrı ayrı kontrol edebilmemizi sağlar. Bu sayede bir nesneyi taşımak, silmek, saydamlığını değiştirmek veya efekt vermek diğer öğeleri bozmadan yapılır. Bu nedenle katman mantığı grafik animasyon dersinin temel konularından biridir."
    },
    {
        q: "Bir öğrenci Photoshop'ta 'Image > Adjustments > Brightness/Contrast' menüsünü kullanarak fotoğrafın parlaklığını kalıcı şekilde değiştirmiştir. Aynı etkiyi daha sonra geri döndürülebilir (non-destructive) biçimde yapmak istese hangi yaklaşım daha DOĞRU olur?",
        t: "mcq",
        o: [
            "Eraser aracıyla koyu bölgeleri silmek",
            "Fotoğrafı JPEG olarak kaydedip tekrar açmak",
            "Katmanı rasterize etmek",
            "Ayar katmanı (Adjustment Layer) kullanarak parlaklık/kontrastı ayrı bir katman üzerinden uygulamak",
            "Tüm katmanları birleştirip 'Flatten Image' yapmak"
        ],
        a: "Ayar katmanı (Adjustment Layer) kullanarak parlaklık/kontrastı ayrı bir katman üzerinden uygulamak",
        difficulty: "hard",
        week: 3,
        topic: "Non-Destructive Çalışma",
        importance: "high",
        explanation: "Adjustment Layer (ayar katmanı) kullanıldığında, yapılan parlaklık/kontrast değişiklikleri ayrı bir katmanda saklanır ve daha sonra istenirse kapatılabilir, düzenlenebilir veya silinebilir. Bu da 'non-destructive' yani geri döndürülebilir çalışma mantığına uygundur."
    },
    {
        q: "Photoshop'ta 'Magic Wand Tool' (Sihirli Değnek) aracı aşağıdakilerden hangisi için en UYGUN seçimi sağlar?",
        t: "mcq",
        o: [
            "Serbest el ile istenen şekli çizerek seçim yapmak için",
            "Belirli bir dikdörtgen alanı seçmek için",
            "Benzer renk tonlarına sahip alanları, tolerans değeri üzerinden otomatik seçmek için",
            "Sadece metin katmanlarını seçmek için",
            "Sadece vektör şekilleri seçmek için"
        ],
        a: "Benzer renk tonlarına sahip alanları, tolerans değeri üzerinden otomatik seçmek için",
        difficulty: "medium",
        week: 2,
        topic: "Seçim Araçları",
        importance: "medium",
        explanation: "Magic Wand Tool, tıkladığınız noktadaki renge benzeyen pikselleri belirlenen tolerans aralığına göre otomatik seçer. Düz renkli arka planları temizlemek gibi işlerde hızlı seçim imkânı sağlar."
    },
    {
        q: "Bir öğrenci fotoğrafın sadece gökyüzü kısmını seçip başka bir arka planla değiştirmek istemektedir. Aşağıdaki araç/teknik kombinasyonlarından hangisi bu iş için en pratik ve kontrol edilebilir seçeneği sunar?",
        t: "mcq",
        o: [
            "Crop Tool ile tüm resmi kırpmak",
            "Move Tool ile gökyüzünü başka bir belgeye sürüklemek",
            "Quick Selection Tool ile gökyüzünü seçip ardından Layer Mask uygulamak",
            "Brush Tool ile gökyüzünü maviye boyamak",
            "Text Tool ile gökyüzünün üzerine yazı yazmak"
        ],
        a: "Quick Selection Tool ile gökyüzünü seçip ardından Layer Mask uygulamak",
        difficulty: "hard",
        week: 3,
        topic: "Seçim ve Maskeleme Girişi",
        importance: "high",
        explanation: "Quick Selection Tool, ton ve kenarlardan yararlanarak gökyüzünü hızlıca seçmeye imkân verir. Ardından bu seçime Layer Mask uygulanırsa, gökyüzü kısmı şeffaflaştırılıp başka bir arka planla non-destructive şekilde değiştirilebilir."
    },
    {
        q: "Photoshop'ta 'Image Size' ile 'Canvas Size' menüleri arasındaki farkla ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Image Size tuvali büyütür, Canvas Size sadece çözünürlüğü değiştirir.",
            "Image Size piksel boyutlarını ve çözünürlüğü değiştirirken, Canvas Size çalışma alanının kenarlarını genişletip daraltır.",
            "Her ikisi de aynı işlemi yapar, sadece menü isimleri farklıdır.",
            "Image Size yalnızca baskı alırken, Canvas Size yalnızca webde kullanılır.",
            "Image Size renk modunu değiştirir, Canvas Size dosya formatını değiştirir."
        ],
        a: "Image Size piksel boyutlarını ve çözünürlüğü değiştirirken, Canvas Size çalışma alanının kenarlarını genişletip daraltır.",
        difficulty: "hard",
        week: 2,
        topic: "Belge Boyutu ve Tuval",
        importance: "medium",
        explanation: "Image Size, görselin çözünürlüğünü ve piksel boyutlarını değiştirerek görselin gerçek boyutunu etkiler. Canvas Size ise içeriği bozmadan sadece çalışma alanının çerçevesini büyütür veya küçültür; kenarlardan boşluk ekler veya kırpar."
    },
    {
        q: "Photoshop'ta katman panelinde 'Opacity' değeri %100'den %40'a düşürülen bir katman için aşağıdakilerden hangisi söylenebilir?",
        t: "mcq",
        o: [
            "Katman tamamen görünmez olur, hiçbir şey görünmez.",
            "Katman altındaki katmanlar kısmen görünür hale gelir, ilgili katman yarı saydam olur.",
            "Katman sadece baskıda görünür, ekranda görünmez.",
            "Katmanın boyutu otomatik olarak küçülür.",
            "Katman sadece siyah-beyaza dönüşür."
        ],
        a: "Katman altındaki katmanlar kısmen görünür hale gelir, ilgili katman yarı saydam olur.",
        difficulty: "easy",
        week: 2,
        topic: "Opacity ve Şeffaflık",
        importance: "medium",
        explanation: "Opacity değeri katmanın saydamlık düzeyini belirler. %100 tam opak, %0 tamamen görünmezdir. %40 yapıldığında katman kısmen görünür, altındaki katmanlar da görünmeye başlar."
    },

    // ===== HAFTA 4 – Maskeleme (Layer Mask, Clipping Mask) =====
    {
        q: "Photoshop'ta Eraser Tool (silgi) ile bir alanı silmek ile Layer Mask kullanarak bir alanı gizlemek arasındaki temel fark aşağıdakilerden hangisidir?",
        t: "mcq",
        o: [
            "Eraser Tool non-destructive, Layer Mask ise destructive çalışır.",
            "Her ikisi de aynı işlemi yapar, aralarında fark yoktur.",
            "Eraser Tool pikseli kalıcı olarak siler, Layer Mask ise pikseli gizler; maske kapatılır veya silinirse piksel geri gelir.",
            "Layer Mask sadece metin katmanlarında kullanılabilir, diğer katmanlarda kullanılamaz.",
            "Eraser Tool sadece vektör şekillerde çalışır."
        ],
        a: "Eraser Tool pikseli kalıcı olarak siler, Layer Mask ise pikseli gizler; maske kapatılır veya silinirse piksel geri gelir.",
        difficulty: "hard",
        week: 4,
        topic: "Maskeleme ve Silme",
        importance: "high",
        explanation: "Destructive (yıkıcı) çalışma, pikselin tamamen silinmesi anlamına gelir. Silgi aracı bu şekilde çalışır. Layer Mask ise sadece görünürlüğü kontrol eder; siyah alanlar gizler, beyaz alanlar gösterir. Maske kapatıldığında orijinal piksel geri gelir, bu yüzden non-destructive bir yöntemdir."
    },
    {
        q: "Bir tasarımcı, alttaki fotoğrafın sadece yazı alanının içinde görünmesini istemektedir. Photoshop'ta bu etkiyi en pratik şekilde elde etmek için aşağıdaki tekniklerden hangisini kullanmalıdır?",
        t: "mcq",
        o: [
            "Layer Mask ile tüm fotoğrafı tamamen siyaha boyamak",
            "Clipping Mask (katman kırpma) kullanarak fotoğraf katmanını yazı katmanına kırpmak",
            "Merge Layers ile tüm katmanları birleştirmek",
            "Sadece Blend Mode'u 'Overlay' yapmak",
            "Fotoğrafı başka bir dosyaya taşımak"
        ],
        a: "Clipping Mask (katman kırpma) kullanarak fotoğraf katmanını yazı katmanına kırpmak",
        difficulty: "hard",
        week: 4,
        topic: "Clipping Mask",
        importance: "high",
        explanation: "Clipping Mask, üstteki katmanın görünürlüğünü alttaki katmanın şekline göre sınırlar. Yazı katmanı altta, fotoğraf katmanı üstte olacak şekilde clipping mask uygulanırsa fotoğraf sadece yazıların içinde görünür."
    },
    {
        q: "Layer Mask üzerinde siyah ve beyaz fırça ile boyama yaparken aşağıdaki ifadelerden hangisi DOĞRUdur?",
        t: "mcq",
        o: [
            "Siyah, ilgili alanı görünür; beyaz ise görünmez yapar.",
            "Siyah, alanı gizler; beyaz, alanı gösterir.",
            "Hem siyah hem beyaz alanı gizler; sadece gri gösterir.",
            "Maskede renklerin hiçbir etkisi yoktur, sadece kontur çizer.",
            "Maskede sadece kırmızı ve mavi renkler kullanılabilir."
        ],
        a: "Siyah, alanı gizler; beyaz, alanı gösterir.",
        difficulty: "medium",
        week: 4,
        topic: "Maske Mantığı",
        importance: "high",
        explanation: "Layer Mask gri tonlu bir görseldir. Temel kural: beyaz göster, siyah gizle, gri ise yarı saydam anlamına gelir. Bu nedenle maske üzerinde siyah fırça ile boyanan alanlar görünmez olur."
    },
    {
        q: "Bir öğrenci, fotoğrafın bir kısmının net, diğer kısmının yumuşak ve saydam bir geçişle arka plana karışmasını istemektedir. Bu etkiyi Layer Mask ile elde etmek için hangi adım kritik öneme sahiptir?",
        t: "mcq",
        o: [
            "Maskeyi tamamen beyaza boyamak",
            "Maskeyi tamamen siyaha boyamak",
            "Maske üzerinde Gradient Tool kullanarak siyah-beyaz geçiş oluşturmak",
            "Fotoğraf katmanını rasterize etmek",
            "Katmanı JPEG formatında kaydetmek"
        ],
        a: "Maske üzerinde Gradient Tool kullanarak siyah-beyaz geçiş oluşturmak",
        difficulty: "hard",
        week: 4,
        topic: "Gradient ile Maskeleme",
        importance: "medium",
        explanation: "Gradient Tool ile maskede siyah-beyaz geçiş oluşturulduğunda, beyaz kısım tamamen görünür, siyah kısım tamamen gizlenir, aradaki gri tonlar ise yumuşak bir geçiş sağlar. Bu teknik, özellikle fotoğraf kolajlarında çok kullanılır."
    },
    {
        q: "Aşağıdakilerden hangisi Layer Mask kullanımının grafik animasyon dersi açısından avantajlarından BİRİ DEĞİLDİR?",
        t: "mcq",
        o: [
            "Yapılan değişikliklerin geri alınmasını ve sonradan düzenlenmesini kolaylaştırır.",
            "Farklı görseller arasında yumuşak geçişler oluşturmayı sağlar.",
            "Silinmiş gibi görünen alanların aslında gizli olduğu için tekrar ortaya çıkarılabilmesine imkân tanır.",
            "Dosya boyutunu her zaman otomatik olarak küçültür.",
            "Non-destructive çalışma yöntemini destekler."
        ],
        a: "Dosya boyutunu her zaman otomatik olarak küçültür.",
        difficulty: "medium",
        week: 4,
        topic: "Maskelemenin Avantajları",
        importance: "medium",
        explanation: "Layer Mask, non-destructive çalışma, geri döndürülebilir düzenleme ve yumuşak geçişler gibi pek çok avantaj sağlar. Ancak dosya boyutunu küçültmek gibi bir görev yoktur; aksine ek veri barındırdığı için dosya boyutunu biraz artırabilir."
    },

    // ===== HAFTA 5 – Tipografi =====
    {
        q: "Aşağıdaki tipografi kararlarından hangisi uzun metinli bir broşürde okunabilirliği (readability) artırmaya en çok katkı sağlar?",
        t: "mcq",
        o: [
            "Satır uzunluğunu çok dar ve çok geniş arasında dengeli tutmak, uygun punto ve satır aralığı (leading) ayarlamak",
            "Tüm metni büyük harfle ve neona yakın renklerde yazmak",
            "Satır aralığını sıfıra indirerek satırları üst üste getirmek",
            "Metni arka planla aynı renkte yazmak",
            "Her kelimeyi farklı yazı tipiyle yazmak"
        ],
        a: "Satır uzunluğunu çok dar ve çok geniş arasında dengeli tutmak, uygun punto ve satır aralığı (leading) ayarlamak",
        difficulty: "medium",
        week: 5,
        topic: "Okunabilirlik ve Leading",
        importance: "high",
        explanation: "Okunabilirlik için satır uzunluğu, punto ve satır aralığı kritik önemdedir. Çok sıkışık veya çok seyrek satırlar göz yorar. Büyük harf ile uzun metin yazmak, aşırı renk kullanımı gibi kararlar ise okunabilirliği düşürür."
    },
    {
        q: "Serif ve sans serif yazı tipleriyle ilgili aşağıdaki eşleştirmelerden hangisi grafik tasarım bakış açısıyla DOĞRU kabul edilir?",
        t: "mcq",
        o: [
            "Serif yazı tipleri harf uçlarında çıkıntılar içerir ve uzun metinlerde okunabilirlik için sık tercih edilir; sans serif yazı tipleri ise daha sade olup başlıklar ve dijital arayüzler için yaygındır.",
            "Serif yazı tipleri sadece dijital, sans serif yazı tipleri sadece baskı için kullanılır.",
            "Serif yazı tipleri her zaman okunması zor, sans serif yazı tipleri ise her zaman okunması kolaydır; bağlama göre değişmez.",
            "Serif ve sans serif arasında sadece dosya boyutu farkı vardır.",
            "Serif yazı tipleri logolarda hiç kullanılmaz, sans serif yazı tipleri kitap metinlerinde hiç kullanılmaz."
        ],
        a: "Serif yazı tipleri harf uçlarında çıkıntılar içerir ve uzun metinlerde okunabilirlik için sık tercih edilir; sans serif yazı tipleri ise daha sade olup başlıklar ve dijital arayüzler için yaygındır.",
        difficulty: "medium",
        week: 5,
        topic: "Serif / Sans Serif",
        importance: "high",
        explanation: "Serif yazı tipleri geleneksel ve kitap metinlerinde sık kullanılırken, sans serif yazı tipleri sade ve modern görünümüyle başlıklar ve ekran arayüzlerinde tercih edilir. Bu, tipografinin temel bilgilerinden biridir."
    },
    {
        q: "Photoshop 'Character' panelinde 'Tracking' (harf aralığı) ve 'Leading' (satır aralığı) ayarlarıyla ilgili aşağıdaki ifadelerden hangisi doğrudur?",
        t: "mcq",
        o: [
            "Tracking harfler arasındaki genel boşluğu, Leading ise satırlar arasındaki dikey mesafeyi kontrol eder.",
            "Tracking satırlar arasındaki boşluğu, Leading harfler arasındaki boşluğu kontrol eder.",
            "Her ikisi de sadece yazının rengini değiştirir.",
            "Tracking sadece başlıklarda, Leading sadece logolarda kullanılabilir.",
            "Tracking ve Leading artık modern tasarımda kullanılmamaktadır."
        ],
        a: "Tracking harfler arasındaki genel boşluğu, Leading ise satırlar arasındaki dikey mesafeyi kontrol eder.",
        difficulty: "hard",
        week: 5,
        topic: "Tracking ve Leading",
        importance: "high",
        explanation: "Tracking, tüm cümledeki harfler arasındaki genel boşluğu açıp kapatır. Leading ise satırların birbirine olan dikey uzaklığını ayarlar. Bu iki parametre okunabilirliği doğrudan etkiler."
    },
    {
        q: "Bir afiş tasarımında hiyerarşi (tipografik hiyerarşi) oluşturmak için aşağıdakilerden hangisi en doğru yaklaşımdır?",
        t: "mcq",
        o: [
            "Başlık, alt başlık ve gövde metni için farklı punto, ağırlık ve gerekirse farklı ama uyumlu yazı tipleri kullanmak",
            "Tüm metni aynı punto ve aynı kalınlıkta kullanmak",
            "Yalnızca arka plan rengini değiştirmek",
            "Her kelimeyi farklı renge boyamak",
            "Metnin tamamını italik ve altı çizili yapmak"
        ],
        a: "Başlık, alt başlık ve gövde metni için farklı punto, ağırlık ve gerekirse farklı ama uyumlu yazı tipleri kullanmak",
        difficulty: "medium",
        week: 5,
        topic: "Tipografik Hiyerarşi",
        importance: "medium",
        explanation: "Tipografik hiyerarşi, okuyucunun önce neyi, sonra neyi göreceğini kontrol eder. Başlık daha büyük ve belirgin, alt başlık ondan daha küçük, gövde metni ise okunabilir bir puntoyla daha sade olmalıdır."
    },
    {
        q: "Bir öğrenci, başlık metninin iki harfi arasındaki boşluğun göze rahatsız edici geldiğini fark etmiş ve yalnızca bu iki harfin birbirine biraz daha yaklaşmasını istemiştir. Photoshop Character panelinde hangi ayarı kullanması gerekir?",
        t: "mcq",
        o: [
            "Tracking",
            "Leading",
            "Kerning",
            "Baseline Shift",
            "Vertical Scale"
        ],
        a: "Kerning",
        difficulty: "hard",
        week: 5,
        topic: "Kerning",
        importance: "high",
        explanation: "Kerning, iki harf arasındaki bireysel boşluğu ayarlamak için kullanılır. Tracking tüm metnin harf aralığını değiştirirken, kerning belirli harf çiftleri arasındaki boşluğu kontrol eder."
    },
    {
        q: "Tipografi açısından aşağıdaki karar kombinasyonlarından hangisi sosyal medya için hazırlanan bir 'kampanya duyurusu' görselinde başlık kısmı için en UYGUN tercihlerden biridir?",
        t: "mcq",
        o: [
            "Çok ince, okunması zor bir serif yazı tipi ve çok küçük punto",
            "Kalın (bold), sans serif bir yazı tipi ve kontrast oluşturan yeterince büyük bir punto",
            "El yazısı (script) font ve arka planla düşük kontrast",
            "Tamamı büyük harf, çok uzun paragraf ve düşük satır aralığı",
            "Çok sayıda farklı yazı tipinin bir arada kullanılması"
        ],
        a: "Kalın (bold), sans serif bir yazı tipi ve kontrast oluşturan yeterince büyük bir punto",
        difficulty: "medium",
        week: 5,
        topic: "Başlık Tasarımı",
        importance: "medium",
        explanation: "Sosyal medya görsellerinde başlık az zamanda dikkat çekmeli ve kolay okunmalıdır. Kalın sans serif fontlar ve yeterli punto ile yüksek kontrast, bu amaç için en uygun tercihlerdendir."
    },

    // ===== HAFTA 6 – Illustrator ve Vektörel Çizim =====
    {
        q: "Illustrator'da bir şeklin temelini oluşturan 'anchor point' (çapa noktası) ve 'path' (yol) kavramlarıyla ilgili aşağıdaki ifadelerden hangisi DOĞRUDUR?",
        t: "mcq",
        o: [
            "Anchor point'ler sadece raster görüntülerde bulunur; path kavramı Photoshop'a özeldir.",
            "Anchor point'ler bir vektör yolunun köşe veya eğim noktalarıdır, bu noktalar arasındaki bağlantılar ise path'i oluşturur.",
            "Path sadece metinlerde kullanılır, anchor point ise sadece fotoğraflarda bulunur.",
            "Anchor point ve path aynı şeydir, farklı isimlerle anılır.",
            "Anchor point'ler sadece renk seçimi için kullanılır."
        ],
        a: "Anchor point'ler bir vektör yolunun köşe veya eğim noktalarıdır, bu noktalar arasındaki bağlantılar ise path'i oluşturur.",
        difficulty: "hard",
        week: 6,
        topic: "Vektör Temelleri",
        importance: "high",
        explanation: "Vektörel çizimde şekiller anchor point'ler ve bu noktalar arasındaki path'lerden oluşur. Pen Tool ile anchor point ekleyip çıkarmak, köşeleri ve eğrileri kontrol etmemizi sağlar."
    },
    {
        q: "Bir firma logosu Illustrator'da vektör olarak çizilmiştir. Aşağıdaki durumlardan hangisi bu logonun vektör olmasının pratik bir AVANTAJINI en iyi açıklar?",
        t: "mcq",
        o: [
            "Logo sadece küçük boyutlarda kullanılabilir, büyütülürse bozulur.",
            "Logo sonsuza kadar büyütüldüğünde bile kenarları pürüzsüz kalır ve piksel piksel olmaz.",
            "Logo sadece ekranda görüntülenebilir, baskıya uygun değildir.",
            "Logo sadece siyah-beyaz kullanılabilir, renklendirilemez.",
            "Logo sadece JPEG formatında kaydedilebilir."
        ],
        a: "Logo sonsuza kadar büyütüldüğünde bile kenarları pürüzsüz kalır ve piksel piksel olmaz.",
        difficulty: "medium",
        week: 6,
        topic: "Vektörün Avantajları",
        importance: "high",
        explanation: "Vektör çizimler matematiksel eğrilere dayandığı için boyutlandırıldığında kalite kaybı yaşamaz. Bu, logoların kartvizitten billboard'a kadar her ölçekte bozulmadan kullanılabilmesini sağlar."
    },
    {
        q: "Illustrator'da bir şeklin içinin dolu rengi ile dış çizgi (kontur) rengi farklı olabilir. Aşağıdaki terimlerden hangisi bu iki özelliğin isimlerini DOĞRU eşleştirir?",
        t: "mcq",
        o: [
            "Fill iç rengi, Stroke dış çizgi rengini ifade eder.",
            "Stroke iç rengi, Fill dış çizgi rengini ifade eder.",
            "Fill sadece metinler için, Stroke sadece fotoğraflar için kullanılır.",
            "Fill ve Stroke aynı özelliktir, aralarında fark yoktur.",
            "Fill sadece gölgeleri, Stroke sadece arka planı kontrol eder."
        ],
        a: "Fill iç rengi, Stroke dış çizgi rengini ifade eder.",
        difficulty: "easy",
        week: 6,
        topic: "Fill ve Stroke",
        importance: "medium",
        explanation: "Illustrator ve diğer vektör tabanlı programlarda Fill şeklin içini, Stroke ise dış çerçevesini (kontur) ifade eder. Fill/Stroke panellerinden bu değerler ayrı ayrı ayarlanabilir."
    },
    {
        q: "Illustrator'da Pen Tool ile çizim yaparken aşağıdaki davranışlardan hangisi BEZIER eğrilerinin mantığına uygundur?",
        t: "mcq",
        o: [
            "Her tıklamada sadece dikdörtgen köşe oluşturulur, eğri çizmek mümkün değildir.",
            "Çift tıklama ile sadece daire çizilebilir.",
            "Anchor point'ler arası eğimi kontrol eden yön kolları (handles) sürüklenerek eğrinin şekli değiştirilir.",
            "Pen Tool sadece metin yazmak için kullanılır.",
            "Pen Tool sadece resim silmek için kullanılır."
        ],
        a: "Anchor point'ler arası eğimi kontrol eden yön kolları (handles) sürüklenerek eğrinin şekli değiştirilir.",
        difficulty: "hard",
        week: 6,
        topic: "Pen Tool ve Bezier Eğrileri",
        importance: "medium",
        explanation: "Pen Tool ile vektör çizim yapılırken anchor point'ler ve bu noktalara bağlı yön kolları (handles) yardımıyla eğrinin formu hassas biçimde kontrol edilir. Bu yöntem logo ve ikon tasarımında büyük esneklik sağlar."
    },
    {
        q: "Grafik animasyon dersi kapsamında bir öğrencinin 'Instagram için küçük ikon seti' hazırlaması istenmiştir. Aşağıdaki yazılım ve çalışma türü eşleştirmelerinden hangisi bu iş için en UYGUN tercihtir?",
        t: "mcq",
        o: [
            "Photoshop ve 300 dpi CMYK raster çalışma",
            "Illustrator ve vektör tabanlı çalışma",
            "Metin editörü ve düz txt dosyası",
            "Sadece tarayıcıda HTML yazmak",
            "Word ve .docx dosyası"
        ],
        a: "Illustrator ve vektör tabanlı çalışma",
        difficulty: "medium",
        week: 6,
        topic: "Ikon Tasarımı ve Vektör",
        importance: "medium",
        explanation: "İkonlar farklı çözünürlük ve boyutlarda kullanılacağından vektör tabanlı hazırlanması idealdir. Illustrator bu tür çalışmalar için temel araçtır. Daha sonra web için PNG veya SVG formatına aktarılabilir."
    }
]);
