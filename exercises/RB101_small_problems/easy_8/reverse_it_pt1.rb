=begin

P: Write a method that takes one string, and returns a new
   string with the words in reverse order.

E: - return new string
   - reverse order of words

I: - if string contains no chars, return empty string
     - ex. '    ' => ''

T: ('Hello World') == 'World Hello'
   ('Reverse these words') == 'words these Reverse'
   ('') == ''
   ('    ') == ''

A: /* given a string */
   - split string into words array
   - reverse the words array and join back into a new string
=end

def reverse_sentence(str)
  str.split.reverse.join(' ')
end

puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
puts reverse_sentence('') == ''
puts reverse_sentence('    ') == ''