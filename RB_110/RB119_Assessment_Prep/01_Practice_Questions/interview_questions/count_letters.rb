=begin

Start time: 4:12

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string, and return the count of all
  lowercase letters in hash. The keys must be symbol instead of string.

  Input: string
  Output: hash (letter count)

# --------------------------- Test Cases + Rules
  Explicit:
    - count occurences of letters in string using hash
    - hash keys must be symbols not strings

  Implicit:
    - assume all characters are lowercase

# --------------------------- Data Structure

  - hash

# --------------------------- Scratch Book

  - #each_with_object

# --------------------------- Algorithm

  GIVEN A STRING:
    1. split string into letters
    2. initialize hash, set default value to 0
    3. iterate over array of chars
      - convert current char to symbol and incremnet hash key
    4. return hash

=end

def letter_count(str)
  str.chars.each_with_object(Hash.new(0)) do |char, hsh|
    hsh[char.to_sym] += 1
  end
end

p letter_count('codewars') == {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1}
p letter_count('activity') == {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1}
p letter_count('arithmetics') == {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}
