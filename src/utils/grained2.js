/*!
 * Grained.js v2.1 — Optimized & Fine Grain version
 * Author: Sarath Saleem (original), modernized by ChatGPT
 * License: MIT
 */

(function (window, document) {
  "use strict";

  const DEFAULTS = {
    animate: true,
    patternWidth: 400,
    patternHeight: 400,
    grainOpacity: 0.075,
    grainDensity: 2,
    grainWidth: 1,
    grainHeight: 1,
    grainChaos: 1,
    grainSpeed: 10
  };

  let cachedNoise = null;
  let globalStyleAdded = false;

  function grained(target, options = {}) {
    const opts = { ...DEFAULTS, ...options };
    const element =
      typeof target === "string"
        ? document.querySelector(target)
        : target;

    if (!element) {
      console.error("Grained: élément introuvable ->", target);
      return;
    }

    const computed = getComputedStyle(element);
    if (computed.position === "static") {
      element.style.position = "relative";
    }
    element.style.overflow = "hidden";

    const noise = cachedNoise || (cachedNoise = generateNoise(opts));

    if (!globalStyleAdded) {
      addGlobalStyles(opts, noise);
      globalStyleAdded = true;
    }

    element.classList.add("grained");
  }

  function generateNoise(opts) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const { patternWidth, patternHeight, grainDensity, grainOpacity } = opts;

    canvas.width = patternWidth;
    canvas.height = patternHeight;

    for (let w = 0; w < patternWidth; w += grainDensity) {
      for (let h = 0; h < patternHeight; h += grainDensity) {
        const gray = Math.random() * 255 | 0;
        ctx.fillStyle = `rgba(${gray},${gray},${gray},${grainOpacity})`;
        ctx.fillRect(w, h, opts.grainWidth, opts.grainHeight);
      }
    }

    return canvas.toDataURL("image/png");
  }

  function addGlobalStyles(opts, noise) {
    const style = document.createElement("style");
    style.id = "grained-style";
    style.textContent = `
@keyframes grained {
  0%   { transform: translate(-10%, 10%); }
  25%  { transform: translate(-20%, -5%); }
  50%  { transform: translate(10%, 20%); }
  75%  { transform: translate(-15%, -10%); }
  100% { transform: translate(-10%, 10%); }
}

.grained::before {
  content: "";
  position: absolute;
  inset: -35%;
  width: 170%;
  height: 170%;
  background-image: url(${noise});
  background-size: ${opts.patternWidth}px ${opts.patternHeight}px;
  pointer-events: none;
  z-index: 0;
  ${opts.animate ? `
  animation: grained ${opts.grainChaos}s steps(${opts.grainSpeed}, end) infinite;` : ""}
}

@media (prefers-reduced-motion: reduce) {
  .grained::before { animation: none !important; }
}
`;
    document.head.appendChild(style);
  }

  window.grained = grained;
})(window, document);
