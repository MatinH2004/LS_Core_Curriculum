
# P:

# Write a method that takes an Array of integers as input,
# multiplies all numbers together, divides the result by the
# number of entries in the Array, and then prints the result 
# rounded to 3 decimal places. Assume the array is non empty.

# Explicit:
#   - multiply all numbers of the array
#   - divide the product my the number of numbers in array
#   - print result rounded to 3 decimad places
#   - input: array of nums
#   - output: float

# Implicit:
#   - assume array is non-empty

# Test Cases:

# show_multiplicative_average([3, 5])                # => The result is 7.500
# show_multiplicative_average([6])                   # => The result is 6.000
# show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667

# DS + Algo:

#   */ Given an array of numbers/*
#   - initailize `res` variable as 1
#   - iterate though array multiplying every values by `res`
#   - divide res by size of array
#   - return res with 3 decimal places using #format

def show_multiplicative_average(arr)
  res = 1; arr.each {|num| res *= num}
  sprintf("%.3f", (res / arr.size.to_f))
end

# Further Exploration + One-liner

def show_multiplicative_average(arr)
  "The result is #{sprintf("%.3f", (arr.inject(:*) / arr.size.to_f))}"
end

p show_multiplicative_average([3, 5])                # => The result is 7.500
p show_multiplicative_average([6])                   # => The result is 6.000
p show_multiplicative_average([2, 5, 7, 11, 13, 17]) # => The result is 28361.667