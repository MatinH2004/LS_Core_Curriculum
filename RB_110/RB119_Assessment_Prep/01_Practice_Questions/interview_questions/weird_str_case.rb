=begin

Start time: 9:54

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string, and returns the same string with
  all even indexed characters in each word upper cased, and all odd indexed
  characters in each word lower cased. You need to start over for each word.

  The passed in string will only consist of alphabetical characters
  and spaces.

  Input: string
  Output: string (weird cased)

# --------------------------- Test Cases + Rules
  Explicit:
    - even index for upper case, odd index for lower case
      - start over for each word
    - string only contains whitespace and alphabetical chars

  Implicit:

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book
  - chars, map
# --------------------------- Algorithm
  GIVEN A STRING:
    1. split string into words
    2. iterate over array of words
      - for every even indexed character, upcase
      - for every odd indexed character, lower case
    3. join new array of words into string and return

=end

def weirdcase(str)
  str.split.map do |word|
    word.chars.map.with_index do |char, idx|
      idx.odd? ? char.downcase : char.upcase
    end.join
  end.join(' ')
end

p weirdcase('This') == 'ThIs'
p weirdcase('is') == 'Is'
p weirdcase('This is a test') == 'ThIs Is A TeSt'