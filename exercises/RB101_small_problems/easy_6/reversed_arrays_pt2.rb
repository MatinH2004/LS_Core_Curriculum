
# Same as previous problem, except we need to:
#   - return new array
#   - do not modify original object

def reversed_array(arr)
  new_arr = []

  arr.each do |item|
    new_arr.unshift(item)
  end

  new_arr
end

arr = [1,2,3,4]
puts "Original object: #{arr.object_id}"
arr2 = reversed_array(arr)
puts "New object: #{arr2.object_id}"
p arr2

# Solve using each_with_object
def reversed_array(arr)
  arr.each_with_object([]) {|item, array| array.unshift(item)}
end

# Student solution:
def reverse(arr)
  arr.inject([], :prepend)
end

# LS Solution using #reverse_each
def reverse(array)
  result_array = []
  array.reverse_each { |element| result_array << element }
  result_array
end