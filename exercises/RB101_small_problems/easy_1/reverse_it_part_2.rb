# Solution using PEDAC

# We understand the problem:
# Write a method that takes one argument, a string 
# containing one or more words, and returns the given 
# string with words that contain five or more characters 
# reversed. Each string will consist of only letters and spaces. 
# Spaces should be included only when more than one word is present.

# Test Cases:
  # puts reverse_words('Professional')          # => lanoisseforP
  # puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
  # puts reverse_words('Launch School')         # => hcnuaL loohcS

# input: string of one or more words
# output: new string with words > 5 letters reversed.

# Explicit rules:
  # a new string should be returned

# Implicit rules:
  # object passed in should be a string
  # any capitalized letter shall stay capitalized
  # spaces should be included only when more than one word is present.

# Algorithm
  # create method reverse_words(string)
    # split words in string
    # create empty array (sentence)
    # loop through words array, and reverse order of word if >= 5 characters
    # add all words to the sentence array
    # join array back together

# Code with intend:

def reverse_words(string)
  words = string.split(' ')
  sentence = Array.new
  i = 0
  while i < words.length
    if words[i].length >= 5
      sentence.push(words[i].reverse)
    else
      sentence.push(words[i])
    end
    i += 1
  end
  return sentence.join(' ')
end

puts reverse_words('Professional')          # => lanoisseforP
puts reverse_words('Walk around the block') # => Walk dnuora the kcolb
puts reverse_words('Launch School')         # => hcnuaL loohcS