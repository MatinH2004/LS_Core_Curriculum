class Person
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def greet
    "Hello! they call me #{name}"   # <-- returns this string
  end
end

class Puppet < Person
  def initialize(name)
    super
  end

  def greet(message)
    puts super() + message
  end
end

puppet = Puppet.new("Cookie Monster")
puppet.greet(" and I love cookies!")

# The code above demonstrates the concept of how the `super` keyword works.
# `super` calls the same method from the superclass and returns the value,
# which is a string in this case, then that string is concatnated to the one
# on line 19, which is `message` provided by the argument.