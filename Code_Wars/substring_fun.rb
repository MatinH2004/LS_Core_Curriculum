=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes an array of strings and concatenates the nth letter,
  where n is the position of the letter in the string.

  Input: array of strings
  Output: string

# -------------------------- Test Cases

  ["yoda", "best", "has"] --> "yes" 
    ^        ^        ^
    n=0      n=1     n=2

# -------------------------- Data Structure

  array os strings -> array of chars -> string

# -------------------------- Algorithm

  /* given an array of strings */
    - initialize result array

    - iterate through each word with index
      - from the first word get the first letter, from second get second letter ...
      - push letters to results array

    - Join results array and return string

=end

def nth_char(words)
  result = []
  words.each_with_index do |word, idx|
    result << word[idx]
  end
  result.join
end

# one-liner solution
def nth_char(arr)
  arr.map.with_index {|word, idx| word[idx]}.join
end


p nth_char(['yoda', 'best', 'has']) == 'yes' 
p nth_char([]) == ''
p nth_char(['X-ray']) == 'X'
p nth_char(['No', 'No']) == 'No'
p nth_char(['Chad', 'Morocco', 'India', 'Algeria', 'Botswana', 'Bahamas', 'Ecuador', 'Micronesia']) == 'Codewars'