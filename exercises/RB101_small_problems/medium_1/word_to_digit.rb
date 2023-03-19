=begin
P: Write a method that takes a sentence string as input and
   returns the same string with any sequence of the words
   'zero' to 'nine' converted into a string of digits.

E: - convert word numbers into string numbers: 'zero' -> '0'

I: - none

T: ('Please call me at five five five one two three four. Thanks.') 
    == 'Please call me at 5 5 5 1 2 3 4. Thanks.'

A: /* given a string */
   - initialize hash with corresponding numbers
   - split string, and iterate through (map)
     - if word is equal to any keys from hash, transform into value
     - join string and return
=end

def word_to_digit(words)
  digits = %w(zero one two three four five six seven eight nine).zip(0..9).to_h

  digits.keys.each do |word|
    words.gsub!(/\b#{word}\b/, digits[word].to_s)
  end

  words  
end

p word_to_digit('Please call me at five five five one two three four. Thanks.')
