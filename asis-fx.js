/* ============================================================================
   ASIS · FX — lightweight cinematic layer for canvas / 2D pages.
   Pure presentation: a fixed vignette + film-grain + optional aurora backdrop,
   and a 2D-canvas bloom compositor. Never touches simulation data.

     ASISFx.overlay({ vignette, grain, aurora, scanline, z })
     ASISFx.aurora({ ... })                      // just the backdrop
     const b = ASISFx.bloom(srcCanvas, opts);    // b.draw() → glow into a display canvas
   ========================================================================== */
(function (global) {
  'use strict';
  var doc = global.document;

  // SVG feTurbulence → a tiled monochrome grain, embedded as a data URI.
  var GRAIN_URI = "data:image/svg+xml;utf8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160">' +
    '<filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>' +
    '<feColorMatrix type="saturate" values="0"/></filter>' +
    '<rect width="160" height="160" filter="url(#n)" opacity="0.6"/></svg>');

  function overlay(opts) {
    opts = opts || {};
    if (doc.getElementById('asisfx-style')) return;
    var z = opts.z != null ? opts.z : 6;
    var vig = opts.vignette != null ? opts.vignette : 0.5;
    var grain = opts.grain != null ? opts.grain : 0.045;
    var css = '';
    if (opts.aurora !== false) {
      css +=
      '#asisfx-aurora{position:fixed;inset:0;z-index:-1;pointer-events:none;' +
      'background:' +
        'radial-gradient(90% 60% at 18% 8%, rgba(34,52,88,.15), rgba(0,0,0,0) 60%),' +
        'radial-gradient(70% 60% at 92% 22%, rgba(255,200,87,.035), rgba(0,0,0,0) 55%),' +
        'radial-gradient(120% 90% at 50% 120%, rgba(199,155,255,.04), rgba(0,0,0,0) 60%),' +
        'radial-gradient(140% 120% at 50% 30%, #05080f 0%, #04060c 55%, #030409 100%);}';
    }
    css +=
    '#asisfx-vignette{position:fixed;inset:0;z-index:' + z + ';pointer-events:none;' +
      'background:radial-gradient(125% 105% at 50% 44%, rgba(0,0,0,0) 46%, rgba(2,4,10,' + vig + ') 100%);}';
    if (grain > 0) {
      css +=
      '#asisfx-grain{position:fixed;inset:-50%;z-index:' + (z + 1) + ';pointer-events:none;' +
        'opacity:' + grain + ';background-image:url("' + GRAIN_URI + '");background-repeat:repeat;' +
        'mix-blend-mode:overlay;will-change:transform;animation:asisfx-grain 1.1s steps(2) infinite;}' +
      '@keyframes asisfx-grain{0%{transform:translate(0,0)}25%{transform:translate(-4%,3%)}' +
        '50%{transform:translate(3%,-3%)}75%{transform:translate(-2%,-4%)}100%{transform:translate(0,0)}}';
    }
    if (opts.scanline) {
      css +=
      '#asisfx-scan{position:fixed;inset:0;z-index:' + (z + 1) + ';pointer-events:none;opacity:.05;' +
        'background:repeating-linear-gradient(0deg, rgba(255,255,255,.5) 0 1px, rgba(0,0,0,0) 1px 3px);}';
    }
    var st = doc.createElement('style'); st.id = 'asisfx-style'; st.textContent = css;
    doc.head.appendChild(st);
    function add(id) { if (!doc.getElementById(id)) { var d = doc.createElement('div'); d.id = id; doc.body.appendChild(d); } }
    if (opts.aurora !== false) add('asisfx-aurora');
    add('asisfx-vignette');
    if (grain > 0) add('asisfx-grain');
    if (opts.scanline) add('asisfx-scan');
  }

  function aurora(opts) { overlay(Object.assign({ vignette: 0, grain: 0 }, opts || {})); }

  // Bloom compositor for a 2D canvas: renders `src` into a (possibly larger)
  // display canvas with additive, blurred glow. Call draw() after each src update.
  function bloom(src, opts) {
    opts = opts || {};
    var scale = opts.scale || 1;
    var passes = opts.passes || [ [2, 0.6], [5, 0.4], [12, 0.28] ]; // [blurPx, weight]
    var dst = opts.dst || (function () {
      var c = doc.createElement('canvas'); c.className = src.className;
      c.style.cssText = src.style.cssText;
      src.parentNode.insertBefore(c, src.nextSibling);
      src.style.display = 'none';
      return c;
    })();
    function draw() {
      var w = src.width * scale, h = src.height * scale;
      if (dst.width !== w) dst.width = w; if (dst.height !== h) dst.height = h;
      var g = dst.getContext('2d');
      g.globalCompositeOperation = 'source-over';
      g.imageSmoothingEnabled = !!opts.smooth;
      g.clearRect(0, 0, w, h);
      g.filter = 'none';
      g.drawImage(src, 0, 0, w, h);                       // crisp base
      g.globalCompositeOperation = 'lighter';
      for (var i = 0; i < passes.length; i++) {
        g.filter = 'blur(' + (passes[i][0] * scale) + 'px)';
        g.globalAlpha = passes[i][1];
        g.drawImage(src, 0, 0, w, h);                     // additive blurred glow
      }
      g.globalAlpha = 1; g.filter = 'none';
      g.globalCompositeOperation = 'source-over';
    }
    return { dst: dst, draw: draw };
  }

  global.ASISFx = { overlay: overlay, aurora: aurora, bloom: bloom };
})(typeof window !== 'undefined' ? window : this);
