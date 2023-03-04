=begin

P: Write a method that takes a string, and returns a new string 
   in which every character is doubled.

E: - return a new string with every character doubled

I: - if input string is empty, return emtpy string
   - spaces count as characters

T: ('Hello') == "HHeelllloo"
   ("Good job!") == "GGoooodd  jjoobb!!"
   ('') == ''

A: /* given a string */
   - initialize result array
   - split input string into characters array
   - iterate through array
     - for each character:
       - use shovel method to add the current char to result array twice
   - return result array

=end

def repeater(str)
  result = []
  str.chars.each do |char|
    result << char << char
  end
  result.join
end

# refactor using #each_with_object
def repeater(str)
  str.chars.each_with_object([]) do |char, arr|
    arr << char * 2
  end.join
end

# refactor even more using #map
def repeater(str)
  str.chars.map {|char| char * 2}.join
end

p repeater('Hello') == "HHeelllloo"
p repeater("Good job!") == "GGoooodd  jjoobb!!"
p repeater('') == ''