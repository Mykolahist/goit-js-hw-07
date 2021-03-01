const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const scheduleIngredients = document.querySelector('#ingredients');

const makeScheduleIngredients = options => {
  return options.map(option => {
    const ingrElements = document.createElement('li');
    ingrElements.textContent = option;

    return ingrElements;
  });
};

const elements = makeScheduleIngredients(ingredients);
scheduleIngredients.append(...elements);