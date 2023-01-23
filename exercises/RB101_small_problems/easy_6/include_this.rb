
# P:

# Write a method named `include?` that takes an Array and
# a search value as arguments. This method should return `true`
# if the search value is in the array, `false` if it not.
# Cannot use `Array.include?` built-in method.

# Explicit:
#   - return true or false based on if value is in array
#   - input: array, search value
#   - output: `true` or `false`

# Implicit:
#   - don't use #include?
#   - if array in arg is empty, return false
#   - if `nil` is in array and search value is nil, return true

# Test Cases:

# include?([1,2,3,4,5], 3) == true
# include?([1,2,3,4,5], 6) == false
# include?([], 3) == false
# include?([nil], nil) == true
# include?([], nil) == false

# DS + Algo:

# */ Given an array of values and a search value/*
# - check if array is empty
#   - if yes, return false
#   - if not, iterate through array
#     - return true if search value is equal to any array values

# Code:

def include?(arr, value)
  arr.each {|item| return true if item == value}
  false
end

p include?([1,2,3,4,5], 3) == true
p include?([1,2,3,4,5], 6) == false
p include?([], 3) == false
p include?([nil], nil) == true
p include?([], nil) == false

# LS Solution:
def include?(array, value)
  !!array.find_index(value)
end

# find_index returns the index number of the found element, 
# which will always have a truthy value, or nil if no such 
# element is present. We then use !! to force the return value to 
# true or false in accordance with the implied promise of the ? in include?.
