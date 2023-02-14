=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes a positive integer and returns its
  number of times you must multiply the digits in num until you 
  reach a single digit.

  Input: positive integer
  Output: integer for number of times multiplied

# -------------------------- Test Cases

  persistence(39) # returns 3, because 3*9 = 27, 2*7 = 14, 1*4 = 4
  persistence(999) # returns 4, because 9*9*9 = 729, 7*2*9 = 126
                     1*2*6 = 12, and finally 1*2 = 2
  persistence(4) # returns 0, because 4 is already a one digit number

# -------------------------- Data Structure

  integer -> string -> array -> integer

# -------------------------- Scrapbook



# -------------------------- Algorithm

  /* given an integer */
    - return 0 if integer contains one digit

    - HELPER METHOD (recursive)
      - set count variable
      - convert integer digits into array
      - multiply each digit
        - if result contains > 1 digits, do it again
      - once a one digit number is reached return the number of times multiplied

    - return final value from helper method

=end

def persistence(num)
  return 0 if num.to_s.size < 2
  
  count = 0
  num_arr = num.digits.reverse

  loop do
    x = num_arr.inject(:*)
    count += 1
    num_arr = x.digits.reverse
    break if x.to_s.size < 2
  end

  count
end

# refactor - using recursion
def persistence(n)
  return 0 if n < 10
  1 + persistence(n.digits.reduce(&:*))
end

p persistence(39) == 3
p persistence(999) == 4
p persistence(4) == 0