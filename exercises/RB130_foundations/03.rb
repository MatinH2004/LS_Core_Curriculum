# P: Write a method that takes a sorted array of integers as an argument, 
#    and returns an array that includes all of the missing integers (in order) 
#    between the first and last elements of the argument.

# E: [-3, -2, 1, 5] => [-1, 0, 2, 3, 4]
#    [1, 2, 3, 4]   => []
#    [1, 5]         => [2, 3, 4]
#    [6]            => []

# D: array

# A: - Get min and max numbers
#    - create a new array min..max
#    - remove arg array numbers from new array

def missing(arr)
  (arr.min..arr.max).to_a - arr
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []