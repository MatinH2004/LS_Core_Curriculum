=begin

Start time: 9:00

# --------------------------- Problem
  Restate the problem:

  Write a method that takes an array of integers, and returns
  the number that occurs once, the unique number, in the array.
  It is guaranteed that array contains at least 3 numbers.

  Input: array
  Output: integer

# --------------------------- Test Cases + Rules
  Explicit:
    - array contains at least 3 numbers
    - find the unique number and return it

  Implicit:
    - none identified

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN AN ARRAY OF INTS:
    1. loop on unique values of the array
      - count the numbers from original array
      - return number if count is 1

=end

def find_uniq(arr)
  arr.uniq.each { |num| return num if arr.count(num) == 1 }
end

# refactor

def find_uniq(arr)
  arr.uniq.find { |num| arr.count(num) == 1 }
end

p find_uniq([1,1,1,1,0]) == 0
p find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
p find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55