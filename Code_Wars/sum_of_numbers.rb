
=begin

# -------------------------- Problem
  Restate the problem:

Given two (positive or negative) integers, return the sum of all the numbers 
in between the integers. If both integers are the same, return a or b.

  Input: two +/- integers (a & b)
  Output: sum of all numbers between a & b exclusive

# -------------------------- Test Cases

Modelling:

a = -5
b = 3

-6, [-5, -4, -3, -2, -1, 0, 1, 2, 3], 4
return: (-5 + -4...1 + 2 + 3) == -9

# -------------------------- Data Structure

convert range of numbers to array
(a..b).to_a

# -------------------------- Scrapbook



# -------------------------- Algorithm

 /* Given two positive or negative integers */
- return integer if a == b
- convert the range of numbers to array
  - make sure range is in order
  - (smallest_number..bigger_number)
- sum all integers in array

=end

def get_sum(a, b)
  return a if a == b
  a < b ? (range = (a..b)) : (range = (b..a))
  range.to_a.sum
end

p get_sum(3, -5) == -9