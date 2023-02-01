=begin

---------------- Problem

You are given array of integers, your task will be to count all pairs in that array and return their count.

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

p pairs([1, 2, 5, 6, 5, 2]) == 2
p pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p pairs([0, 0, 0, 0, 0, 0, 0]) == 3 
p pairs([1000, 1000]) == 1
p pairs([]) == 0
p pairs([54]) == 0

Restate the problem:

Create a method that takes one argument, an array, and finds all the duplicates and returns the amount of pairs found (where pairs are the same number). If there is more than one pair that appears, count that pair only once. If the array has less than or equal to one element, return 0. 

Input: array of ints
Output: int



Explicit Rules:
- count pairs only once
- return 0 if <= 1 element in the array


Implicit Rules:
- none identified



Modelling:

[1, 2, 2, 20, 6, 20, 2, 6, 2] => 4

idx 0 = [1] => 0 pairs
idx 1 = [2] => 1 pair
idx 2 = [2] => 1 pair
idx 4 = [20] => 1 pair
idx 5 = [6] => 1 pair





---------------- Examples

p pairs([1, 2, 5, 6, 5, 2]) == 2
p pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p pairs([0, 0, 0, 0, 0, 0, 0]) == 3 
p pairs([1000, 1000]) == 1
p pairs([]) == 0
p pairs([54]) == 0




---------------- Data Structures





---------------- Scratchboard






---------------- Algorithm

/* given an array of integers */

Initialize hash with default value of 0

Iterate through the collection of given numbers
  - For each number on iteration, set our hash key to the number and increment the value by 1 for each time that number appears

Collect all the values from our hash, and store in another collection
  - find the sum of the values and divide it by 2
    - return the resulting value

https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/train/ruby

=end
# Below: doesnt pass random tests
# def pairs(arr)
#   arr.each_with_object(pairs = Hash.new(0)) do |num, hash|
#     if arr.count(num) >= 2
#       hash[num] += 1
#     end
#   end
#
#   pairs.values.sum / 2
# end 

def pairs(arr)
  arr.each_with_object(pairs = Hash.new(0)) do |num, hash|
    if arr.count(num) >= 2
      hash[num] += 1
    end
  end

  pairs.values.map do |num|
    num.odd? ? num - 1 : num
  end.sum / 2
end

p pairs([1, 2, 5, 6, 5, 2]) == 2
p pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p pairs([0, 0, 0, 0, 0, 0, 0]) == 3 
p pairs([1000, 1000]) == 1
p pairs([]) == 0
p pairs([54]) == 0
