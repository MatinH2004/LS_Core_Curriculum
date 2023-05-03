# add a method named #identify that returns its calling object.

class Cat
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def identify; self end
end

kitty = Cat.new('Sophie')
p kitty.identify # => #<Cat:0x00007f8c50010ca0 @name="Sophie">