const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
console.log(ingredients)
const navEl = document.querySelector('#ingredients')
ingredients.forEach(option => {
  const lastItem = document.createElement('li');
  lastItem.textContent = option;
  lastItem.classList.add('item');
  navEl.append(lastItem)
  console.log(lastItem)
})

 