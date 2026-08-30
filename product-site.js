(() => {
  "use strict";

  const translationNode = document.getElementById("product-translations");
  let translations = window.PRODUCT_TRANSLATIONS || {};
  if (translationNode) {
    try {
      translations = JSON.parse(translationNode.textContent);
    } catch (error) {
      console.error("Product translations could not be loaded.", error);
      return;
    }
  }
  if (!Object.keys(translations).length) return;

  const supported = (document.body.dataset.languages || "nl,en")
    .split(",")
    .map((language) => language.trim())
    .filter(Boolean);
  const fallback = document.body.dataset.defaultLanguage || supported[0] || "nl";
  const requested = new URLSearchParams(window.location.search).get("lang");
  const browserLanguage = (navigator.language || fallback).slice(0, 2).toLowerCase();
  const language = supported.includes(requested)
    ? requested
    : supported.includes(browserLanguage)
      ? browserLanguage
      : fallback;
  const copy = translations[language] || translations[fallback];

  const valueAt = (source, path) => path
    .split(".")
    .reduce((value, key) => value && value[key], source);

  document.documentElement.lang = language;
  document.title = copy.meta.title;

  const setMeta = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value) node.setAttribute("content", value);
  };
  setMeta('meta[name="description"]', copy.meta.description);
  setMeta('meta[property="og:title"]', copy.meta.title);
  setMeta('meta[property="og:description"]', copy.meta.description);
  setMeta('meta[property="og:locale"]', copy.meta.locale);
  setMeta('meta[name="twitter:title"]', copy.meta.title);
  setMeta('meta[name="twitter:description"]', copy.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = valueAt(copy, node.dataset.i18n);
    if (typeof value === "string") node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    const value = valueAt(copy, node.dataset.i18nAria);
    if (typeof value === "string") node.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-href]").forEach((node) => {
    const value = valueAt(copy, node.dataset.i18nHref);
    if (typeof value === "string") node.setAttribute("href", value);
  });

  document.querySelectorAll("[data-image]").forEach((node) => {
    const image = valueAt(copy, `images.${node.dataset.image}`);
    if (!image) return;
    node.src = image.src;
    node.alt = image.alt;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const selected = button.dataset.lang === language;
    button.setAttribute("aria-pressed", selected ? "true" : "false");
    button.addEventListener("click", () => {
      const next = new URL(window.location.href);
      next.searchParams.set("lang", button.dataset.lang);
      window.location.assign(next);
    });
  });

  document.querySelectorAll("[data-keep-language]").forEach((link) => {
    const next = new URL(link.href, window.location.href);
    next.searchParams.set("lang", language);
    link.href = next.toString();
  });

  const nav = document.querySelector(".site-nav");
  const updateNavigation = () => nav?.classList.toggle("is-scrolled", window.scrollY > 14);
  updateNavigation();
  window.addEventListener("scroll", updateNavigation, { passive: true });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealNodes = [...document.querySelectorAll("[data-reveal]")];
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });
    revealNodes.forEach((node) => observer.observe(node));
  }

  const hero = document.querySelector(".product-hero");
  const heroMedia = document.querySelector(".hero-media");
  if (!reduceMotion && hero && heroMedia && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
      heroMedia.style.setProperty("--parallax-x", `${x}px`);
      heroMedia.style.setProperty("--parallax-y", `${y}px`);
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
      heroMedia.style.setProperty("--parallax-x", "0px");
      heroMedia.style.setProperty("--parallax-y", "0px");
    });
  }
})();
