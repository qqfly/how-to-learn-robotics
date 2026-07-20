/*
 * Path-preserving language switch across the two independent sites.
 *
 * The Chinese (learn-robotics.qqfly.net) and English (en.learn-robotics.qqfly.net)
 * sites are separate MkDocs builds with IDENTICAL filenames (use_directory_urls: false),
 * so every page has a 1:1 counterpart at the same path on the other domain. Material's
 * `extra.alternate` switcher links to the other site's ROOT by default; this rewrites
 * those links to keep the current path, so "English" on /motion-planning.html lands on
 * the English /motion-planning.html rather than the English home page.
 *
 * Re-runs on Material's instant navigation via the document$ observable.
 */
(function () {
  function preservePath() {
    var suffix = window.location.pathname + window.location.search + window.location.hash;
    document.querySelectorAll("a[hreflang]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href) return;
      try {
        a.setAttribute("href", new URL(href, window.location.href).origin + suffix);
      } catch (e) {
        /* leave the original href untouched on any parsing error */
      }
    });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(preservePath); // fires on initial load + every instant nav
  } else if (document.readyState !== "loading") {
    preservePath();
  } else {
    document.addEventListener("DOMContentLoaded", preservePath);
  }
})();
