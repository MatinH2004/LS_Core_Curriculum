# Write a method that takes a positive integer or zero, and converts it to a string representation.
TRANSLATE = {0 => '0', 1 => '1', 2 => '2', 3 => '3', 4 => '4', 
             5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9'}

def integer_to_string(num)
  arr = num.digits.reverse!
  arr.map {|num| TRANSLATE[num]}.inject(:+)
end

p integer_to_string(4321) == '4321'
p integer_to_string(0) == '0'
p integer_to_string(5000) == '5000'
