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

# ----- Solution NOT using #each_cons ------

=begin KOREY + MATIN

# Write a method that takes one argument: an array of integers.
# The method should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the method should return nil.
# Do not use .each_cons

Problem: 

# Examples:

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10

# The tests above should print "true".
=end

=begin
# --------------------------- Problem
  Restate the problem:

  Given an array of integers, find the minimum sum of 5 consecutive integers, otherwise return nil.

  Input: An array of integers
  Output: minimum sum value of arrays with 5 consecutive numbers

# --------------------------- Test Cases + Rules
- We can not use .each_cons
- Return nil if we cant find any sub_arrays with at least 5 elements.
- Arrays can include both negative and positive integers
- Return the minimum sum value

# --------------------------- Data Structure

Helper Methods:
- Sub_array # return all sub_arrays
- Filter sub_array for arrays with 5 elements
- Convert to hash with sum as key and value being the Array
- Find minimum

# --------------------------- Scrapbook

minimum_sum([1, 2, 3, 4]
[1, 2, 3, 4]
[[[1], [1, 2], [1, 2, 3], [1, 2, 3, 4]],
[[2], [2, 3], [2, 3, 4]],
[[3], [3, 4]]]

# --------------------------- Algorithm
Sub_array method
- sub_arrays = []
- Create sub_array method with array parameter
  - Iterate over main array with 'i' parameter (0...size)
    - from paramer i iterate to size of array - 1 (i...size) with 'ii' parameter
    - shovel 'ii' into subs during each iteration if it has 5 elements.
- return sub_arrays

Minimum_sum Method
- If array has less than 5 elements return nil
- Call sub_array method
- Map over return value and sum values
- return minimum value

=end

def sub_arrays(arr)
  sub_arrs = []

  (0...arr.size).each do |i|
    (i...arr.size).each do |ii|
      sub_arrs << arr[i..ii] if arr[i..ii].size == 5
    end
  end

  sub_arrs
end

def minimum_sum(arr)
  return nil if arr.size < 5
  sub_arrays(arr).map(&:sum).min
end

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10
