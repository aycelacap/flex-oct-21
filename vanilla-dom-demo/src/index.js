//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
// getElementsByClassName vs querySelector

const groceries = document.querySelector('.groceries');
const groceryForm = document.querySelector('.grocery-form');
const recipeList = document.querySelector('.recipe-list');
const recipes = document.querySelector('.recipes');

// storing this in LOCAL STORAGE 
// parse the JSON object
const lsItems = JSON.parse(localStorage.getItem('item')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || []

//create event handler that adds to our grocery list

const addItem = (e) => {
  e.preventDefault();

  let input = document.querySelector("input[name='add-grocery']")

  // grab the user's input
  let value = input.value;

  const item = { value: value };

  lsItems.push(item);
  localStorage.setItem("items", JSON.stringify(lsItems));

  // make a function to update the list
  updateList();

  groceryForm.reset();

};

const updateList = () => {
  // groceries.innerHTML = lsItems.map(item => {
  //       return `<li>${item.value}</li>`
  //   });

  // if the groceries don't have a childNode
  if (!groceries.hasChildNodes()) {
    // iterate through the local storage []
    lsItems.map(item => {
      // create an li element
      let li = document.createElement('li')
      // set the li ele's text to = user input
      li.innerText = item.value;
      // append to groceries, groceries = parent, item = child
      // it adds the node to the end of the list of children of the parentnode
      // li.addEventListener("click", markAsDone);
      groceries.appendChild(li)
      // ul, parent node
        // li, child node
      // ending ul
    })
  } else {
// the groceries to the end of the localStorage list and then append to the the parent node 
    let li = document.createElement('li');
    li.innerText = lsItems[lsItems.length - 1].value;
    // li.addEventListener("click", markAsDone)
    groceries.appendChild(li);
  }
};

const markAsDone = (e) => {
  e.preventDefault();
  e.stopPropagation();

  let ele = e.target;

  ele.classList.toggle('done');
}


// --------- DEMO 3 ----------

//create event handler that adds to our recipes list
const addRecipe = (e) => {
  e.preventDefault();
  let recipeText = e.target.innerText;

  lsRecipes.push({ recipeText });
  localStorage.setItem("recipes", JSON.stringify(lsRecipes))

  updateWeeklyRecipe();
}

//create action to render our recipes list
// This should show how we can utilize window.location.hash in conjunction with anchor tags < a ></a > to "anchor" specific areas of our webpage when a user clicks on a link based on the id value we set in our set of anchor tags
const updateWeeklyRecipe = () => {

  recipes.innerHTML = lsRecipes.map((recipe) => {
    return `
            <a href="" class="recipeText">
                ${recipe.recipeText}
            </a>
            `
  });

  //ADD AN EVENT LISTENER to set window.location.hash
  recipes.addEventListener('click', (e) => {
    e.preventDefault();

    let text = e.target.innerText;
    window.location.hash = text.trim() // trim remove empty spaces from either side of the text
  })
}


groceryForm.addEventListener("submit", addItem);
groceries.addEventListener("click", markAsDone);
//add event listener to to add recipe
recipeList.addEventListener("click", addRecipe);
updateList();
updateWeeklyRecipe();


// ------- event bubbling demo ----------

// let groc = document.querySelectorAll(".groceries li")


// groc.forEach((child) => {
//   child.addEventListener("click", markAsDone);
// })

// comment in the code for adding event listeners on the li and comment out stopPropagation();

// const boo = (e) => {
//   alert("Boo from the groceries ul! Did we expect this?")
// }

// groceries.addEventListener("click", boo);

