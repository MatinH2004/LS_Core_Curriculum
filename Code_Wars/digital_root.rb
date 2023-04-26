=begin

Start time: 9:05

# --------------------------- Problem
  Restate the problem:

  A digital root is the recursive sum of all the digits in a number. 
  Given n, take the sum of the digits of n. If that value has more than one digit,
  continue reducing in this way until a single-digit number is produced.

  Input: integer
  Output: integer (one digit)

# --------------------------- Test Cases + Rules
  Explicit:
    - sum all digits, repeatedly until a one digit number is produced

  Implicit:

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book
  - #inject, #chars, #to_s
# --------------------------- Algorithm
GIVEN AN INTEGER:
  1. return int if contains 1 digit
  1. convert input int to string and split digits into array
  2. recursively call method passing in int

=end

def digital_root(int)
  return int if int.digits.size == 1
  sum = int.digits.sum
  digital_root(sum)
end

# refactor

def digital_root(n)
  n < 10 ? n : digital_root(n.digits.sum)
end

p digital_root(16) == 7
p digital_root(456) == 6