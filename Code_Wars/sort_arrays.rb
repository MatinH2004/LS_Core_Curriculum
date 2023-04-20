=begin

Start time: 10:20

# --------------------------- Problem
  Restate the problem:

  Given an array of strings, sort the strings in alphabetical
  order, case insensitive.

  Input: array
  Output: array

# --------------------------- Test Cases + Rules
  Explicit:
    - sort the arrays in alphabetical order
    - ignore case

  Implicit:
    - if array contains one element, return array

  Example:
    ["Hello", "there", "I'm", "fine"] --> ["fine", "Hello", "I'm", "there"]
    ["C", "d", "a", "B"]) --> ["a", "B", "C", "d"]

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book
  - sort_by can be useful
# --------------------------- Algorithm
  GIVEN AN ARRAY OF STRINGS:
    1. using sort_by, sort the array by converting the strings to lowercase

=end

def sortme(arr)
  arr.sort_by { |str| str.downcase }
end

# refactor

def sortme(arr)
  arr.sort_by(&:downcase)
end

p sortme(["Hello", "there", "I'm", "fine"]) == ["fine", "Hello", "I'm", "there"]
p sortme(["C", "d", "a", "Ba", "be"]) == ["a", "Ba", "be", "C", "d"]
p sortme(["CodeWars"]) == ["CodeWars"]