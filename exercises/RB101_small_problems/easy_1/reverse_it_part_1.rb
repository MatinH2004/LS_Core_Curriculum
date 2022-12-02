# Solution using PEDAC

# We understand the problem:
# Write a method that takes one argument, a string, and returns a new string with the words in reverse order.

# Test Case (all must evaluate to `true`):
  # puts reverse_sentence('Hello World') == 'World Hello'
  # puts reverse_sentence('Reverse these words') == 'words these Reverse'
  # puts reverse_sentence('') == ''
  # puts reverse_sentence('    ') == '' # Any number of spaces results in ''

# Data Structure:
  # input: string of words
  # output: string of words in reverse order

# Algorithm:
  # write method reverse_sentence(string)
    # split string into array
    # reverse array
    # join array elements

# Code with intend:

def reverse_sentence(string)
  string.split.reverse.join(' ')
end

puts reverse_sentence('Hello World') == 'World Hello'                     # => true
puts reverse_sentence('Reverse these words') == 'words these Reverse'     # => true
puts reverse_sentence('') == ''                                           # => true
puts reverse_sentence('    ') == '' # Any number of spaces results in ''  # => true
  
# Note that we don't need to do anything special to handle the last two tests. 
# Since split splits on whitespace when invoked without an argument, both '' 
# and ' ' cause split to return an empty array.