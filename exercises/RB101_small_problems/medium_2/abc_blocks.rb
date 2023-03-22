=begin
# --------------------------- Problem
  Restate the problem:

  Given a collection of spelling blocks:

  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M

  This limits the words that can be formed to those words
  that only use one letter from each block. Each letter in
  each block can only be used once.

  Write a method that returns true if the word passed in can be
  spelled using this block set, false otherwise.

  Input: word (string)
  Output: boolean (true/false)

# --------------------------- Test Cases + Rules

  Explicit:
    - can only use one letter from each block
    - return true if input word can be spelled using block set
    - else false

  Implicit:
    - input is case-insensitive
  
  'BATCH' => true
  'BUTCH' => false
  'jest' => true

# --------------------------- Data Structure
  
  Hash: to store block sets as symbols

# --------------------------- Scrapbook

# --------------------------- Algorithm
  /* given a word (string) /*
  - initialize hash to hold the blocks
  - split word into letters, and iterate
    - check if any key contains the current letter
    - if yes, delete the key, go to next iteration
    - otherwise, return false
  - return true

=end

BLOCKS = {
  1 => ['B', 'O'],
  2 => ['X', 'K'],
  3 => ['D', 'Q'],
  4 => ['C', 'P'],
  5 => ['N', 'A'],
  6 => ['G', 'T'],
  7 => ['R', 'E'],
  8 => ['F', 'S'],
  9 => ['J', 'W'],
  10 => ['H', 'U'],
  11 => ['V', 'I'],
  12 => ['L', 'Y'],
  13 => ['Z', 'M']
}
require 'pry'

def block_word?(word)
  word.upcase.each_char do |char|
    key = BLOCKS.select {|k, _| BLOCKS[k].include?(char)}.keys[0]
    return false if key.nil?
    BLOCKS.delete(key)
  end
  true
end

p block_word?('BATCH') == true    # true
p block_word?('BUTCH') == false   # true
p block_word?('jest') == true     # true