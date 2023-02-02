=begin

# -------------------------- Problem
  Restate the problem:

Given a word, get the middle character. If the word length is odd, return middle
character, if it's even, return the two middle characters.

  Input: string
  Output: middle char(s) of the string

# -------------------------- Test Cases

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

# -------------------------- Data Structure



# -------------------------- Scrapbook



# -------------------------- Algorithm

  /* Given a word */
- assign half the size of word to a variable
- return string if only 1 letter
- if length of word is odd
  - return the middle character
- else if length is even
  - slice the word [half, word.size / half]

=end

def get_middle(str)
  i = (str.length - 1) / 2
  return str if str.size == 1
  str[i..-i.succ]           # .succ method increments i + 1
end

puts get_middle('test') == 'es'
puts get_middle('testing') == 't'
puts get_middle('middle') == 'dd'
puts get_middle('A') == 'A'

# One-liner solution from codewars

# def get_middle(s)
#   s[(s.size-1)/2..s.size/2]
# end

# Solution using #divmod

# def the_middle(s)
#   a, b = (s.length - 1).divmod(2)
#   s[a, b + 1]
# end