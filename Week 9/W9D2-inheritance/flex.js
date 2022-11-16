function Animal(name) {
  this.name = name;
};

Animal.prototype.eat = function () {
  console.log(this.name + ' is eating.');
};

// cat class
function Cat(name) {
  this.name = name;
}

// Line 29
// non-monkey patched
// function inherits(ParentClass, ChildClass) {
//     function Surrogate() { }
//     Surrogate.prototype = ParentClass.prototype;
//     ChildClass.prototype = new Surrogate();
//     ChildClass.prototype.construtor = ChildClass;
// }
// Line 30

// mONKEY Patched
Function.prototype.inherits = function (Parent) {
  function Surrogate() { }
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
  // points to parents class if we don't do this
};


// inherits(Animal, Cat)
Cat.inherits(Animal);

// what if we put Cat.inherits(Animal)
// would we lose access to meow because inherit is going to set the cat's prototype to animal

Cat.prototype.meow = function () {
  console.log(`${this.name} meows!`);
};

const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();




























// // myBind

// Function.prototype.myBind = function(context, ...bindArgs) {
//   // purpose of myBind?
//   // bind the context to the function
//   // writing the code for the bind method to view what's happening 
//   // under the hood

//   let that = this;
//   debugger
//   return function(callArgs) {
//     // this is the under the hood magic
//     // if context is not given, we place null as the first arg of apply/call

//     return that.apply(context, bindArgs.concat(callArgs))
//   }

// }

// const carlos = {
//   name: "carlos",
//   age: 24,
//   sayName: function () {
//     debugger
//     console.log(this.name)
//   },
//   greet: function (...greetings) {
//     const greetingsString = greetings.join(", ");
//     return `${greetingsString} my name is ${this.name}`;
//   }
// }

// const sandra = {
//   name: "sandra",
//   age: 30
// }

// console.log(carlos.sayName.myBind(sandra)());