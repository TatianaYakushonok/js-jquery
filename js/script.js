// методы jQuery
// text() - метод, который позволяет менять текст, получать текст.
// html() - метод, который позволяет получать html
// parent() - метод, который позволяет получить родителя
// parents() - метод, который позволяет получить любого родителя элемента
// find() - метод поиска элементов
// prev() - метод поиска предведущего элемента
// next() - метод поиска следующего элемента
// get() - метод получения самого элемента
// addClass() - метод добавления класса элементу
// removeClass() - метод удаления класса у элемента
// toggleClass() - метод переключения класса у элемента
// hasClass() - метод определения наличия класса у элемента
// attr() - метод получения атребутов элемента
// offset() - метод получения местоположения элемента
// slideUp() - метод анимации скрывающий элемент вверх

const headerSign = $('.header__sign');
//headerSign.addClass('header__sign_active');
//headerSign.removeClass('header__sign_active');
headerSign.click(function () {
  $(this).toggleClass('header__sign_active');
});

headerSign.dblclick(function () {
  $(this).toggleClass('red');
});

const modalBtn = $('.present__modal-order');
const modalClose = $('.modal-order__close');

modalBtn.on('click', function () {
  $('.modal-order').show(500);
});

modalClose.on('click', function () {
  $('.modal-order').hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function () {
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
});

modalOrderInput.blur(function () {
  modalOrderTitle.text('Заполните форму');
});

/*modalOrderInput.keydown(function (e) {
  console.log(e.type);
});

modalOrderInput.keypress(function (e) {
  console.log(e.type);
});

modalOrderInput.keyup(function (e) {
  console.log(e.type);
});*/

modalOrderInput.on('input', function (e) {
  console.log(e.type);
});

modalOrderInput.on('change', function (e) {
  console.log(e.type);
});

const foo = function () {
  $(this).next().slideDown();
};

const bar = function () {
  $(this).slideUp();
};

$('.what-building__text').on('click', foo);
$('.what-building__item').on('click', bar);

/*const div = $('<div>');
div.html(`
  <div class="hello-world">
    <h1>Привет друзья</h1>
  </div>
`);

$('body').append(div);*/

$('.modal-order__form').submit(function (e) {
  e.preventDefault();
  $ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    susses(data) {
      modalOrderTitle.text(
        'Спасибо, ваша заявка принята, номер заявки ' + data.id,
        $('.modal-order__form').slideUp(300),
      );
    },
    err() {
      modalOrderTitle.text('Что-то пошло не так, попробуйте позже!');
    },
  });
});

// ********************* MENU *********************

const burger = $('.header__burger');
const nav = $('.navigation');
const btnClose = $('.navigation__close');

const openMenu = () => {
  nav.animate(
    {
      left: 0,
    },
    500,
    function () {
      btnClose.animate(
        {
          opacity: 1,
        },
        300,
        'swing',
      );
    },
  );
};

const closeMenu = () => {
  nav.animate(
    {
      left: -400,
    },
    500,
  );
  $(this).animate(
    {
      opacity: 0,
    },
    300,
  );
};

burger.on('click', openMenu);
btnClose.on('click', closeMenu);

$(document).on('click', function (e) {
  e.preventDefault();
  if (!nav.is(e.target) && !burger.is(e.target)) {
    closeMenu();
  }
});
