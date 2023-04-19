=begin

Start time: 10:37

# --------------------------- Problem
  Restate the problem:

  Given a string, return a new string, where lower case is
  changed to upper case and vice versa, and reverse the order
  of the words.

  Input: string
  Output: string

# --------------------------- Test Cases + Rules
  Explicit:
    - change upcase to lowcase
    - change lowcase to upcase
    - reverse order of words
    - will have to handle multiple spaces, leading/trailling spaces

  Implicit:

# --------------------------- Data Structure
    - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN A STRING:
    1. swap case the letters of the string
    2. split string into array
      - reverse string and join
=end

def string_transformer(str)
  str.swapcase.split(/(\s+)/).reverse.join
end

p string_transformer('Example string') #== 'STRING eXAMPLE'