import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {videoEnabled} from './modules/project/video-active';
import {activatesTabs} from './modules/project/tabs';
import {initForm} from './modules/project/validation';
import {mediaQueries, transferLogo} from './modules/project/transfer-logo';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  // Utils
  // ---------------------------------

  iosVhFix();
  activatesTabs();
  if (form) {
    initForm(form);
  }

  mediaQueries.addEventListener('change', transferLogo);
  transferLogo(mediaQueries);
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    videoEnabled();
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
