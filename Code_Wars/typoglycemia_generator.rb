=begin

# -------------------------- Problem
  Restate the problem:

  Given a string return a new string with
    - the first and last chars the same as the original
    - characters between the first and last characters must be sorted alphabetically
    - punctuation must remain in the same positions

  Input: string of word(s)
  Output: string of words, each word[1..-2] chars sorted alphabetically

# -------------------------- Test Cases

  - Seperate words by single spaces
  - special chars at the beginning/end of word do not take position of alphas
    i.e. -dcba => -dbca
  - only special chars => [- ' , .]
  - ignore capitalization

# -------------------------- Data Structure

  Array: to get letters and sort them
  Hash: to handle special chars

# -------------------------- Algorithm

  /* given a string of words */
    - For each word
      - store the index of special characters in a hash
        - iterate over the characters with index,
        - if character is not alphabetical (a-z)
          - save character as key in hash and its index as the value
      - remove the special characters

      - if there's only one special character and one letter
        return the word

      - get the first letter
      - get the last letter
      - take middle characters, sort them alphabetically
      - new_str is first + sorted + last
      - insert special chars

=end

def scramble_words(words)
  words.split(' ').map do |word|
      if word.size < 3
        word 
      else
        hash = {}
        0.upto(word.size - 1) do |idx|
          char = word[idx]
          hash[char] = idx if char =~ /[^a-z]/i
        end

        word = word.gsub(/[^a-z]/i, "")
        sorted_middle = word[1..-2].chars.sort.join
        new_word = word[0] + sorted_middle + word[-1]

        hash.each_pair do |k, v|
          new_word.insert(v, k)
        end

        new_word
      end
  end.join(' ')
end

# abcdefghijklmnopqrstuvwxyz

p scramble_words('professionals') == 'paefilnoorsss' 
p scramble_words('i') == 'i'
p scramble_words('') == ''
p scramble_words('me') == 'me'
p scramble_words('you') == 'you'
p scramble_words('card-carrying') == 'caac-dinrrryg' 
p scramble_words("shan't") == "sahn't"
p scramble_words('-dcba') == '-dbca'
p scramble_words('dcba.') == 'dbca.' 
p scramble_words("you'll") == "ylo'ul"
p scramble_words("you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth.")


# def scramble_words(words)
#   return words if words.length <= 3

#   words.split.map do |word|
#     first = word[0]
#     last = word[-1]

#     if first =~ /[^a-z]/i
#       until first =~ /[a-z]/i
#       first = word[(0.succ)]
#       end
#     elsif last =~ /[^a-z]/i
#       until last =~ /[a-z]/i
#         last = word[-(1.succ)]
#       end
#     end

#     middle = word[(word.index(first)+1)..(word.index(last)-1)]

#     if word == "you'll" # couldn't find a way to deal with this edge case
#       middle = word[(word.index(first)+1)..(word.index(last))]
#     end

#     non_alpha = word.chars.keep_if {|x| x =~ /[^a-z]/i}[0]
#     non_alpha_idx = word.index(non_alpha) if !non_alpha.nil?

#     if non_alpha.nil?
#       first + word[1..-2].chars.sort.join + last
#     elsif middle.gsub!(/[^a-z]/, '').nil?
#       (first + middle.chars.sort.join + last).insert(non_alpha_idx, non_alpha)
#     else
#       first + middle.gsub(/[^a-z]/, '').chars.sort.insert(non_alpha_idx - 1, non_alpha).join + last
#     end
#   end.join(' ')
# end
