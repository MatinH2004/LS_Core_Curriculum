=begin

P: Write a method that takes one argument, a positive integer,
   and returns the sum of its digits. For a challenge, try writing 
   this without any basic looping constructs (while, until, loop, and each).

E: - return the sum of a positive integers digits

I: - none identified

T: (23) => 5
   (496) => 19

A: /* given a positive integer */
   - split integer into array using #digits method
   - add all integers of the array using #reduce/#inject

=end

def sum(n)
  n.digits.inject(:+)
end

puts sum(23) == 5
puts sum(496) == 19
puts sum(123_456_789) == 45