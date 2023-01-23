
# Write a method that returns the next to last word in the string
# passed to it as an argument. Words are any sequence of non-blank
# You may assume that the input string will always contain at least 2 words.

def penultimate(str)
  str.split[-2]
end

# Further Exploration:
def penultimate(str)
  words = str.split
  if words.size >= 3
    return words[-2]
  elsif words.size < 3
    return words[0]
  elsif str.empty?
    puts "Input string is empty."
  end
end

p penultimate('last word') == 'last'
p penultimate('Launch School is great!') == 'is'