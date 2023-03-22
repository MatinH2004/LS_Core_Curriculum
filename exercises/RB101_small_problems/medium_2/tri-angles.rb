=begin
# --------------------------- Problem
  Restate the problem:

  Write a method that takes 3 angles of a triangle as arguments,
  and returns a symbol :right, :acute, :obtuse, or :invalid depending
  on whether the triangle is right, acute, obtuse, or invalid triangle.

  Input: 3 integers
  Output: symbol (:right, :acute, :obtuse, or :invalid)

# --------------------------- Test Cases + Rules

  Explicit:
    - Right: One angle of the triangle is a right angle (90 degrees)
    - Acute: All 3 angles of the triangle are less than 90 degrees
    - Obtuse: One angle is greater than 90 degrees

    - To be a valid triangle:
      - sum of angles must be 180 degrees
      - all angles must be greater than 0
      - ^ both conditions need to be met

  Implicit:
    - Assume integer valued at angles
    - & arguments specified at degrees

# --------------------------- Data Structure

# --------------------------- Scrapbook

# --------------------------- Algorithm
  /* given 3 integers */
    - return :invalid unless triangle is valid
    - return :right if the highest value is 90 degrees
    - return :acute if all angles are less than 90 degrees
    - return :obtuse

=end

def valid_triangle?(angles)
  angles.all? { |angle| angle > 0 } && angles.sum == 180
end

def triangle(a, b, c)
  angles = [a, b, c]
  return :invalid unless valid_triangle?(angles)
  return :right if angles.sort[-1] == 90
  return :acute if angles.all? { |angle| angle < 90 }
  :obtuse
end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid