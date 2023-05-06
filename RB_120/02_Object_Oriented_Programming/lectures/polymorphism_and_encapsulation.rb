# *** POLYMORPHISM ***

class Animal
  def move
  end
end

class Fish < Animal
  def move
    puts "swim"
  end
end

class Cat < Animal
  def move
    puts "walk"
  end
end

# Sponges and Corals don't have a separate move method - they don't move
class Sponge < Animal; end
class Coral < Animal; end

animals = [Fish.new, Cat.new, Sponge.new, Coral.new]
animals.each { |animal| animal.move }

# We can see that every object in the array is a different animal, 
# but the client code can treat them all as a generic animal, i.e., 
# an object that can move. Thus, the public interface lets us work 
# with all of these types in the same way even though the implementations 
# can be dramatically different. That is polymorphism in action.


class Wedding
  attr_reader :guests, :flowers, :songs

  def prepare(preparers)
    preparers.each do |preparer|
      preparer.prepare_wedding(self)
    end
  end
end

class Chef
  def prepare_wedding(wedding)
    prepare_food(wedding.guests)
  end

  def prepare_food(guests)
    #implementation
  end
end

class Decorator
  def prepare_wedding(wedding)
    decorate_place(wedding.flowers)
  end

  def decorate_place(flowers)
    # implementation
  end
end

class Musician
  def prepare_wedding(wedding)
    prepare_performance(wedding.songs)
  end

  def prepare_performance(songs)
    #implementation
  end
end

# As long as the objects involved use the same method name and take the
# same number of arguments, we can treat the object as belonging to a specific 
# category of objects.

# *** ENCAPSULATION ***

# Encapsulation lets us hide the internal representation of an object from the 
# outside and only expose the methods and properties that users of the object 
# need. We can use method access control to expose these properties and methods 
# through the public (or external) interface of a class: its public methods.

class Dog
  attr_reader :nickname

  def initialize(n)
    @nickname = n
  end

  def change_nickname(n)
    self.nickname = n
  end

  def greeting
    "#{nickname.capitalize} says Woof Woof!"
  end

  private
    attr_writer :nickname
end

dog = Dog.new("rex")
dog.change_nickname("barny") # changed nickname to "barny"
puts dog.greeting # Displays: Barny says Woof Woof!

# The class should have as few public methods as possible. It lets us simplify 
# using that class and protect data from undesired changes from the outer world.