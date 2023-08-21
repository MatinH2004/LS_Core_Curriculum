=begin

*P:

Write a program that takes a word and a list of possible anagrams and 
selects the correct sublist that contains the anagrams of the word.

EG. anagram for 'listen' would be 'inlets'

input: pattern string, and array of strings
output: array of matching anagrams

*E:

We need an Anagram class containing 2 methods:
  - constructor: takes pattern word as arg
  - match method: takes array of words as arg

Anagrams must:
  - be the same length
  - have the same exact letters
  - same number of the exact letters
  - are NOT case sensitive

Return empty array if no matches found

*D:

We are dealing with strings, so it may be helpful to use
arrays for the built in methods

*A:

--- constructor ---
- lowercase input word and save it

--- match ---
- iterate over array
- compare lowercase + sorted word to sorted pattern word
    - if equal, append to result array unless the possible anagram is the same word as the pattern

=end

class Anagram
  def initialize(word)
    @pattern = word.downcase
  end

  def match(list)
    list.each_with_object([]) do |word, result|
      lowered = word.downcase
      result << word if lowered.chars.sort == @pattern.chars.sort unless @pattern == lowered
    end
  end
end