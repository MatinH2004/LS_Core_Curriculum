=begin

# -------------------------- Problem
  Restate the problem:

Given a string, count the number of matches that the letters from the string match
the position of those letters in the alphabet. Given an array of words, return an array
of the number of letters that occupy their position in the alphabet for each word.

  Input: Array of strings
  Output: Array of integers (reperesenting matches for each string)

# -------------------------- Test Cases

  solve(["abode","ABc","xyzD"]) == [4,3,1]
  solve(["abide","ABc","xyz"]) == [4,3,0]
  solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) == [6,5,7]
  solve(["encode","abc","xyzD","ABmD"]) == [1, 3, 1, 3]

# -------------------------- Data Structure



# -------------------------- Scrapbook

arr#map

# -------------------------- Algorithm

 /* given an array of strings */
  - initialize alphabet hash {'a' => 0, 'b' => 2}
  - map through words array
    - for every word,
      - downcase the word
      - iterate through each character
        - for each character count how many are in correct position

=end

# def solve(arr)
#   alphabet = ('a'..'z').zip(1..26).to_h
#   arr.map do |str|
#     count = 0
#     str.downcase!
#     str.chars.count {|c| (str.index(c) + 1) == alphabet[c]}
#   end
# end

def solve(arr)
  alphabet = ('a'..'z').zip(1..26).to_h

  arr.map do |word|
    word
      .downcase
      .each_char
      .with_index
      .count {|ch, i| alphabet[ch] == i + 1}
  end
end

# clever solution
def solve(arr)
  arr.map {|s| s.downcase.each_char.zip('a'..'z').count {|a, b| a == b}}
end

p solve(["abode","ABc","xyzD"]) == [4,3,1]
p solve(["abide","ABc","xyz"]) == [4,3,0]
p solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) == [6,5,7]
p solve(["encode","abc","xyzD","ABmD"]) == [1, 3, 1, 3]
