=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that checks if the given string is a pangram.
  A pangram is a sentence that contains every single letter from 
  the alphabet. Method must return true or false. Case is irrelevant.

  Input: string
  Output: boolean (true/false)

# -------------------------- Test Cases + Rules

pangram?("The quick brown fox jumps over the lazy dog") => true

# -------------------------- Data Structure

  input string -> counter hash -> values array -> true / false

# -------------------------- Scrapbook

  - #each_with_object
  - #zip
  - #all?

# -------------------------- Algorithm

  /* given a string */
  - initialize alphabet hash with all values equal to 0
  - use regex to remove special characters and white space
  - iterate over array of letters
    - increment each letter in hash
  
  - check if all values are greater than 0
    - if yes, true, else false

=end

def pangram?(str)
  alpha = Hash[('a'..'z').to_a.zip([0] * ('a'..'z').to_a.size)]
  letters = str.gsub(/[^a-z]/i, '').chars

  letters.each_with_object(alpha) do |char, hash|
    hash[char.downcase] += 1
  end

  return true if alpha.all? {|_, v| v > 0}
  false
end

p pangram?("The quick brown fox jumps over the lazy dog")

# One liner solution:

def pangram?(string)
  ('a'..'z').all? { |x| string.downcase.include?(x) } 
end

