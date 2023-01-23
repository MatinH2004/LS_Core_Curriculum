
# --- Understand the Problem

# Write a method that takes an array as an argument,
# and reverses the elements in place; that is, mutate
# the Array passed into this method. The return value
# should return the same array object

# Cannot use Array#reverse or Array#reverse!

# --- Test Cases

# list = [1,2,3,4]
# result = reverse!(list)
# result == [4, 3, 2, 1] # true
# list == [4, 3, 2, 1] # true
# list.object_id == result.object_id # true

# list = %w(a b e d c)
# reverse!(list) == ["c", "d", "e", "b", "a"] # true
# list == ["c", "d", "e", "b", "a"] # true

# list = ['abc']
# reverse!(list) == ["abc"] # true
# list == ["abc"] # true

# list = []
# reverse!(list) == [] # true
# list == [] # true

# --- Data Structure + Algorithm

#   */ Given an array of elements /*
# - assign length of array to variable
# - iterate through array and switch current 
#   element with element on opposite side of array

# My first solution:
def reversed_array(arr)
  n = arr.length
  i = 0
  
  while i < (n / 2)
    arr[i], arr[n-i-1] = arr[n-i-1], arr[i]
    i += 1
  end

  arr
end

# My second solution:
def reversed_array(arr)
  n = arr.length / 2

  n.times do |i|
    arr[i], arr[-i - 1] = arr[-i - 1], arr[i]
  end

  arr
end

p reversed_array([1, 2, 3, 4]) == [4, 3, 2, 1]
p reversed_array(%w(a b e d c)) == %w(c d e b a)
p reversed_array(['abc']) == ['abc']
p reversed_array([]) == []

# LS Solution

# def reverse!(array)
#   left_index = 0
#   right_index = -1

#   while left_index < array.size / 2
#     array[left_index], array[right_index] = array[right_index], array[left_index]
#     left_index += 1
#     right_index -= 1
#   end

#   array
# end