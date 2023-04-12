=begin

Start time: 6:35pm

# --------------------------- Problem
  Restate the problem:

  Given an array of numbers, for each number, find out how many numbers
  in the array are smaller than it. When counting numbers, only count unique
  values. That is, if a given number occurs multiple times in the array, it
  should only be counted once.

  Input: array of ints
  Output: array of ints

# --------------------------- Test Cases + Rules

  Explicit:
    - for each number, find out how many numbers are smaller than current number
    - Only count unique values. If a smaller number occurs twice, count it once.

  Implicit:
    - if array contains less than 2 elements, return zero: [0]
    - assume new array needs to be returned

# --------------------------- Data Structure

  - array

# --------------------------- Scrapbook

  - select
  - map

# --------------------------- Algorithm

  /* given an array of integers */
      1. initialize result array
      2. Iterate through input array
        - count how many integers are smaller than current number from
          unique value of input array
        - add that number to result array

=end

def smaller_numbers_than_current(arr)
  result = []

  arr.each do |int|
    result << arr.select {|i| i < int}.uniq.size
  end

  result
end

# refactor

def smaller_numbers_than_current(arr)
  arr.each_with_object([]) do |num, ary|
    ary << arr.select { |i| i < num }.uniq.size
  end
end

# further refactor

def smaller_numbers_than_current(arr)
  arr.map { |num| arr.select { |i| i < num }.uniq.size }
end


p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4]) == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]