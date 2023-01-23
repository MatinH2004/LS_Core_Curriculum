=begin

* P:

Write a method that takes a string, and then returns 
a hash that contains 3 entries:
  - one represents the number of characters in the string that are lowercase letters
  - one the number of characters that are uppercase letters
  - one the number of characters that are neither

Explicit:
  - input: string of any characters
  - output: hash containing 3 k-v pairs

Implicit:
  - non-alphabetic characters are 'neither'
  - if input string is empty, return hash

* Test Cases:

letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

* DS + Algo:

  */ Given a string of characters/*
    - initialize a hash with the 3 keys mentioned above
    - initialize counter
    - iterate through string
      - if character is non-alphabetic, increment :neither
      - if character == character.downcase, increment :lowercase
      - if character == character.upcase, increment :upcase
      - break when length of string == counter

=end

def letter_case_count(str)
  letter_count = {lowercase: 0, uppercase: 0, neither: 0}
  alphabetic = ('a'..'z').to_a + ('A'..'Z').to_a

  str.each_char do |char|
    if alphabetic.include?(char)
      if char == char.downcase
        letter_count[:lowercase] += 1
      elsif char == char.upcase
        letter_count[:uppercase] += 1
      end
    else
      letter_count[:neither] += 1
    end
  end

  letter_count
end

p letter_case_count('abCdef 123') == { lowercase: 5, uppercase: 1, neither: 4 }
p letter_case_count('AbCd +Ef') == { lowercase: 3, uppercase: 3, neither: 2 }
p letter_case_count('123') == { lowercase: 0, uppercase: 0, neither: 3 }
p letter_case_count('') == { lowercase: 0, uppercase: 0, neither: 0 }

# LS Solution using REGEX:

def letter_case_count(string)
  counts = {}
  characters = string.chars
  counts[:lowercase] = characters.count { |char| char =~ /[a-z]/ }
  counts[:uppercase] = characters.count { |char| char =~ /[A-Z]/ }
  counts[:neither] = characters.count { |char| char =~ /[^A-Za-z]/ }
  counts
end

# char =~ /[a-z]    : checks if character is a lowercase letter between a and z
# char =~ /[A-Z]    : same as above, except for uppercase letters.
# char =~ /[^A-Za-z]: checks if character is neither an uppercase nor lowercase letter.