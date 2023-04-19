=begin

Start time: 10:13

# --------------------------- Problem
  Restate the problem:

  Given an integer, find the largest number you can obtain
  by deleting one digit.

  Input: integer
  Output: integer

# --------------------------- Test Cases + Rules
  Explicit:
    - find the largest number by removing one digit from original number
    - input will be 10 <= n <= 1000000

  Implicit:
    - none identified

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN AN INTEGER:
    1. find all variations of the integer by removing digits
      - 
    2. add those variations to an array
    3. return the largest number from array

=end

def delete_digit(n)
  arr = []

  (0...n.digits.size).each do |idx|
    num = n.digits.reverse
    num.delete_at(idx)
    arr << num.join.to_i
  end

  arr.max
end

# refactor

def delete_digit(n)
  nums = n.digits.reverse

  (0...nums.size).each_with_object([]) do |idx, arr|
    digits = nums.dup
    digits.delete_at(idx)
    arr << digits.join.to_i
  end.max

end

# further refactor

def delete_digit(n)
  (0...n.to_s.size).map do |idx|
    x = n.digits.reverse
    x.delete_at(idx)
    x.join.to_i
  end.max
end

p delete_digit(152) == 52
p delete_digit(1001) == 101
p delete_digit(10) == 1