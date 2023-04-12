=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Write a method that takes an array of integers, and returns
  the two numbers that are the closest together in value.

  Input: array of integers
  Output: array containing two integers

# --------------------------- Test Cases + Rules
  Explicit:
    - return an array with the two numbers closest in value

  Implicit:
    - assume array contains only positive ints
    - assume array is non-empty

# --------------------------- Data Structure

  - array

# --------------------------- Scratch Book

  - sort

# --------------------------- Algorithm

  GIVEN AN ARRAY OF INTEGERS:
    1. sort the input array
    2. initialize new array
    3. iterate through sorted array
      - add the current and next number to the new array
    4. sort by the difference in the sub arrays
      - return first sub array
    
=end

def closest_numbers(array)
  sorted = array.sort
  sub_arrays = []

  (0..sorted.size - 2).each do |idx|
    sub_arrays << [sorted[idx], sorted[idx + 1]]
  end

  res = sub_arrays.sort_by { |arr| arr[1] - arr[0] }[0]

  # fix: return array based on order of input array
  array.map { |num| num if res.include?(num) }.compact
end

# refactor

def closest_numbers(array)
  result = []
  (0..array.size-2).each do |index|
    (index..array.size-2).each do |idx|
      result << [array[index], array[idx+1]]
    end
  end
  result.min_by { |subarr| (subarr[0]-subarr[1])**2}
end

p closest_numbers([5, 25, 15, 11, 20]) == [15, 11]
p closest_numbers([19, 25, 32, 4, 27, 16]) == [25, 27]
p closest_numbers([12, 7, 17]) == [12, 7]