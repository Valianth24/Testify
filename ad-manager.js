/**
 * TESTIFY AD MANAGER – TEK MERKEZ
 * - index.html yapısını bozmadan tüm reklam kontrolü burada
 * - AdSense scriptini yükler
 * - ad-container içlerine <ins class="adsbygoogle"> yerleştirir
 * - Sekme değişimlerinde (SPA) sayfa görüntülemelerini loglar
 * - Fazla agresif / policy bozan auto-refresh YOK
 */

(function (window, document) {
    'use strict';

    const AdManager = {
        // 🔹 BURAYI KENDİ ADSENSE HESABINA GÖRE DÜZENLE
        adsenseClient: 'ca-pub-CHANGE_ME', // Örn: ca-pub-1234567890123456

        // index.html’deki reklam kutuların ID -> slot eşleşmesi
        // ad-container kullanan yerler:
        //  - <div id="ad-top" class="ad-container">
        //  - <div id="ad-dashboard" class="ad-container">
        //  - <div id="ad-leaderboard" class="ad-container">
        //  - <div id="ad-bottom" class="ad-container">
        slots: {
            'ad-top': {
                slot: 'CHANGE_ME_TOP',        // data-ad-slot
                format: 'auto',
                fullWidth: true,
                style: 'display:block'
            },
            'ad-dashboard': {
                slot: 'CHANGE_ME_DASHBOARD',
                format: 'auto',
                fullWidth: true,
                style: 'display:block'
            },
            'ad-leaderboard': {
                slot: 'CHANGE_ME_LEADERBOARD',
                format: 'auto',
                fullWidth: true,
                style: 'display:block'
            },
            'ad-bottom': {
                slot: 'CHANGE_ME_BOTTOM',
                format: 'auto',
                fullWidth: true,
                style: 'display:block'
            }
        },

        observer: null,

        init() {
            try {
                console.log('📢 AdManager init');
                this.injectAdsenseScript();
                this.mountAllSlots();
                this.setupImpressionObserver();
            } catch (e) {
                console.error('AdManager.init hatası:', e);
            }
        },

        // AdSense script’ini head’e ekler (zaten varsa tekrar eklemez)
        injectAdsenseScript() {
            try {
                const already = document.querySelector(
                    'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
                );
                if (already) return;

                if (!this.isClientConfigured()) {
                    console.warn('AdManager: adsenseClient ayarlı değil, placeholder gösterilecek.');
                    return;
                }

                const s = document.createElement('script');
                s.async = true;
                s.crossOrigin = 'anonymous';
                s.src =
                    'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' +
                    encodeURIComponent(this.adsenseClient);
                document.head.appendChild(s);
            } catch (e) {
                console.warn('AdSense script eklenemedi:', e);
            }
        },

        isClientConfigured() {
            return (
                this.adsenseClient &&
                this.adsenseClient.startsWith('ca-pub-') &&
                !this.adsenseClient.includes('CHANGE_ME')
            );
        },

        isSlotConfigured(slotCfg) {
            return (
                slotCfg &&
                slotCfg.slot &&
                !String(slotCfg.slot).includes('CHANGE_ME')
            );
        },

        // Tüm tanımlı slotları DOM’da bulup <ins> ekler
        mountAllSlots() {
            if (!this.isClientConfigured()) {
                // ID’ler doldurulana kadar hiçbir şey silme, site bozulmasın
                return;
            }

            Object.entries(this.slots).forEach(([id, cfg]) => {
                const host = document.getElementById(id);
                if (!host) return;
                if (!this.isSlotConfigured(cfg)) return;

                // Daha önce initialize edilmişse tekrar kurcalama
                if (host.dataset.adInitialized === '1') return;

                // Placeholder yazısını saklamak istersen buraya alabilirsin:
                if (!host.dataset.initialHtml) {
                    host.dataset.initialHtml = host.innerHTML;
                }

                // Eski placeholder’ı boşalt, ins ekle
                host.innerHTML = '';

                const ins = document.createElement('ins');
                ins.className = 'adsbygoogle';
                ins.style.cssText = cfg.style || 'display:block';
                ins.setAttribute('data-ad-client', this.adsenseClient);
                ins.setAttribute('data-ad-slot', cfg.slot);

                if (cfg.format) {
                    ins.setAttribute('data-ad-format', cfg.format);
                }
                if (cfg.fullWidth) {
                    ins.setAttribute('data-full-width-responsive', 'true');
                }

                host.appendChild(ins);
                host.dataset.adInitialized = '1';

                // AdSense’e slotu çalıştır
                this.safePush();
            });
        },

        safePush() {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                // AdSense henüz yüklenmemiş olabilir, sorun değil
            }
        },

        // Reklam görünürlük takibi (impression log)
        setupImpressionObserver() {
            try {
                if (!('IntersectionObserver' in window)) return;

                const targets = document.querySelectorAll(
                    '.ad-container, .adsbygoogle, .ad-banner, .ad-sidebar'
                );
                if (!targets.length) return;

                if (this.observer && this.observer.disconnect) {
                    this.observer.disconnect();
                }

                this.observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting && !entry.target.dataset.impressionLogged) {
                                entry.target.dataset.impressionLogged = '1';
                                console.log(
                                    '📊 Ad Impression:',
                                    entry.target.id || entry.target.className || entry.target
                                );
                                // Burada istersen analytics’e hit gönderebilirsin
                            }
                        });
                    },
                    { threshold: 0.5 }
                );

                targets.forEach((el) => this.observer.observe(el));
            } catch (e) {
                console.warn('Impression observer hatası:', e);
            }
        },

        // Gerektiğinde tekrar slot mount etmeye yarar (SPA tab değişiminde vs.)
        refreshAds(contextName) {
            try {
                console.log('🔁 AdManager.refreshAds, context:', contextName || '-');
                // Şu an için agresif refresh yapmıyoruz; sadece yeni eklenen slot varsa mount olsun
                this.mountAllSlots();
                this.setupImpressionObserver();
            } catch (e) {
                console.warn('refreshAds hatası:', e);
            }
        },

        // App.switchTab içinde çağrılıyor – burada sadece log + hafif refresh yap
        onTabChanged(tabName) {
            console.log('📊 Page View (SPA):', tabName);
            this.refreshAds(tabName);
        }
    };

    // Global export
    window.AdManager = AdManager;
})(window, document);
