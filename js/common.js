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

function checkHeader() {
  const header = document.querySelector(".header");

  const mainPages = ["/", "/index.html"];

  if (!mainPages.includes(location.pathname)) {
    header.classList.add("header--pages");
  }
}
function initDropdown() {
  const dropdownItems = document.querySelectorAll(
    ".c-mobile-menu-item--dropdown"
  );

  dropdownItems.forEach((item) => {
    const toggle = item.querySelector(".c-mobile-menu-link--toggle");
    const submenu = item.querySelector(".c-mobile-submenu");

    if (toggle && submenu) {
      toggle.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        if (isActive) {
          item.classList.remove("active");
          submenu.classList.remove("c-mobile-submenu--active");
        } else {
          dropdownItems.forEach((otherItem) => {
            otherItem.classList.remove("active");
            const otherSubmenu = otherItem.querySelector(".c-mobile-submenu");
            if (otherSubmenu) {
              otherSubmenu.classList.remove("c-mobile-submenu--active");
            }
          });
          item.classList.add("active");
          submenu.classList.add("c-mobile-submenu--active");
        }
      });
    }
  });
}

function initMobileMenu() {
  const burger = document.querySelector(".header__burger");
  const header = document.querySelector(".header");
  const mobileMenu = document.querySelector(".header__mobile-menu");
  const mobileOverlay = document.querySelector(".header__mobile-overlay");
  const closeButton = document.querySelector(".header__mobile-menu-close");

  let isOpen = false;

  if (!burger || !mobileMenu || !mobileOverlay) return;

  function openMenu() {
    header.classList.add("header--mobile-menu-opened");
    burger.classList.add("header__burger--active");
    mobileMenu.classList.add("header__mobile-menu--active");
    mobileOverlay.classList.add("header__mobile-overlay--active");
    document.body.style.overflow = "hidden";
    isOpen = true;
  }

  function closeMenu() {
    header.classList.remove("header--mobile-menu-opened");
    burger.classList.remove("header__burger--active");
    mobileMenu.classList.remove("header__mobile-menu--active");
    mobileOverlay.classList.remove("header__mobile-overlay--active");
    document.body.style.overflow = "";
    isOpen = false;
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  burger.addEventListener("click", toggleMenu);
  closeButton?.addEventListener("click", closeMenu);
  mobileOverlay.addEventListener("click", closeMenu);
}

document.addEventListener("DOMContentLoaded", () => {
  initDropdown();
  initMobileMenu();
  checkHeader();

  const modal = new HystModal({
    linkAttributeName: "data-hystmodal",
    //settings (optional). see API
  });

  //modal.open("#modal-1");

  let pageScroller = document.querySelector(".page-scroller");

  pageScroller.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  window.addEventListener("scroll", function () {
    if (window.scrollY > 1000) {
      pageScroller.classList.add("page-scroller--active");
    } else {
      pageScroller.classList.remove("page-scroller--active");
    }
  });

  let phones = document.querySelectorAll(".c-phone-input");

  phones.forEach((phone) => {
    const maskOptions = {
      mask: "+{7} (000) 000-00-00",
    };
    const mask = IMask(phone, maskOptions);
  });
});
