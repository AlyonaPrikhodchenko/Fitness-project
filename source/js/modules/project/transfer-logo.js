let mediaQueries = window.matchMedia('(max-width: 767px)');
const logo = document.querySelector('[data-logo="logo"]');
const logoItem = document.querySelector('[data-item="logo"]');
const navigationList = document.querySelector('.navigation__list');
const navigation = document.querySelector('.navigation');

const transferLogo = (media) => {
  if (navigation && logo) {
    if (media.matches) {
      navigationList.insertBefore(logoItem, navigationList.firstChild);
      logoItem.insertBefore(logo, logoItem.firstChild);
    } else {
      navigation.insertBefore(logo, navigation.firstChild);
      navigationList.removeChild(logoItem);
    }
  }
};

export {transferLogo, mediaQueries};
