function hidePageLoader() {
  const pageLoader = document.querySelector(".page-loader");
  if (pageLoader) {
    pageLoader.classList.add("loaded");
    pageLoader.addEventListener(
      "transitionend",
      () => {
        if (pageLoader.classList.contains("loaded")) {
          pageLoader.remove();
        }
      },
      { once: true }
    );
  }
}

window.addEventListener("load", () => {
  hidePageLoader();
});

function initMobileMenu() {
  const burger = document.querySelector(".header__burger");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const mobileOverlay = document.querySelector(".header__mobile-overlay");
  const closeButton = document.querySelector(".header__mobile-menu-close");
  const dropdownItems = document.querySelectorAll(
    ".header__mobile-menu-item--dropdown"
  );

  if (!burger || !mobileMenu || !mobileOverlay) return;

  function openMenu() {
    mobileMenu.classList.add("header__mobile-menu--active");
    mobileOverlay.classList.add("header__mobile-overlay--active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu.classList.remove("header__mobile-menu--active");
    mobileOverlay.classList.remove("header__mobile-overlay--active");
    document.body.style.overflow = "";
    dropdownItems.forEach((item) => {
      item.classList.remove("active");
      const submenu = item.querySelector(".header__mobile-submenu");
      if (submenu) {
        submenu.classList.remove("header__mobile-submenu--active");
      }
    });
  }

  burger.addEventListener("click", openMenu);
  closeButton?.addEventListener("click", closeMenu);
  mobileOverlay.addEventListener("click", closeMenu);

  dropdownItems.forEach((item) => {
    const toggle = item.querySelector(".header__mobile-menu-link--toggle");
    const submenu = item.querySelector(".header__mobile-submenu");

    if (toggle && submenu) {
      toggle.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        if (isActive) {
          item.classList.remove("active");
          submenu.classList.remove("header__mobile-submenu--active");
        } else {
          dropdownItems.forEach((otherItem) => {
            otherItem.classList.remove("active");
            const otherSubmenu = otherItem.querySelector(
              ".header__mobile-submenu"
            );
            if (otherSubmenu) {
              otherSubmenu.classList.remove("header__mobile-submenu--active");
            }
          });
          item.classList.add("active");
          submenu.classList.add("header__mobile-submenu--active");
        }
      });
    }
  });

  const mobileMenuLinks = mobileMenu.querySelectorAll(
    ".header__mobile-menu-link:not(.header__mobile-menu-link--toggle)"
  );
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setTimeout(closeMenu, 100);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
});
