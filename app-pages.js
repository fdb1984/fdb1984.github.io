(function () {
  const page = document.querySelector(".app-page");
  if (!page) return;

  const isHome = page.classList.contains("app-page-home");
  const path = window.location.pathname.toLowerCase();
  const pageType = path.endsWith("/support.html")
    ? "support"
    : path.endsWith("/privacy.html") || path.endsWith("/terms.html")
      ? "policy"
      : "hub";
  page.classList.add(`app-page-${pageType}`);

  const interfaceLabels = {
    nl: { answer: "Uitleg", contents: "Op deze pagina" },
    en: { answer: "Answer", contents: "On this page" },
    de: { answer: "Erklärung", contents: "Auf dieser Seite" },
    fr: { answer: "Explication", contents: "Sur cette page" },
  };
  const visualLabels = {
    nl: isHome ? "HomeScreen op iPad" : "Een blik in MigraineMaatje",
    en: isHome ? "HomeScreen on iPad" : "A look inside MigraineMaatje",
    de: isHome ? "HomeScreen auf dem iPad" : "Ein Blick in MigraineMaatje",
    fr: isHome ? "HomeScreen sur iPad" : "Un aperçu de MigraineMaatje",
  };

  function languageFor(element) {
    return element.closest("[data-lang]")?.getAttribute("data-lang")
      || document.documentElement.lang
      || "nl";
  }

  function shortPreview(text) {
    const clean = text.replace(/\s+/g, " ").trim();
    const firstSentence = clean.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
    if (firstSentence && firstSentence.length <= 170) return firstSentence;
    if (clean.length <= 150) return clean;
    return `${clean.slice(0, 147).trimEnd()}…`;
  }

  function slugify(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 64);
  }

  function addVisuals() {
    const headers = isHome
      ? document.querySelectorAll("main > header")
      : document.querySelectorAll("main > section[data-lang] > header");

    headers.forEach((header) => {
      if (header.nextElementSibling?.classList.contains("app-page-visual")) return;
      const language = languageFor(header);
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
    if (pageType !== "support") return;

    const candidates = isHome
      ? document.querySelectorAll("main section")
      : document.querySelectorAll("main section.card");
    const firstByGroup = new Map();
    const countByGroup = new Map();

    candidates.forEach((section) => {
      const heading = section.querySelector(":scope > h2");
      const shouldStayVisible =
        !heading
        || section.closest("noscript")
        || section.classList.contains("note")
        || section.classList.contains("warning")
        || section.classList.contains("important")
        || section.querySelector('a[href^="mailto:"]');
      if (shouldStayVisible) return;

      const group = section.closest("[data-lang]") || section.parentElement;
      const number = (countByGroup.get(group) || 0) + 1;
      countByGroup.set(group, number);
      const language = languageFor(section);
      const details = document.createElement("details");
      details.className = `${section.className} app-disclosure`.trim();
      if (section.id) details.id = section.id;

      const summary = document.createElement("summary");
      const itemNumber = document.createElement("span");
      itemNumber.className = "app-disclosure-number";
      itemNumber.textContent = String(number).padStart(2, "0");

      const headingGroup = document.createElement("div");
      headingGroup.className = "app-disclosure-heading";
      const category = section.querySelector(":scope > .label");
      const previewSource = section.querySelector(":scope > p, :scope > ul li");
      if (category) headingGroup.append(category);
      headingGroup.append(heading);
      if (previewSource) {
        const preview = document.createElement("p");
        preview.className = "app-disclosure-preview";
        preview.textContent = shortPreview(previewSource.textContent || "");
        headingGroup.append(preview);
      }
      summary.append(itemNumber, headingGroup);

      const content = document.createElement("div");
      content.className = "app-disclosure-content";
      const answerLabel = document.createElement("span");
      answerLabel.className = "app-answer-label";
      answerLabel.textContent = interfaceLabels[language]?.answer || interfaceLabels.nl.answer;
      content.append(answerLabel);
      while (section.firstChild) content.append(section.firstChild);

      details.append(summary, content);
      section.replaceWith(details);

      if (!firstByGroup.has(group)) {
        details.open = true;
        firstByGroup.set(group, details);
      }
    });
  }

  function addPolicyIndexes() {
    if (pageType !== "policy") return;

    const groups = isHome
      ? [document.querySelector("main")]
      : Array.from(document.querySelectorAll("main > section[data-lang]"));

    groups.filter(Boolean).forEach((group) => {
      if (group.querySelector(":scope > .app-topic-index")) return;
      const sections = Array.from(group.children).filter((child) => child.matches("section.card, section:not([data-lang])"));
      if (!sections.length) return;

      const language = languageFor(group);
      const nav = document.createElement("nav");
      nav.className = "app-topic-index";
      nav.setAttribute("aria-label", interfaceLabels[language]?.contents || interfaceLabels.nl.contents);

      const label = document.createElement("p");
      label.textContent = interfaceLabels[language]?.contents || interfaceLabels.nl.contents;
      const links = document.createElement("div");

      sections.forEach((section, index) => {
        const heading = section.querySelector(":scope > h2");
        if (!heading) return;
        if (!section.id) section.id = `${language}-${slugify(heading.textContent || `topic-${index + 1}`)}`;
        const link = document.createElement("a");
        link.href = `#${section.id}`;
        link.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span>${heading.textContent}`;
        links.append(link);
      });

      nav.append(label, links);
      const visual = group.querySelector(":scope > .app-page-visual");
      const header = group.querySelector(":scope > header");
      (visual || header)?.insertAdjacentElement("afterend", nav);
    });
  }

  function enhancePage() {
    addVisuals();
    addDisclosures();
    addPolicyIndexes();
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
