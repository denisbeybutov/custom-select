//--------переменные

const selectButton = document.querySelector('#select__button');
const selectList = document.querySelector('#select__list');
const arrowUp = document.querySelector('#arrow-up');
const arrowDown = document.querySelector('#arrow-down');
const selectButtonText = document.querySelector('#select__button-text');
const greyButton = document.querySelector('#grey');
const blueButton = document.querySelector('#blue');
const selectCont = document.querySelector('#select');

//----слушатели------
selectButton.addEventListener('click', toggleMenu);
selectList.addEventListener('click',changeNameSelectButton);
greyButton.addEventListener('click', addGreyColorForItems);
blueButton.addEventListener('click', removeGreyColorForItem);
document.addEventListener('click', closeMenu);

//----функции------
function toggleMenu(){
    selectList.classList.toggle('hidden-list');
    arrowUp.classList.toggle('hidden');
    arrowDown.classList.toggle('hidden');
    selectButton.classList.toggle('open');
    selectCont.classList.toggle('open');
}

function changeNameSelectButton(event){
    const nameLabel = event.target.textContent;
    selectButtonText.textContent = nameLabel;
    toggleMenu();
}

function addGreyColorForItems() {
    selectList.classList.add('item-hover-grey');
    
}

function removeGreyColorForItem(){
    selectList.classList.remove('item-hover-grey');
    
}

function closeMenu(event) {
    if(event.target.dataset.close){
        selectList.classList.add('hidden-list');
        arrowUp.classList.add('hidden');
        arrowDown.classList.remove('hidden');
        selectButton.classList.remove('open');
        selectCont.classList.remove('open');
    }
    
}