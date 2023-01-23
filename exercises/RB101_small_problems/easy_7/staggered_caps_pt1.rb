
# P:

# Write a method that takes a String as an arg, and returns a new string
# that contains the original value using a staggered capitalization scheme
# in which every other character is capitalized, and the remaining characters
# are lower cased. Characters that are not letters should not be changed,
# but count as characters when switching between upper and lower case

# Explicit:
#   - Make every other character upcase
#   - input: string
#   - output: new string

# Implicit:
#   - spaces & non-alphabetical characters count as valid characters.

# Test Cases:

# staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
# staggered_case('ALL_CAPS') == 'AlL_CaPs'
# staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# DS + ALGO:

#   */ Given a string of characters/*
#   - split string into chars
#   - loop through chars (map)
#     - if index of char is even, upper case
#     - else, downcase

def staggered_case(str)
  str.chars.map.with_index {|char, idx| idx.even? ? (char.upcase) : (char.downcase)}.join
end

# Further Exploration:
# replace `idx.even?` with `idx.odd?`

p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
p staggered_case('ALL_CAPS') == 'AlL_CaPs'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# LS Solution:

# After every iteration, `need_upper = !need_upper` causes the boolean value to switch
def staggered_case(string)
  result = ''
  need_upper = true
  string.chars.each do |char|
    if need_upper
      result += char.upcase
    else
      result += char.downcase
    end
    need_upper = !need_upper
  end
  result
end