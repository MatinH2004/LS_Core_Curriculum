=begin

Start time: 1:20pm

# --------------------------- Problem
  Restate the problem:

  Write a method that takes an array, and returns the minimum sum of
  5 consecutive integers. If array contains less than 5 integers, return
  nil.

  Input: array of integers
  Output: integer (min sum)

# --------------------------- Test Cases + Rules
  Explicit:
    - find all subarrays containing 5 integers
    - return subarray with the minimum sum
    - return nil if array contains less than 5 ints

  Implicit:
    - none identified

# --------------------------- Data Structure
  - arrays

# --------------------------- Scratch Book
  - #upto method can be helpful

# --------------------------- Algorithm
  /* given an array of integers */
    1. return nil if size of array is < 5
    2. initialize sub_arrays array
    3. iterate through the input array from index 0
      - find all subarrays
      - if size of subarrray is 5, append to sub_arrays
    4. sort the sub_arrays based on the sum
      - return the first subarray's sum

=end

def minimum_sum(arr)
  return nil if arr.size < 5
  sub_arrays = []

  0.upto(arr.size - 1) do |i|
    i.upto(arr.size - 1) do |j|
      sub_arrays << arr[i..j] if arr[i..j].size == 5
    end
  end

  sub_arrays.sort_by {|ele| ele.sum}[0].sum
end

# solution using #each_with_object

def minimum_sum(input)
  return nil if input.size < 5

  (0...input.size).each_with_object(sub_arrays = []) do |i, arr|
    (i...input.size).each do |j|
      arr << input[i..j] if input[i..j].size == 5
    end
  end.sort_by { |a| a.sum }.first.sum
end

p minimum_sum([1, 2, 3, 4]) == nil
p minimum_sum([1, 2, 3, 4, 5, 6]) == 15
p minimum_sum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) == 16
p minimum_sum([-1, -5, -3, 0, -1, 2, -4]) == -10