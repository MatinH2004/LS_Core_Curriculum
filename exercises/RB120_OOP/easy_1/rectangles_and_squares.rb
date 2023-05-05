# Write a class called Square that inherits from Rectangle.

class Rectangle
  def initialize(height, width)
    @height = height
    @width = width
  end

  def area
    @height * @width
  end
end

class Square < Rectangle
  def initialize(side)
    super(side, side)
  end
end

square = Square.new(5)
puts "area of square = #{square.area}"

=begin

Since the Rectangle class's constructor method takes 2 arguments,
we must call super() and pass in the single arg from the Square
class's constructor method twice.

=end