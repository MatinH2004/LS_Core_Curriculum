=begin
# --------------------------- Problem
  Restate the problem:

  Write a method that takes the lengths of 3 sides of a triangle as arguments,
  and returns a symbol :equilateral, :isosceles, :scalene, or :invalid.

  Equilateral: all 3 sides are of equal length
  Isosceles: 2 sides are of equal length, while the 3rd is different
  Scalene: All 3 sides are of different length

  Input: 3 integers
  Output: symbol (:equilateral, :isosceles, :scalene, or :invalid)

# --------------------------- Test Cases + Rules

  Explicit:
    - To be a valid triangle:
      - Sum of shortest sides must be larger than the largest side
      - All sides must have lengths greater than 0

  Implicit:
    - none identified

# --------------------------- Data Structure

# --------------------------- Scrapbook

# --------------------------- Algorithm
  /* given 3 integers */
    - return :invalid unless valid_triangle?() is true
    - return :equilateral if all values are the same
    - return :isosceles if 2 are the same
    - else return :scalene

=end

def valid_triangle?(a, b, c)
  sides = [a, b, c].sort
  sides.all? {|x| x > 0} && sides.take(2).inject(:+) > sides[-1]
end

def triangle(a, b, c)
  return :invalid unless valid_triangle?(a, b, c)
  return :equilateral if a == b && b == c
  return :isosceles if a == b || b == c || a == c
  :scalene
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid