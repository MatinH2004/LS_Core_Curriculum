# --- The Problem

# Write a method that calculates and returns the index
# of the first Fibonacci number that has the number of 
# digits specified as an argument.

# The first fibonacci number has index 1

# Explicit:
#   - Input: integer, representing number of digits
#   - Ouput: integer, representing index of number 
#            with the given number of digits.

# --- Data Structure + Algorithm

#   */ given integer, representing number of digits/*
# - create a loop that loops the fibonacci sequence
#   - every iteration that the fibonacci completes
#   - convert the sum of fibonacci to string and use #size to check length
#     - if length == input number, break

def find_fibonacci_index_by_length(number_digits)
  first = 1
  second = 1
  index = 2

  loop do
    index += 1
    fibonacci = first + second
    break if fibonacci.to_s.size >= number_digits

    first = second
    second = fibonacci
  end

  index
end

p find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847