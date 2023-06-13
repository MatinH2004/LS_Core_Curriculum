# RB129 | Study Guide | June 8, 2023

### Topics of Interest
* Classes and object
* Accessor methods
* Getter and setter methods
* Instant variables, class variables, and constants, including scope of each type and how inheritance can affect that scope.
* Instance methods vs class methods
* Method Access Control
* Referencing and setting instance variables vs using getters and setters
* Inheritance, encapsulation, polymorphism
* Modules, namespacing
* Method lookup path (`#ancestors`)
* self (how to use it)
* Reading OO code
* Fake operators and equality
* Working with collaborator objects
* Create a code spike

### Practice Problems

1. What is output and why? What does this demonstrate about instance variables that differentiates them from local variables?
```ruby
class Person
  attr_reader :name
  
  def set_name
    @name = 'Bob'
  end
end

bob = Person.new
p bob.name
```

* This code defines a `Person` class. Local variable `bob` is initialized to a new `Person` object. On the last line, we call the `name` getter method on our `bob` object, and pass it as an argument to the `p` method invocation. This outputs `nil` and returns `nil` as the `@name` instance variable within the class is not initialized before it is referenced. This demonstrates that instance variables can be referenced before they are initialized, however they will return `nil`. This is different from local variables, as they raise a `NameError` when called before initialization.

2. What is output and why? What does this demonstrate about instance variables?
```ruby
module Swimmable
  def enable_swimming
    @can_swim = true
  end
end

class Dog
  include Swimmable

  def swim
    "swimming!" if @can_swim
  end
end

teddy = Dog.new
p teddy.swim
```

* The code above defines a `Swimmable` module and a `Dog` class. Local variable `teddy` is bound to an instance of the `Dog` class. On the last line, the `swim` instance method is called on our `teddy` object and the return value is passed to the `p` method invocation. This outputs and returns `nil` as the `@can_swim` instance method is not initialized to a value and the `swim` instance method returns `nil`. This demonstrates that instance variables must be initialized before they are references, otherwise they return `nil`.

3. What is output and why? What does this demonstrate about constant scope? What does `self` refer to in each of the 3 methods below?
```ruby
module Describable
  def describe_shape
    "I am a #{self.class} and have #{SIDES} sides."
  end
end

class Shape
  include Describable

  def self.sides
    self::SIDES
  end
  
  def sides
    self.class::SIDES
  end
end

class Quadrilateral < Shape
  SIDES = 4
end

class Square < Quadrilateral; end

p Square.sides 
p Square.new.sides 
p Square.new.describe_shape 
```

* The code above outputs:
```
4
4
NameError
```
* We get a `NameError` since `SIDES` is not within the scope of our module definition. This demonstrates that ruby searches for constants lexically, or by looking at the surrounding code structure, in other words. In the `describe_shape` and `sides` methods, `self` refers to the instance of the class, however, in the `self.sides` class method, `self` refers to the class itself, which would be `Square` in this case.

4. What is output? Is this what we would expect when using `AnimalClass#+`? If not, how could we adjust the implementation of `AnimalClass#+` to be more in line with what we'd expect the method to return?
```ruby
class AnimalClass
  attr_accessor :name, :animals
  
  def initialize(name)
    @name = name
    @animals = []
  end
  
  def <<(animal)
    animals << animal
  end
  
  def +(other_class)
    animals + other_class.animals
  end
end

class Animal
  attr_reader :name
  
  def initialize(name)
    @name = name
  end
end

mammals = AnimalClass.new('Mammals')
mammals << Animal.new('Human')
mammals << Animal.new('Dog')
mammals << Animal.new('Cat')

birds = AnimalClass.new('Birds')
birds << Animal.new('Eagle')
birds << Animal.new('Blue Jay')
birds << Animal.new('Penguin')

some_animal_classes = mammals + birds

p some_animal_classes 
```

* The code above outputs a merged array of the `Animal` classes, from `mammals` and `birds`. But, we would expect the `+` method to return a new `AnimalClass` object with the `Animal` classes merged in the `@animals` instance variable.

```ruby
def +(other_class)
  temp = AnimalClass.new('Temporary Class')
  temp.animals = (animals + other_class.animals)
  temp
end
```

5. We expect the code below to output `”Spartacus weighs 45 lbs and is 24 inches tall.”` Why does our `change_info` method not work as expected?
```ruby
class GoodDog
  attr_accessor :name, :height, :weight

  def initialize(n, h, w)
    @name = n
    @height = h
    @weight = w
  end

  def change_info(n, h, w)
    name = n
    height = h
    weight = w
  end

  def info
    "#{name} weighs #{weight} and is #{height} tall."
  end
end


sparky = GoodDog.new('Spartacus', '12 inches', '10 lbs') 
sparky.change_info('Spartacus', '24 inches', '45 lbs')
puts sparky.info 
# => Spartacus weighs 10 lbs and is 12 inches tall.
```

