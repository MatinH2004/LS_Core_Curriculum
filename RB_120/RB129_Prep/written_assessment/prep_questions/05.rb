class Foo
  def self.method_a
    "Justice" + all
  end

  def self.method_b(other)
    "Justice" + other.exclamate
  end

  private

  def self.all
    " for all"
  end

  def self.exclamate
    all + "!!!"
  end
end

foo = Foo.new
puts Foo.method_a
puts Foo.method_b(Foo)  

# This code demonstrates the concept of class variables, specifically the fact that
# class variables defined below the `private` keyword, are still avaible to be called
# outside the class.

# Also, on line 3, we demonstrate that class method `all` can just be called without `self` within
# the `#self.method_a` method definition.