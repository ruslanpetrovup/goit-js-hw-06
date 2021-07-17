const categrs = document.querySelector('#categories');
console.log(`В списке ${categrs.children.length} категории.`);
const categr = document.querySelectorAll('.item');
categr.forEach(num => {
    console.log(`Категория: ${num.firstElementChild.textContent}`);
    console.log(`Количество элементов ${num.lastElementChild.childElementCount}`)
    console.log('')
})

