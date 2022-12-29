TRANSLATE = {0 => '0', 1 => '1', 2 => '2', 3 => '3', 4 => '4', 
             5 => '5', 6 => '6', 7 => '7', 8 => '8', 9 => '9'}

def integer_to_string(num)
  arr = num.digits.reverse!
  arr.map {|num| TRANSLATE[num]}.inject(:+)
end

def signed_integer_to_string(num)
  if num.negative?
    "-#{integer_to_string((num * -1))}"
  elsif num == 0
    integer_to_string(num)
  else
    "+#{integer_to_string(num)}"
  end
end

p signed_integer_to_string(4321) == '+4321'
p signed_integer_to_string(-123) == '-123'
p signed_integer_to_string(0) == '0'

# LS Solution:
# def signed_integer_to_string(number)
#   case number <=> 0
#   when -1 then "-#{integer_to_string(-number)}"
#   when +1 then "+#{integer_to_string(number)}"
#   else         integer_to_string(number)
#   end
# end

# --- Further Exploration ---
def signed_integer_to_string(number)
  case number <=> 0
  when -1
    prefix = '-'
    number *= -1
  when 1
    prefix = '-'
  else
    return '0'
  end

  prefix + integer_to_string(number)
end