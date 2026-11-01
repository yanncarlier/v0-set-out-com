/* ============================================================
   AI Agent Lousi — listicle landing page behavior
   - Sticky offer bar after the hero, hidden at the final CTA
   - Optional verified review renderer
   ============================================================ */

(() => {
  "use strict";

  /* ---------- Sticky offer bar ---------- */

  const sticky = document.querySelector("[data-sticky-cta]");
  const hero = document.querySelector(".hero");
  const finalCta = document.querySelector(".final-cta");

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

  /* ---------- Verified reviews ---------- */

  /*
   * TO ADD REAL REVIEWS:
   * Paste verified quotes into this array. Each entry looks like:
   *
   * {
   *   quote: "Lousi actually lets me practice speaking Cantonese out loud.",
   *   name: "Sam R.",
   *   detail: "Google Play review",
   *   rating: 5
   * }
   *
   * Only add reviews you can verify. When the array has entries, the
   * "be one of the first to review" placeholder is replaced.
   */
  const reviews = [];

  const reviewGrid = document.getElementById("review-grid");
  const reviewsEmpty = document.getElementById("reviews-empty");

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (character) => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      return entities[character];
    });

  if (reviewGrid && reviewsEmpty && reviews.length > 0) {
    reviewGrid.innerHTML = reviews
      .map((review) => {
        const rating = Math.max(0, Math.min(5, Number(review.rating) || 0));
        const stars = rating
          ? `<div class="review-stars" aria-label="${rating} out of 5 stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div>`
          : "";
        const detail = review.detail
          ? ` · ${escapeHtml(review.detail)}`
          : "";

        return `
          <article class="review-card">
            ${stars}
            <p class="review-quote">“${escapeHtml(review.quote)}”</p>
            <p class="review-meta"><span class="review-name">${escapeHtml(review.name)}</span>${detail}</p>
          </article>
        `;
      })
      .join("");

    reviewsEmpty.hidden = true;
    reviewGrid.hidden = false;
  }
})();
