/* ===================================
   CHOU COLLECTIVE - Main JavaScript
   =================================== */

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealedObserver = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-down, .reveal-left, .reveal-right, " +
      ".fade-in-up, .fade-in-down, .slide-up, .slide-down"
  );

  revealElements.forEach((element) => {
    revealedObserver.observe(element);
  });
});
