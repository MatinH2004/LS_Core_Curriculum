# solve using PEDAC

# We understand the problem:
# Write a method that takes one argument, a 
# positive integer, and returns the sum of its digits.

# Test cases (must return true):
  # puts sum(23) == 5
  # puts sum(496) == 19
  # puts sum(123_456_789) == 45

# Data structure:
  # input: a sequence of integers
  # output: sum of the integers

# Explicit rules:
  # method must take positive integer
  # return the sum of the integer's digits 
  # Challenge: dont loop through digits

# Algorithm:
  # create method sum(integer)
    # convert to string
    # split string
    # add numerical values together
    # join

# Code:

def sum(int)
  numbers = int.to_s.split(//)
  result = numbers.map(&:to_i) # converts str -> int
  result.inject(:+) # sum of all numbers in array
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45