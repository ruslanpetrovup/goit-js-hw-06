const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients')
ingredients.forEach(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  listEl.appendChild(liEl)
});
