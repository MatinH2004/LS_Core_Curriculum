# Solution using PEDAC

# We understand the problem:
# Write a method that takes two arguments, 
# a positive integer and a boolean, and calculates 
# the bonus for a given salary. If the boolean is 
# true, the bonus should be half of the salary. 
# If the boolean is false, the bonus should be 0.

# Test cases evaulate to true:
  # puts calculate_bonus(2800, true) == 1400
  # puts calculate_bonus(1000, false) == 0
  # puts calculate_bonus(50000, true) == 25000

# Data structure:
  # input: salary, bonus - true/false
  # output: integer if bonus, 0 if no bonus

# Algorithm:
  # create method calculate_bonus(salary, bonus)
    # if bonus is true, return salary / 2
    # if bonus if false, return 0

# Code:

def calculate_bonus(salary, bonus)
  if bonus == true
    salary / 2
  else
    return 0
  end
end

puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000
