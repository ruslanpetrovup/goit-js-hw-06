const inputEl = document.querySelector('#font-size-control');
let spanEl = document.querySelector('#text');

const editValue = () => {
 spanEl.style.fontSize = `${inputEl.value}px`;   
}

inputEl.addEventListener('click', editValue)