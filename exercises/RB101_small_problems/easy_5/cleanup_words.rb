
# --- Understand the Problem:

# Given a string that consists of some words (all lowercased) and an 
# assortment of non-alphabetic characters, write a method that returns 
# that string with all of the non-alphabetic characters replaced by spaces. 
# If one or more non-alphabetic characters occur in a row, you should only 
# have one space in the result (the result should never have consecutive spaces).

# Explicit:
#   - input string is all lower case
#   - remove every punctuation and symbols
#   - if more than one symbol in a row, turn it into one space
#   - Input: string containing alphabetic and symbolic characters
#   - Output: string with only spaces and alphabetic characters

# Implicit:
#   - return new object

# --- Example / Test Case

# cleanup("---what's my +*& line?") == ' what s my line '

# --- Data Structure + Algorithm

#   */ Given string of characters/*
# - map! through each character
# - create array of lower case characters a to z.
# - if the array includes the current character; next iteration
# - if character is non-alphabetic remove it
# - if previous element is ' ' or nil
#     - don't add space
# - else
#     - add space

def cleanup(str)
  alphabet = ('a'..'z').to_a
  clean_chars = []

  str.chars.each do |char|
    if alphabet.include?(char)
      clean_chars << char
    else
      clean_chars << ' ' unless clean_chars.last == ' '
    end
  end
  
  clean_chars.join
end

p cleanup("---what's my +*& line?") == ' what s my line '

# Different solution:

# def cleanup(text)
#   text.gsub(/[^a-z]/, ' ').squeeze(' ')
# end

# def cleanup(text)
#   text.gsub(/[^a-z]+/, ' ')
# end