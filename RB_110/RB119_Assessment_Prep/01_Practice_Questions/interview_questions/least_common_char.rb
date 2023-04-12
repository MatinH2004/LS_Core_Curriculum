=begin

Start time: 3:50pm

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string, and returns the char that least
  occurs within the string. If there are multiple chars with the lowest number
  of occurences, return the char that first appears in the string. Consider
  uppercase and lowercase chars to be the same.

  Input: string
  Output: string (single char)

# --------------------------- Test Cases + Rules
  Explicit:
    - count the occurences of the chars; return the lowest occuring char
    - if more than 1 char has low occurence, return first char that appears in str
    - consider lowercase and uppercase to be the same

  Implicit:
    - white space also counts as char

# --------------------------- Data Structure

    - hash to count letters

# --------------------------- Scratch Book

# --------------------------- Algorithm

  GIVEN A STRING:
    1. downcase the input string
    2. count each character using a hash
    3. return character with lowest count

=end

def least_common_char(str)
  str = str.downcase.chars

  str.each_with_object(hsh = Hash.new(0)) do |char, hsh|
    hsh[char] += 1
  end

  min = hsh.values.min
  hsh.each { |letter, count| return letter if count == min}
end

# refactor

def least_common_char(str)
  letters = str.downcase.chars
  letters.min_by { |letter| letters.count(letter) }
end

p least_common_char("Hello World") == "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") == "t"
p least_common_char("Mississippi") == "m"
p least_common_char("Happy birthday!") == ' '
p least_common_char("aaaaaAAAA") == 'a'
