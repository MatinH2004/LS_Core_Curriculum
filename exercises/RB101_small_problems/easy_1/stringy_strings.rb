# Solution using PEDAC

# We understand the problem:
  # Write a method that takes one argument, 
  # a positive integer, and returns a string 
  # of alternating 1s and 0s, always starting 
  # with 1. The length of the string should 
  # match the given integer.

# Test cases:
  # puts stringy(6) == '101010'
  # puts stringy(9) == '101010101'
  # puts stringy(4) == '1010'
  # puts stringy(7) == '1010101'

# Data structure
  # input: positive integer
  # output: string that is the length of the integer (101010101)

# Explicit rules:
  # integer must be positive
  # length of string must match the integer
  # string must start with '1'

# Implicit rules:

# Algorithm:
  # create method stringy(integer)
    # create empty array
    # iterate
      # add 1 and 0 depending on whether the input is odd or even
    # join array back together

# Code with intend:

def stringy(size)
  numbers = []
  size.times do |index|
    number = index.even? ? 1 : 0
    numbers << number
  end
  numbers.join # joining converts types (int -> str)
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'