(function () {
  const page = document.querySelector(".app-page");
  if (!page) return;
  const isHome = page.classList.contains("app-page-home");
  const firstDisclosureByGroup = new WeakSet();
  const visualLabels = {
    nl: isHome ? "HomeScreen op iPad" : "Een blik in MigraineMaatje",
    en: isHome ? "HomeScreen on iPad" : "A look inside MigraineMaatje",
    de: isHome ? "HomeScreen auf dem iPad" : "Ein Blick in MigraineMaatje",
    fr: isHome ? "HomeScreen sur iPad" : "Un aperçu de MigraineMaatje",
  };

  function shortPreview(text) {
    const clean = text.replace(/\s+/g, " ").trim();
    const firstSentence = clean.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
    if (firstSentence && firstSentence.length <= 170) return firstSentence;
    if (clean.length <= 150) return clean;
    return `${clean.slice(0, 147).trimEnd()}…`;
  }

  function addVisuals() {
    const headers = isHome
      ? document.querySelectorAll("main > header")
      : document.querySelectorAll("main > section[data-lang] > header");

    headers.forEach((header) => {
      if (header.nextElementSibling?.classList.contains("app-page-visual")) return;
      const language = header.closest("[data-lang]")?.getAttribute("data-lang") || document.documentElement.lang || "nl";
      const screenshotLanguage = isHome && language === "fr" ? "en" : language;
      const figure = document.createElement("figure");
      figure.className = "app-page-visual";
      const image = document.createElement("img");
      image.src = isHome
        ? `/homescreen-screen-${screenshotLanguage}.png`
        : `/migrainemaatje-screen-${screenshotLanguage}.png`;
      image.alt = visualLabels[language] || visualLabels.nl;
      image.loading = "lazy";
      image.decoding = "async";
      const caption = document.createElement("figcaption");
      caption.textContent = visualLabels[language] || visualLabels.nl;
      figure.append(image, caption);
      header.insertAdjacentElement("afterend", figure);
    });
  }

  function addDisclosures() {
    const candidates = isHome
      ? document.querySelectorAll("main section")
      : document.querySelectorAll("main section.card");

    candidates.forEach((section) => {
    const heading = section.querySelector(":scope > h2");
    const shouldStayVisible =
      !heading ||
      section.closest("noscript") ||
      section.classList.contains("note") ||
      section.classList.contains("warning") ||
      section.classList.contains("important") ||
      section.querySelector('a[href^="mailto:"]');

    if (shouldStayVisible) return;

    const details = document.createElement("details");
    details.className = `${section.className} app-disclosure`.trim();
    if (section.id) details.id = section.id;

    const summary = document.createElement("summary");
    const headingGroup = document.createElement("div");
    headingGroup.className = "app-disclosure-heading";
    const previewSource = section.querySelector(":scope > p, :scope > ul li");
    headingGroup.append(heading);
    if (previewSource) {
      const preview = document.createElement("p");
      preview.className = "app-disclosure-preview";
      preview.textContent = shortPreview(previewSource.textContent || "");
      headingGroup.append(preview);
    }
    summary.append(headingGroup);

    const content = document.createElement("div");
    content.className = "app-disclosure-content";
    while (section.firstChild) content.append(section.firstChild);

    details.append(summary, content);
    section.replaceWith(details);

    const group = details.closest("[data-lang]") || details.parentElement;
    if (!firstDisclosureByGroup.has(group)) {
      details.open = true;
      firstDisclosureByGroup.add(group);
    }
    });
  }

  function enhancePage() {
    addVisuals();
    addDisclosures();
  }

  enhancePage();

  if (isHome) {
    const main = document.querySelector("main");
    if (main) {
      let scheduled = false;
      const observer = new MutationObserver(() => {
        if (scheduled) return;
        scheduled = true;
        window.requestAnimationFrame(() => {
          scheduled = false;
          enhancePage();
        });
      });
      observer.observe(main, { childList: true, subtree: true });
    }
  }
})();
