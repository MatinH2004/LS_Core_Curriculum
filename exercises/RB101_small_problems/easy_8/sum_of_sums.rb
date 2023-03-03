=begin

P: Given an array of numbers, return the sum of the sums of
   each leading sequence for that array. Array contains at least
   one number.

E: - add all sequences of the numbers in array

I: - if array contains 1 number, return it.

T: [3, 5, 2] => (3) + (3 + 5) + (3 + 5 + 2) = 21

A: /* given an array of integers */
   - initialize sub_array array
   - find all subarrays of the input array from index 0
     - push the sub arrays to sub_array variable
   - flatten sub_array and sum all integers

=end

def sum_of_sums(arr)
  sub_array = []
  
  (0...arr.size).each do |i|
    sub_array << arr[0..i]
  end

  sub_array.flatten.inject(:+)
end

p sum_of_sums([3, 5, 2]) == (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4
p sum_of_sums([1, 2, 3, 4, 5]) == 35