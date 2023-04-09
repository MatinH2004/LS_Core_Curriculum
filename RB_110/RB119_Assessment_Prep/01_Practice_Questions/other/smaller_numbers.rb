=begin DYLAN + AJ
# Given an array of numbers, for each number find out how many numbers in the array are smaller than it. When counting numbers, only count unique values. That is, if a given number occurs multiple times in the array, it should only be counted once.

p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4])
                            == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]

# The tests above should print "true".
=end

=begin
# --------------------------- Problem
  Restate the problem: Iterate over an array and return the count of numbers les than the current element. If there are multiples over the same number return 1 of that number.

  Input: Array of integers
  Output: return array with the elements being the count of what is smaller.

# --------------------------- Test Cases + Rules

- Does not say if we need to return a new array or the same array.
- Do not count the same number elements twice only once
[2, 2] gets counted as 1
- If element during iteration doesn't have any smaller numbers return 0

# --------------------------- Data Structure

# --------------------------- Scrapbook

# --------------------------- Algorithm

Loop over initial Array make 'n' param
select from initial array elements smaller then n param
return uniq values from selection
map and return length of selection

=end

def smaller_numbers_than_current(array)
  array.map do |n|
    array.select { |i| i < n }.uniq.size
  end
end

p smaller_numbers_than_current([8,1,2,2,3]) == [3, 0, 1, 1, 2]
p smaller_numbers_than_current([1,4,6,8,13,2,4,5,4]) == [0, 2, 4, 5, 6, 1, 2, 3, 2]
p smaller_numbers_than_current([7,7,7,7]) == [0,0,0,0]
p smaller_numbers_than_current([6,5,4,8]) == [2, 1, 0, 3]
p smaller_numbers_than_current([1]) == [0]