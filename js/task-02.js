const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

const makeDishIngredientList = ingredients => {
  return ingredients.map(ingredient => {
  const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    liEl.classList = 'item';
    return liEl;
  });
}
const items = makeDishIngredientList(ingredients);
ingredientsListEl.append(...items);