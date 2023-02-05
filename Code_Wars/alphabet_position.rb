=begin

# -------------------------- Problem
  Restate the problem:

Write a method that takes a string as an argument, and replaces every letter with an integer, the
position of the letter in the alphabet. Ex a = 1, b = 2, c = 3

  Explicit:
    - Ignore if char is not alphabetic

  Input: String of words
  Output: string of numbers

# -------------------------- Test Cases

alphabet_position("The sunset sets at twelve o' clock.") == "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

# -------------------------- Data Structure



# -------------------------- Scrapbook



# -------------------------- Algorithm

  */ given a string of words /*
- initialize result array
- split each string into letters
- iterate through letters
  - using regex, if current letter is alphabetic
    - add alphabetic position to result array
  - else skip to next iteration
- return result array

=end

ALPHABET = ('a'..'z').zip(1..26).to_h

# def alphabet_position(str)
#   res = str.downcase.chars.map {|chr| chr =~ /[a-z]/i ? ALPHABET[chr] : next}
#   res.select! {|n| n.is_a? Integer}.join(' ')
# end

def alphabet_position(str)
  res = str.downcase.chars.map {|chr| chr =~ /[a-z]/i ? ALPHABET[chr] : next}
  res.reject {|n| n.nil?}.join(' ')
end

p alphabet_position("The sunset sets at twelve o' clock.") == "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"