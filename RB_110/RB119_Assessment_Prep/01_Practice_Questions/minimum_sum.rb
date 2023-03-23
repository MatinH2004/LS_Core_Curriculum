=begin KOREY + MATIN

Write a method that takes one argument: an array of integers.
The method should return the minimum sum of 5 consecutive numbers 
in the array. If the array contains fewer than 5 elements, the 
method should return nil.

# --------------------------- Problem
  Restate the problem: 
  
  Given an array of numbers iterate of each consecutive of 5 numbers 
  within the array and figure out the sums of those sub arrays. 
  Return the minimum sum.
  
  Input: Array of integers
  Output: integer (min sum)
  
# --------------------------- Test Cases + Rules
Implicit Rules:
- Only uses integer values
- Can be positive or negative

Explicit:
- return nil if less than 5 numbers
- input must be array of integers 

# Examples:

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10

[55, 2, 6, 5, 1] == 69
[2, 6, 5, 1, 2] == 16
[6, 5, 1, 2, 9] == 22
[5, 1, 2, 9, 3] == 20
[1, 2, 9, 3, 5] == 23
[2, 9, 3, 5, 100] == 119

# The tests above should print "true".

# --------------------------- Data Structure

# --------------------------- Scrapbook

  - #each_cons()

# --------------------------- Algorithm

  /* given an array of integers */

  1. return nil if size of array is less than 5
  2. call each_cons(5) on array and map and return param n
    - returns array of arrays of each cons 5
  3. Map over return of step 2 and call .sum on each array
    - returns the sum value of each nested array
  4. Call .min on step 3.

# --------------------------- Code
=end

def minimum_sum(arr)
  return nil if arr.size < 5
  cons = arr.each_cons(5).map { |n| n }
  cons.map(&:sum).min
end

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10
