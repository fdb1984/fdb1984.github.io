(function () {
  const page = document.querySelector(".app-page");
  if (!page) return;

  const candidates = page.classList.contains("app-page-home")
    ? document.querySelectorAll("main section")
    : document.querySelectorAll("main section.card");
  const firstDisclosureByGroup = new Set();

  function shortPreview(text) {
    const clean = text.replace(/\s+/g, " ").trim();
    const firstSentence = clean.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
    if (firstSentence && firstSentence.length <= 170) return firstSentence;
    if (clean.length <= 150) return clean;
    return `${clean.slice(0, 147).trimEnd()}…`;
  }

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
})();
