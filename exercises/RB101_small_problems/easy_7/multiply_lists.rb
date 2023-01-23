
# P:

# Write a method that takes two array arguments in which each array contains
# a list of numbers, and new Array that contains the product of each pair of
# numbers from the arguments that have the same index. You may assume that the
# arguments contain the same number of elements

# Explicit:
#   - take two arrays; multiply nums with same index
#   - arguments contain same number of elements

# Implicit:
#   - return new array

# Test Cases:
# multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]

def multiply_list(arr1, arr2)
  products = []
  index = 0

  loop do
    break if index == arr1.size
    products << arr1[index] * arr2[index]
    index += 1
  end

  products
end

def multiply_list(arr1, arr2)
  arr1.map.with_index do |num, idx|
    num * arr2[idx]
  end
end

def multiply_list(arr1, arr2)
  arr1.zip(arr2).map {|x, y| x * y}
end

p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]