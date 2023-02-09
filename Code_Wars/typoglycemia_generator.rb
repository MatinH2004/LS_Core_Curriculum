=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes a string, and sorts the letters alphabetically 
  between the first and last letters.

  Explicit:
    - the first and last letters must remain in original places
    - characters between first and last characters must be sorted alphabetically
    - punctuation should remain at the same place as started, ie. shan't -> sahn't

  Implicit:
    - return string if size is 0 to 3.
    - string can have multiple words.

  Input: string of word(s)
  Output: inside of words alphabetically sorted.

# -------------------------- Test Cases

describe("Basic tests") do
Test.assert_equals(scramble_words('professionals'), 'paefilnoorsss', 'The first and last letters of a word should reamin in place with the inner letters sorted')
Test.assert_equals(scramble_words('i'), 'i', 'Must handle single charater words')
Test.assert_equals(scramble_words(''), '', 'Must handle empty strings')
Test.assert_equals(scramble_words('me'), 'me', 'Must handle 2 charater words')
Test.assert_equals(scramble_words('you'), 'you', 'Must handle 3 charater words')
Test.assert_equals(scramble_words('card-carrying'), 'caac-dinrrryg', 'Only spaces separate words and punctuation should remain at the same place as it started')
Test.assert_equals(scramble_words("shan't"), "sahn't", 'Punctuation should remain at the same place as it started')
Test.assert_equals(scramble_words('-dcba'), '-dbca', 'Must handle special character at the start')
Test.assert_equals(scramble_words('dcba.'), 'dbca.', 'Must handle special character at the end')
Test.assert_equals(scramble_words("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."), "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.", 'Must handle a full sentence')
end

# -------------------------- Data Structure



# -------------------------- Scrapbook

map
chars
slice

# -------------------------- Algorithm

/* given a string of words */
- split string into seperate words
- while iterating thru words, get all characters except first and last
- sort characters alphabetically unless character is non-alphabetical

=end
require 'pry'

# def scramble_words(words)
#   return words if words.length <= 3
#   words.split.map do |word|
#     word[0] + word[1..-2].chars.sort.join + word[-1]
#   end.join(' ')
# end

def scramble_words(words)
  return words if words.length <= 3

  words.split.map do |word|
    first = word[0]
    last = word[-1]

    if first =~ /[^a-z]/i
      until first =~ /[a-z]/i
        x = 1
        first = word[x]
        x += 1
      end
    elsif last =~ /[^a-z]/i
      until last =~ /[a-z]/i
        x = -2
        last = word[x]
        x -= 1
      end
    end



    middle = word[(word.index(first)+1)..(word.index(last)-1)]

    non_alpha = middle.chars.keep_if {|x| x =~ /[^a-z]/i}[0]
    non_alpha_idx = middle.index(non_alpha) if !non_alpha.nil?

    binding.pry

    if non_alpha.nil?
      return first + word[1..-2].chars.sort.join + last
    else
      return first + middle.gsub!(/[^a-z]/, '').chars.sort.insert(non_alpha_idx, non_alpha).join + last
    end

  end
end




# p scramble_words('professionals') == 'paefilnoorsss' 
# p scramble_words('i') == 'i'
# p scramble_words('') == ''
# p scramble_words('me') == 'me'
# p scramble_words('you') == 'you'
# p scramble_words('card-carrying') == 'caac-dinrrryg' 
# p scramble_words("shan't") == "sahn't"
p scramble_words('-dcba') == '-dbca'
p scramble_words('dcba.') == 'dbca.'