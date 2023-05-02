# Classes and Objects - Part II

## Class Methods

There are class level methods, called **class methods**. Class methods are methods we can call directly on the class itself, without having to instantiate any objects.

When defining a class method, we prepend the method name with the reserved word `self.`, like this:

```ruby
class GoodDog
  def self.what_am_i
    "I'm a GoodDog class!"
  end
end

GoodDog.what_am_i # => I'm a GoodDog class!
```

Class methods are where we put functionality that does not pertain to individual objects. Objects contain state, and if we have a method that does not need to deal with states, then we can just use a class method, like our simple example.

## Class Variables

Class variables are created using two `@` symbols.

```ruby
class GoodDog
  @@number_of_dogs = 0

  def initialize
    @@number_of_dogs += 1
  end

  def self.total_number_of_dogs
    @@number_of_dogs
  end
end

puts GoodDog.total_number_of_dogs   # => 0

dog1 = GoodDog.new
dog2 = GoodDog.new

puts GoodDog.total_number_of_dogs   # => 2
```

This is an example of using a class variable and a class method to keep track of a class level detail that pertains only to the class, and not to individual objects.

## Constants

We can define **constants** in our class, by declaring a variable with all letters uppercased. Constants are variables that will never change, although it is possible to reassign them.

For example:

```ruby
class GoodDog
  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(n, a)
    self.name = n
    self.age  = a * DOG_YEARS
  end
end

sparky = GoodDog.new("Sparky", 4)
puts sparky.age             # => 28
```

## The `to_s` Method

Calling puts on a class instance, or an object, will output:

```
puts sparky      # => #<GoodDog:0x007fe542323320>
```

which is the equivalent of calling `puts sparky.to_s`.

Within our class, we can define a `to_s` method to handle what is output when calling `puts` on our object.

```ruby
class GoodDog
  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(n, a)
    @name = n
    @age  = a * DOG_YEARS
  end

  def to_s
    "This dog's name is #{name} and it is #{age} in dog years."
  end
end

sparky = GoodDog.new('Sparky', 4)
puts sparky      # => This dog's name is Sparky and is 28 in dog years.
```

In summary, the to_s method is called automatically on the object when we use it with puts or when used with string interpolation. 

## More About Self

We've seen two clear uses of `self` so far:
  - Use `self` when calling setter methods from within the class.
  - Use `self` for class and method definitions

To be clear, from within a class...
  - `self`, inside of an instance method, references the instance (object) that called the method - the calling object. Therefore, `self.weight=` is the same as `sparky.weight=`, in our example.
  - `self`, outside of an instance method, references the class and can be used to define class methods. Therefore if we were to define a `name` class method, `def self.name=(n)` is the same as `def GoodDog.name=(n)`.

Thus, we can see that self is a way of being explicit about what our program is referencing and what our intentions are as far as behavior. self changes depending on the scope it is used in, so pay attention to see if you're inside an instance method or not. 


