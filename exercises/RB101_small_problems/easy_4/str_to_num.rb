# Method that takes numeric string:
# - input numeric string
# - every character that matches DIGITS keys:
#     - add the key value to nil variable: result
#     - Power the numbers by the amount of digits
# - return `results`

DIGITS = {'0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4, 
          '5' => 5, '6' => 6, '7' => 7, '8' => 8, '9' => 9}

def string_to_integer(str)
  split_str = str.chars
  power = split_str.size
  results = 0
  idx = 0
  
  while power != 0 do
    if DIGITS.include?(split_str[idx])
      results += (DIGITS[split_str[idx]] * (10 ** (power - 1)))
      power -= 1
      idx += 1
    else
      return "Invalid input."
    end
  end

  results
end

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570

# LS Solution:

# def string_to_integer(string)
#   digits = string.chars.map { |char| DIGITS[char] }

#   value = 0
#   digits.each { |digit| value = 10 * value + digit }
#   value
# end

# How line 39 works:
# 10 * 0 + 4 -> 4
# 10 * 4 + 3 -> 43
# 10 * 43 + 1 -> 431

# --- Further Exploration ---
HEX_NUMS = { '0' => 0, '1' => 1, '2' => 2, '3' => 3, '4' => 4, '5' => 5,
  '6' => 6, '7' => 7, '8' => 8, '9' => 9, 'A' => 10, 'B' => 11,
  'C' => 12, 'D' => 13, 'E' => 14, 'F' => 15 }

def hexadecimal_to_integer(hex)
  result = 0
  exp = 0

  hex.upcase.reverse.each_char do |char|
    result += HEX_NUMS[char] * 16 ** exp
    exp += 1
  end

  p result
  result
end

p hexadecimal_to_integer('4D9f') == 19871