=begin

Start time: 7:30

# --------------------------- Problem
  Restate the problem:

  Write a method that takes an array of odd integers,
  and finds the integer that appears the odd number of times.
  There will always be only one integer that appears an odd
  number of times.

  Input: array
  Output: integer

# --------------------------- Test Cases + Rules
  Explicit:
    - return the integer that appears the odd number of times

  Implicit:
    - assume array is non-empty

# --------------------------- Data Structure
  - hash
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN AN ARRAY OF INTS:
    1. initialize hash object w/ default value of 0
    2. iterate through array
      - create the integers as hash keys
        - increment every integer key as we iterate
    3. find the odd value, and return the key

=end

def find_it(arr)
  count = arr.each_with_object(Hash.new(0)) do |num, hsh|
    hsh[num] += 1
  end

  count.key(count.values.select {|n| n.odd?}[0])
end

# refactor

def find_it(arr)
  arr.uniq.each { |num| return num if arr.count(num).odd? }
end

# crazy solution

def find_it(arr)
  arr.reduce(:^)
end

p find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) == 5
p find_it([1,1,2,-2,5,2,4,4,-1,-2,5]) == -1
p find_it([20,1,1,2,2,3,3,5,5,4,20,4,5]) == 5
p find_it([10]) == 10
p find_it([1,1,1,1,1,1,10,1,1,1,1]) == 10