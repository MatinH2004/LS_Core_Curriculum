=begin
# --------------------------- Problem
  Restate the problem:

  Write a method that takes a single integer as an argument, and
  returns the next featured number that is greater than the argument.
  Return error message if there is no next featured number.

  Input: integer
  Output: integer

# --------------------------- Test Cases + Rules

  Explicit:
    - featured number: 
      - an odd number that is a multiple of 7 
      - digits occur once each

  Implicit:
    - none identified

  49 is a featured number
  98 not a featured number (odd)
  97 not a featured number (not a multiple of 7)
  133 not a featured number (digit '3' appears twice)

# --------------------------- Data Structure

  - use array to check that digits occur once each

# --------------------------- Scrapbook

# --------------------------- Algorithm
  /* given an integer */

  1. valid_feat_num?() method:
    - num must be odd
    - multiple of 7
    - split into array to check for unique digits

  2. featured() method:
    - initialize max as 9_999_999_998
    - return error msg if input is greater than max
    - iterate from num + 1 to max
      - return num if featured

=end

def valid_feat_num?(num)
  num.odd? && (num % 7).zero? && num.digits.uniq == num.digits
end

def featured(num)
  max = 9_999_999_998
  if num > max
    return "There is no possible number that fulfills those requirements"
  end

  (num+1..max).each do |n|
    return n if valid_feat_num?(n)
  end
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

p featured(9_999_999_999) # -> There is no possible number that fulfills those requirements