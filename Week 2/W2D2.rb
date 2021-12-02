# class variable vs class constant 
# self in class methods vs instance methods
# setters and getters, errors
# errors @naame vs self.naame

class Cat
  attr_accessor :age
  attr_reader :breed
  attr_writer :name

  # attr_accessor -> getter and setter for instance variable
  # attr_reader -> getter method
  # attr_writer -> setter method

  @@cat_can_fly = true # class variable, all instances can access this
  BREEDS = ["orange tabby", "calico"] # class constant, cannot change, can be referred to outside of this class by Cat::Breeds, Cat::BREEDS
  
  def initialize(name, breed, age)
    @name = name
    @breed = breed
    @age = age
  end

  # def age
  #   @age
  # end

  # def breed 
  #   @breed
  # end

  # def name=(name)
  #   @name = name
  # end

  def self.who_is_older(cat_a, cat_b) # class method to be invoked on the class itself
    # self here is -> the class itself
    p "#{self} from self.who_is_older"
    if cat_a.age > cat_b.age
      cat_a
    elsif cat_a.age < cat_b.age
      cat_b
    else
      "Same age"
    end
  end

  def meow # instance method, must be used on an instance of the class
    # self here is -> instance of the cat
    # puts "#{self.name} says meow ^^" # will only work if we have a getter method for name
    puts "#{@name} says meow ^^" # will always work bc we have access through the initialize method
  end

  
  p self # ALSO going to be class -> Cat
end

kitty = Cat.new("Garfield", "orange tabby", 14)
p kitty
kitty2 = Cat.new("banana", "shorhair", 11)
p kitty2
# p Cat.who_is_older(kitty, kitty2)
p kitty.meow
p kitty2.meow

# there is a difference between self.name and @name
# self.name -> we need a getter method
# @name 