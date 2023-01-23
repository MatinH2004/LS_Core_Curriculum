
# P:

# Write a method that combines two Arrays passed in as args,
# and returns a new Array that contains all elements from both
# Array args, with the elements taken in alternation.

# Explicit:
#   - input: two arrays
#   - output: one array
#   - final array conatins values in alternation

# Implicit:
#   - Both input arrays are non empty
#   - both arrays have same number of elements

# Test Cases:
# interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# DS + Algo:

# */ Given two arrays of values/*
# - define `result` (final array)
# - set counter = 0
# - loop through both arrays and add each element to `result`

# Code:

def interleave(arr1, arr2)
  result = []
  counter = 0

  loop do
    # assuming both arrays are same length
    break if counter == arr1.size
    result << arr1[counter]
    result << arr2[counter]
    counter += 1
  end

  result
end

# Further exploration:

def interleave(arr1, arr2)
  arr1.zip(arr2).flatten
end

# Array#zip will combine 2 arrays like a 'zipper' similar to my first method

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']

# LS Solution:
# def interleave(array1, array2)
#   result = []
#   array1.each_with_index do |element, index|
#     result << element << array2[index]
#   end
#   result
# end

# use #each_with_index to get values and index numbers for array1, 
# then use the index number to access the corresponding element in array2.
