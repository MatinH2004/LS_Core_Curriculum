=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that converts camel case into kebab case.

  Input: string in camelCase
  Output: string in kebab-case
  
  E: The returned string should only contain lowercase letters
  I: The returned string should not contain any numbers

# -------------------------- Test Cases + Rules

  kebabize('camelsHaveThreeHumps') // camels-have-three-humps
  kebabize('camelsHave3Humps') // camels-have-humps

# -------------------------- Data Structure

  camelCase string -> split into array -> kebab-case string

# -------------------------- Algorithm

  /* given a string in camel case format */
    - use regex to remove all non alphabetic characters

    - split string into characters and iterate through them
      - if next character in iteration is upper case, append a dash '-'
      - join characters back to one string

    - downcase the final string and return

=end

def kebabize(str)
  result = []
  s = str.gsub(/[^a-z]/i, '').chars
  s.each_with_index do |char, idx|
    char == char.upcase ? result << '-' << char : result << char
  end
  result.join.downcase
end

p kebabize('camelsHaveThreeHumps') == 'camels-have-three-humps'
p kebabize('camelsHave3Humps') == 'camels-have-humps'