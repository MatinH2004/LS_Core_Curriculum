
# --- Understand the Problem

# Write a method that takes an array as an argument,
# and returns two Arrays (as a pair of nested arrays)
# that contain the first half and second half of the 
# array.

# If the original array contains an odd number of elements, 
# the middle element should be placed in the first half Array.

# Explicit:
#   - input: array
#   - output: input array split into 2 new arrays
#   - middle element shall be placed in array 1 if number of elements is odd

# Implicit:
#   - The new arrays should be new objects

# --- Test Cases
# halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
# halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
# halvsies([5]) == [[5], []]
# halvsies([]) == [[], []]

# --- Data Structure + Algorithm

#   */ Given an array of elements/*
# - assign two new variable as arrays representing the first and second half of array
# - check if input array is odd or even
#   - if odd: add elements index 0 until (half of array size) + 1
#   - if even add elements index 0 until half of array size

def halvsies(arr)
  half = (arr.size / 2.0).ceil
  first = arr[0, half]
  second = arr[half, arr.size - half]
  [first, second]
end

p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]

# Note: #ceil rounds float up to the next whole number

# One-liner solution:
def halvsies(array)
  array.partition.with_index { |element, i| i < (array.size / 2.0).ceil }
end