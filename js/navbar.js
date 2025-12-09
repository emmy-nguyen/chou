/* ===================================
   CHOU COLLECTIVE - Navbar JavaScript
   =================================== */

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const body = document.body;

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      navMenu.classList.toggle("active");

      const isExpanded = navToggle.classList.contains("active");
      navToggle.setAttribute("aria-expanded", isExpanded);

      if (isExpanded) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (!this.parentElement.classList.contains("dropdown")) {
        if (window.innerWidth <= 1024) {
          navToggle.classList.remove("active");
          navMenu.classList.remove("active");
          navToggle.setAttribute("aria-expanded", "false");
          body.style.overflow = "";
        }
      }
    });
  });

  document.addEventListener("click", function (event) {
    const isClickInsideNav = navMenu.contains(event.target);
    const isClickOnToggle = navToggle.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnToggle &&
      navMenu.classList.contains("active")
    ) {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    }
  });
});
