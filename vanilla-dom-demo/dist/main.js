/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//grab the dom elements we need (groceries, grocery-form, recipe-list, recipes)\n// getElementsByClassName vs querySelector\n\nconst groceries = document.querySelector('.groceries');\nconst groceryForm = document.querySelector('.grocery-form');\nconst recipeList = document.querySelector('.recipe-list');\nconst recipes = document.querySelector('.recipes');\n\n// storing this in LOCAL STORAGE \n// parse the JSON object\nconst lsItems = JSON.parse(localStorage.getItem('item')) || [];\nconst lsRecipes = JSON.parse(localStorage.getItem('recipes')) || []\n\n//create event handler that adds to our grocery list\n\nconst addItem = (e) => {\n  e.preventDefault();\n\n  let input = document.querySelector(\"input[name='add-grocery']\")\n\n  // grab the user's input\n  let value = input.value;\n\n  const item = { value: value };\n\n  lsItems.push(item);\n  localStorage.setItem(\"items\", JSON.stringify(lsItems));\n\n  // make a function to update the list\n  updateList();\n\n  groceryForm.reset();\n\n};\n\nconst updateList = () => {\n  // groceries.innerHTML = lsItems.map(item => {\n  //       return `<li>${item.value}</li>`\n  //   });\n\n  // if the groceries don't have a childNode\n  if (!groceries.hasChildNodes()) {\n    // iterate through the local storage []\n    lsItems.map(item => {\n      // create an li element\n      let li = document.createElement('li')\n      // set the li ele's text to = user input\n      li.innerText = item.value;\n      // append to groceries, groceries = parent, item = child\n      // it adds the node to the end of the list of children of the parentnode\n      // li.addEventListener(\"click\", markAsDone);\n      groceries.appendChild(li)\n      // ul, parent node\n        // li, child node\n      // ending ul\n    })\n  } else {\n// the groceries to the end of the localStorage list and then append to the the parent node \n    let li = document.createElement('li');\n    li.innerText = lsItems[lsItems.length - 1].value;\n    // li.addEventListener(\"click\", markAsDone)\n    groceries.appendChild(li);\n  }\n};\n\nconst markAsDone = (e) => {\n  e.preventDefault();\n  e.stopPropagation();\n\n  let ele = e.target;\n\n  ele.classList.toggle('done');\n}\n\n\n// --------- DEMO 3 ----------\n\n//create event handler that adds to our recipes list\nconst addRecipe = (e) => {\n  e.preventDefault();\n  let recipeText = e.target.innerText;\n\n  lsRecipes.push({ recipeText });\n  localStorage.setItem(\"recipes\", JSON.stringify(lsRecipes))\n\n  updateWeeklyRecipe();\n}\n\n//create action to render our recipes list\n// This should show how we can utilize window.location.hash in conjunction with anchor tags < a ></a > to \"anchor\" specific areas of our webpage when a user clicks on a link based on the id value we set in our set of anchor tags\nconst updateWeeklyRecipe = () => {\n\n  recipes.innerHTML = lsRecipes.map((recipe) => {\n    return `\n            <a href=\"\" class=\"recipeText\">\n                ${recipe.recipeText}\n            </a>\n            `\n  });\n\n  //ADD AN EVENT LISTENER to set window.location.hash\n  recipes.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    let text = e.target.innerText;\n    window.location.hash = text.trim() // trim remove empty spaces from either side of the text\n  })\n}\n\n\ngroceryForm.addEventListener(\"submit\", addItem);\ngroceries.addEventListener(\"click\", markAsDone);\n//add event listener to to add recipe\nrecipeList.addEventListener(\"click\", addRecipe);\nupdateList();\nupdateWeeklyRecipe();\n\n\n// ------- event bubbling demo ----------\n\n// let groc = document.querySelectorAll(\".groceries li\")\n\n\n// groc.forEach((child) => {\n//   child.addEventListener(\"click\", markAsDone);\n// })\n\n// comment in the code for adding event listeners on the li and comment out stopPropagation();\n\n// const boo = (e) => {\n//   alert(\"Boo from the groceries ul! Did we expect this?\")\n// }\n\n// groceries.addEventListener(\"click\", boo);\n\n\n\n//# sourceURL=webpack://vanilla-dom-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;