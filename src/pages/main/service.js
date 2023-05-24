const menu = document.querySelector('.burger-menu');
const Container = document.querySelector('.container');
const Burger = document.querySelector('.menu__burger');
const menuClose = document.querySelector('.menu__close');

const setBurger = (action) => {
    Container.classList[action]('_open');
    Burger.classList[action]('_open');   
};

const actions = [
  [menu, () => setBurger('add')],
  [menuClose, () => setBurger('remove')],
  [Container, (e) => {
    if (e.target == Container) setBurger('remove')
  }]
];
  
for (let [elem, action] of actions) {
  elem.addEventListener('click', action)
};