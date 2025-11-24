class MainBannerAnimator {
  constructor(selector, options = {}) {
    this.mainBanner = document.querySelector(selector);
    if (!this.mainBanner) return;

    this.animationDuration = options.duration || 750;
    this.animationDelayLogo = options.delayLogo || 150;
    this.animationType = options.type || "ease-in-out";
    this.visibilityThreshold = options.visibilityThreshold || 0.7; // 70%

    // Элементы баннера
    this.bannerImage = this.mainBanner.querySelector(".main-banner__image img");
    this.bottomImage = this.mainBanner.querySelector(
      ".main-banner__bottom-image"
    );
    this.logo = this.mainBanner.querySelector(".main-banner__top-logo");
    this.shadow1 = this.mainBanner.querySelector(
      ".main-banner__bottom-shadow-1"
    );
    this.shadow2 = this.mainBanner.querySelector(
      ".main-banner__bottom-shadow-2"
    );

    this.observeVisibility();
  }

  setTransition(element, delay = 0) {
    if (!element) return;
    element.style.transition = `all ${this.animationDuration}ms ${this.animationType}`;
    if (delay) element.style.transitionDelay = `${delay}ms`;
  }

  animate() {
    if (
      this.bannerImage &&
      this.bottomImage &&
      this.logo &&
      this.shadow1 &&
      this.shadow2
    ) {
      this.setTransition(this.bannerImage);
      this.setTransition(this.bottomImage);
      this.setTransition(this.logo, this.animationDelayLogo);
      this.setTransition(this.shadow1, this.animationDelayLogo);
      this.setTransition(this.shadow2, this.animationDelayLogo);

      setTimeout(() => {
        this.mainBanner.classList.add("main-banner--animated");
      }, 10);
    }
  }

  observeVisibility() {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= this.visibilityThreshold
          ) {
            this.animate();
            observer.unobserve(this.mainBanner);
          }
        });
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) } // шаги 0%–100%
    );

    observer.observe(this.mainBanner);
  }
}
