=begin

# -------------------------- Problem
  Restate the problem:

Write a method that takes a string, splits words if they are in camelCase
format.

  Explicit:
    - split if second word is capitalized

  Implicit:
    - if one word (no capitals) return word
    - if string is empty, return empty string

  Input: str
  Output: str

# -------------------------- Test Cases

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

# -------------------------- Data Structure



# -------------------------- Scrapbook



# -------------------------- Algorithm

 /* given a string */
 - split string into individual characters
 - loop through the letters
      - if letter is uppercase, append a space to that index
      - if no upcase letters found return word


=end

# def solution(str)
#   res = []
#   str.each_char do |chr|
#     chr == chr.upcase ? (res << ' ' << chr) : (res << chr)
#   end
#   res.join
# end

def solution(str)
  str.chars.each_with_object([]) do |chr, arr|
    chr == chr.upcase ? arr << ' ' << chr : arr << chr
  end.join
end

p solution('camelCasing') == 'camel Casing'
p solution('identifier') == 'identifier'
p solution('') == ''