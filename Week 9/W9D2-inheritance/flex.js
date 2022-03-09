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
function inherits(ParentClass, ChildClass) {
    function Surrogate() { }
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.construtor = ChildClass;
}
// Line 30
Function.prototype.inherits = function(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


// inherits(Animal, Cat)
Cat.inherits(Animal);

// what if we put Cat.inherits(Animal)
// would we lose access to meow because inherit is going to set the cat's prototype to animal

Cat.prototype.meow = function () {
    console.log("meow");
};

const garfield = new Cat('Garfield');
garfield.eat();
garfield.meow();