# Given an array of n positive integers and a positive integer, 
# find the minimal length of a contiguous subarray for which the sum >= integer.

# p minSubLength([2, 3, 1, 2, 4, 3], 7) == 2
# p minSubLength([1, 10, 5, 2, 7], 9) == 1
# p minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280) == 4
# p minSubLength([1, 2, 4], 8) == 0

=begin
---------------- Problem
Create a method that takes an array of positive integers as 
argument1 and a single positive integer as argument2. Find subarrays that have 
a sum >= to the 2nd argument. Return the length of the smallest of those subarrays.

Input: Array of positive integers
Output: A single integer

Rules:
- We can have a subarray of a single digit
- If there are no possible subarrays that are greater than or equal argument2, return 0

---------------- Modelling
[1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280 == 4
[250, 200] ... ==> minimal length is 2

---------------- Data Structures


---------------- Scratchpad
Great Idea!!
Methods

---------------- Algorithm
Initialize variable `result` to an empty array

Iterate through the given array and find all the contiguous subarrays
  - Iterate through the given array from the first index to the last
    - Iterate through the given array (again) from the current index to the last
      - Slice the given array from the outer index to the inner index
        - Add that slice to `result`

Reassign result to the same array but with only the subarrays >= argument2 integer
  - Iterate through this new array and sort the subarrays by length
    - Return the length of the subarray at index 0

=end

def minSubLength(arr, int)
  result = []

  0.upto(arr.size - 1) do |i|
    i.upto(arr.size - 1) do |ii|
      result << arr[i..ii]
    end
  end

  result = result.select do |subarr|
    subarr.sum >= int
  end

  return 0 if result.empty?
  result.sort_by { |subarr| subarr.size }[0].size
end


p minSubLength([2, 3, 1, 2, 4, 3], 7) == 2
p minSubLength([1, 10, 5, 2, 7], 9) == 1
p minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280) == 4
p minSubLength([1, 2, 4], 8) == 0

 # --------------------- Using helper method

def findSubarrays(arr)
  result = []

  0.upto(arr.size - 1) do |i|
    i.upto(arr.size - 1) do |ii|
      result << arr[i..ii]
    end
  end

  result
end

def minSubLength(arr, int)
  result = findSubarrays(arr).select do |subarr|
    subarr.sum >= int
  end

  return 0 if result.empty?
  result.sort_by { |subarr| subarr.size }[0].size
end


p minSubLength([2, 3, 1, 2, 4, 3], 7) == 2
p minSubLength([1, 10, 5, 2, 7], 9) == 1
p minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280) == 4
p minSubLength([1, 2, 4], 8) == 0

# ---------------------- New Solution - July 19/23

def minSubLength(arr, int)
  sub_arrays = []

  (0...arr.size).each do |i|
    (i...arr.size).each do |j|
       sub_arrays << arr[i..j] if arr[i..j].sum >= int
    end
  end

  sub_arrays.empty? ? 0 : sub_arrays.min_by(&:size).size
end

p minSubLength([2, 3, 1, 2, 4, 3], 7) == 2
p minSubLength([1, 10, 5, 2, 7], 9) == 1
p minSubLength([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280) == 4
p minSubLength([1, 2, 4], 8) == 0