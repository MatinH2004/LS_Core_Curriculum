=begin
# --------------------------- Problem
  Restate the problem:

  Write a method that computes the difference between the
  square of the sum of the first n positive integers and the sum 
  of the squares of the first n positive integers.

  Input: integer
  Output: integer (difference)

# --------------------------- Test Cases + Rules

  Explicit:
    - square of the sum: (1 + 2 + 3)**2
    - sum of the squares: (1**2 + 2**2 + 3**2)
    - difference: (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)

# --------------------------- Data Structure

# --------------------------- Scrapbook

# --------------------------- Algorithm

=end

def sum_square_difference(int)
  sum_of_squares = (1..int).map { |n| n ** 2 }.inject(:+)
  square_of_sums = (1..int).inject(:+) ** 2
  square_of_sums - sum_of_squares
end

p sum_square_difference(3) == 22
   # -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150