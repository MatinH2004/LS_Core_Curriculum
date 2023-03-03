=begin

P: Write a method that takes a string and returns all
   palindromic substrings. Duplicates substrings should be
   included.

E: - return substring if it is palindromic
   - duplicate substrings are ok
   - use substrings() method from all_substrings.rb

I: - none identified

T: 'abcd' => []
   'madam' => ['madam', 'ada']

A: /* given a string  */
   - initialize substrings to the return value of
     substings() method with input str passed in as argument
     intialize palindromic_subs array
   - iterate over substrings
     - if substring is a palindrome
       - push to palindromic_subs array
   - return palindromic_subs array

=end

# helper method
def substrings(str)
  substrings = []
  (0...str.size).each do |i|
    (i...str.size).each do |j|
      substrings << str[i..j]
    end
  end
  substrings
end

def palindromes(str)
  substrings = substrings(str)
  palindromic_subs = []

  substrings.each do |subs|
    if subs == subs.reverse && subs.size > 1
      palindromic_subs << subs
    end
  end

  palindromic_subs
end

p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]

# Further Exploration

def palindromes(str)
  substrings = substrings(str)
  palindromic_subs = []
  str = str.gsub(/[^a-zA-Z0-9], '') # replace all alpha-numberics with ''

  substrings.each do |subs|
    if subs.downcase == subs.downcase.reverse && subs.size > 1 
      palindromic_subs << subs # ^ ignore case using #downcase
    end
  end

  palindromic_subs
end