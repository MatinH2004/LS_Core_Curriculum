=begin

P: Write a method that takes 2 integers, base & exponent
   and returns the power (base ** exponent). ** operator disabled.
   Return nil if exponent is negative.

E: - return the power base ** exponent
   - return nil if exponent is negative

I: - none identified

T: power(2, 3) # 8
   power(10, 0) # 1
   power(-5, 3) # -125
   power(-4, 2) # 16

A: /* given two integers */
   - return nil if exponent < 0
   - initialize numbers array
   - multiple all numbers from numbers array

=end

def power base, exponent
  return nil if exponent < 0
  return 1 if exponent == 0
  nums = []
  exponent.times {nums << base}
  nums.inject(:*)
end

p power(2, 3) == 8
p power(10, 0) == 1
p power(-5, 3) == -125
p power(3, 2) == 9
p power(-4, 2) == 16
p power(8, -2) == nil