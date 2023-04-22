=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Given an array of numbers, given the sum, find the minimum number
  you need, to make the sum a prime number.

  Input: array
  Output: integer (min number)

# --------------------------- Test Cases + Rules
  Explicit:
    - find the minimum number that makes the sum of the array a prime num
    - array contains at least 2 elements

  Implicit:
    - return 0 if sum is already a prime number

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN AN ARRAY OF INTS:
    1. using range object, from 0 to 30
      - check if the array is prime 


=end

require 'prime'

def minimum_number(numbers)
  (0..30).each do |num|
    return num if (numbers + [num]).sum.prime?
  end
end

# refactor

def minimum_number(numbers)
  sum = numbers.sum
  Prime.find{ |x| x >= sum } - sum
end

# Nick's solution:

def is_prime?(num)
  !((2...num).any? { |i| num % i == 0 })
end

def minimum_number(arr)
  sum = arr.sum
  current_num = 0

  until is_prime?(sum + current_num)
    current_num +=1
  end

  current_num
end