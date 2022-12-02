=begin

Write a method that takes one integer argument, 
which may be positive, negative, or zero. This 
method returns true if the number's absolute 
value is odd. You may assume that the argument 
is a valid integer value.

1. create method with one arg as int
2. check if arg is even or odd
3. if odd return true else false

=end

def is_odd?(number)
  number % 2 == 1 ? (puts 'true') : (puts 'false')
end

# further exploration: Using Integer#remainder

def is_odd_version2?(number)
  if number.remainder(2) != 0
    true
  else
    false
  end
end

puts is_odd?(2)    # => false
puts is_odd?(5)    # => true
puts is_odd?(-17)  # => true
puts is_odd?(-8)   # => false
puts is_odd?(0)    # => false
puts is_odd?(7)    # => true

puts is_odd_version2?(2) # => false
puts is_odd_version2?(5) # => true
puts is_odd_version2?(-17) # => true
puts is_odd_version2?(-8) # => false
puts is_odd_version2?(0) # => false
puts is_odd_version2?(7) # => true