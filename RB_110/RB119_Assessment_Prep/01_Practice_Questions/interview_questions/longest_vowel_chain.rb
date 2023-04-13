=begin

Start time:  4:07

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string, and returns the longest vowel
  chain from the string.

  Input: string
  Output: integer

# --------------------------- Test Cases + Rules
  Explicit:
    - return longest vowel chain
    - vowels include: a, e, i, o, u
    - string doesnt include any spaces

  Implicit:
    - assume string is non empty
    - assume string is all lowercase

# --------------------------- Data Structure

  - array

# --------------------------- Scratch Book

# --------------------------- Algorithm

  GIVEN A STRING:
    1. initialize `substrings` array
    2. iterate from index 0 to the length of string
      - find all substring of the string
        - if substring contains all vowels
          - append substring to substrings array
    3. return the max value from substrings array

=end

def solve(text)
  substrings = []

  (0...text.size).each do |i|
    (0...text.size).each do |j|
      substrings << text[i..j] if text[i..j].match?(/^[aeiou]+$/)
    end
  end

  substrings.max_by(&:length).size
end

# refactor

def solve(s)
  s.split(/[^aeiou]/).map{|x| x.size}.max
end

p solve("codewarriors") == 2
p solve("suoidea") == 3
p solve("iuuvgheaae") == 4
p solve("ultrarevolutionariees") == 3
p solve("strengthlessnesses") == 1
p solve("cuboideonavicuare") == 2
p solve("chrononhotonthuooaos") == 5
p solve("iiihoovaeaaaoougjyaw") == 8