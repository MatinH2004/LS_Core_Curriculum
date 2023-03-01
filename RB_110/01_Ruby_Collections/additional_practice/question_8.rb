# What happens when we modify an array while we are iterating over it? 
# What would be output by this code?
numbers = [1, 2, 3, 4]
numbers.each do |number|
  p number
  numbers.shift(1)
end

# => 1
# => 3

numbers = [1, 2, 3, 4]
numbers.each do |number|
  p number
  numbers.pop(1)
end

# => 1
# => 2

=begin 

When we modify an object while iterating over it,
the loop does not work with a copy of the object,
it operates on the original array in real time. 

=end