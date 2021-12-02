require "byebug"
class Cat
  attr_accessor :name, :age 
  attr_reader :breed 

  @@kittens = [];

  def self.kittens
    @@kittens
  end

  def initialize(name, breed, age)
    @name = name
    @breed = breed
    @age = age
  end

  def add_kitten
    @@kittens << self.name 
  end

  def meow 
    # "#{self.naame} says meow!" #gives better error messages
    "#{naaame} says meow!"
    # "#{@name} says meow!"
  end

  def meow2
    "#{@naame} says meow!"
  end

  def add_nickname(nickname)
    self.name = name + nickname 
    #setting a local variable called name 
    #self.name= setter method 
  end

  def name 
    @name
  end

  def name=(new_name)
    @name = new_name 
  end

  def age
    @age
  end

  def age=(num)
    @age = num
  end

  def breed
    @breed
  end

end

kitty = Cat.new("Garfield", "orange tabby", 11)
p kitty
p kitty.meow
# kitty2 = Cat.new("banana", "shorthair", 13) 
# p kitty2


# p 1
# p 5