=begin

P: Write a method that rotates an array by moving the first element
   to the end of the array. Original array should not be modified.

E: - move first element to end of array
   - don't mutate original array

I: - no changes should be made if array contains one item

T: (test cases written at the bottom)

A: /* given array */
   - initialize result array
   - save first element of input array to a variable
   - iterate through input arr starting at index 1 to the end
   - append first element to end of arr

=end

# initial solution
def rotate_array(arr)
  result = []
  1.upto(arr.size - 1) do |idx|
    result << arr[idx]
  end
  result << arr.first
end

# refactor
def rotate_array(arr)
  rotate = arr.dup # creates duplicate copy to avoid mutation
  rotate.push(rotate.shift)
end

# one-liner
def rotate_array(arr)
  arr[1..-1] + [arr[0]]
end

p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']

x = [1, 2, 3, 4]
p rotate_array(x) == [2, 3, 4, 1]   # => true
x == [1, 2, 3, 4]                 # => true

# Further Exploration - Write a method to rotate strings and integers

def rotate(obj)
  return rotate_array(obj.chars).join if obj.is_a? String
  rotate_array(obj.to_s.chars).join.to_i
end

p rotate(123) == 231
p rotate('hello') == 'elloh'
