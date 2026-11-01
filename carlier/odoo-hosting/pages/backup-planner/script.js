/* ============================================================
   Odoo ERP Hosting — listicle landing page behavior
   - Header border on scroll
   - Scroll reveal
   - Sticky offer bar after the hero, hidden at the final CTA
   ============================================================ */

(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const sticky = document.querySelector("[data-sticky-cta]");
  const hero = document.querySelector(".hero");
  const finalCta = document.querySelector(".final-cta");

  /* ---------- Header ---------- */

  const updateHeader = () => {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /* ---------- Sticky offer bar ---------- */

  if (sticky) {
    let finalCtaVisible = false;

    const updateSticky = () => {
      const threshold = hero ? hero.offsetHeight * 0.62 : 600;
      const nearBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 80;
      const shouldShow =
        window.scrollY > threshold && !finalCtaVisible && !nearBottom;

      sticky.classList.toggle("is-visible", shouldShow);
      sticky.inert = !shouldShow;
    };

    window.addEventListener("scroll", updateSticky, { passive: true });
    window.addEventListener("resize", updateSticky);

    if ("IntersectionObserver" in window && finalCta) {
      new IntersectionObserver(
        ([entry]) => {
          finalCtaVisible = entry.isIntersecting;
          updateSticky();
        },
        { threshold: 0.18 }
      ).observe(finalCta);
    }

    updateSticky();
  }

  /* ---------- Scroll reveal ---------- */

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
})();
