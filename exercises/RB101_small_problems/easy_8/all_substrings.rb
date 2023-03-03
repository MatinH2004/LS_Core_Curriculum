=begin

P: Write a method that takes a string and returns all
   substrings in array format. Order of the substrings
   should be with respective to their index, and shortest -> longest.

E: - find all substrings
   - order of the substrings must shortest -> longest

I: - none identified

T: ('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]

A: /* given a string */
   - initialize substrings array
   - starting from index 0 find all substrings
     - once all substrings have been found from index 0
       - find substrings from index 1 and so on...
     - push substrings to substrings array
   - return array

=end

def substrings(str)
  substrings = []
  (0...str.size).each do |i|
    (i...str.size).each do |j|
      substrings << str[i..j]
    end
  end
  substrings
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]