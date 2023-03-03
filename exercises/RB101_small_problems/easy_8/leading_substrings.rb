=begin

P: Write a method that takes a string and returns all
   substrings from beginning of the string. Return substrings
   in array from shortest to longest.

E: - find substrings from index 0 of the string
   - return substrings in array format
   - array of substrings must be shortest -> longest

I: - if string is one character, return the string in array

T: ('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
   ('abc') == ['a', 'ab', 'abc']
   ('a') == ['a']

A: /* given a string */
   - intialize variable substrings array
   - from index 0, find all substrings of input string
     - push all substrings to substrings array
   - return array

=end

def leading_substrings(str)
  substrings = []

  (0...str.size).each do |i|
    substrings << str[0..i]
  end

  substrings
end

p leading_substrings('abc') == ['a', 'ab', 'abc']
p leading_substrings('a') == ['a']
p leading_substrings('xyzzy') == ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']