# Create a class method that outputs "Hello! I'm a cat!"

class Cat
  def self.generic_greeting
    puts "Hello! I'm a cat!"
  end
end

Cat.generic_greeting

# FE
kitty = Cat.new
kitty.class.generic_greeting

# We get the same output as `kitty.class`
# returns the class of the kitty object
# which then, the class method is called
# on the the class.