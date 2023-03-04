
# Given a string return a new string with the letters
# of the words reversed if the word has more than 5 chars.

def reverse_words(str)
  str.split.map do |word|
    word.size >= 5 ? word.chars.reverse.join : word
  end.join(' ')
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS