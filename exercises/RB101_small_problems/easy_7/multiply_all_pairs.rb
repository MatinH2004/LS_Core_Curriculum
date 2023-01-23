
# P:

# Write a method that takes two array args in which each array contains a list of
# numbers, and returns a new array that contains the product of every pair of nums
# that can be formed between the elements of the two arrays. The result should be
# sorted by increasing value.

# Explicit:
#   - multiply all values by each number (index 1 and 2 from example)
#   - final array must be sorted by increasing value

# Implicit:
#   - return new array

# Test Cases:
# multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]

# DS + Algo:

#   */ Given two arrays of nums /*
#   - multiply each value together from arrays

# Solution using manual loops:
def multiply_all_pairs(arr1, arr2)
  result = []
  index = 0

  loop do
    break if index == arr1.size
    count = 0
    multiplier = arr1[index]

    loop do
      break if count == arr2.size
      result << multiplier * arr2[count]
      count += 1
    end

    index += 1
  end

  result.sort
end

# Solution using #each
def multiply_all_pairs(array_1, array_2)
  products = []
  array_1.each do |item_1|
    array_2.each do |item_2|
      products << item_1 * item_2
    end
  end
  products.sort
end

# Solution using #product + One-liner
def multiply_all_pairs(array_1, array_2)
  array_1.product(array_2).map { |num1, num2| num1 * num2 }.sort
end
# Array#product: if no block given, Returns an array of all combinations of elements from all arrays.
p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]