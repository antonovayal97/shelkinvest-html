class MainBannerAnimator {
  constructor(selector, options = {}) {
    this.mainBanner = document.querySelector(selector);
    this.animationDuration = options.duration || 750;
    this.animationDelayLogo = options.delayLogo || 150;
    this.animationType = options.type || "ease-in-out";

    if (this.mainBanner) {
      this.mainBannerImage = this.mainBanner.querySelector(
        ".main-banner__image img"
      );
      this.mainBannerBottomImage = this.mainBanner.querySelector(
        ".main-banner__bottom-image"
      );
      this.mainBannerLogo = this.mainBanner.querySelector(
        ".main-banner__top-logo"
      );
      this.mainBannerBottomShadowOne = this.mainBanner.querySelector(
        ".main-banner__bottom-shadow-1"
      );
      this.mainBannerBottomShadowTwo = this.mainBanner.querySelector(
        ".main-banner__bottom-shadow-2"
      );

      this.init();
    }
  }

  setTransition(element, delay = 0) {
    if (!element) return;
    element.style.transition = `all ${this.animationDuration}ms ${this.animationType}`;
    if (delay) element.style.transitionDelay = `${delay}ms`;
  }

  init() {
    if (
      this.mainBannerImage &&
      this.mainBannerBottomImage &&
      this.mainBannerLogo &&
      this.mainBannerBottomShadowOne &&
      this.mainBannerBottomShadowTwo
    ) {
      this.setTransition(this.mainBannerImage);
      this.setTransition(this.mainBannerBottomImage);

      this.setTransition(this.mainBannerLogo, this.animationDelayLogo);
      this.setTransition(
        this.mainBannerBottomShadowOne,
        this.animationDelayLogo
      );
      this.setTransition(
        this.mainBannerBottomShadowTwo,
        this.animationDelayLogo
      );

      setTimeout(() => {
        this.mainBanner.classList.add("main-banner--animated");
      }, 10);
    }
  }
}
