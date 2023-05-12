module Speed
  def go_fast
    puts "I am a #{self.class} and going super fast!"
  end
end

class Car
  include Speed
  def go_slow
    puts "I am safe and driving slow."
  end
end

civic = Car.new
civic.go_fast

=begin

How does the string print the type of the vehicle?

We use `self.class` in the method, and it works the following way:
  1. self refers to the object referenced by `civic`, which is a Car object
  2. we call `#class` on self, which returns its class
  3. since we're using string interpolation, we dont need to call #to_s on `self.class`