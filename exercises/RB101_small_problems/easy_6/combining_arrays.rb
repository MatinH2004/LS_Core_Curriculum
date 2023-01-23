
# --- Understand the Problem

# Wtite a method that takes two arrays as arguments,
# and returns an array that contains all of the values 
# from the argument arrays.

# Explicit:
#   - no duplication of elements
#   - input: 2 arrays
#   - output: 1 array with combined elements

# Implicit:
#   - return a new array

# --- Test Cases

# merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

# --- Data Structure + Algorithm

#   */ Given two arrays/*
# - add all values of array1 to array2
# - delete all duplicate values

def merge(arr1, arr2)
  (arr1 + arr2).uniq
end

p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]

# LS Solution using set union operator:
def merge(array_1, array_2)
  array_1 | array_2
end

# note: the #| and #union method combine 2 
# arrays and delete all duplicate values.