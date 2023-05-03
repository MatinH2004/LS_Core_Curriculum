# Classes and Objects - Part I

## States and Behaviours

When defining a class, we typically focus on two things: _state_ and _behaviors_.

**State** referes to the data associated to an individual object (which are tracked by instance variables). **Behaviors** are what objects are capable of doing.

Instance variables keep track of state, and instance methods expose behavior for objects.

## Initializing a New Object

```ruby
class GoodDog
  def initialize
    puts "This object was initialized!"
  end
end

sparky = GoodDog.new        # => "This object was initialized!"
```

The `initialize` method gets called every time you create a new object. We refer to the `initialize` method as a _constructor_, because it is a special method that builds the object when a new object is instantiated. It gets triggered by the `new` class method.

## Instance Variables

```ruby
class GoodDog
  def initialize(name)
    @name = name
  end
end
```

The `@name` variable looks different because it has the `@` symbol in front of it. This is called an instance variable. It is a variable that exists as long as the object instance exists and it is one of the ways we tie data to objects.

## Instance Methods

Right now, our `GoodDog` class can't really do anything. Let's give it some behaviors.

```ruby
class GoodDog
  def initialize(name)
    @name = name
  end

  def speak       # instance method
    "Arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak # => 'Arf!'
```

## Accessor Methods

What if we wanted to print out only `sparky`'s name? We could try the code below (other code omitted):

```ruby
puts sparky.name

# NoMethodError: undefined method `name' for
# <GoodDog:0x007f91821239d0 @name="Sparky">
```

A NoMethodError means that we called a method that doesn't exist or is unavailable to the object. If we want to access the object's name, which is stored in the `@name` instance variable, we have to create a method that will return the name.

As a convention, Rubyists typically want to name those _getter_ and _setter_ methods using the same name as the instance variable they are exposing and setting.

```ruby
class GoodDog
  def initialize(name)
    @name = name
  end

  def name      # same name as setter method
    @name
  end

  def name=(n)  # same name as getter method
    @name = n
  end

  def speak
    "#{@name} says arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak
puts sparky.name # => "Sparky"

sparky.name = "Spartacus"
puts sparky.name # => "Spartacus"
```

Output:

```
Sparky says arf!
Sparky
Spartacus
```

Setter methods always return the value that is passed in as an argument, regardless of what happens inside the method. If the setter tries to return something other than the argument's value, it just ignores that attempt.

```ruby
class Dog
  def name=(n)
    @name = n
    "Laddieboy"              # value will be ignored
  end
end

sparky = Dog.new()
puts(sparky.name = "Sparky")  # returns "Sparky"
```

## Accessor Methods

Instead of defining setter and getter methods, we can use ruby's accessor method to do it by writing less code.

The `attr_accessor` method creates setter/getter methods for the instance variables in the `initialize` method.

```ruby
class GoodDog
  attr_accessor :name, :height, :weight

  def initialize(n, h, w)
    @name = n
    @height = h
    @weight = w
  end

  def speak
    "#{name} says arf!"
  end

  # method below does not work...
  # fixed in the next section
  def change_info(n, h, w)
    name = n
    height = h
    weight = w
  end

  def info
    "#{name} weighs #{weight} and is #{height} tall."
  end
end
```

### The methods

**`attr_accessor`**
  - Setter and getter method (can modify and view)

**`attr_writer`**
  - Setter method (cannot view)

**`attr_reader`**
- Getter method (cannot modify)

# Calling Methods With `self`

To disambiguate from creating a local variable, we need to use `self.name=` to let Ruby know that we're calling a method. So our `change_info` code should be updated to this:

```ruby
def change_info(n, h, w)
  self.name = n
  self.height = h
  self.weight = w
end
```

This tells Ruby that we're calling a setter method, not creating a local variable. To be consistent, we could also adopt this syntax for the getter methods as well, though it is not required.

The Ruby style guide says to "Avoid self where not required."