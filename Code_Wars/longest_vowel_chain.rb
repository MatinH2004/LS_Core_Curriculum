=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes a lowercase string and returns the length
  of the longest vowel substring. Vowels are 'aeiou'.

  Input: string
  Output: integer, length of the longest vowel substring

# -------------------------- Test Cases

  codewarriors -> o, e, a, io => 'io' has the longest length so return: 2

# -------------------------- Data Structure

  string -> array -> integer

# -------------------------- Scrapbook

  #upto, #chars, #match?

# -------------------------- Algorithm

  /* given a string */
    - initialize `vowels_chain` array

    - iterate through string to find all substrings
      - if susbstring is all vowels
        - push string to `vowels_chain` array

    - return longest string from `vowels_chain`

=end

def solve(word)
  vowels_chain = []

  (0...word.length).each do |i|
    (0...word.length).each do |j|
      if word[i..j].match?(/^[aeiouAEIOU]+$/)
        vowels_chain << word[i..j]
      end
    end
  end

  vowels_chain.max_by(&:length).size
end

p solve("codewarriors") == 2
p solve("suoidea") == 3
p solve("iuuvgheaae") == 4
p solve("ultrarevolutionariees") == 3
p solve("strengthlessnesses") == 1
p solve("cuboideonavicuare") == 2
p solve("chrononhotonthuooaos") == 5 
p solve("iiihoovaeaaaoougjyaw") == 8