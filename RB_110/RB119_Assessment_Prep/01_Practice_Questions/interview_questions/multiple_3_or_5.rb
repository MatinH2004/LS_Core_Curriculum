=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a positive integer, and returns the
  sum of all the numbers that are multiples of 3 or 5 from 0 to
  that integer, and return the sum. If input integer is negative
  return 0.

  Input:
  Output:

# --------------------------- Test Cases + Rules
  Explicit:
    - find all multiples of 3 and 5 from 0 to input integer
    - return sum of numbers
    - return 0 if input is negative

  Implicit:
    - none identified

  Example:
    10 -> 3 + 5 + 6 + 9 = 23

# --------------------------- Data Structure
  - array
  - range
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN AN INTEGER:
    1. initialize `multiples` array
    2. iterate from 1 to input number
      - if number is multiple of 3 or 5
        - add number to `multiples` array
    3. return sum of `multiples` array

=end

def solve(int)
  multiples = []

  (1...int).each do |num|
    multiples << num if num % 5 == 0 or num % 3 == 0
  end

  multiples.sum
end

p solve(10) == 23
p solve(20) == 78
p solve(200) == 9168
