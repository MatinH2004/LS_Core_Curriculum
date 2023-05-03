# The Object Model

**Object Oriented Programming**, aka **OOP**, is a programming _paradigm_ that was created to deal with the growing complexity of large software systems.

### Terminology

**Encapsulation:** is the concept of bundling data and methods that operate on that data within a single unit, hiding its implementation details from the outside world.

**Polymorphism:** is the ability to of object to take on multiple forms, where objects of different classes can be treated as if they were of the same class, allowing for more flexibility and reusability in code.

**Inheritance:** Inheritance is the mechanism in object-oriented programming where a new class is created (subclass) by inheriting properties and behaviours of an existing class (superclass), allowing for code reuse and hierarchial organization of classes.

**Mixin:** By using a `Module`, we are able to apply polymorphic structure to Ruby programs. Modules contain shared behaviour between classes. By using the `include` method invocation, we can mix in a module in class, so that the behaviours declared in that module are avbailable to the class and its objects.

## What are Objects?

In Ruby, anything that can be said to have a value **is** an object: that includes numbers, strings, arrays, and even classes and modules. However, there are a few things that are not objects: methods, blocks, and variables are three that stand out.

Objects are created from classes.

## Classes Define Objects

Ruby defines the attributes and behaviors of its objects in **classes**.

```ruby
class GoodDog
end

sparky = GoodDog.new
```

Above, we create an instance of our `GoodDog` class, and store it in our variable `sparky`. This entire workflow of creating a new object or instance from a class is called **instantiation**.

## Modules

A **module** is a collection of behaviours that is usable in other classess via **mixins**. A module is "mixed in" to a class using the `include` method invocation.

```ruby
module Speak
  def speak(sound)
    puts sound
  end
end

class GoodDog
  include Speak
end

class HumanBeing
  include Speak
end

sparky = GoodDog.new
sparky.speak("Arf!")        # => Arf!
bob = HumanBeing.new
bob.speak("Hello!")         # => Hello!
```

Above, the both instances of the objects have access to the `speak` instance method. It's as if we copy-pasted the speak method into the `GoodDog` and `HumanBeing` classes.

## Method Lookup

Ruby has a distinct lookup path that it follows each time a method is called. We can use the ancestors method on any class to find out the method lookup chain.

```ruby
module Speak
  def speak(sound)
    puts "#{sound}"
  end
end

class GoodDog
  include Speak
end

class HumanBeing
  include Speak
end

puts "---GoodDog ancestors---"
puts GoodDog.ancestors
puts ''
puts "---HumanBeing ancestors---"
puts HumanBeing.ancestors
```

The output looks like this:

```
---GoodDog ancestors---
GoodDog
Speak
Object
Kernel
BasicObject

---HumanBeing ancestors---
HumanBeing
Speak
Object
Kernel
BasicObject
```

## Exercises

1. How do we create an object in Ruby?

```ruby
class MyClass
end

my_obj = MyClass.new
```

We create an object by defining a class and instantiating it by using the .new method to create an instance, also known as an object.

2. What is a module? What is its purpose? How do we use them with our classes? Create a module for the class you created in exercise 1 and include it properly.

```ruby
module Study
end

class MyClass
  include Study
end

my_obj = MyClass.new
```

A module allows us to group reusable code into one place. We use modules in our classes by using the include method invocation, followed by the module name.