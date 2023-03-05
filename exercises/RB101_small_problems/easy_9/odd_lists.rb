# Write a method that returns an Array that contains every other 
# element of an Array that is passed in as an argument. The values 
# in the returned list should be those values that are in the 1st, 3rd, 5th, 
# and so on elements of the argument Array.

# brute force
def oddities(array)
  odd_elements = []
  index = 0
  while index < array.size
    odd_elements << array[index]
    index += 2
  end
  odd_elements
end

# each_with_object solution
def oddities(arr)
  arr.each_with_object([]) do |el, res|
    res << el if arr.index(el).even?
  end
end

# one-liner solution
def oddities(arr)
  arr.select.with_index {|_, idx| idx.even?}
end

p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []
p oddities([1, 2, 3, 4, 1]) == [1, 3, 1]