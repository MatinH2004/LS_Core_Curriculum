=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Write a method that returns the count of CASE-INSENSITIVE alphabetic
  characters and numeric digits that occur more than once in the input str.
  The input string can be assumed to contain only alphabets (both upper
  and lower case) and numeric digits.
 
  Input: string
  Output: integer

# --------------------------- Test Cases + Rules
  Explicit:
    - count how many duplicates of alpha-numeric characters occur in the str
    - count will case-insensitive

  Implicit:
    - return 0 if string is empty

# --------------------------- Data Structure
    - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN A STRING:
    1. initialize duplicates array
    2. downcase input string
    3. iterate through string
      - if current char occurs more than once
        - append string to duplicates array
    4. call `uniq` on duplicates array and return length

=end

def duplicate_count(str)
  str = str.downcase
  duplicates = []

  str.each_char do |char|
    duplicates << char if str.count(char) > 1
  end

  duplicates.uniq.size
end

# refactor

def duplicate_count(str)
  ('0'..'Z').count { |c| str.upcase.count(c) > 1 }
end

p duplicate_count("") == 0
p duplicate_count("abcde") == 0
p duplicate_count("abcdeaa") == 1
p duplicate_count("abcdeaB") == 2
p duplicate_count("Indivisibilities") == 2