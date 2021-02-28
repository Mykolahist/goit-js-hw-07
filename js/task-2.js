const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const scheduleIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
     const ingrElements = document.createElement('li');
    ingrElements.textContent = option;

    return ingrElements;
});

console.log(elements);

scheduleIngredients.append(...elements);