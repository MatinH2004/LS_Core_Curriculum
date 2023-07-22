# RB120 Concept Explanations

## Encapsulation
Encapsulation is hiding pieces of functionality and making it unavailable to the rest of the code base. It is a form of data protection, so that data cannot be manipulated or changed without obvious intention.

It is implemented in Ruby by using the `public`, `private`, and `protected` access modifiers.

```ruby
# Example

class Person
  attr_reader :name

  def initialize(name, id)
    @name = name
    @id = id
  end

  def to_s
    <<-DOC
    Name: #{name}
    ID: #{id}"
    DOC
  end

  private

  def id
    last_four = @id.to_s[-4..-1]
    "**** - #{last_four}"
  end
end

jon = Person.new('Jon B', 12345678)
puts jon

# Name: Jon B
# ID: **** - 5678"
```

## Polymorphism
**Brief summary**:
Polymorphism allows different classes to share the same method names but behave differently based on their individual implementations. Polymorphism can be implemented by using **class inheritance**, **interface inheritance**, or **duck-typing**.

```ruby
# Class inheritance

class Animal
  def walk
    "I am walking"
  end
end

class Dog < Animal; end
class Cat < Animal; end

class Fish < Animal
  def walk
    "Cant walk :("
  end
end

[Dog.new, Cat.new, Fish.new].each(&:walk)
# => "I am walking"
# => "I am walking"
# => "Cant walk :("
```
```ruby
# Mixin module

module Swimmable
  def swim
    "Swimming!"
  end
end

class Animal
  def walk
    "I am walking"
  end
end

class Dog < Animal
  include Swimmable
end

class Cat < Animal
  def swim
    "Cant swim.."
  end
end

class Fish < Animal
  include Swimmable

  def walk
    "Cant walk :("
  end
end

[Dog.new, Cat.new, Fish.new].each(&:swim)
# => "Swimming!"
# => "Cant swim.."
# => "Swimming!"
```
```ruby
# Duck-typing

class Dog
  def make_sound
    "Woof! Woof!"
  end
end

class Duck
  def make_sound
    "Quack! Quack!"
  end
end

[Dog.new, Duck.new].each(&:make_sound)
# => "Woof! Woof!"
# => "Quack! Quack!"
```

**Important**: If classes have the same method name, but for different purposes, the method name is simply coincidental and doesn't provide the benefits of polymorphism. This is called name collision.

```ruby
class Gun
  def draw
    "Get 'em ready!"
  end
end

class Blinds
  def draw
    "It's so bright!"
  end
end
```

## Inheritance
Class inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class to inherit the properties and behaviors (i.e., methods) of another class. In Ruby, this is achieved through the process of class inheritance, where a new class, known as the subclass, is created by inheriting from an existing class, called the superclass.

Ruby provides a mechanism called modules to achieve multiple inheritance-like behavior.

## Method Access Control
Method access control is a way to implement encapsulation, by hiding a class’ functionality from the rest of the code base, so that code is not changed or manipulated without obvious intent.

* `public`

Instance methods in classes are public by default. These methods can be called by the object in the public interface.

* `private`

Instance methods defined below the private keyword can only be called within the class definition. If the private method is called in the public interface, Ruby raises a “private method error”.

* `protected`

Protected methods are similar to private methods in that they cannot be invoked outside the class. The main difference between them is that protected methods allow access between class instances, while private methods do not. “Protected method error” is raised if called publicly.

## Modules
In Ruby, modules can be used in 3 different ways: **namespacing**, **mixins**, and **method container**.

Namespacing allows us to group similar classes into one module, which also prevents name collision.
```ruby
module Animal
  class Dog; end
  class Cat; end
  class Cow; end
end
```

Mixins allow us to "mix in" behaviours into classes by using the `include` method invocation.
```ruby
module Swimmable
  def swim
    "I can swim!"
  end
end

class Fish
  include Swimmable
end

Fish.new.swim # => "I can swim!"
```

We can also use modules as "containers" for out of place methods.
```ruby
module Mammal
  ...

  def self.some_out_of_place_method(num)
    num ** 2
  end
end
```

## Self
When self is called inside an instance method, it references the instance (object) that 
called the method. However, when self is called outside of an instance method, it references 
the class and can be used to make class methods.

```ruby
class Example
	self    # refers to class

	def instance_method
		self  # refers to instance
	end

	def self.class_method # defines class method
	end
end
```