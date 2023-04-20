=begin

Start time: 10:32

# --------------------------- Problem
  Restate the problem:

  Given a string, write a method that returns a new string, with
  the characters of the original string in alphabetical order. Whitespace
  and punctuiation shall be removed. The input only contains words
  and letters from the english alphabet.

  Input: string
  Output: string

# --------------------------- Test Cases + Rules
  Explicit:
    - return a new string with the letters "alphabetized".
    - remove all non alphabetic chars + spaces
    - input only contains letters from english alphabet

  Implicit:
    - return empty string if no alphabetic chars

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book
  - #sort_by
  - #map
  - #downcase
# --------------------------- Algorithm
  GIVEN A STRING:
    1. split string into chars and remove non alpha chars
    2. sort the array, case-insensitive, and join into string
    
=end

def alphabetized(str)
  arr = str.chars.reject { |x| x =~ /[^a-z]/i }
  arr.sort_by(&:downcase).join
end

# refactor

def alphabetized(str)
  str.scan(/[a-z]/i).sort_by(&:downcase).join
end

p alphabetized("") == ""
p alphabetized(" ") == ""
p alphabetized(" a") == "a"
p alphabetized("a ") == "a"
p alphabetized(" a ") == "a"
p alphabetized("A b B a") == "AabB"
p alphabetized(" a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z") == "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"