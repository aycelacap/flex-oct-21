console.log("webpack is working");
const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00"
});

// we are adding an event listener -> a function that listens for a change. This change is noted in the first argument as the DOMContenetLoaded. Once the dom has loaded our content, then we read the rest of the function

// the DOMContentLoaded is when our HTML is fully loaded and parsed 

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  
});