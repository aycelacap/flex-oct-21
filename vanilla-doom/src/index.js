//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)
// command + opt + i
// console
// inspect the elements

// ------- groceries -------
// let groceries = document.getElementsByClassName("groceries");
// or
// we want the DOM elements or nodes and not a collection saved in an array so 
// so we use querySelector
const groceries = document.querySelector('.groceries');


// ---------- grocery-form ----------
const groceryForm = document.querySelector('.grocery-form');

// ---------- recipe-list ----------
const recipeList = document.querySelector('.recipe-list');

// ---------- recipes ----------
const recipes = document.querySelector('.recipes');


//create variables to hold localStorage things
// The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions only

// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// // expected output: true
// because everything is in objects, we need to parse them so we can key into the objects

const lsItems = JSON.parse(localStorage.getItem('items')) || [];
const lsRecipes = JSON.parse(localStorage.getItem('recipes')) || [];

//---------------PHASE 1 DOM MANIPULATION DEMO-----------------//
//create event handler that adds to our grocery list
const addItem = (e) => {
  e.preventDefault();
  // Prevents the browsers default behaviour (such as opening a link), but does not stop the event from bubbling up the DOM.

  // grab the input field and extract it's value
  // .querySelector returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

  // look at line 20
  let input = document.querySelector("input[name='add-grocery']");
  // we are accessing the html attribute for input
  let value = input.value;

  // creating a new constant to save the value as a key/val pair

  const item = { value: value } // {value: value} => { value: 'eggs' }

  // add this new item to our localStorage items
  // The setItem(key, val) method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

  lsItems.push(item);
  localStorage.setItem("items", JSON.stringify(lsItems));

  // try adding a grocery. it doesnt work. 
  // we need to update our list 
  // create an update list first

  // call our method to update the grocery list 
  updateList();

  // clear input field of gorcery form
  groceryForm.reset();
}

//create action to render grocery list items
const updateList = () => {

  // method 1: using string html element
  // groceries.innerHTML = lsItems.map(item => {
  //       return `<li>${item.value}</li>`
  //   });


  // method 2: using document.createElement
// Node.hasChildNodes()
// The hasChildNodes() method of the Node interface returns a boolean value indicating whether the given Node has child nodes or not.

  if (!groceries.hasChildNodes()) {
    // the children would be what we add in the field saved into local storage
    // we will create li's for each item 
    lsItems.map(item => {
      let li = document.createElement('li');
      // innerText sets the text to what we item's value!

      li.innerText = item.value;
      // li.addEventListener("click", markAsDone)
      groceries.appendChild(li);
      // appendChild is a JS method that appnds this li as the child of this groceries node
    })
  } else {
    // if we do have childNodes on our Parent Node groceries, we want to add the groceries to the end of the localStorage list and then append to the the parent node
    let li = document.createElement('li');
    li.innerText = lsItems[lsItems.length - 1].value;
    // li.addEventListener("click", markAsDone)
    groceries.appendChild(li);
  };

}

//create event handler to cross out list items on click
const markAsDone = (e) => {
  e.preventDefault();
  // e.stopPropagation(); //to be added later

  // grab the element that was clicked on (the thing that triggered the event)
  let ele = e.target;

  ele.classList.toggle('done');
}

//---------------PHASE III FOR WINDOW, LOCATION, HISTORY DEMO-----------------//

//create event handler that adds to our recipes list
const addRecipe = (e) => {

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

//---------------------------------------------------------------------//

//add event listener to on submit for form to process add item
groceryForm.addEventListener("submit", addItem)
//add event listener to cross out a list item
// groceries.addEventListener("click", markAsDone);
//add event listener to to add recipe
recipeList.addEventListener("click", addRecipe);

//call our methods to populate DOM
updateList();
updateWeeklyRecipe();


//--------------------PHASE II EVENT BUBBLIING DEMO---------------------------------//
// comment out markAsDone above
// the wuestion is, why can't we just select the li's and 

// we will select all the li's
let groc = document.querySelectorAll(".groceries li") // querySelectorAll puts everything in a node list

// even tho we have an event listener on the parent and child
// what's the deal with this?
// This should show that adding event handlers on each li clutters up the code
// Event delegation takes advantage of bubbling and accomplishes the same thing when the event handler is installed on the parent ul
// This should also show the bubbling behavior that when a li is clicked, it also triggers event handlers on the parent with sometimes unexpected outcomes. Like, we expected the groceries to be crossed off but that doesn't happen

// console.log(groc)
groc.forEach((child) => {
    child.addEventListener("click", markAsDone);
})
const boo = (e) => {
    alert("Boo from the groceries ul! You didn't expect this, did you?!")
}

groceries.addEventListener("click", boo); //parent


//---------------------------------------------------------------------//


//Script for LinkedIn endorsements
// let skills = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared');
// for (let i = 0; i < skills.length; ++i) {
//     skills[i].click();
// }