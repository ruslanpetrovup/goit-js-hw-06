const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listEl = document.querySelector('#ingredients')
ingredients.forEach(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  listEl.appendChild(liEl)
});
