/* NovaFile site behaviour: mobile nav, download-link wiring, hero screenshot probe. */
(function () {
  "use strict";

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("site-nav");

  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("is-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNav(false);
    });
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      setNav(false);
    });
    // Reset when resizing up to the desktop layout.
    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 861px)").matches) setNav(false);
    });
  }

  /* ---------- Release configuration ---------- */
  var cfg = window.NOVA_CONFIG || { version: "", downloadUrl: "", installerSize: "" };

  // Fill version / size slots marked data-version, data-installer-size.
  document.querySelectorAll("[data-version]").forEach(function (el) {
    el.textContent = cfg.version;
  });
  document.querySelectorAll("[data-installer-size]").forEach(function (el) {
    el.textContent = cfg.installerSize;
  });
  document.querySelectorAll("[data-sha256]").forEach(function (el) {
    if (cfg.sha256) el.textContent = cfg.sha256;
  });

  // Wire download links. With no published URL they keep pointing at the
  // Download page (a real route); with a URL they become direct downloads
  // and the Download page's primary button replaces the placeholder notice.
  var hasUrl = !!cfg.downloadUrl;
  if (hasUrl) {
    document.querySelectorAll("[data-download]").forEach(function (a) {
      a.setAttribute("href", cfg.downloadUrl);
      a.setAttribute("download", "");
    });
    document.querySelectorAll("[data-download-placeholder]").forEach(function (el) {
      el.hidden = true;
    });
    document.querySelectorAll("[data-download-cta]").forEach(function (el) {
      el.hidden = false;
    });
  }

  /* ---------- Hero screenshot ----------
   * A real screenshot appears automatically once assets/img/app-screenshot.png
   * exists; until then the clearly marked placeholder stays visible. */
  var shotSlot = document.querySelector("[data-shot-slot]");
  if (shotSlot) {
    var probe = new Image();
    probe.onload = function () {
      var img = document.createElement("img");
      img.src = probe.src;
      img.alt =
        "NovaFile main window showing two folder tabs, the breadcrumb " +
        "address bar, and the sidebar with recents, bookmarks, storage, " +
        "and places.";
      img.width = 1320;
      img.height = 830;
      img.decoding = "async";
      shotSlot.classList.add("has-shot");
      shotSlot.appendChild(img);
      var ph = shotSlot.querySelector("[data-shot-placeholder]");
      if (ph) ph.remove();
    };
    probe.src = "assets/img/app-screenshot.png";
  }

  /* ---------- Copyright year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
