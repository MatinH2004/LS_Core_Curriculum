# The valid_series? method checks whether a series of numbers is valid. 
# For the purposes of this exercise, a valid series of numbers must 
# contain exactly three odd numbers. Additionally, the numbers in the 
# series must sum to 47.

def valid_series?(nums)
  return false if nums.sum != 47

  odd_count = nums.count { |n| n.odd? }
  # odd_count = 3 ? true : false
  odd_count == 3 ? true : false
end

p valid_series?([5, 6, 2, 7, 3, 12, 4, 8])        # should return true
p valid_series?([1, 12, 2, 5, 16, 6])             # should return false
p valid_series?([28, 3, 4, 7, 9, 14])             # should return false
p valid_series?([20, 6, 9, 4, 2, 1, 2, 3])        # should return true
p valid_series?([10, 6, 19, 2, 6, 4])             # should return false

=begin
  
-- Written Assesment Evaluation --

On lines 6 to 12, the method `valid_series?` is defined taking `nums`
as a parameter. Within the method, an explicit return `false` is called
if the array referenced by `nums` does not sum up to `47`.

On line 9, the `Array#count` method is invoked on `nums` array, passed
a block as an argument. Within the block, the block takes a param `n`,
and `Integer#odd` is called on `n`. The method returns how many times
the block returns true and return the number. This number is assigned
to the local variable `odd_count` which is scoped at the method-level.

Finally, on line 11, in a ternary condition, if the value referenced by
`odd_count` is equal to `3`, `true` is returned, else `false` is returned.
  
=end