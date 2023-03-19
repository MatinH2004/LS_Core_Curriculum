=begin

P: Write a method that takes an integer as argument, and returns the maximum 
   rotation of that argument. You can (and probably should) use the 
   rotate_rightmost_digits method from the previous exercise.

E: - after every rotation, keep the first n digits in place
   - return the number after the maximum rotations

I: - remove leading zeros

T: (test cases written at the bottom)

A: /* given an integer, num */
   - 
=end

# helper methods
def rotate_array(arr)
  arr[1..-1] + [arr[0]]
end

def rotate_rightmost_digits(number, x)
  split_num = number.to_s.chars
  rotated_digits = rotate_array(split_num.pop(x))
  (split_num + rotated_digits).join.to_i
end
# --------------

def max_rotation(num)
  max_rot = num.to_s.size
  current_rot = num

  loop do
    break if max_rot < 2
    current_rot = rotate_rightmost_digits(current_rot, max_rot)
    max_rot -= 1
  end

  current_rot
end

# refactor
def max_rotation(num)
  max_digits = num.to_s.size
  current_num = num

  max_digits.times do
    current_num = rotate_rightmost_digits(current_num, max_digits)
    max_digits -= 1
  end

  current_num
end

p max_rotation(735291) == 321579
p max_rotation(3) == 3
p max_rotation(35) == 53
p max_rotation(105) == 15 # the leading zero gets dropped
p max_rotation(8_703_529_146) == 7_321_609_845