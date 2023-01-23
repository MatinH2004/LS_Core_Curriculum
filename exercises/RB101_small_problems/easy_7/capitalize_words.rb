=begin

* P:

  Write a method that takes a single String arg and returns a new
  string that contains the original value of the arg with the first
  character of every word capitalized and all other letters lowercase

  Explicit:
    - input: string sentence
    - output: string with words capitalized

  Implicit:
    - only capitalize the first letter of every word
    - do not capitalize words in quotes
    - return new string

* Test Cases:
  word_cap('four score and seven') == 'Four Score And Seven'
  word_cap('the javaScript language') == 'The Javascript Language'
  word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

* DS + Algo:

  */ Given a string of words/*
  - initialize new empty array
    - split each word into individual strings
      - iterate through each word using #map
        - downcase the word and capitalize it
        - append the word to the new string

=end

def word_cap(str)
  res = str.split.map do |word|
    word.capitalize
  end
  res.join(' ')
end

# Further Exploration

def word_cap(str)
  str.split.map do |word|
    word.chars.map do |char|
      if word.index(char) == 0
        char.upcase
      else
        char.downcase
      end
    end.join
  end.join(' ')
end

def word_cap(str)
  str.downcase.split.map do |word|
    word[0] = word[0].upcase
    word
  end.join(' ')
end

p word_cap('four score and seven') == 'Four Score And Seven'
p word_cap('the javaScript language') == 'The Javascript Language'
p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'

# Easier version:

def word_cap(str)
  str.split.map(&:capitalize).join(' ')
end