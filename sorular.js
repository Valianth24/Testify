// Yazılım Mimarileri (7-11) – 50 Soruluk Sınav Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // =========================================================
  // ==== 7. HAFTA – Spiral Model & RAD (10 Soru) ============
  // =========================================================
  {
    q: "Spiral Model’in temel amacı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Sadece kodu hızlı yazmak",
      "Riskleri erken tespit edip yöneterek iteratif geliştirmek",
      "Testi tamamen sona bırakmak",
      "Sadece küçük projeleri tek seferde bitirmek",
      "Sadece tasarım dokümanı üretmek"
    ],
    a: "Riskleri erken tespit edip yöneterek iteratif geliştirmek",
    difficulty: "easy",
    week: 7,
    topic: "Spiral Model - amaç",
    importance: "high",
    explanation: "Spiral Model her döngüde risk analizi yapıp riski azaltarak iteratif geliştirmeyi hedefler."
  },
  {
    q: "Spiral Model’de her döngü (spiral turu) genel olarak hangi mantıkla ilerler?",
    t: "mcq",
    o: [
      "Tek sefer gereksinim yaz → direkt teslim",
      "Planla → risk analizi yap → geliştir → değerlendir ve sonraki döngüyü planla",
      "Kodla → hiç test etmeden yayınla",
      "Sadece prototip çiz → projeyi bitir",
      "Sadece müşteri toplantısı yap → kod yazma"
    ],
    a: "Planla → risk analizi yap → geliştir → değerlendir ve sonraki döngüyü planla",
    difficulty: "medium",
    week: 7,
    topic: "Spiral Model - aşamalar",
    importance: "high",
    explanation: "Spiral döngüsü; hedef/plan, risk analizi, geliştirme ve değerlendirme-planlama adımlarını tekrarlar."
  },
  {
    q: "Spiral Model, hangi proje tipi için daha uygundur?",
    t: "mcq",
    o: [
      "Riskin çok düşük olduğu, çok küçük projeler",
      "Gereksinimleri hiç değişmeyen, çok basit projeler",
      "Büyük, karmaşık ve riskli projeler",
      "Sadece tek geliştirici ile yapılan hobi projeleri",
      "Sadece statik web sayfası projeleri"
    ],
    a: "Büyük, karmaşık ve riskli projeler",
    difficulty: "easy",
    week: 7,
    topic: "Spiral Model - kullanım",
    importance: "high",
    explanation: "Risk yönetimi güçlü olduğu için büyük ve riskli projelerde tercih edilir."
  },
  {
    q: "RAD (Rapid Application Development) yaklaşımının en belirgin özelliği hangisidir?",
    t: "mcq",
    o: [
      "Uzun analiz dönemi, geç teslim",
      "Hızlı prototipleme ve kısa iterasyonlarla hızlı teslim",
      "Testin tamamen kaldırılması",
      "Sadece dokümantasyon üretmek",
      "Yalnızca tek teknoloji kullanmak zorunda olmak"
    ],
    a: "Hızlı prototipleme ve kısa iterasyonlarla hızlı teslim",
    difficulty: "easy",
    week: 7,
    topic: "RAD - temel fikir",
    importance: "high",
    explanation: "RAD hızlı prototip + kısa iterasyon + sık geri bildirim ile teslim süresini kısaltır."
  },
  {
    q: "RAD yaklaşımında müşteri/kullanıcı katılımı için hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Müşteri sadece proje sonunda sistemi görür",
      "Müşteri sadece test aşamasında devreye girer",
      "Müşteri iterasyonlar boyunca sık geri bildirim verir",
      "Müşteri katılımı RAD’da önerilmez",
      "Müşteri sadece kod incelemesi yapar"
    ],
    a: "Müşteri iterasyonlar boyunca sık geri bildirim verir",
    difficulty: "easy",
    week: 7,
    topic: "RAD - müşteri geri bildirimi",
    importance: "high",
    explanation: "RAD’da geri bildirim, prototip ve iterasyonların yönünü belirler."
  },
  {
    q: "RAD’da prototip (prototype) kullanmanın temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Kodu tamamen bitirmek",
      "İhtiyaçları ve arayüz/işlevi erken görünür kılıp geri bildirim almak",
      "Sadece performans ölçmek",
      "Sadece veritabanı kurmak",
      "Sadece dokümantasyon yazmak"
    ],
    a: "İhtiyaçları ve arayüz/işlevi erken görünür kılıp geri bildirim almak",
    difficulty: "medium",
    week: 7,
    topic: "RAD - prototip",
    importance: "high",
    explanation: "Prototip, doğru ihtiyacı erken yakalamayı ve yön değiştirmeyi kolaylaştırır."
  },
  {
    q: "Spiral Model’de her döngü sonunda sonuçlar hangi işlemden geçer ve sonraki döngü buna göre planlanır?",
    t: "mcq",
    o: [
      "Şifrelenir",
      "Silinir",
      "Değerlendirilir",
      "Arşivlenip değişmeden kalır",
      "Test edilmeden yayınlanır"
    ],
    a: "Değerlendirilir",
    difficulty: "easy",
    week: 7,
    topic: "Spiral - değerlendirme",
    importance: "medium",
    explanation: "Her turda çıktı gözden geçirilir; geri bildirimle bir sonraki tur planlanır."
  },
  {
    q: "RAD yaklaşımında hızlı geliştirme için sık kullanılan yöntemlerden biri aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Prototip oluşturma",
      "Sadece uzun dokümantasyon yazma",
      "Tüm testleri sona bırakma",
      "Tek seferde büyük teslim",
      "Değişiklik taleplerini reddetme"
    ],
    a: "Prototip oluşturma",
    difficulty: "easy",
    week: 7,
    topic: "RAD - prototip",
    importance: "high",
    explanation: "RAD’da prototip ile hızlı geri bildirim alınır ve ürün hızlı olgunlaştırılır."
  },
  {
    q: "Spiral Model ile RAD arasındaki en doğru fark hangisidir?",
    t: "mcq",
    o: [
      "Spiral tamamen tek seferliktir, RAD iteratiftir",
      "Spiral risk yönetimine çok odaklanır; RAD hız ve prototiplemeye odaklanır",
      "RAD sadece büyük projelerde kullanılır, Spiral küçük projelerde",
      "İkisi de test yapmayı yasaklar",
      "İkisi de kullanıcı geri bildirimini gereksiz görür"
    ],
    a: "Spiral risk yönetimine çok odaklanır; RAD hız ve prototiplemeye odaklanır",
    difficulty: "medium",
    week: 7,
    topic: "Spiral vs RAD",
    importance: "high",
    explanation: "Spiral’in omurgası risk analizi; RAD’ın omurgası hızlı prototip ve hızlı teslimdir."
  },
  {
    q: "Aşağıdakilerden hangisi RAD için daha uygun bir senaryodur?",
    t: "mcq",
    o: [
      "Çok sık değişen kullanıcı talepleri olan bir arayüz uygulaması",
      "Hiç değişmeyecek, sabit gereksinimli bir proje",
      "Kullanıcıyla iletişimin mümkün olmadığı proje",
      "Teslim tarihi çok uzak, hızın önemsiz olduğu proje",
      "Risk analizi gerekmeyen, tamamen standart bir ürün"
    ],
    a: "Çok sık değişen kullanıcı talepleri olan bir arayüz uygulaması",
    difficulty: "medium",
    week: 7,
    topic: "RAD - uygunluk",
    importance: "medium",
    explanation: "RAD, değişime açık işlerde prototip + hızlı geri bildirimle çok etkilidir."
  },

  // =========================================================
  // ==== 8. HAFTA – V-Model, CBSD, Incremental, Scrum, Kanban
  // ==== (10 Soru) ==========================================
  // =========================================================
  {
    q: "V-Model için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Test sadece en sonda yapılır",
      "Geliştirme aşamalarının karşısında ilgili test aşamaları vardır",
      "Dokümantasyon hiç yapılmaz",
      "Sadece prototipleme kullanır",
      "Sadece mobil uygulamalarda kullanılır"
    ],
    a: "Geliştirme aşamalarının karşısında ilgili test aşamaları vardır",
    difficulty: "easy",
    week: 8,
    topic: "V-Model - temel mantık",
    importance: "high",
    explanation: "V-Model’de doğrulama/validasyon testleri, geliştirme adımlarıyla eşleştirilir."
  },
  {
    q: "V-Model’de “Birim Testi (Unit Test)” en çok hangi aşamanın karşılığı gibi düşünülür?",
    t: "mcq",
    o: ["Gereksinim analizi", "Sistem tasarımı", "Kodlama", "Kullanıcı kabul", "Bakım"],
    a: "Kodlama",
    difficulty: "easy",
    week: 8,
    topic: "V-Model - test eşleşmesi",
    importance: "high",
    explanation: "Birim testleri fonksiyon/sınıf düzeyinde olduğu için kodlama ile doğrudan ilişkilidir."
  },
  {
    q: "CBSD (Bileşen Tabanlı Geliştirme) yaklaşımının temel avantajı hangisidir?",
    t: "mcq",
    o: [
      "Her şeyi sıfırdan yazmayı zorunlu kılar",
      "Tekrar kullanılabilir bileşenlerle geliştirmeyi hızlandırır",
      "İletişimi tamamen kaldırır",
      "Test ihtiyacını yok eder",
      "Sadece tek katmanlı mimariye uygundur"
    ],
    a: "Tekrar kullanılabilir bileşenlerle geliştirmeyi hızlandırır",
    difficulty: "easy",
    week: 8,
    topic: "CBSD - avantaj",
    importance: "high",
    explanation: "Hazır bileşen kullanımı süreyi kısaltır ve yeniden kullanım ile verim sağlar."
  },
  {
    q: "CBSD sürecinde “Bileşen Kataloğu” (component catalog) ne işe yarar?",
    t: "mcq",
    o: [
      "Kullanıcı şifrelerini saklar",
      "Kullanılabilir bileşenleri listeler ve seçimi kolaylaştırır",
      "Test raporlarını otomatik siler",
      "Sunucu kurulumunu yapar",
      "Sadece UI renk paletini tutar"
    ],
    a: "Kullanılabilir bileşenleri listeler ve seçimi kolaylaştırır",
    difficulty: "medium",
    week: 8,
    topic: "CBSD - katalog",
    importance: "high",
    explanation: "Katalog; bileşen bulma, karşılaştırma ve yeniden kullanımı sistematik hale getirir."
  },
  {
    q: "Artımlı (Incremental) modelin temel fikri hangisidir?",
    t: "mcq",
    o: [
      "Ürün tek seferde tam teslim edilir",
      "Ürün, küçük artımlarla (parça parça) geliştirilip teslim edilir",
      "Hiç geri bildirim alınmaz",
      "Sadece test yazılır",
      "Sadece tasarım yapılır"
    ],
    a: "Ürün, küçük artımlarla (parça parça) geliştirilip teslim edilir",
    difficulty: "easy",
    week: 8,
    topic: "Incremental - temel fikir",
    importance: "high",
    explanation: "Her artım yeni bir özellik veya iyileştirme getirir; kullanıcı erken sürüm görebilir."
  },
  {
    q: "Artımlı modelde erken geri bildirim almanın pratik sonucu hangisidir?",
    t: "mcq",
    o: [
      "Hatalar daha geç ortaya çıkar",
      "Sonradan değişiklik yapmak imkânsız olur",
      "Sonraki artımlar, gerçek kullanıcı geri bildirimine göre şekillenir",
      "Test ihtiyacı tamamen biter",
      "Sadece dokümantasyon artar"
    ],
    a: "Sonraki artımlar, gerçek kullanıcı geri bildirimine göre şekillenir",
    difficulty: "medium",
    week: 8,
    topic: "Incremental - geri bildirim",
    importance: "high",
    explanation: "İlk artımlar hızlı geri bildirim sağlar; sonraki artımlar buna göre evrilir."
  },
  {
    q: "Scrum’da Product Owner (Ürün Sahibi) için en doğru görev hangisidir?",
    t: "mcq",
    o: [
      "Sunucu konfigürasyonu yapmak",
      "Product Backlog’u oluşturmak ve önceliklendirmek",
      "Her gün kod incelemek zorunda olmak",
      "Testleri tamamen kaldırmak",
      "Sadece tasarım çizmek"
    ],
    a: "Product Backlog’u oluşturmak ve önceliklendirmek",
    difficulty: "medium",
    week: 8,
    topic: "Scrum - roller",
    importance: "high",
    explanation: "Product Owner iş değerini temsil eder; backlog önceliğini belirler."
  },
  {
    q: "Kanban’da WIP limitinin (Work In Progress limiti) temel amacı hangisidir?",
    t: "mcq",
    o: [
      "Daha fazla işi aynı anda başlatmak",
      "İş akışında tıkanmayı azaltıp odaklanmayı artırmak",
      "Testleri iptal etmek",
      "Sadece rapor üretmek",
      "Yalnızca tasarım işlerini engellemek"
    ],
    a: "İş akışında tıkanmayı azaltıp odaklanmayı artırmak",
    difficulty: "easy",
    week: 8,
    topic: "Kanban - WIP",
    importance: "high",
    explanation: "WIP limiti, aynı anda çok iş açıp bitirmemeyi engeller; akışı dengeler."
  },
  {
    q: "Scrum’da işi zaman kutularına bölen yinelemeli geliştirme aralığına ne denir?",
    t: "mcq",
    o: ["Sprint", "Milestone", "Release Train", "Kanban WIP", "Prototype"],
    a: "Sprint",
    difficulty: "easy",
    week: 8,
    topic: "Scrum - sprint",
    importance: "high",
    explanation: "Scrum’da sprint; planlama, geliştirme, gözden geçirme ve iyileştirme döngüsünün temel birimidir."
  },
  {
    q: "Kanban tahtasında işler genellikle “Yapılacak → Yapılıyor → ____” şeklinde ilerler. Boşluğa en uygun ifade hangisidir?",
    t: "mcq",
    o: ["Bitti", "Analiz", "Risk", "Backlog", "Test Yok"],
    a: "Bitti",
    difficulty: "easy",
    week: 8,
    topic: "Kanban - kolonlar",
    importance: "medium",
    explanation: "Kolonlar işin durumunu gösterir; amaç işi görünür ve yönetilebilir kılmaktır."
  },

  // =========================================================
  // ==== 9. HAFTA – Döngüsel/Evrimsel, Katmanlar, 2-Tier (10)
  // =========================================================
  {
    q: "Döngüsel (Cyclic) geliştirme modelinin ana fikri hangisidir?",
    t: "mcq",
    o: [
      "Tek seferde analiz yapıp bitirmek",
      "Her döngü sonunda geri bildirim alıp bir sonraki döngüde geliştirmek",
      "Testi tamamen kaldırmak",
      "Sadece prototip çizip kod yazmamak",
      "Sadece sunucu tarafını geliştirmek"
    ],
    a: "Her döngü sonunda geri bildirim alıp bir sonraki döngüde geliştirmek",
    difficulty: "easy",
    week: 9,
    topic: "Döngüsel model - temel fikir",
    importance: "high",
    explanation: "Cyclic modelde her tur, önceki turdan alınan geri bildirime göre iyileştirilir."
  },
  {
    q: "Döngüsel modelde aşağıdaki sıralamalardan hangisi daha doğrudur?",
    t: "mcq",
    o: [
      "Kodlama → bakım → analiz",
      "Gereksinim → tasarım/planlama → geliştirme → test/değerlendirme → geri bildirim",
      "Test → kodlama → hiç değerlendirme yok",
      "Sadece analiz → teslim",
      "Sadece bakım → teslim"
    ],
    a: "Gereksinim → tasarım/planlama → geliştirme → test/değerlendirme → geri bildirim",
    difficulty: "medium",
    week: 9,
    topic: "Döngüsel model - adımlar",
    importance: "high",
    explanation: "Her turda geliştirme ve değerlendirme yapılır, geri bildirimle bir sonraki tur şekillenir."
  },
  {
    q: "Evrimsel (Evolutionary) geliştirme için en doğru açıklama hangisidir?",
    t: "mcq",
    o: [
      "Ürün en baştan tam yapılır, sonra hiç değişmez",
      "Önce çekirdek bir sürüm çıkar, zamanla özellikler eklenerek evrilir",
      "Sadece tasarım yapılır, kod yazılmaz",
      "Test yapılmaz",
      "Sadece veritabanı geliştirilir"
    ],
    a: "Önce çekirdek bir sürüm çıkar, zamanla özellikler eklenerek evrilir",
    difficulty: "easy",
    week: 9,
    topic: "Evrimsel geliştirme",
    importance: "high",
    explanation: "Evrimsel yaklaşım küçük başlangıç + sürekli geliştirme fikrine dayanır."
  },
  {
    q: "Evrimsel geliştirmede kontrolsüz büyüme riskini azaltmak için en mantıklı yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Gereksinimleri hiç yazmamak",
      "Her yeni özellik için değerlendirme/önceliklendirme ve test sürecini sürdürmek",
      "Testleri kaldırmak",
      "Backlog’u tamamen kapatmak",
      "Sadece UI değiştirip iş mantığını hiç dokunmamak"
    ],
    a: "Her yeni özellik için değerlendirme/önceliklendirme ve test sürecini sürdürmek",
    difficulty: "medium",
    week: 9,
    topic: "Evrimsel - yönetim",
    importance: "medium",
    explanation: "Sürekli ekleme geldiği için öncelik, kalite ve test disiplinini korumak gerekir."
  },
  {
    q: "Katmanlı yaklaşımda UI (Sunum) katmanının temel görevi hangisidir?",
    t: "mcq",
    o: [
      "Veritabanı tablolarını oluşturmak",
      "Kullanıcı ile etkileşim ve verinin ekranda gösterilmesi",
      "Sunucu işletim sistemini kurmak",
      "Sadece log dosyası yönetmek",
      "Sadece ağ trafiğini izlemek"
    ],
    a: "Kullanıcı ile etkileşim ve verinin ekranda gösterilmesi",
    difficulty: "easy",
    week: 9,
    topic: "Katmanlar - UI",
    importance: "high",
    explanation: "UI katmanı kullanıcıdan giriş alır ve sonuçları kullanıcıya sunar."
  },
  {
    q: "Katmanlı mimaride “iş mantığı (application/business logic)” katmanı neyi yapar?",
    t: "mcq",
    o: [
      "Sadece buton rengi ayarlar",
      "Kurallar, süreçler ve hesaplamalar gibi iş kurallarını yürütür",
      "Sadece veritabanını yedekler",
      "Sadece HTML üretir",
      "Sadece ağ paketlerini işler"
    ],
    a: "Kurallar, süreçler ve hesaplamalar gibi iş kurallarını yürütür",
    difficulty: "medium",
    week: 9,
    topic: "Katmanlar - iş mantığı",
    importance: "high",
    explanation: "İş mantığı katmanı uygulamanın “kurallarını” ve süreç akışını barındırır."
  },
  {
    q: "2-Tier (İstemci–Sunucu) mimarinin en doğru tanımı hangisidir?",
    t: "mcq",
    o: [
      "İstemci ile sunucu hiç konuşmaz",
      "İstemci doğrudan sunucuya bağlanır ve veri/servis alır",
      "Sadece tek bilgisayarda çalışan sistemdir",
      "Sadece mikroservislerde kullanılır",
      "Sadece mobil uygulamalarda zorunludur"
    ],
    a: "İstemci doğrudan sunucuya bağlanır ve veri/servis alır",
    difficulty: "easy",
    week: 9,
    topic: "2-Tier - tanım",
    importance: "high",
    explanation: "2-Tier’de istemci uygulama ile sunucu (genellikle servis/veritabanı) doğrudan iletişim kurar."
  },
  {
    q: "2-Tier mimaride performansla ilgili olası bir sorun hangisidir?",
    t: "mcq",
    o: [
      "Hiç ağ gecikmesi olmaz",
      "Ağ gecikmesi ve sunucu yükü artabilir",
      "Test ihtiyacı kalmaz",
      "UI katmanı ortadan kalkar",
      "Veri asla bozulmaz"
    ],
    a: "Ağ gecikmesi ve sunucu yükü artabilir",
    difficulty: "medium",
    week: 9,
    topic: "2-Tier - dezavantaj",
    importance: "medium",
    explanation: "İstemci-sunucu iletişimi ağ üzerinden olduğundan gecikme ve yoğunlukta yük artışı görülebilir."
  },
  {
    q: "Katmanlı mimaride veriye erişim ve CRUD işlemleri genellikle hangi katmanda yapılır?",
    t: "mcq",
    o: ["UI (Sunum)", "İş Mantığı", "Veri Erişim (Data Access)", "Ağ Katmanı", "Test Katmanı"],
    a: "Veri Erişim (Data Access)",
    difficulty: "easy",
    week: 9,
    topic: "Katmanlar - data access",
    importance: "high",
    explanation: "Veri erişim katmanı veritabanı/depoya erişimi soyutlar ve düzenli hale getirir."
  },
  {
    q: "Döngüsel modelde her döngünün sonunda kullanıcı/müşteri ne alınır ve bir sonraki döngü buna göre şekillenir?",
    t: "mcq",
    o: ["Log", "Geri bildirim", "Derleme çıktısı", "Sadece tasarım", "Kod standardı"],
    a: "Geri bildirim",
    difficulty: "easy",
    week: 9,
    topic: "Döngüsel - geri bildirim",
    importance: "high",
    explanation: "Cyclic modelin ana motoru her turda geri bildirimle iyileştirmedir."
  },

  // =========================================================
  // ==== 10. HAFTA – UML (10 Soru) ==========================
  // =========================================================
  {
    q: "UML (Unified Modeling Language) ne için kullanılır?",
    t: "mcq",
    o: [
      "Sadece program derlemek için",
      "Sistemleri görsel olarak modellemek, tasarlamak ve dokümante etmek için",
      "Sadece veri tabanı yedeği almak için",
      "Sadece CSS yazmak için",
      "Sadece işletim sistemi kurmak için"
    ],
    a: "Sistemleri görsel olarak modellemek, tasarlamak ve dokümante etmek için",
    difficulty: "easy",
    week: 10,
    topic: "UML - amaç",
    importance: "high",
    explanation: "UML, karmaşık sistemleri diyagramlarla anlaşılır hale getirir ve ekip iletişimini güçlendirir."
  },
  {
    q: "UML’in “ortak dil” olması aşağıdakilerden hangisini en çok kolaylaştırır?",
    t: "mcq",
    o: [
      "Sunucu RAM’ini artırmayı",
      "Ekip içinde analiz/tasarım hakkında iletişim kurmayı",
      "Ekran parlaklığını ayarlamayı",
      "Kodu otomatik yazmayı",
      "Sadece UI renk seçimini"
    ],
    a: "Ekip içinde analiz/tasarım hakkında iletişim kurmayı",
    difficulty: "easy",
    week: 10,
    topic: "UML - iletişim",
    importance: "high",
    explanation: "Analist, geliştirici ve yönetici aynı diyagram diliyle konuşur; yanlış anlaşılmalar azalır."
  },
  {
    q: "UML diyagramlarının projeye katkılarından biri aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Testi tamamen kaldırır",
      "Erken aşamada tasarım hatalarını görmeye yardım eder",
      "Gereksinimleri gereksiz yapar",
      "Sunucu maliyetini otomatik düşürür",
      "İnternet bağlantısını hızlandırır"
    ],
    a: "Erken aşamada tasarım hatalarını görmeye yardım eder",
    difficulty: "medium",
    week: 10,
    topic: "UML - erken hata tespiti",
    importance: "high",
    explanation: "Modelleme ile sorunlar koda geçmeden fark edilebilir; düzeltme maliyeti düşer."
  },
  {
    q: "Bir sistemi modellemek için UML kullanırken doğru yaklaşım hangisidir?",
    t: "mcq",
    o: [
      "Önce kod yaz, sonra diyagram çiz",
      "Önce analiz yap, sonra uygun diyagram türünü seç ve diyagramı oluştur",
      "Sadece tek diyagram çizmek yeterlidir",
      "Diyagramları testten sonra çizmek zorunludur",
      "Diyagramlar sadece görsel amaçlıdır, içerik doldurulmaz"
    ],
    a: "Önce analiz yap, sonra uygun diyagram türünü seç ve diyagramı oluştur",
    difficulty: "medium",
    week: 10,
    topic: "UML - süreç",
    importance: "high",
    explanation: "Analiz → diyagram seçimi → oluşturma → detaylandırma sırası, modelin doğru ve faydalı olmasını sağlar."
  },
  {
    q: "Sınıf diyagramı (Class Diagram) çoğunlukla neyi göstermede kullanılır?",
    t: "mcq",
    o: [
      "Zaman çizelgesi",
      "Sınıflar, özellikler, metotlar ve aralarındaki ilişkiler",
      "Sunucu CPU kullanımı",
      "Sadece kullanıcı arayüzü renkleri",
      "Sadece dosya boyutları"
    ],
    a: "Sınıflar, özellikler, metotlar ve aralarındaki ilişkiler",
    difficulty: "easy",
    week: 10,
    topic: "UML - sınıf diyagramı",
    importance: "high",
    explanation: "Class diagram, sistemin yapısal (structure) görünümünü anlatır."
  },
  {
    q: "Durum diyagramı (State Diagram) en çok hangi tip bilgiyi gösterir?",
    t: "mcq",
    o: [
      "Bir varlığın zaman içinde farklı durumlara geçişini",
      "Sadece veritabanı tablolarını",
      "Sadece UI bileşenlerini",
      "Sadece sınıf ilişkilerini",
      "Sadece proje bütçesini"
    ],
    a: "Bir varlığın zaman içinde farklı durumlara geçişini",
    difficulty: "medium",
    week: 10,
    topic: "UML - durum diyagramı",
    importance: "medium",
    explanation: "State diagram; örn. Sipariş: Hazırlanıyor → Kargoda → Teslim edildi gibi geçişleri gösterir."
  },
  {
    q: "UML diyagramları dokümantasyon açısından neden değerlidir?",
    t: "mcq",
    o: [
      "Çünkü kodu tamamen değiştirir",
      "Çünkü sistemi herkes için anlaşılır şekilde kayıt altına alır",
      "Çünkü test yazmayı yasaklar",
      "Çünkü interneti hızlandırır",
      "Çünkü sadece görsel süs amaçlıdır"
    ],
    a: "Çünkü sistemi herkes için anlaşılır şekilde kayıt altına alır",
    difficulty: "easy",
    week: 10,
    topic: "UML - dokümantasyon",
    importance: "high",
    explanation: "Yeni ekip üyeleri ve paydaşlar, diyagramlarla sistemi daha hızlı kavrar."
  },
  {
    q: "UML, sistemleri ______ olarak modellemek için kullanılan standart bir dildir. Boşluğa en uygun kelime hangisidir?",
    t: "mcq",
    o: ["Görsel", "Rastgele", "Sadece metin", "Sadece kod", "Donanımsal"],
    a: "Görsel",
    difficulty: "easy",
    week: 10,
    topic: "UML - tanım",
    importance: "high",
    explanation: "UML; diyagramlar ile görsel modelleme yapmayı sağlar."
  },
  {
    q: "UML kullanırken önce ______ yapılır, sonra uygun diyagram türü seçilir. Boşluğa hangisi gelir?",
    t: "mcq",
    o: ["Analiz", "Formatlama", "Deploy", "Refactor", "Sadece test"],
    a: "Analiz",
    difficulty: "easy",
    week: 10,
    topic: "UML - süreç",
    importance: "medium",
    explanation: "Analiz, neyi modelleyeceğini netleştirir; doğru diyagram türünü seçmeyi kolaylaştırır."
  },
  {
    q: "UML’in ekip çalışmasına katkısı en iyi hangi seçenekle açıklanır?",
    t: "mcq",
    o: [
      "Herkesin farklı semboller kullanmasını sağlar",
      "Tüm paydaşların aynı modeli görüp aynı dili konuşmasını kolaylaştırır",
      "Sadece yöneticilerin anlayacağı şekilde tasarlanır",
      "Sadece testçilerin kullanacağı bir araçtır",
      "Sadece çizim programıdır"
    ],
    a: "Tüm paydaşların aynı modeli görüp aynı dili konuşmasını kolaylaştırır",
    difficulty: "medium",
    week: 10,
    topic: "UML - ekip çalışması",
    importance: "high",
    explanation: "Ortak gösterim, takım içinde tutarlılık ve hızlı karar almayı destekler."
  },

  // =========================================================
  // ==== 11. HAFTA – UI/UX + Mikroservis + SOA (10 Soru) =====
  // =========================================================
  {
    q: "UI (User Interface) en doğru hangi ifadeyle tanımlanır?",
    t: "mcq",
    o: [
      "Kullanıcının ürünü kullanırken hissettiği duygu",
      "Kullanıcının etkileşime geçtiği arayüz (ekran, buton, menü vb.)",
      "Sadece veritabanı şeması",
      "Sadece sunucu tarafı kodu",
      "Sadece test senaryoları"
    ],
    a: "Kullanıcının etkileşime geçtiği arayüz (ekran, buton, menü vb.)",
    difficulty: "easy",
    week: 11,
    topic: "UI - tanım",
    importance: "high",
    explanation: "UI, kullanıcının gördüğü ve dokunduğu arayüz elemanlarının tamamıdır."
  },
  {
    q: "UX (User Experience) aşağıdakilerden hangisini kapsar?",
    t: "mcq",
    o: [
      "Sadece sekme başlığını",
      "Kullanıcının ürünü kullanırken yaşadığı genel deneyimi (kolaylık, hız, memnuniyet vb.)",
      "Sadece ikon tasarımını",
      "Sadece veritabanını",
      "Sadece kod standardını"
    ],
    a: "Kullanıcının ürünü kullanırken yaşadığı genel deneyimi (kolaylık, hız, memnuniyet vb.)",
    difficulty: "easy",
    week: 11,
    topic: "UX - tanım",
    importance: "high",
    explanation: "UX, kullanıcı yolculuğunun tamamındaki deneyimi (hız, anlaşılabilirlik, memnuniyet) kapsar."
  },
  {
    q: "UI ve UX farkı için en doğru ifade hangisidir?",
    t: "mcq",
    o: [
      "UI deneyimdir, UX arayüzdür",
      "UI arayüzün kendisidir; UX kullanıcı deneyiminin bütünüdür",
      "İkisi tamamen aynı şeydir",
      "UI sadece mobil içindir, UX sadece web içindir",
      "UX sadece renk seçimiyle ilgilidir"
    ],
    a: "UI arayüzün kendisidir; UX kullanıcı deneyiminin bütünüdür",
    difficulty: "easy",
    week: 11,
    topic: "UI vs UX",
    importance: "high",
    explanation: "UI = yüzey; UX = o yüzeyle kullanım sürecinde yaşanan toplam deneyim."
  },
  {
    q: "UX tasarım sürecinde “kullanıcı araştırması” neden yapılır?",
    t: "mcq",
    o: [
      "Sunucu performansını artırmak için",
      "Kullanıcının ihtiyaçlarını, hedeflerini ve sorunlarını anlamak için",
      "Sadece renk paleti seçmek için",
      "Sadece veritabanı tasarlamak için",
      "Sadece kodu kısaltmak için"
    ],
    a: "Kullanıcının ihtiyaçlarını, hedeflerini ve sorunlarını anlamak için",
    difficulty: "medium",
    week: 11,
    topic: "UX - kullanıcı araştırması",
    importance: "high",
    explanation: "Araştırma, doğru problemi çözmeyi sağlar; UX kararları gerçek kullanıcı verisine dayanır."
  },
  {
    q: "Mikroservis mimarisi için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Uygulama tek parça (monolit) olmalıdır",
      "Uygulama küçük, bağımsız servisler halinde bölünür",
      "Servisler hiçbir şekilde iletişim kurmaz",
      "Tek bir veritabanı zorunludur",
      "Deploy (dağıtım) her zaman toplu yapılır"
    ],
    a: "Uygulama küçük, bağımsız servisler halinde bölünür",
    difficulty: "easy",
    week: 11,
    topic: "Mikroservis - tanım",
    importance: "high",
    explanation: "Mikroservis; servisleri bağımsız geliştirme/dağıtma/ölçekleme fikrine dayanır."
  },
  {
    q: "Mikroservislerde “hata izolasyonu” (fault isolation) ne sağlar?",
    t: "mcq",
    o: [
      "Bir servisteki sorun tüm sistemi her zaman çökertebilir",
      "Bir servisteki sorun diğer servisleri mümkün olduğunca az etkiler",
      "Test ihtiyacını kaldırır",
      "Veritabanını otomatik çoğaltır",
      "UI’ı otomatik çizer"
    ],
    a: "Bir servisteki sorun diğer servisleri mümkün olduğunca az etkiler",
    difficulty: "medium",
    week: 11,
    topic: "Mikroservis - hata izolasyonu",
    importance: "high",
    explanation: "Servisler ayrıldığı için bir servisin çökmesi tüm sistemi çökertmek zorunda değildir."
  },
  {
    q: "Mikroservislerde servisler arası iletişim genellikle hangi yöntemlerle yapılır?",
    t: "mcq",
    o: [
      "Sadece USB ile",
      "API çağrıları (HTTP/HTTPS) ve gerektiğinde mesajlaşma/RPC gibi yöntemlerle",
      "Sadece ekran görüntüsü ile",
      "Sadece e-posta ile",
      "Hiç iletişim kurulmaz"
    ],
    a: "API çağrıları (HTTP/HTTPS) ve gerektiğinde mesajlaşma/RPC gibi yöntemlerle",
    difficulty: "medium",
    week: 11,
    topic: "Mikroservis - iletişim",
    importance: "medium",
    explanation: "Servisler ayrı çalıştığı için API üzerinden veya mesajlaşma ile haberleşebilir."
  },
  {
    q: "Mikroservis mimaride “servis bazlı veritabanı” yaklaşımı neyi anlatır?",
    t: "mcq",
    o: [
      "Tüm servisler tek ortak veritabanı kullanmak zorundadır",
      "Her servisin kendi verisini yönetebilmesi ve gerekirse ayrı veritabanı kullanabilmesi",
      "Veritabanı kullanılmaması",
      "Sadece dosya sistemi kullanılması",
      "Verinin UI içinde tutulması"
    ],
    a: "Her servisin kendi verisini yönetebilmesi ve gerekirse ayrı veritabanı kullanabilmesi",
    difficulty: "hard",
    week: 11,
    topic: "Mikroservis - veri bağımsızlığı",
    importance: "medium",
    explanation: "Servis bağımsızlığı, veri bağımsızlığıyla güçlenir; servis kendi verisini sahiplenir."
  },
  {
    q: "SOA (Service-Oriented Architecture) yaklaşımında “interface (arabirim)” kavramı en çok neyi ifade eder?",
    t: "mcq",
    o: [
      "Servisin veritabanı dosyasını",
      "Servisin dışarıya sunduğu hizmeti nasıl çağıracağını tanımlayan sözleşmeyi",
      "Servisin ekran tasarımını",
      "Servisin sunucu IP adresini",
      "Servisin renk paletini"
    ],
    a: "Servisin dışarıya sunduğu hizmeti nasıl çağıracağını tanımlayan sözleşmeyi",
    difficulty: "medium",
    week: 11,
    topic: "SOA - interface",
    importance: "high",
    explanation: "Interface, servislerin nasıl kullanılacağını standartlaştırır; entegrasyonu kolaylaştırır."
  },
  {
    q: "Aşağıdakilerden hangisi Mikroservis mimarinin olası bir zorluğudur?",
    t: "mcq",
    o: [
      "Yönetim ve operasyonel karmaşıklığın artması (izleme, dağıtım, ağ iletişimi)",
      "Hiçbir şekilde ölçeklenememesi",
      "Sadece tek teknoloji ile yazılabilmesi",
      "API kullanamaması",
      "Test yapılamaması"
    ],
    a: "Yönetim ve operasyonel karmaşıklığın artması (izleme, dağıtım, ağ iletişimi)",
    difficulty: "medium",
    week: 11,
    topic: "Mikroservis - zorluklar",
    importance: "high",
    explanation: "Servis sayısı arttıkça izleme, loglama, dağıtım ve servis iletişimi gibi operasyonel işler büyür."
  }
];
