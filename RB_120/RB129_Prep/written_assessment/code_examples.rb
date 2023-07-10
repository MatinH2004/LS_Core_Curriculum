# Code Examples

## MODULES

### Namespacing
module Animal
  class Bear; end
  class Eagle; end
  class BananaSlug; end
end

Animal::Bear.new
Animal::Eagle.new
Animal::BananaSlug.new

### Mixins
module Walkable
  def walk
    "Im walking!"
  end
end

class Animal; end

class Dog < Animal
  include Walkable
end

class Cat < Animal
  include Walkable
end

class Fish
  def walk
    "Cant walk..."
  end
end

p Dog.new.walk   # "Im walking!"
p Cat.new.walk   # "Im walking!"
p Fish.new.walk  # "Cant walk..."

### Methods
module Mammal
  ...

  def self.some_out_of_place_method(num)
    num ** 2
  end
end

Mammal.some_out_of_place_method(2) # => 4

## POLYMORPHISM

# The concept of polymorphism is demonstrated here, as objects of different derived classes
# are treated uniformly through their shared base class, enabling polymorphic behaviour.

## SELF

# When self is called inside an instance method, it references the instance (object) that 
# called the method. However, when self is called outside of an instance method, it references 
# the class and can be used to make class methods.
