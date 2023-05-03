# create a class named Cat that tracks the number of times a new Cat object is instantiated. 
# The total number of Cat instances should be printed when ::total is invoked.

class Cat
  @@count = 0
  def initialize; @@count += 1 end
  def self.total; @@count end
end

kitty1 = Cat.new
kitty2 = Cat.new

p Cat.total # => 2