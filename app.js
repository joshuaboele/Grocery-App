// elements

const list = document.querySelector('.recipes');
const inputSubmit = document.querySelector('.input__submit');

// fallback data

let recipes = [1, 2, 3];  

// render function

function renderRecipes(array) {
    const recipeList = array.reduce((recipes, item, key) => {
      recipes += `<li class="list__item"><input class="ingredient__field" type="text" value="${item}"><button class="input__delete" data-index="${key}">x</button></li>`;
  
      return recipes;

    }, "");
  
    return recipeList;
}

// initial render call

list.innerHTML = renderRecipes(recipes);
let listItems = document.querySelectorAll('.list__item');
  
// event handlers

inputSubmit.addEventListener('click', function() {
    inputValue = document.querySelector('.input').value;
    recipes.push(inputValue);
    list.innerHTML = renderRecipes(recipes);
    listItems = document.querySelectorAll('.list__item');
    console.log(listItems);
})


listItems.forEach(listItem => {
    ingredientField = listItem.querySelector('.ingredient__field');
    listItem.addEventListener('change', function() {
        newVal = ingredientField.value;
        index = listItem.querySelector('.input__delete').dataset.index;
        updateRecipes(index, newVal);
        
    })
})

const deleteButtons = document.querySelectorAll('.input__delete');

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        index = button.dataset.index; 
        deleteRecipes(index);
    })
})

// functions

function deleteRecipes(index) {
    recipes.splice(index, 1);
    list.innerHTML = renderRecipes(recipes);
}

function updateRecipes(index, newVal) {
    recipes.splice(index, 1, newVal);
    list.innerHTML = renderRecipes(recipes);
}





