=begin

Start time: 2:00

# --------------------------- Problem
  Restate the problem:

  A pangram is a sentence that contains all letters of the
  alphabet at least once. Given a string, return true or false
  on whether the string is a pangram or not. Ignore numbers and
  punctuation.

  Input: string
  Output: boolean (true/false)

# --------------------------- Test Cases + Rules
  Explicit:
    - check if string contains all letters of alphabet
    - ignore non-alpha characters
    - return true or false

  Implicit:
    - assume input string is non empty

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN A STRING:
    1. Initialize a hash containing keys a-z, with 0 as default value
    2. iterate through string and incremnet letter of hash
      - skip to next iteration if current char isn't alphabetic
    3. check if all hash values are greater than 0

=end

def pangram?(string)
  alphabet = Hash.new(0)
  ('a'..'z').each { |letter| alphabet[letter] = 0}

  string.chars.each do |char|
    next if char =~ /[^a-z]/i
    alphabet[char] += 1
  end

  alphabet.all? { |_, v| v > 0 }
end

# refactor

def pangram?(string)
  ('a'..'z').all? { |letter| string.include?(letter) }
end

p pangram?("The quick brown fox jumps over the lazy dog")
p pangram?("Hello World!")