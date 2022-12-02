# solution using PEDAC

# We understand the problem:
# Write a method that takes one argument, 
# an array containing integers, and returns 
# the average of all numbers in the array. 
# The array will never be empty and the numbers 
# will always be positive integers. Your result 
# should also be an integer.

# Test Cases:
  # puts average([1, 6]) == 3 # integer division: (1 + 6) / 2 -> 3
  # puts average([1, 5, 87, 45, 8, 8]) == 25
  # puts average([9, 47, 23, 95, 16, 52]) == 40

# Data structure
  # input: array
  # output: average of array

# Algorithm:
# create method average(array)
  # set sum = 0
  # iterate through array and add all numbers
  # divide total numbers by array.size

# Code with intend:

def average_int(numbers)
  sum = numbers.reduce {|num, sum| sum + num}
  sum. / numbers.size
end

# further exploration - returns float
def average_float(numbers)
  sum = numbers.reduce {|num, sum| sum + num}
  sum.to_f / numbers.size.to_f 
end
  
puts average_int([1, 6]) == 3                                         # true
puts average_int([1, 5, 87, 45, 8, 8]) == 25                          # true
puts average_int([9, 47, 23, 95, 16, 52]) == 40                       # true

puts average_float([1, 6]) == 3.5                                     # true
puts average_float([1, 5, 87, 45, 8, 8]) == 25.666666666666668        # true
puts average_float([9, 47, 23, 95, 16, 52]) == 40.333333333333336     # true
