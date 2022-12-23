# write a method that takes 2 values, and must return `true` only if one of the values are truthy

def xor?(a, b)
  return true if a && !b # returns `true` if only one value is truthy
  return true if b && !a
  false
end

p xor?(5.even?, 4.even?) == true
p xor?(5.odd?, 4.odd?) == true
p xor?(5.odd?, 4.even?) == false
p xor?(5.even?, 4.odd?) == false

=begin
More simple explanation:

def xor?(arg_1, arg_2)
  if (arg_1 == true && arg_2 == false) || (arg_1 == false && arg_2 == true)
    true
  else
    false
  end
end

Shortest format (uses double bang `!!`):

def xor?(value1, value2)
  !!((value1 && !value2) || (value2 && !value1))
end

=end