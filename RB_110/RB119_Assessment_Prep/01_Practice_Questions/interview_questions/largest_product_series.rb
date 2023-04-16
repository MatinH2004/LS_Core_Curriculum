=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string of numbers, and returns the
  largest product of five consecutive digits in a given string of
  digits.

  Input: string of numbers
  Output: integer (product)

# --------------------------- Test Cases + Rules
  Explicit:
    - find the largest product of 5 consecutive numbers

  Implicit:
    - none identified

  Example:
    greatestProduct("123834539327238239583") // should return 3240
# --------------------------- Data Structure
  - arrays
# --------------------------- Scratch Book
  find substrings
# --------------------------- Algorithm
  GIVEN A STRING OF NUMBERS:
    1. initialize substrings array'
    2. iterate from index 0 to lenght of string - 1
      - find all substrings
        - append substrings with a length of 5 to substrings array
    3. iterate through substrings array
      - split string into chars and map them into integers
      - multiply all numbers in array
    4. return max value from transformed array
    
=end

def greatest_product(str)
  substrings = []

  (0...str.size).each do |i|
    (i...str.size).each do |j|
      substrings << str[i..j] if str[i..j].size == 5
    end
  end

  substrings.map { |substr| substr.chars.map(&:to_i).inject(:*) }.max
end

# refactor

def greatest_product(str)
  str.chars.each_cons(5).map { |arr| arr.map(&:to_i).inject(:*) }.max
end

p greatest_product("123834539327238239583") == 3240
p greatest_product("395831238345393272382") == 3240
p greatest_product("92494737828244222221111111532909999") == 5292
p greatest_product("92494737828244222221111111532909999") == 5292
p greatest_product("02494037820244202221011110532909999") == 0