* Within the `change_info` instance method, we are initializing local variables `name, height, weight` instead of reassigning the instance variables' values. To fix this, we must prepend `self` to the variables to let ruby know that we want to call the instance variables instead of declaring new local variables, or we can also call the instance variables directly like so: `@name, @height, @weight`.

6. In the code below, we hope to output `'BOB'` on `line 16`. Instead, we raise an error. Why? How could we adjust this code to output `'BOB'`? 
```ruby
class Person
  attr_accessor :name

  def initialize(name)
    @name = name
  end
  
  def change_name
    name = name.upcase
  end
end

bob = Person.new('Bob')
p bob.name 
bob.change_name
p bob.name
```

* Within the `change_name` instance method, local variable `name` is initialized to the return value of `string#upcase` being called on `name`, which raises the NoMethodError exception, because `name` references `nil`. To fix this we must call the instance variable, so we shall prepend `self` before `name` like so:

```ruby
def change_name
  self.name = name.upcase
end
```

7. What does the code below output, and why? What does this demonstrate about class variables, and why we should avoid using class variables when working with inheritance?
```ruby
class Vehicle
  @@wheels = 4

  def self.wheels
    @@wheels
  end
end

p Vehicle.wheels                             

class Motorcycle < Vehicle
  @@wheels = 2
end

p Motorcycle.wheels                           
p Vehicle.wheels                              

class Car < Vehicle; end

p Vehicle.wheels
p Motorcycle.wheels                           
p Car.wheels     
```

8. What is output and why? What does this demonstrate about `super`?
```ruby
class Animal
  attr_accessor :name

  def initialize(name)
    @name = name
  end
end

class GoodDog < Animal
  def initialize(color)
    super
    @color = color
  end
end

bruno = GoodDog.new("brown")       
p bruno
```

9. What is output and why? What does this demonstrate about `super`?
```ruby
class Animal
  def initialize
  end
end

class Bear < Animal
  def initialize(color)
    super
    @color = color
  end
end

bear = Bear.new("black")  
```

10. What is the method lookup path used when invoking `#walk` on `good_dog`?
```ruby
module Walkable
  def walk
    "I'm walking."
  end
end

module Swimmable
  def swim
    "I'm swimming."
  end
end

module Climbable
  def climb
    "I'm climbing."
  end
end

module Danceable
  def dance
    "I'm dancing."
  end
end

class Animal
  include Walkable

  def speak
    "I'm an animal, and I speak!"
  end
end

module GoodAnimals
  include Climbable

  class GoodDog < Animal
    include Swimmable
    include Danceable
  end
  
  class GoodCat < Animal; end
end

good_dog = GoodAnimals::GoodDog.new
p good_dog.walk
```

11. What is output and why? How does this code demonstrate polymorphism? 
```ruby
class Animal
  def eat
    puts "I eat."
  end
end

class Fish < Animal
  def eat
    puts "I eat plankton."
  end
end

class Dog < Animal
  def eat
     puts "I eat kibble."
  end
end

def feed_animal(animal)
  animal.eat
end

array_of_animals = [Animal.new, Fish.new, Dog.new]
array_of_animals.each do |animal|
  feed_animal(animal)
end
```

12. We raise an error in the code below. Why? What do `kitty` and `bud` represent in relation to our `Person` object?  
```ruby
class Person
  attr_accessor :name, :pets

  def initialize(name)
    @name = name
    @pets = []
  end
end

class Pet
  def jump
    puts "I'm jumping!"
  end
end

class Cat < Pet; end

class Bulldog < Pet; end

bob = Person.new("Robert")

kitty = Cat.new
bud = Bulldog.new

bob.pets << kitty
bob.pets << bud                     

bob.pets.jump 
```

13. What is output and why?
```ruby
class Animal
  def initialize(name)
    @name = name
  end
end

class Dog < Animal
  def initialize(name); end

  def dog_name
    "bark! bark! #{@name} bark! bark!"
  end
end

teddy = Dog.new("Teddy")
puts teddy.dog_name   
```

14. In the code below, we want to compare whether the two objects have the same name. `Line 11` currently returns `false`. How could we return `true` on `line 11`? 
```ruby
class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end
end

al = Person.new('Alexander')
alex = Person.new('Alexander')
p al == alex # => true
```

Further, since `al.name == alex.name` returns `true`, does this mean the `String` objects referenced by `al` and `alex`'s `@name` instance variables are the same object? How could we prove our case?

15. What is output on `lines 14, 15, and 16` and why?
```ruby
class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def to_s
    "My name is #{name.upcase!}."
  end
end

bob = Person.new('Bob')
puts bob.name
puts bob
puts bob.name
```