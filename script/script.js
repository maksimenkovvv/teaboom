document.addEventListener('DOMContentLoaded', function () {
  let tabs = document.querySelectorAll('.card__tabs-item');
  let descriptions = document.querySelectorAll('.card__tabs-description');

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      // снять active со всех табов и описаний
      tabs.forEach(function (t) {
        t.classList.remove('active');
      });
      descriptions.forEach(function (d) {
        d.classList.remove('card__tabs-description-visible');
      });

      // включить выбранные табы
      tab.classList.add('active');

      let desc = descriptions[index];
      if (desc) {
        desc.classList.add('card__tabs-description-visible');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let items = document.querySelectorAll('.card__variants .card__item');

  items.forEach(function (item) {
    // изначально счётчик пустой
    let counter = item.querySelector('.card__cart-image .card__item-counter');
    if (counter) counter.textContent = '';

    item.dataset.count = '0';

    item.addEventListener('click', function () {
      // увеличиваем счётчик card__item
      item.dataset.count = String(Number(item.dataset.count) + 1);

      if (counter) counter.textContent = item.dataset.count;
    });
  });
});
