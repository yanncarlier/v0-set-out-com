(function () {
  window.dataLayer = window.dataLayer || [];

  document.querySelectorAll("a[data-play-cta]").forEach(function (link) {
    link.addEventListener("click", function () {
      window.dataLayer.push({
        event: "play_store_click",
        cta: link.getAttribute("data-play-cta")
      });
    });
  });

  var sticky = document.querySelector(".sticky-cta");
  var footer = document.querySelector(".download-section");
  if (!sticky || !footer || !("IntersectionObserver" in window)) {
    return;
  }

  var footerVisible = false;
  new IntersectionObserver(
    function (entries) {
      footerVisible = entries[0] && entries[0].isIntersecting;
      sticky.classList.toggle("is-visible", window.scrollY > 480 && !footerVisible);
    },
    { threshold: 0.12 }
  ).observe(footer);

  window.addEventListener(
    "scroll",
    function () {
      sticky.classList.toggle("is-visible", window.scrollY > 480 && !footerVisible);
    },
    { passive: true }
  );
})();
