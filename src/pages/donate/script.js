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

//--- Amount ---

const Amount = document.querySelector('.donate__another-amount-input')
const DonateButton = document.querySelector('.donate__button')
const Inputs = document.querySelectorAll('.debt-amoun-input')

DonateButton.addEventListener('click', (e) => {
    e.preventDefault()
})


Amount.addEventListener('input', (e) => {
  if (Amount.value.length > 4) Amount.value = Amount.value.substr(0, 4);
  Amount.value = Amount.value.replace(/^0/, '');
  Inputs.forEach((item) =>  {
    if (Amount.value == item.value) item.setAttribute('checked', 'true')
    else item.removeAttribute('checked', 'true')
    })
  }) 

  Inputs.forEach((item) => {
    if (item.checked) Amount.value = item.value
    item.addEventListener('click', () => {
      Amount.value = item.value
    })
  })