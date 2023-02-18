=begin

P: Write a method that takes a non-empty string
   and returns the longest substring in alphabetical
   order. Code needs to be efficient. Input will only
   consist of lowercase characters.

E: - input string will be at least one letter long and upto 10000 chars
   - input will only be lowercase letters.
   - return the longest substring found in alpha order

I: - if length of string is < 2, return string

T: - the longest alphabetical substring in 
     "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

A: /* given a string of letters */
   - intialize results array
   - find all substring of the string
     - add substrings to array if they are in alphabetical order
   - return longest alphabetical substring

=end

def longest(str)
  results = []
  (0...str.size).each do |i|
    (i...str.size).each do |j|
      if str[i..j] == str[i..j].chars.sort.join
        results << str[i..j]
      end
    end
  end

  results.max_by(&:size)
end

# refactor
def longest(str)
  substrings = []
  (1..str.length).each do |len|
    substrings += str.chars.each_cons(len).map(&:join)
  end

  substrings.select {|s| s==s.chars.sort.join}.max_by(&:size)
end

# refactor even more + more efficient
def longest(str)
  str.chars.slice_when {|a, b| a > b}.max_by(&:size).join
end

p longest('asd') == 'as'
p longest('nab') == 'ab'
p longest('abcdeapbcdef') == 'abcde'
p longest('asdfaaaabbbbcttavvfffffdf') == 'aaaabbbbctt' 
p longest('asdfbyfgiklag') =='fgikl'
p longest('z') == 'z'
p longest('zyba') == 'z'