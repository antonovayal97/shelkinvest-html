document.addEventListener("DOMContentLoaded", (event) => {
  let mainBanner = document.querySelector(".main-banner");
  let animationDuration = 750;
  let animationDelayLogo = 150;
  let animationType = "ease-in-out";

  if (mainBanner) {
    let mainBannerImage = mainBanner.querySelector(".main-banner__image img");
    let mainBannerBottomImage = mainBanner.querySelector(
      ".main-banner__bottom-image"
    );
    let mainBannerLogo = mainBanner.querySelector(".main-banner__top-logo");

    let mainBannerBottomShadowOne = mainBanner.querySelector(
      ".main-banner__bottom-shadow-1"
    );
    let mainBannerBottomShadowTwo = mainBanner.querySelector(
      ".main-banner__bottom-shadow-2"
    );

    if (
      mainBannerImage &&
      mainBannerBottomImage &&
      mainBannerLogo &&
      mainBannerBottomShadowOne &&
      mainBannerBottomShadowTwo
    ) {
      mainBannerImage.style.transition =
        "all " + animationDuration + "ms " + animationType;
      mainBannerBottomImage.style.transition =
        "all " + animationDuration + "ms " + animationType;

      mainBannerLogo.style.transition =
        "all " + animationDuration + "ms " + animationType;
      mainBannerLogo.style.transitionDelay = animationDelayLogo;

      mainBannerBottomShadowOne.style.transition =
        "all " + animationDuration + "ms " + animationType;
      mainBannerBottomShadowOne.style.transitionDelay = animationDelayLogo;

      mainBannerBottomShadowTwo.style.transition =
        "all " + animationDuration + "ms " + animationType;
      mainBannerBottomShadowTwo.style.transitionDelay = animationDelayLogo;

      setTimeout(() => {
        mainBanner.classList.add("main-banner--animated");
      }, 10);
    }
  }
});
