# Given a string, find the word with the top score.
# scores ex. a = 1, b = 2, ... z = 26
# if more than 1 word share top scores, 
# return the first instance of the top score (see bottom test case)

def alphabet_score(str)
  alphabet = ('a'..'z').zip(1..26).to_h
  words = str.split

  scores = words.map do |word|
    word.chars.inject(0) { |sum, char| sum + alphabet[char] }
  end

  max = scores.max

  first_max = scores.map.with_index do |word, idx|
    idx if word == max
  end

  words[first_max.compact[0]]
end

p alphabet_score('man i need a taxi up to ubud') == 'taxi'
p alphabet_score('what time are we climbing up the volcano') == 'volcano'
p alphabet_score('take me to semynak') == 'semynak'
p alphabet_score('aa b') == 'aa'