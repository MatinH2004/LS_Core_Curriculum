=begin

Start time: 4:18

# --------------------------- Problem
  Restate the problem:

  Write a method that takes an array of integers, and returns the number of all
  pairs of integers.

  Input: array
  Output: integer

# --------------------------- Test Cases + Rules
  Explicit:
    - array can be empty, or contain one value; return 0
    - If there are more pairs of a certain number, count each pair only once. 

  Implicit:
    - none identified

# --------------------------- Data Structure

  - hash

# --------------------------- Scratch Book

# --------------------------- Algorithm

  GIVEN AN ARRAY OF INTS:
    1. iterate through array
      - count numbers using hash
    2. Collect all the values from our hash, and store in another collection
      - find the sum of the values and divide it by 2
      - return the resulting value

=end

def find_pairs(arr)
  arr.each_with_object(pairs = Hash.new(0)) do |num, hsh|
    hsh[num] += 1
  end

  pairs.values.map do |num|
    num.odd? ? num - 1 : num
  end.sum / 2
end

p find_pairs([1, 2, 5, 6, 5, 2]) == 2
p find_pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p find_pairs([0, 0, 0, 0, 0, 0, 0]) == 3
p find_pairs([1000, 1000]) == 1
p find_pairs([]) == 0
p find_pairs([54]) == 0