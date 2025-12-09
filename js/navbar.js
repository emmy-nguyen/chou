/* ===================================
   CHOU COLLECTIVE - Navbar JavaScript
   =================================== */

document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
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

  // Dropdown Menu
  const dropdownItems = document.querySelectorAll(".dropdown");

  dropdownItems.forEach((dropdown) => {
    const dropdownLink = dropdown.querySelector(".nav-link");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");

    if (dropdownLink && dropdownMenu) {
      dropdownLink.addEventListener("click", function (e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          dropdown.classList.toggle("active");
          const isExpanded = dropdown.classList.contains("active");
          dropdownLink.setAttribute("aria-expanded", isExpanded);

          dropdownItems.forEach((otherDropdown) => {
            if (
              (otherDropdown !== dropdown) &
              otherDropdown.classList.contains("active")
            ) {
              otherDropdown.classList.remove("active");
              otherDropdown
                .querySelector(".nav-link")
                .setAttribute("aria-expanded", "false");
            }
          });
        }
      });

      const dropdownLinks = dropdownMenu.querySelectorAll(".dropdown-link");
      dropdownLinks.forEach((link) => {
        link.addEventListener("click", function () {
          if (windown.innerWidth <= 1024) {
            dropdown.classList.remove("active");
            dropdownLink.setAttribute("aria-expanded", "false");

            navToggle.classList.remove("active");
            navMenu.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
            body.style.overflow = "";
          }
        });
      });
    }
  });
});
