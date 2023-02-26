=begin

P: Given a word and an array, find all anagrams from array and
   return in array format. Return empty array if no matches.

E: - append all anagrams from input array to result array
     - anagram: 2 words are anagrams of each other if they both contain the same letters.
   - return empty array if no anagrams found
   - 

I: - none identified

T: 'abba' & 'baab' == true 
   'abba' & 'bbaa' == true 
   'abba' & 'abbba' == false
   'abba' & 'abca' == false

A: /* given a string and an array */
   - initialize a result array
   - initialize hash with letter count of input str
   - iterate through input array
     - split element into chars and count each letter
     - if element hash matches initial str hash
       - append word to result array
   - return result array

=end

def anagrams(word, words)
  result = []
  word = word.chars.each_with_object({}) do |char, hash|
    hash[char] = word.count(char)
  end

  words.each do |w|
    match = w.chars.each_with_object({}) do |char, hash|
      hash[char] = w.count(char)
    end

    result << w if word == match
  end

  result
end

p anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) == ['aabb', 'bbaa']
p anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) == ['carer', 'racer']
p anagrams('laser', ['lazing', 'lazy', 'lacer']) == []
