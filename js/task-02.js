const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients')
const listMas = ingredients.map(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList.add('item')
  return liEl.outerHTML
});
listEl.innerHTML = listMas.join('');