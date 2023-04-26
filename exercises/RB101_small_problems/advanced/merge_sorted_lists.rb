=begin

Start time: 12:42

# --------------------------- Problem
  Restate the problem:

  Write a method that takes two sorted arrays as args and
  returns a new array that contains all the elements from
  both arguments in sorted order.

  Cannot use #sort on the result array, elements must be
  added to the result array one at a time.

  Input: two arrays
  Output: array (sorted elements)

# --------------------------- Test Cases + Rules
  Explicit:
    - merge the two input arrays in sorted order
    - cannot use #sort
    - add elements one at a time

  Implicit:
    - if one of the input arrays are empty, return the other one

  Modelling:
  [1, 1, 3], [2, 2] 
  => index 0:
    - arr2 greater than arr1; add arr1 ele to result array

  => index 1:
    - arr2 greater than arr1; add arr1 ele to result
  
  => index 2:
    - 
      


# --------------------------- Data Structure
    - array
# --------------------------- Scratch Book
  - have two variabels representing indexes of both arrays
# --------------------------- Algorithm
GIVEN TWO ARRAYS:
  1. Init index_1 = 0
  2. Init index_2 = 0
  3. Init result = []
  4. if element at  

=end
require 'pry'

# failed solution :(

# def merge(arr1, arr2)
#   result = []
#   idx_1 = 0
#   idx_2 = 0

#   loop do
#     break if (arr1.size + arr2.size) == result.size

#     case arr1[idx_1] <=> arr2[idx_2]
#     when 1
#       result << arr2[idx_2]
#       idx_2 += 1
#     when -1
#       result << arr1[idx_1]
#       idx_1 += 1
#     when 0
#       result << arr1[idx_1] << arr2[idx_2]
#       idx_1 += 1
#       idx_2 += 1
#     else
#       idx_1 < idx_2 ? result << arr1[idx_1] : result << arr2[idx_2]
#     end

#   end

#   result.concat(arr2[idx_2..-1])
# end

def merge(a1, a2)
  index2 = 0
  result = []

  a1.each do |value|
    while index2 < a2.size && a2[index2] <= value
      result << a2[index2]
      index2 += 1
    end
    result << value
  end

  result.concat(a2[index2..-1])
end

p merge([1, 5, 9], [2, 6, 8]) #== [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) #== [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) #== [1, 4, 5]
p merge([1, 4, 5], []) #== [1, 4, 5]