=begin

P: Write a method that rotates the last x number of digits of a number.

E: - rotate the last x digits of a number
   - rotating just 1 digit results in the original number being returned

I: - assume x is positive integer

T: (test cases written at the bottom)

A: /* given two integers, number and x */
   - convert number into a string and split digits and assign to variable 'split_num'
   - pop the last x numbers from split_num and rotate the numbers returned
     and assign to variable rotated_digits
   - concatenate split_num with rotated_digits
     - join array back together and convert to integer
     - return

=end

# helper methods from previous exercise
def rotate_array(arr)
  arr[1..-1] + [arr[0]]
end
# --------------

def rotate_rightmost_digits(number, x)
  split_num = number.to_s.chars
  rotated_digits = rotate_array(split_num.pop(x))
  (split_num + rotated_digits).join.to_i
end

p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) == 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917
five = rotate_rightmost_digits(12345, 5)
p four = rotate_rightmost_digits(five, 4)