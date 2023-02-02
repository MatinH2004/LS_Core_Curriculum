=begin

# -------------------------- Problem
  Restate the problem:

Write a method that accepts an array of 10 integers (between 0 and 9),
that returns a string of those numbers in the form of a phone number.

  Explicit:
    - returned format must be correct order

  Implicit:
    - add space after the parentheses

  Input: Array of integers
  Output: string representing phone number

# -------------------------- Test Cases

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
# => returns "(123) 456-7890"

# -------------------------- Data Structure



# -------------------------- Scrapbook



# -------------------------- Algorithm

  /* Given array of integers */
- Using string interpolation:
  - put the first 3 numbers inside parentheses
  - put numbers 4 - 6 after parentheses
  - seperate final numbers with a dash

=end

def create_phone_number(nums)
  "(#{nums[0..2].join}) #{nums[3..5].join}-#{nums[6..-1].join}"
end

# Solution using #format

def create_phone_number(arr)
  '(%d%d%d) %d%d%d-%d%d%d%d' % arr
end

p create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) == '(123) 456-7890'
p create_phone_number([7, 7, 8, 5, 2, 3, 4, 6, 9, 8]) == '(778) 523-4698'