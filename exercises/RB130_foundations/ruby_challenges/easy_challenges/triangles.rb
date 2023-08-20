# P:

# Write a program to determine whether a triangle is equilateral, isosceles,
# or scalene.

# Equilateral = all 3 sides same length
# Isosceles = 2 sides same length
# Scalene = all sides of different lengths

# All sides of the triangle must be of length > 0, and the sum of any
# 2 sides must be greater than the length of the third side

# E:

# Triangle class must have:
#   - constructor method (accepts 3 args for lengths)
#     - exception raised when any length <= 0
#     - exception raised when lengths dont describe a valid triangle
#   - a method `kind` that returns a string representing the type of triangle

# D:

# - using numbers to create triangle to determine its validity and type
# - return value is a string
# - might be convenient to collect 3 side lengths into an array

# A:

# --- constructor ---
# 1. save the three side lengths
# 2. check whether any side length is less than or equal to zero
# 3. determine whether the sum of any two side lengths is less than or equal to
#    the length of the third side

# --- `kind` ---
# 1. compare the values representing the three side lengths
# 2. if all three side lengths are equal, return 'equilateral'
# 3. if two side lengths are equal, return 'isosceles'
# 4. if all sides are different lengths, return 'scalene'

# C:

class Triangle
  def initialize(s1, s2, s3)
    @sides = [s1, s2, s3]
    validate_sides
  end

  def kind
    case @sides.uniq.size
    when 1 then 'equilateral'
    when 2 then 'isosceles'
    when 3 then 'scalene'
    end
  end

  private

  def validate_sides
    raise ArgumentError, 'all sides must be greater than 0' if @sides.min <= 0
    raise ArgumentError, 'sides dont add up' unless is_triangle?
  end

  def is_triangle?
    combos = [[0, 1, 2], [0, 2, 1], [1, 2, 0]]

    combos.each do |pair|
      sum = @sides[pair[0]] + @sides[pair[1]]
      return false if sum <= @sides[pair[2]]
    end

    true
  end
end

# Daniel Chae Solution (genius)

class Triangle
  def initialize(*sides)
    @sides = sides.sort
    raise ArgumentError if illegal_sides?
  end

  def illegal_sides?
    sides.size != 3 || sides[0..1].sum <= sides[2]
  end

  def kind
    %w[equilateral isosceles scalene][sides.uniq.size - 1]
  end

  private

  attr_reader :sides
end