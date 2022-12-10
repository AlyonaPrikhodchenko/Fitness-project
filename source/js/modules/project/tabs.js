const activatesTabs = () => {
  const tabs = document.querySelectorAll('.tabs__item');
  const tabsContent = document.querySelectorAll('.tabs__panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);

      tabsContent.forEach((item) => {
        item.classList.remove('tabs__panel--active');
      });

      target.classList.add('tabs__panel--active');

      tabs.forEach((tabitem) => {
        tabitem.classList.remove('tabs__item--active');
      });

      tab.classList.add('tabs__item--active');
    });
  });
};

export {activatesTabs};
