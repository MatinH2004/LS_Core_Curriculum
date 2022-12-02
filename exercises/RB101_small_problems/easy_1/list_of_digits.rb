=begin

Write a method that takes one argument, 
a positive integer, and returns a list 
of the digits in the number.

1. create method with arg as int
2. convert int to str then split
3. convert array values to ints


=end

def digit_list(number = nil)
  number.to_s.split(//).map {|i| i.to_i} 
  # can also use .map(&:to_i)
end

puts digit_list(12345) == [1, 2, 3, 4, 5]     # => true
puts digit_list(7) == [7]                     # => true
puts digit_list(375290) == [3, 7, 5, 2, 9, 0] # => true
puts digit_list(444) == [4, 4, 4]             # => true
