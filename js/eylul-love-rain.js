// eylul-love-rain.js
// Sayfa arkaplanında kalpler ve "Seni seviyorum Eylülüm" yağmuru

(function () {
  'use strict';

  const CONFIG = {
    maxElements: 70,           // Ekranda aynı anda maksimum öğe (ARTTIRILDI)
    spawnInterval: 450,        // Daha sık üretim (daha çok kalp)
    heartRatio: 0.9,           // %90 kalp, %10 yazı (HEART çok, TEXT az)
    minDuration: 7,            // Animasyon minimum süresi (sn)
    maxDuration: 14,           // Animasyon maksimum süresi (sn)
    minSize: 14,               // Temel boyut (kalp için çarpan uygulanacak)
    maxSize: 26,
    minRotate: -25,            // derece
    maxRotate: 25,
    minOpacity: 0.45,
    maxOpacity: 0.9
  };

  let layerEl;
  let styleEl;
  let activeCount = 0;
  let spawnTimer = null;
  let initialized = false;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randInt(min, max) {
    return Math.floor(rand(min, max + 1));
  }

  function createStyleTag() {
    if (styleEl) return;

    styleEl = document.createElement('style');
    styleEl.id = 'eylul-love-rain-style';
    styleEl.textContent = `
      .eylul-love-rain-layer {
        position: fixed;
        inset: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 1; /* Header zaten 1020, modallar daha yukarıda */
        mix-blend-mode: normal;
      }

      .eylul-love-rain-item {
        position: absolute;
        top: -10%;
        will-change: transform, opacity;
        white-space: nowrap;
        user-select: none;
        text-shadow: 0 4px 12px rgba(0, 0, 0, 0.45);
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }

      [data-theme="dark"] .eylul-love-rain-item {
        text-shadow: 0 6px 18px rgba(0, 0, 0, 0.9);
      }

      .eylul-love-rain-heart {
        /* Temel renk – inline style ile kırmızı/pembe gelecek */
      }

      .eylul-love-rain-text {
        color: #fef9c3; /* daha soft sarı */
        font-weight: 600;
      }

      @keyframes eylul-love-fall {
        0% {
          transform: translate3d(0, -100%, 0) scale(1);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        50% {
          transform: translate3d(var(--drift-x, 0px), 55vh, 0) scale(1.03);
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translate3d(calc(var(--drift-x, 0px) * 1.3), 110vh, 0) scale(0.98);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(styleEl);
  }

  function createLayer() {
    if (layerEl) return;

    layerEl = document.createElement('div');
    layerEl.id = 'eylulLoveRainLayer';
    layerEl.className = 'eylul-love-rain-layer';

    document.body.appendChild(layerEl);
  }

  function spawnElement() {
    if (!layerEl) return;
    if (activeCount >= CONFIG.maxElements) return;

    activeCount++;

    const isHeart = Math.random() < CONFIG.heartRatio;

    const el = document.createElement('span');
    el.className = 'eylul-love-rain-item ' + (isHeart ? 'eylul-love-rain-heart' : 'eylul-love-rain-text');

    if (isHeart) {
      // Sadece kırmızı & pembe tonlu kalpler
      const hearts = ['❤', '❤️', '💖', '💕', '💗', '💘'];
      el.textContent = hearts[randInt(0, hearts.length - 1)];

      // Rastgele kırmızı / pembe ton
      const redOrPink = Math.random() < 0.5
        ? '#ef4444'   // kırmızı
        : '#fb7185';  // pembe
      el.style.color = redOrPink;
    } else {
      el.textContent = 'Seni seviyorum Eylülüm';
      el.style.color = '#fef3c7'; // soft sarı
    }

    const vw = Math.random() * 100; // 0–100 arası viewport genişliği
    const duration = rand(CONFIG.minDuration, CONFIG.maxDuration);

    // Temel boyut + kalpler için büyütme
    const baseSize = rand(CONFIG.minSize, CONFIG.maxSize);
    const size = isHeart
      ? baseSize * 1.7  // KALPLER DAHA BÜYÜK
      : baseSize * 0.9; // Yazılar biraz daha küçük

    const rotate = rand(CONFIG.minRotate, CONFIG.maxRotate);
    const opacity = rand(CONFIG.minOpacity, CONFIG.maxOpacity);
    const drift = rand(-80, 80); // Yavaş yatay kayma

    el.style.left = vw + 'vw';
    el.style.fontSize = size.toFixed(1) + 'px';
    el.style.opacity = opacity.toString();
    el.style.setProperty('--drift-x', drift + 'px');
    el.style.animation = `eylul-love-fall ${duration.toFixed(2)}s linear forwards`;
    el.style.transform = `rotate(${rotate.toFixed(1)}deg)`;

    el.addEventListener('animationend', function () {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
      activeCount = Math.max(0, activeCount - 1);
    });

    layerEl.appendChild(el);
  }

  function startRain() {
    if (spawnTimer) return;

    // İlk birkaç tanesini hemen üret
    for (let i = 0; i < 10; i++) {
      setTimeout(spawnElement, i * 100);
    }

    spawnTimer = setInterval(spawnElement, CONFIG.spawnInterval);
  }

  function stopRain() {
    if (spawnTimer) {
      clearInterval(spawnTimer);
      spawnTimer = null;
    }
  }

  function handleVisibilityChange() {
    if (document.hidden) {
      stopRain();
    } else {
      startRain();
    }
  }

  function init() {
    if (initialized) return;
    initialized = true;

    createStyleTag();
    createLayer();
    startRain();

    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  // DOM hazır olduğunda başlat
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Dışarıya basit bir API verelim (istersen JS'ten kapat/aç)
  window.EylulLoveRain = {
    enable() {
      if (!initialized) init();
      startRain();
    },
    disable() {
      stopRain();
      if (layerEl) {
        layerEl.innerHTML = '';
        activeCount = 0;
      }
    },
    destroy() {
      stopRain();
      if (layerEl && layerEl.parentNode) {
        layerEl.parentNode.removeChild(layerEl);
      }
      if (styleEl && styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
      layerEl = null;
      styleEl = null;
      initialized = false;
      activeCount = 0;
    }
  };
})();
