=begin

Start time: 10:56

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string, and return a new string
  where each character in the new string '(' if that character
  appears only once in the OG string or ')' if that character
  appears more than once in the original string. Ignore capitalization
  when determining if a character is a duplicate.

  Input: string
  Output: string

# --------------------------- Test Cases + Rules
  Explicit:
    - if char appears once transform to '('
    - else transform to ')'
    - ignore capitalization when counting

  Implicit:
    - count spaces too

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN A STRING:
    1. split into chars and map over array
    2. if count of current char is more than 1 transform to ')'
      - else transform to '('
    3. join array back and return
  
=end

def duplicate_encode(str)
  str = str.downcase.chars
  str.map { |char| str.count(char) > 1 ? ')' : '(' }.join
end

p duplicate_encode("din") == "((("
p duplicate_encode("recede") == "()()()"
p duplicate_encode("Success") == ")())())"
p duplicate_encode("(( @") == "))(("