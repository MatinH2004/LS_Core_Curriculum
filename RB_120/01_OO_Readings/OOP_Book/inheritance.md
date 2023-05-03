# Inheritance

Inheritance is when a class **inherits** behaviour from another class. The class that is inheriting behaviour is called the _subclass_ and the class it inherits from is called the _superclass_.

We use inheritance as a way to extract common behaviors from classes that share that behavior, and move it to a superclass. This lets us keep logic in one place.

## Class Inheritance

Here, we're extracting the speak method from the GoodDog class to the superclass Animal, and we use inheritance to make that behavior available to GoodDog and Cat classes.

```ruby
class Animal
  def speak
    "Hello!"
  end
end

class GoodDog < Animal
end

class Cat < Animal
end

sparky = GoodDog.new
paws = Cat.new
puts sparky.speak           # => Hello!
puts paws.speak             # => Hello!
```

We use the `<` symbol to signify that the `GoodDog` class is inheriting from the `Animal` class. This means that all of the methods in the `Animal` class are available to the `GoodDog` class for use.

We are able to **override** the `speak` method by defining it in of the subclasses. Ruby will look at the object's class for the method, before moving on to look in the superclass.

```ruby
class Animal
  def speak
    "Hello!"
  end
end

class GoodDog < Animal
  attr_accessor :name

  def initialize(n)
    self.name = n
  end

  def speak
    "#{self.name} says arf!"
  end
end

class Cat < Animal
end

sparky = GoodDog.new("Sparky")
paws = Cat.new

puts sparky.speak           # => Sparky says arf!
puts paws.speak             # => Hello!
```

## `super`

When the `super` keyword is invoked in a method, it searches the method lookup path for a method with the same name, then invokes it.

```ruby
class Animal
  def speak
    "Hello!"
  end
end

class GoodDog < Animal
  def speak
    super + " from GoodDog class"
  end
end

sparky = GoodDog.new
sparky.speak        # => "Hello! from GoodDog class"
```

We can also use `super` in our `initialize` method.

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

bruno = GoodDog.new("brown")        # => #<GoodDog:0x007fb40b1e6718 @color="brown", @name="brown">
```

When called with specific arguments, eg. `super(a, b)`, the specified arguments will be sent up the method lookup chain.

```ruby
class BadDog < Animal
  def initialize(age, name)
    super(name)
    @age = age
  end
end

BadDog.new(2, "bear")        # => #<BadDog:0x007fb40b2beb68 @age=2, @name="bear">
```

There's one last twist. If you call `super()` exactly as shown -- with parentheses -- it calls the method in the superclass with no arguments at all. If you have a method in your superclass that takes no arguments, this is the safest -- and sometimes the only -- way to call it:

```ruby
class Animal
  def initialize # no args taken
  end
end

class Bear < Animal
  def initialize(color)
    super()
    @color = color
  end
end

bear = Bear.new("black")        # => #<Bear:0x007fb40b1e6718 @color="black">
```

## Mixing in Modules

We are able to mix in modules into classes that contain the same type of behaviour, for example, both dogs and fish can swim, so we can do the following:

```ruby
module Swimmable
  def swim
    "I'm swimming!"
  end
end

class Animal; end

class Fish < Animal
  include Swimmable         # mixing in Swimmable module
end

class Mammal < Animal
end

class Cat < Mammal
end

class Dog < Mammal
  include Swimmable         # mixing in Swimmable module
end
```

```ruby
sparky = Dog.new
neemo  = Fish.new
paws   = Cat.new

sparky.swim                 # => I'm swimming!
neemo.swim                  # => I'm swimming!
paws.swim                   # => NoMethodError: undefined method `swim' for #<Cat:0x007fc453152308>
```

A common convention for naming modules is adding the "-able" suffix on whatever verb describes the behaviour that the module is modelling. For example `Swimmable`, `Walkable`, etc...

## Inheritance vs Modules

Ruby implements inheritance in two primary ways. Class inheritance is the traditional way to think about inheritance, where a subclass inherits from a superclass. The other form is **interface inheritance**, where a class inherits the interface provided by a mixin module.

When to use class inheritance vs mixin module?
  - You can only subclass from one class. You can mix in as many modules as you'd like.
  - Use class inheritance if there "is-a" relationship, use interface inheritance is there's a "has-a" relationship. Ex. a dog "is an" animal, and it "has an" ability to swim.
  - Objects **cannot** be created from modules.

## Method Lookup Path

The method lookup path is the order which classes are inspected when you call a method. We can call the `ancestors` class method on an object to find the path from current object up to any modules mixed in, and finally the superclasses.

This can be helpful, when trying to find where our object is inheriting a certain behaviour.

Sometimes when you're working on a large project, it can be confusing where all these methods are coming from. By understanding the method lookup path, we can have a better idea of where and how all available methods are organized.

## More Modules

We can use modules for **namespacing**, where we can organize similar classes under a module. In other words, we'll use modules to group related classes.

```ruby
module Mammal
  class Dog
    def speak(sound)
      p "#{sound}"
    end
  end

  class Cat
    def say_name(name)
      p "#{name}"
    end
  end
end
```

We call classes in a module by appending the class name to the module name with two colons (`::`)

```ruby
buddy = Mammal::Dog.new
kitty = Mammal::Cat.new
buddy.speak('Arf!')           # => "Arf!"
kitty.say_name('kitty')       # => "kitty"
```

We can also use modules as a **container** for methods, called module methods. Defining methods this way within a module means we can call them directly from the module:

```ruby
module Mammal
  ...

  def self.some_out_of_place_method(num)
    num ** 2
  end
end

value = Mammal.some_out_of_place_method(4) # preferred way to call
value = Mammal::some_out_of_place_method(4)
```

## Private, Protected, and Public

**Method Access Control**  is a concept that exists in a number of programming languages, including Ruby. It is generally implemented through the use of access modifiers.

In Ruby, the things that we are concerned with restricting access to are the methods defined in a class.

 - A **public method** is a method that is available to anyone who knows either the class name or the object's name

 - Sometimes you'll have methods that are doing work in the class but don't need to be available to the rest of the program. These methods can be defined as **private**.

 - **Protected** methods are similar to private methods in that they cannot be invoked outside the class. The main difference between them is that protected methods allow access between class instances, while private methods do not.

## Accidental Method Overriding

One `Object` instance method that's easily overridden without any major side-effect is the to_s method. You'll normally want to do this when you want a different string representation of an object. Overall, it’s important to familiarize yourself with some of the common `Object` methods and make sure to not accidentally override them as this can have devastating consequences for your application.