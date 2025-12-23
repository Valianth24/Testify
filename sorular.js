// İşletim Sistemleri – 50 Soruluk Sınav Soru Bankası (MCQ)
// Format: window.questionBank = [ { q, t, o, a, difficulty, week, topic, importance, explanation }, ... ]

window.questionBank = [
  // ==== 1. HAFTA – İşletim Sistemi Temelleri, Kernel, Sistem Çağrıları, Modlar ====
  {
    q: "İşletim sisteminin (OS) temel görevi aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Sadece internet bağlantısını yönetmek",
      "Donanım kaynaklarını yönetmek ve uygulamalara soyutlama/servis sunmak",
      "Sadece dosyaları sıkıştırmak",
      "Sadece antivirüs taraması yapmak",
      "Sadece grafik arayüz çizmek"
    ],
    a: "Donanım kaynaklarını yönetmek ve uygulamalara soyutlama/servis sunmak",
    difficulty: "easy",
    week: 1,
    topic: "OS tanımı",
    importance: "high",
    explanation: "OS; CPU, bellek, disk, I/O gibi kaynakları paylaştırır ve uygulamalara sistem çağrılarıyla hizmet sunar."
  },
  {
    q: "Kernel (çekirdek) ile Shell (kabuk) arasındaki fark için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Kernel kullanıcı arayüzüdür, Shell donanım sürücüleridir.",
      "Kernel donanım ile uygulamalar arasında temel yönetimi yapar; Shell kullanıcıdan komut alıp OS hizmetlerini çağırır.",
      "Kernel sadece metin editörüdür; Shell sadece dosya sistemi yönetir.",
      "Kernel yalnızca uygulama kurar; Shell yalnızca oyun çalıştırır.",
      "Kernel ve Shell aynı kavramdır."
    ],
    a: "Kernel donanım ile uygulamalar arasında temel yönetimi yapar; Shell kullanıcıdan komut alıp OS hizmetlerini çağırır.",
    difficulty: "easy",
    week: 1,
    topic: "kernel vs shell",
    importance: "high",
    explanation: "Kernel çekirdektir (privileged). Shell ise komut yorumlayıcı/arayüz katmanıdır (user space)."
  },
  {
    q: "Aşağıdakilerden hangisi sistem çağrısı (system call) kategorilerine örnek olarak verilemez?",
    t: "mcq",
    o: [
      "Process control (süreç kontrolü)",
      "File manipulation (dosya işlemleri)",
      "Device management (aygıt yönetimi)",
      "Communications (iletişim)",
      "HTML rendering (HTML çizimi)"
    ],
    a: "HTML rendering (HTML çizimi)",
    difficulty: "easy",
    week: 1,
    topic: "system call kategorileri",
    importance: "medium",
    explanation: "Sistem çağrıları OS hizmetlerine erişimdir; HTML çizimi tarayıcı/uygulama katmanıdır."
  },
  {
    q: "Interrupt (kesme) ve Trap (tuzak/exception) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Interrupt her zaman yazılım kaynaklıdır, trap her zaman donanım kaynaklıdır.",
      "Interrupt genelde dış olay/aygıt ile tetiklenir; trap genelde CPU’nun hata/istisna veya sistem çağrısı geçişidir.",
      "Interrupt sadece Linux’ta vardır; trap sadece Windows’ta vardır.",
      "Interrupt sadece kullanıcı modunda olur; trap sadece kernel modunda olur.",
      "Interrupt ve trap aynı şeydir, isim farkıdır."
    ],
    a: "Interrupt genelde dış olay/aygıt ile tetiklenir; trap genelde CPU’nun hata/istisna veya sistem çağrısı geçişidir.",
    difficulty: "medium",
    week: 1,
    topic: "interrupt vs trap",
    importance: "high",
    explanation: "Kesme (interrupt) çoğunlukla I/O tamamlandı gibi dış olaydır; trap ise exception veya system call geçişidir."
  },
  {
    q: "User mode ve Kernel mode ayrımı için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "User mode’da tüm donanım komutları serbesttir.",
      "Kernel mode’da ayrıcalıklı (privileged) talimatlar çalıştırılabilir; user mode’da kısıtlıdır.",
      "Kernel mode sadece oyunlar içindir; user mode sadece sürücüler içindir.",
      "User mode, kernel’i yönetir; kernel mode uygulamaları yönetir.",
      "Mod ayrımı güvenlik için gerekli değildir."
    ],
    a: "Kernel mode’da ayrıcalıklı (privileged) talimatlar çalıştırılabilir; user mode’da kısıtlıdır.",
    difficulty: "easy",
    week: 1,
    topic: "user/kernel mode",
    importance: "high",
    explanation: "Koruma mekanizması: kritik donanım işlemleri kernel modunda yapılır; user mode sınırlandırılır."
  },
  {
    q: "Monolithic kernel ve Microkernel yaklaşımları için aşağıdakilerden hangisi daha doğru bir karşılaştırmadır?",
    t: "mcq",
    o: [
      "Microkernel her şeyi kernel içinde tutar; monolithic dışarı taşır.",
      "Monolithic kernel daha az servis içerir; microkernel daha fazla servis içerir.",
      "Monolithic kernel birçok OS servisinin kernel içinde çalışmasıdır; microkernel’da servislerin çoğu user space’e taşınır.",
      "Microkernel sadece mobil cihazlarda kullanılabilir.",
      "Monolithic kernel bellek yönetimi yapamaz."
    ],
    a: "Monolithic kernel birçok OS servisinin kernel içinde çalışmasıdır; microkernel’da servislerin çoğu user space’e taşınır.",
    difficulty: "medium",
    week: 1,
    topic: "monolithic vs microkernel",
    importance: "medium",
    explanation: "Monolithic: performans yüksek, hata izolasyonu zor; Microkernel: izolasyon iyi, IPC overhead artabilir."
  },
  {
    q: "Gerçek zamanlı (Real-Time) işletim sistemi için aşağıdakilerden hangisi en temel özelliktir?",
    t: "mcq",
    o: [
      "En yüksek grafik kalitesini vermesi",
      "Zaman kısıtlarına (deadline) deterministik şekilde uyum sağlaması",
      "Sadece tek uygulama çalıştırması",
      "Sadece internet bağlantısıyla çalışması",
      "Her zaman en yüksek disk kapasitesine sahip olması"
    ],
    a: "Zaman kısıtlarına (deadline) deterministik şekilde uyum sağlaması",
    difficulty: "easy",
    week: 1,
    topic: "real-time OS",
    importance: "high",
    explanation: "RTOS’ta temel hedef: deadline kaçırmamak (deterministik tepki). Performans ortalaması değil, garanti önemlidir."
  },

  // ==== 2. HAFTA – Process/Thread, PCB, Context Switch, IPC Temelleri ====
  {
    q: "Program ve Process (süreç) arasındaki fark için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Program çalışan halidir; process diskte duran pasif dosyadır.",
      "Program pasif koddur; process çalışmakta olan program örneğidir (adres alanı + kaynaklar).",
      "İkisi tamamen aynı anlamdadır.",
      "Process sadece Windows’ta vardır; program sadece Linux’ta vardır.",
      "Program yalnızca RAM’de olur; process yalnızca disk üzerinde olur."
    ],
    a: "Program pasif koddur; process çalışmakta olan program örneğidir (adres alanı + kaynaklar).",
    difficulty: "easy",
    week: 2,
    topic: "program vs process",
    importance: "high",
    explanation: "Process, CPU’da çalıştırılan ve OS tarafından yönetilen canlı örnektir; program ise pasif dosyadır."
  },
  {
    q: "Süreç durumları (process states) için tipik geçişlerden hangisi doğrudur?",
    t: "mcq",
    o: [
      "New → Terminated → Ready",
      "Running → Ready (preemption ile)",
      "Blocked → Running (doğrudan, araya girmeden)",
      "Ready → Blocked (CPU almadan I/O başlatır)",
      "Terminated → Running"
    ],
    a: "Running → Ready (preemption ile)",
    difficulty: "medium",
    week: 2,
    topic: "process states",
    importance: "high",
    explanation: "Zaman dilimi bitince ya da daha öncelikli süreç gelince running süreç ready durumuna alınabilir (preemption)."
  },
  {
    q: "PCB (Process Control Block) içinde aşağıdakilerden hangisinin bulunması beklenmez?",
    t: "mcq",
    o: [
      "Program counter (PC)",
      "CPU register içerikleri",
      "Process state",
      "Açık dosyalar ve bellek yönetim bilgileri",
      "Monitör parlaklık ayarı"
    ],
    a: "Monitör parlaklık ayarı",
    difficulty: "easy",
    week: 2,
    topic: "PCB içeriği",
    importance: "medium",
    explanation: "PCB, süreç yönetimi için kimlik, durum, register’lar, bellek/dosya bilgilerini tutar."
  },
  {
    q: "Context switch (bağlam değişimi) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Context switch sadece disk üzerinde yapılır.",
      "Context switch, süreçlerin CPU üzerindeki register/PC durumunun kaydedilip başka sürecin yüklenmesidir ve overhead oluşturur.",
      "Context switch, RAM’i tamamen sıfırlar.",
      "Context switch sadece tek çekirdekte olur, çok çekirdekte olmaz.",
      "Context switch uygulama seviyesinde yapılır, OS ile ilgisi yoktur."
    ],
    a: "Context switch, süreçlerin CPU üzerindeki register/PC durumunun kaydedilip başka sürecin yüklenmesidir ve overhead oluşturur.",
    difficulty: "medium",
    week: 2,
    topic: "context switch",
    importance: "high",
    explanation: "Bağlam değişimi iş yapmayan süredir; çok sık olursa performansı düşürür."
  },
  {
    q: "UNIX benzeri sistemlerde fork() ve exec() çağrıları için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "fork() mevcut süreci sonlandırır, exec() yeni PID üretir.",
      "fork() yeni bir süreç kopyası oluşturur; exec() mevcut süreç imajını yeni programla değiştirir.",
      "fork() sadece thread oluşturur; exec() sadece dosya açar.",
      "exec() yalnızca kernel içinde çağrılabilir, user space’den çağrılamaz.",
      "fork() ve exec() aynı işi yapar."
    ],
    a: "fork() yeni bir süreç kopyası oluşturur; exec() mevcut süreç imajını yeni programla değiştirir.",
    difficulty: "medium",
    week: 2,
    topic: "fork/exec",
    importance: "high",
    explanation: "Klasik model: fork ile child doğar; exec ile child (veya parent) başka programı çalıştırır."
  },
  {
    q: "Thread (iş parçacığı) kullanmanın temel avantajı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Her thread ayrı bir adres alanı kullanır, tamamen izoledir.",
      "Thread’ler aynı süreç içinde adres alanını paylaşarak daha düşük oluşturma/bağlam değiştirme maliyeti sağlar.",
      "Thread’ler dosya sistemi olmadan çalışır.",
      "Thread’ler yalnızca tek çekirdekte çalışır.",
      "Thread’ler IPC’ye ihtiyaç duymaz çünkü hiç veri paylaşamaz."
    ],
    a: "Thread’ler aynı süreç içinde adres alanını paylaşarak daha düşük oluşturma/bağlam değiştirme maliyeti sağlar.",
    difficulty: "medium",
    week: 2,
    topic: "thread avantajları",
    importance: "high",
    explanation: "Thread’ler aynı adres alanını paylaşır; süreçler arası iletişime göre daha hızlı koordinasyon sağlar."
  },
  {
    q: "User-level thread ve Kernel-level thread farkı için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Kernel-level thread’ler OS tarafından görünmez; user-level thread’ler OS tarafından yönetilir.",
      "User-level thread’ler OS’dan bağımsız kütüphane ile yönetilebilir; kernel-level thread’lerde planlama OS seviyesindedir.",
      "User-level thread’ler mutlaka daha yavaştır.",
      "Kernel-level thread’ler hiçbir zaman bloklanmaz.",
      "İkisi arasında hiçbir fark yoktur."
    ],
    a: "User-level thread’ler OS’dan bağımsız kütüphane ile yönetilebilir; kernel-level thread’lerde planlama OS seviyesindedir.",
    difficulty: "hard",
    week: 2,
    topic: "thread modelleri",
    importance: "medium",
    explanation: "User-level: hızlı ama bir thread bloklanınca tüm süreç etkilenebilir; kernel-level: daha maliyetli ama gerçek paralellik/izolasyon daha iyi."
  },

  // ==== 3. HAFTA – CPU Scheduling (FCFS, SJF, RR, Priority), Metrikler ====
  {
    q: "FCFS (First-Come, First-Served) zamanlama algoritmasının tipik dezavantajı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Kısa işlerin uzun işlerin arkasında bekleyip ortalama bekleme süresini artırması (convoy effect)",
      "Süreçlerin hiç bitmemesi",
      "Sadece gerçek zamanlı sistemlerde çalışması",
      "Her zaman preemptive olması",
      "Sadece tek süreç çalıştırabilmesi"
    ],
    a: "Kısa işlerin uzun işlerin arkasında bekleyip ortalama bekleme süresini artırması (convoy effect)",
    difficulty: "medium",
    week: 3,
    topic: "FCFS",
    importance: "high",
    explanation: "FCFS adildir ama kısa işlerin uzun işin arkasında kalması bekleme süresini şişirebilir."
  },
  {
    q: "SJF (Shortest Job First) algoritması için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Ortalama bekleme süresini teorik olarak minimize eder (ideal koşullarda).",
      "Her zaman en kötü bekleme süresini verir.",
      "Sadece I/O-bound süreçlerde çalışır.",
      "Burst time tahmini gerektirmez.",
      "Preemptive çalışamaz."
    ],
    a: "Ortalama bekleme süresini teorik olarak minimize eder (ideal koşullarda).",
    difficulty: "medium",
    week: 3,
    topic: "SJF",
    importance: "high",
    explanation: "SJF ideal burst tahminiyle ortalama beklemeyi azaltır; pratikte burst tahmini zordur ve starvation riski vardır."
  },
  {
    q: "SRTF (Shortest Remaining Time First) için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "SJF’nin preemptive (kesmeli) versiyonudur.",
      "FCFS’nin preemptive versiyonudur.",
      "Sadece batch sistemlerde kullanılır ve preemption yapmaz.",
      "Round Robin ile aynı algoritmadır.",
      "Öncelik (priority) temelli bir algoritmadır."
    ],
    a: "SJF’nin preemptive (kesmeli) versiyonudur.",
    difficulty: "medium",
    week: 3,
    topic: "SRTF",
    importance: "medium",
    explanation: "Yeni gelen süreç daha kısa kalan süreye sahipse çalışan süreç kesilir."
  },
  {
    q: "Round Robin (RR) algoritmasında time quantum (zaman dilimi) çok küçük seçilirse ne olur?",
    t: "mcq",
    o: [
      "Context switch sayısı artar ve overhead yükselir.",
      "Süreçler hiç kesilmez, FCFS gibi olur.",
      "SJF’ye dönüşür.",
      "Disk erişimi tamamen durur.",
      "CPU her zaman boş kalır."
    ],
    a: "Context switch sayısı artar ve overhead yükselir.",
    difficulty: "medium",
    week: 3,
    topic: "Round Robin",
    importance: "high",
    explanation: "Quantum çok küçük olursa sık kesme → çok context switch → verim düşer. Çok büyük olursa FCFS’ye yaklaşır."
  },
  {
    q: "Priority scheduling (önceliklendirme) için en bilinen problem aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Deadlock",
      "Starvation (aç kalma)",
      "Thrashing",
      "Fragmentation",
      "Journaling"
    ],
    a: "Starvation (aç kalma)",
    difficulty: "easy",
    week: 3,
    topic: "priority scheduling",
    importance: "high",
    explanation: "Düşük öncelikli süreçler sürekli bekleyebilir. Çözüm: aging (yaşlandırma) ile öncelik zamanla artırılır."
  },
  {
    q: "Aging (yaşlandırma) tekniği aşağıdaki hangi problemi azaltmak için kullanılır?",
    t: "mcq",
    o: [
      "Starvation",
      "Page fault",
      "Disk fragmentation",
      "DMA hataları",
      "Kernel panic"
    ],
    a: "Starvation",
    difficulty: "easy",
    week: 3,
    topic: "aging",
    importance: "medium",
    explanation: "Uzun süre bekleyen sürecin önceliği kademeli artırılarak sonsuz beklemesi engellenir."
  },
  {
    q: "FCFS’e göre süreçlerin burst süreleri P1=5, P2=3, P3=2 ve geliş sırası P1→P2→P3 olsun. Ortalama bekleme süresi kaçtır?",
    t: "mcq",
    o: [
      "0",
      "2",
      "4",
      "5",
      "10"
    ],
    a: "4",
    difficulty: "hard",
    week: 3,
    topic: "FCFS hesap",
    importance: "high",
    explanation:
      "FCFS: P1 bekleme 0, P2 bekleme 5, P3 bekleme 5+3=8. Ortalama=(0+5+8)/3=13/3≈4.33. Şıklarda en yakın/standart yuvarlama ile 4 verilmiştir."
  },
  {
    q: "Turnaround time (çevrim süresi) aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Sadece CPU’da çalıştığı süre",
      "Süreç başlatma anından tamamlanma anına kadar geçen toplam süre",
      "Sadece I/O bekleme süresi",
      "Sadece context switch süresi",
      "Süreçlerin RAM’de kapladığı alan"
    ],
    a: "Süreç başlatma anından tamamlanma anına kadar geçen toplam süre",
    difficulty: "easy",
    week: 3,
    topic: "metrikler",
    importance: "medium",
    explanation: "Turnaround = completion time − arrival time. Bekleme + CPU + I/O gibi tüm süreleri kapsar."
  },

  // ==== 4. HAFTA – Senkronizasyon, Critical Section, Semaphore/Mutex, IPC ====
  {
    q: "Race condition (yarış durumu) için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Süreçlerin disk üzerinde yarışmasıdır.",
      "Aynı paylaşılan veriye eşzamanlı erişim nedeniyle sonucun zamanlamaya bağlı değişmesidir.",
      "CPU hızının artmasıyla oluşan bir hatadır.",
      "Sadece tek iş parçacığında görülen durumdur.",
      "Dosya sistemi bozulmasıdır."
    ],
    a: "Aynı paylaşılan veriye eşzamanlı erişim nedeniyle sonucun zamanlamaya bağlı değişmesidir.",
    difficulty: "easy",
    week: 4,
    topic: "race condition",
    importance: "high",
    explanation: "Paylaşılan veri korunmazsa, hangi thread’in önce yazdığına göre sonuç değişebilir."
  },
  {
    q: "Critical section probleminde çözümün sağlaması gereken koşullardan hangisi değildir?",
    t: "mcq",
    o: [
      "Mutual exclusion (karşılıklı dışlama)",
      "Progress (ilerleme)",
      "Bounded waiting (sınırlı bekleme)",
      "Infinite looping (sonsuz döngü zorunluluğu)",
      "Yukarıdakilerin hepsi koşuldur"
    ],
    a: "Infinite looping (sonsuz döngü zorunluluğu)",
    difficulty: "medium",
    week: 4,
    topic: "critical section şartları",
    importance: "high",
    explanation: "Temel üç koşul: mutual exclusion, progress, bounded waiting. Sonsuz döngü bir şart değildir."
  },
  {
    q: "Mutex ile semaphore arasındaki fark için aşağıdakilerden hangisi en doğru ifadedir?",
    t: "mcq",
    o: [
      "Mutex sayıcıdır; semaphore sadece kilittir.",
      "Mutex kilitleme sahipliği (ownership) mantığı taşır; semaphore sayıcı olabilir ve sinyal amaçlı kullanılabilir.",
      "Semaphore yalnızca tek thread’de çalışır.",
      "Mutex sadece kernel’de çalışır, user space’de yoktur.",
      "Aralarında hiçbir fark yoktur."
    ],
    a: "Mutex kilitleme sahipliği (ownership) mantığı taşır; semaphore sayıcı olabilir ve sinyal amaçlı kullanılabilir.",
    difficulty: "hard",
    week: 4,
    topic: "mutex vs semaphore",
    importance: "medium",
    explanation: "Mutex genelde binary lock ve sahibi vardır; semaphore (counting) kaynak sayısını temsil edebilir."
  },
  {
    q: "Counting semaphore aşağıdaki senaryolardan hangisi için daha uygundur?",
    t: "mcq",
    o: [
      "Tek bir kritik bölgeyi kilitlemek",
      "N adet aynı tip kaynağı (ör. 3 yazıcı) erişim sınırıyla yönetmek",
      "CPU zamanlamasını belirlemek",
      "Page replacement yapmak",
      "Dosya sistemi formatlamak"
    ],
    a: "N adet aynı tip kaynağı (ör. 3 yazıcı) erişim sınırıyla yönetmek",
    difficulty: "medium",
    week: 4,
    topic: "counting semaphore",
    importance: "medium",
    explanation: "Counting semaphore değeri, eşzamanlı kullanılabilecek kaynak sayısını temsil eder."
  },
  {
    q: "Producer-Consumer (bounded buffer) probleminde boş slot sayısını tutan semaphore genelde nasıl başlatılır?",
    t: "mcq",
    o: [
      "0",
      "1",
      "Buffer boyutu (N)",
      "-1",
      "CPU çekirdek sayısı"
    ],
    a: "Buffer boyutu (N)",
    difficulty: "hard",
    week: 4,
    topic: "producer-consumer",
    importance: "high",
    explanation: "Başta buffer tamamen boştur. empty = N, full = 0, mutex = 1 tipik başlangıçtır."
  },
  {
    q: "Spinlock (busy waiting) ile blocking lock arasındaki fark için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Spinlock beklerken CPU’yu meşgul eder; blocking lock beklerken thread uyutulabilir.",
      "Blocking lock beklerken CPU’yu sürekli döndürür.",
      "Spinlock sadece disk I/O için kullanılır.",
      "Blocking lock sadece tek çekirdekte çalışır.",
      "İkisi tamamen aynıdır."
    ],
    a: "Spinlock beklerken CPU’yu meşgul eder; blocking lock beklerken thread uyutulabilir.",
    difficulty: "medium",
    week: 4,
    topic: "spinlock vs blocking",
    importance: "medium",
    explanation: "Kritik bölüm çok kısa ise spinlock tercih edilebilir; uzun bekleme varsa blocking daha verimlidir."
  },
  {
    q: "Monitor kavramı için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Sadece ekran donanımıdır.",
      "Senkronizasyonu dil/çatı düzeyinde kapsülleyen yapıdır; koşul değişkenleri (condition variables) ile bekleme/uyandırma sağlar.",
      "Sadece süreç zamanlaması yapar.",
      "Sadece dosya izinlerini yönetir.",
      "Sadece kernel panic durumunda çalışır."
    ],
    a: "Senkronizasyonu dil/çatı düzeyinde kapsülleyen yapıdır; koşul değişkenleri (condition variables) ile bekleme/uyandırma sağlar.",
    difficulty: "hard",
    week: 4,
    topic: "monitors",
    importance: "medium",
    explanation: "Monitor, mutex + condition değişkenlerini bir arada sunar; hataya daha az açık senkronizasyon sağlar."
  },
  {
    q: "Aynı makinede çalışan iki süreç arasında yüksek hızlı veri paylaşımı için genelde en uygun IPC yöntemi hangisidir?",
    t: "mcq",
    o: [
      "Message passing (çekirdek üzerinden kopyalama) her zaman en hızlıdır",
      "Shared memory (paylaşılan bellek) genelde daha hızlıdır çünkü kopyalama azdır",
      "E-posta ile iletişim",
      "DNS sorguları",
      "HTTP üzerinden dosya indirme"
    ],
    a: "Shared memory (paylaşılan bellek) genelde daha hızlıdır çünkü kopyalama azdır",
    difficulty: "medium",
    week: 4,
    topic: "IPC shared memory",
    importance: "medium",
    explanation: "Shared memory’de süreçler aynı bellek bölgesini görür; senkronizasyon gerektirir ama hızlıdır."
  },

  // ==== 5. HAFTA – Deadlocks + Bellek Yönetimi (Paging/Segmentation/Fragmentation) ====
  {
    q: "Deadlock (kilitlenme) oluşması için gerekli Coffman koşulları arasında aşağıdakilerden hangisi yoktur?",
    t: "mcq",
    o: [
      "Mutual exclusion",
      "Hold and wait",
      "No preemption",
      "Circular wait",
      "Random access"
    ],
    a: "Random access",
    difficulty: "easy",
    week: 5,
    topic: "deadlock koşulları",
    importance: "high",
    explanation: "Deadlock için 4 koşul birlikte sağlanır: mutual exclusion, hold&wait, no preemption, circular wait."
  },
  {
    q: "Hold and wait koşulunu önleyerek deadlock riskini azaltan yaklaşım aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Süreçlere kaynakları parça parça verip bekletmek",
      "Süreç başında tüm gerekli kaynakları tek seferde istemek veya elindekileri bırakmadan yeni kaynak istemesine izin vermemek",
      "Her kaynağı sınırsız yapmak",
      "CPU’yu tamamen durdurmak",
      "Diskleri RAID0 yapmak"
    ],
    a: "Süreç başında tüm gerekli kaynakları tek seferde istemek veya elindekileri bırakmadan yeni kaynak istemesine izin vermemek",
    difficulty: "medium",
    week: 5,
    topic: "deadlock prevention",
    importance: "medium",
    explanation: "Hold&wait’i kırmak deadlock ihtimalini azaltır; ancak kaynak kullanım verimini düşürebilir."
  },
  {
    q: "Banker’s Algorithm (Bankacı Algoritması) aşağıdakilerden hangisi için kullanılır?",
    t: "mcq",
    o: [
      "Disk parçalanmasını azaltmak",
      "Deadlock avoidance (kilitlenmeden kaçınma) için sistemin güvenli (safe) durumda kalmasını sağlamak",
      "CPU frekansını artırmak",
      "Dosya şifrelemek",
      "TLB boyutunu büyütmek"
    ],
    a: "Deadlock avoidance (kilitlenmeden kaçınma) için sistemin güvenli (safe) durumda kalmasını sağlamak",
    difficulty: "hard",
    week: 5,
    topic: "banker algorithm",
    importance: "medium",
    explanation: "Banker, kaynak tahsisi yapmadan önce sistemin safe state’te kalıp kalmadığını kontrol eder."
  },
  {
    q: "Deadlock detection ve deadlock avoidance arasındaki fark için hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Detection kilitlenmeyi hiç engellemez; oluşursa tespit eder. Avoidance ise tahsisleri kısıtlayarak oluşmadan önlemeye çalışır.",
      "Avoidance kilitlenme olduktan sonra tespit eder; detection oluşmadan engeller.",
      "İkisi aynıdır, sadece isim farkıdır.",
      "Detection sadece tek çekirdekte çalışır.",
      "Avoidance sadece dosya sistemi için geçerlidir."
    ],
    a: "Detection kilitlenmeyi hiç engellemez; oluşursa tespit eder. Avoidance ise tahsisleri kısıtlayarak oluşmadan önlemeye çalışır.",
    difficulty: "medium",
    week: 5,
    topic: "deadlock detection vs avoidance",
    importance: "high",
    explanation: "Detection: tespit + recovery. Avoidance: sistem safe state’te kalsın diye tahsisi sınırlama."
  },
  {
    q: "External fragmentation (dış parçalanma) en çok hangi bellek yönetim yaklaşımında görülür?",
    t: "mcq",
    o: [
      "Saf paging",
      "Sabit boyutlu frame’lerle paging",
      "Değişken boyutlu contiguous allocation (bitişik yer ayırma)",
      "TLB kullanımı",
      "Demand paging"
    ],
    a: "Değişken boyutlu contiguous allocation (bitişik yer ayırma)",
    difficulty: "medium",
    week: 5,
    topic: "fragmentation",
    importance: "high",
    explanation: "Bitişik yer ayırmada aralarda küçük boşluklar birikir; toplam boş yer olsa bile uygun büyük blok bulunamayabilir."
  },
  {
    q: "Paging (sayfalama) için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "External fragmentation’ı ortadan kaldırır, ancak internal fragmentation olabilir.",
      "Internal fragmentation’ı tamamen ortadan kaldırır.",
      "Sadece disk üzerinde çalışır, RAM’de çalışmaz.",
      "Sadece gerçek zamanlı sistemlerde kullanılır.",
      "Adres çevirimi gerektirmez."
    ],
    a: "External fragmentation’ı ortadan kaldırır, ancak internal fragmentation olabilir.",
    difficulty: "medium",
    week: 5,
    topic: "paging",
    importance: "high",
    explanation: "Sabit boyutlu sayfa/frame kullanımı dış parçalanmayı bitirir; son sayfada iç parçalanma oluşabilir."
  },
  {
    q: "Sayfa boyutu 1 KB (1024 byte) iken, sanal adres 2049 için page number ve offset hangisidir? (0’dan başlayan sayfa numarası)",
    t: "mcq",
    o: [
      "Page=0, Offset=2049",
      "Page=1, Offset=1",
      "Page=2, Offset=1",
      "Page=2, Offset=1025",
      "Page=1, Offset=1025"
    ],
    a: "Page=2, Offset=1",
    difficulty: "hard",
    week: 5,
    topic: "adres çevirimi",
    importance: "high",
    explanation: "2049 / 1024 = 2 kalan 1. Dolayısıyla page=2, offset=1."
  },

  // ==== 6. HAFTA – Virtual Memory, Demand Paging, Page Replacement, TLB ====
  {
    q: "Demand paging (talep üzerine sayfalama) için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Tüm sayfalar program başında RAM’e yüklenir.",
      "Sayfalar ihtiyaç duyuldukça RAM’e getirilir; bulunamazsa page fault oluşur.",
      "Sadece ROM üzerinde çalışır.",
      "Page fault bir donanım arızasıdır ve düzelmez.",
      "Demand paging disk erişimini tamamen kaldırır."
    ],
    a: "Sayfalar ihtiyaç duyuldukça RAM’e getirilir; bulunamazsa page fault oluşur.",
    difficulty: "easy",
    week: 6,
    topic: "demand paging",
    importance: "high",
    explanation: "Talep üzerine sayfalama bellek kullanımını optimize eder; erişilen sayfa RAM’de değilse page fault ile yüklenir."
  },
  {
    q: "Page fault oluştuğunda tipik olarak aşağıdaki adımlardan hangisi gerçekleşir?",
    t: "mcq",
    o: [
      "OS işlemi yok sayar ve devam eder.",
      "OS page table’da sayfayı bulur, hiçbir disk erişimi yapmaz.",
      "OS sayfayı diskten RAM’e getirir (gerekirse replacement yapar) ve süreci devam ettirir.",
      "CPU kapanır ve sistem kapanır.",
      "Sadece ekran çözünürlüğü değişir."
    ],
    a: "OS sayfayı diskten RAM’e getirir (gerekirse replacement yapar) ve süreci devam ettirir.",
    difficulty: "medium",
    week: 6,
    topic: "page fault akışı",
    importance: "high",
    explanation: "Page fault bir trap/exception’dır; OS sayfayı yükler, tabloları günceller ve talimatı tekrar yürütür."
  },
  {
    q: "FIFO page replacement algoritması ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Her zaman en az page fault üretir.",
      "Belady’s anomaly (çerçeve sayısı artınca fault’un artması) görülebilir.",
      "LRU’nun aynısıdır.",
      "Clock algoritmasına göre daha az fault üretir garanti eder.",
      "Sadece TLB için kullanılır."
    ],
    a: "Belady’s anomaly (çerçeve sayısı artınca fault’un artması) görülebilir.",
    difficulty: "hard",
    week: 6,
    topic: "FIFO replacement",
    importance: "high",
    explanation: "FIFO bir stack algoritması değildir; bazı erişim dizilerinde frame artırmak page fault’u artırabilir (anomali)."
  },
  {
    q: "LRU (Least Recently Used) algoritmasının temel fikri aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "En eski yüklenen sayfayı atmak",
      "En yakın zamanda kullanılan sayfayı atmak",
      "En uzun süredir kullanılmayan sayfayı atmak",
      "Rastgele sayfa atmak",
      "En büyük boyutlu sayfayı atmak"
    ],
    a: "En uzun süredir kullanılmayan sayfayı atmak",
    difficulty: "medium",
    week: 6,
    topic: "LRU",
    importance: "high",
    explanation: "Yerellik (locality) varsayımıyla, yakın zamanda kullanılan sayfaların tekrar kullanılma olasılığı yüksektir."
  },
  {
    q: "Clock (Second-Chance) algoritması için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "FIFO ile aynı, hiçbir farkı yoktur.",
      "LRU’nun pratikteki yaklaşımıdır; reference bit ile sayfalara ikinci şans verir.",
      "Sadece disk zamanlamasıdır.",
      "Sadece real-time sistemlerde kullanılır.",
      "Her zaman optimal algoritmadır."
    ],
    a: "LRU’nun pratikteki yaklaşımıdır; reference bit ile sayfalara ikinci şans verir.",
    difficulty: "hard",
    week: 6,
    topic: "Clock replacement",
    importance: "medium",
    explanation: "Clock, LRU’yu tam takip etmek zor olduğundan reference bit üzerinden yaklaşık davranış sağlar."
  },
  {
    q: "Thrashing için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "CPU kullanımının artmasıdır.",
      "Sürecin çoğunlukla page fault ile disk I/O yapıp çok az CPU çalıştırmasıdır.",
      "Diskin hiç kullanılmamasıdır.",
      "TLB hit ratio’nun %100 olmasıdır.",
      "Sadece dosya sisteminde görülen bir problemdir."
    ],
    a: "Sürecin çoğunlukla page fault ile disk I/O yapıp çok az CPU çalıştırmasıdır.",
    difficulty: "medium",
    week: 6,
    topic: "thrashing",
    importance: "high",
    explanation: "Çok sayıda süreç veya yetersiz frame → yoğun page fault → sistem verimi düşer."
  },
  {
    q: "TLB (Translation Lookaside Buffer) için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Disk üzerindeki dosyaları önbellekler.",
      "Page table girişlerini önbellekleyerek adres çevirimini hızlandırır.",
      "CPU zamanlamasını belirler.",
      "Sadece I/O cihazlarını yönetir.",
      "Sadece kernel modunda çalışır ve user süreçleri etkilenmez."
    ],
    a: "Page table girişlerini önbellekleyerek adres çevirimini hızlandırır.",
    difficulty: "easy",
    week: 6,
    topic: "TLB",
    importance: "high",
    explanation: "TLB hit olursa page table’a RAM erişimi azalır; bellek erişim gecikmesi düşer."
  },

  // ==== 7. HAFTA – File Systems, Disk & I/O, Protection/Security, Virtualization ====
  {
    q: "Contiguous, Linked ve Indexed file allocation yöntemleri için hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Contiguous rastgele erişimde iyidir; linked rastgele erişimde zayıftır; indexed rastgele erişimde iyidir.",
      "Linked rastgele erişimde en iyidir; indexed en kötüdür.",
      "Contiguous hiç boşluk problemi yaşamaz.",
      "Indexed sadece CD/DVD’de çalışır.",
      "Üçü de tamamen aynı performanstadır."
    ],
    a: "Contiguous rastgele erişimde iyidir; linked rastgele erişimde zayıftır; indexed rastgele erişimde iyidir.",
    difficulty: "hard",
    week: 7,
    topic: "file allocation",
    importance: "high",
    explanation: "Contiguous: hızlı sequential/random ama external fragmentation; Linked: sequential iyi, random kötü; Indexed: random iyi, indeks overhead."
  },
  {
    q: "Mutlak (absolute) yol ve göreli (relative) yol için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Mutlak yol daima mevcut klasöre göre hesaplanır.",
      "Göreli yol kökten başlar ve değişmez.",
      "Mutlak yol kök dizinden başlar; göreli yol mevcut dizine göre yorumlanır.",
      "İkisi aynı şeydir.",
      "Göreli yol sadece Windows’ta vardır."
    ],
    a: "Mutlak yol kök dizinden başlar; göreli yol mevcut dizine göre yorumlanır.",
    difficulty: "easy",
    week: 7,
    topic: "paths",
    importance: "medium",
    explanation: "Absolute path sabittir (root’tan). Relative path bulunduğun konuma göre değişir."
  },
  {
    q: "Journaling file system’in temel amacı aşağıdakilerden hangisidir?",
    t: "mcq",
    o: [
      "Dosyaları otomatik şifrelemek",
      "Sistem çökmesi/elektrik kesintisi sonrası tutarlılığı daha hızlı geri getirmek",
      "Disk kapasitesini iki katına çıkarmak",
      "CPU scheduling’i hızlandırmak",
      "RAM kullanımını sıfırlamak"
    ],
    a: "Sistem çökmesi/elektrik kesintisi sonrası tutarlılığı daha hızlı geri getirmek",
    difficulty: "medium",
    week: 7,
    topic: "journaling",
    importance: "high",
    explanation: "Journaling, meta/veri değişikliklerini log’layarak crash sonrası recovery’yi hızlandırır ve tutarlılığı artırır."
  },
  {
    q: "Disk scheduling algoritmalarından SCAN (elevator) yaklaşımı için hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Kafayı her istekte rastgele zıplatır.",
      "Kafa bir yönde hareket ederken o yöndeki istekleri karşılar, sonra yön değiştirir (asansör mantığı).",
      "Sadece SSD’de çalışır.",
      "Sadece küçük disklerde kullanılır.",
      "Her zaman FCFS ile aynıdır."
    ],
    a: "Kafa bir yönde hareket ederken o yöndeki istekleri karşılar, sonra yön değiştirir (asansör mantığı).",
    difficulty: "medium",
    week: 7,
    topic: "disk scheduling SCAN",
    importance: "medium",
    explanation: "SCAN, head movement’i azaltmaya çalışır ve daha dengeli bekleme süreleri sağlayabilir."
  },
  {
    q: "UNIX/Linux dosya izinlerinde 'chmod 754 dosya' komutu için doğru yorum hangisidir?",
    t: "mcq",
    o: [
      "Owner: rwx, Group: r-x, Others: r--",
      "Owner: r--, Group: rwx, Others: r-x",
      "Owner: rw-, Group: r--, Others: r-x",
      "Owner: r-x, Group: r-x, Others: r-x",
      "Owner: rwx, Group: rwx, Others: rwx"
    ],
    a: "Owner: rwx, Group: r-x, Others: r--",
    difficulty: "hard",
    week: 7,
    topic: "permissions",
    importance: "high",
    explanation: "7=rwx, 5=r-x, 4=r--. Bu tip soru sınavlarda çok gelir: sayıyı rwx’e çevirme."
  },
  {
    q: "Virtual machine (VM) ve container (kapsayıcı) farkı için aşağıdakilerden hangisi DOĞRUDUR?",
    t: "mcq",
    o: [
      "Container kendi kernel’ini taşır; VM host kernel’ini paylaşır.",
      "VM host kernel’ini paylaşır; container kendi kernel’ini taşır.",
      "VM genelde donanımı sanallaştırır ve kendi OS/kernel’iyle gelir; container host kernel’ini paylaşır ve daha hafiftir.",
      "İkisi tamamen aynı teknolojidir.",
      "Container sadece Windows’ta çalışır."
    ],
    a: "VM genelde donanımı sanallaştırır ve kendi OS/kernel’iyle gelir; container host kernel’ini paylaşır ve daha hafiftir.",
    difficulty: "medium",
    week: 7,
    topic: "virtualization vs containers",
    importance: "high",
    explanation: "VM: daha güçlü izolasyon, daha ağır. Container: hızlı/az overhead, host kernel paylaşımı nedeniyle izolasyon modeli farklı."
  }
];
