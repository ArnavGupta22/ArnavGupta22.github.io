'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (const navigationLink of navigationLinks) {
  navigationLink.addEventListener("click", function () {
    const targetPage = this.textContent.trim().toLowerCase();

    for (const page of pages) {
      page.classList.toggle("active", page.dataset.page === targetPage);
    }

    for (const link of navigationLinks) {
      link.classList.toggle("active", link === this);
    }

    window.scrollTo(0, 0);
  });
}
