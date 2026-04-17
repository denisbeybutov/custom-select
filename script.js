//--------переменные

const button = document.querySelector('#select__button');
const selectList = document.querySelector('#select__list');
const arrowUp = document.querySelector('#arrow-up');
const arrowDown = document.querySelector('#arrow-down');

//----слушатели------
button.addEventListener('click', toggleMenu);

//----функции------
function toggleMenu(){
    selectList.classList.toggle('hidden');
    arrowUp.classList.toggle('hidden');
    arrowDown.classList.toggle('hidden');
}

