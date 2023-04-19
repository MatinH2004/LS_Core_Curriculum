=begin

Start time: 9:22

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string and returns a mexican wave,
  where an uppercased letter is a person standing up. The input
  string will always be lowercase, but maybe empty. If the character
  in the string is whitespace, then pass over as if it was an empty
  seat.

  Input: string
  Output: array of strings

# --------------------------- Test Cases + Rules
  Explicit:
    - iterate over string and return array of strings; mexican wave
    - input string may be empty
    - if current char is whitespace, skip to next iteration

  Implicit:

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN A STRING:
    1. initialize result array
    2. iterate through string using index
      - skip to next iteration if current char is ' '
      - using index, uppercase the letter
      - append to results array
    3. return result

=end
require 'pry'

def wave(str)
  result = []

  (0...str.size).each do |i|
    s = str.chars
    next if s[i] == ' '
    s[i].upcase!
    result << s.join
  end

  result
end

# refactor

def wave(str)
  (0...str.size).each_with_object([]) do |idx, arr|
    word = str.chars
    word[idx].upcase!
    arr << word.join if word[idx] != ' '
  end
end

p wave("hello") == ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
p wave("codewars") == ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
p wave("") == []
p wave("two words") == ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
p wave(" gap ") == [" Gap ", " gAp ", " gaP "]