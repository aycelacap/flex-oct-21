class Cat

  attr_accessor :age
  attr_reader :name
  # attr_reader, view the variable's value
  # attr_writer, change variable's value
  # attr_accessor takes the place of writing setter and getter methods for an instance variable

  def initialize(name, breed, age)
    @name = name # lines 3-5 instance variables
    @breed = breed 
    @age = age
    # p self # instance of cat class
  end

  # p self # classname, the class itself
  p "from within the cat class"

  def meow 
    #  puts "My name is #{@name}, meow!"
  puts "My name is #{self.name}, meow!" # explicit self
  # puts "My name is #{name}, meow!" # implicit self
  end

  def self.who_is_older?(cat_a, cat_b)
    p self
    # what is self here?
    # self is refer to the class 
  end

  # def age 
  #   @age
  # end

  # def age=(new_age)
  #   @age = new_value
  # end
end

georgie = Cat.new("georgie", "tabby", 7)
nemo = Cat.new("captain_nemo", "short-haired", 9)

p Cat.who_is_older?(georgie, nemo)

p georgie.meow

# class Car 

#   def initialize

#   end

# end

# p tesla = Car.new
# p fiat = Car.new 
# p toyota = Car.new