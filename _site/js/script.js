(function () {
    // Normalize current path: treat "/" as "/index.html"
    const here = (function () {
        const p = new URL(location.href).pathname.replace(/\/+$/, "");
        return (!p || p === "/") ? "/index.html" : p;
    })();

    // Mark internal nav links active if their pathname matches
    document.querySelectorAll(".navbar .nav-link").forEach(a => {
        try {
            const url = new URL(a.getAttribute("href"), location.origin);
            // skip external links (github/linkedin/etc.)
            if (url.origin !== location.origin) return;

            const target = url.pathname.replace(/\/+$/, "") || "/index.html";
            if (target === here) {
                a.classList.add("active");
                a.setAttribute("aria-current", "page");
            }
        } catch (_) { /* ignore invalid hrefs */ }
    });
})();