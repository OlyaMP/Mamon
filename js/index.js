//найти нужные мне узлы (кнопка, список, враппер)
const burgerButton = document.querySelector('.burger-menu__button');
const burgerWrapper = document.querySelector('.burger-menu');
const burgerList = document.querySelector('.burger-menu__list');

//выполнить функцию клика по кнопке, которая показывает и скрывает меню
burgerButton.addEventListener('click', handleMenu);

function handleMenu() {
    burgerList.classList.toggle('hide-menu');
}

//выполнить функцию при клике на любое место экрана
document.addEventListener('click', hideBurgerMenu);

function hideBurgerMenu(el) {

let targetInside = burgerWrapper.contains(el.target);

if(!targetInside) {
    burgerList.classList.add('hide-menu');
}
else {
    return;
}
}

//кнопка бургера
let burger = document.getElementById('burger');
burger.addEventListener('click', function () {
    burger.classList.toggle('burger-menu_open');
});

//выполнить функцию при клике на любое место экрана (вернуть бургер)
document.addEventListener('click', closeButton);

function closeButton(el) {

    let targetButton = burgerWrapper.contains(el.target);
    if(!targetButton) {
        burger.classList.remove('burger-menu_open');
    }
    else {
        return;
    }
}