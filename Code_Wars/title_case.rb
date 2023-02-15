=begin

P: Given a string, write a method that converts it to
   title case. The method should accept a 2nd string parameter
   where the words are no title cased from the original string.

E: - title case every word (first word capitalized)
   - ignore word if it is present in 2nd arg
   - downcase the string before converting to title case

I: - First word of the string must be title cased, even if
     it is present in second arg

A: /* given a string sentence, and a minor word string */
   - downcase & split minor_words and assign it to a variable
   - for title string:
      - downcase & split string
      - map over words
        - if index is greater than 0 & word is in minor_words array
          - leave word as it is
        - else capitalize word
      - join array back to string and return

=end

def title_case(title, minor_words='')
  m_w = minor_words.downcase.split
  title
    .downcase
    .split
    .map.with_index {|x, i| (i > 0 && m_w.include?(x)) ? x : x.capitalize}
    .join(' ')
end

# refactor
def title_case(title, minor_words = '')
  title.capitalize.split().map{|a| minor_words.downcase.split().include?(a) ? a : a.capitalize}.join(' ')
end

p title_case('a clash of KINGS', 'a an the of') == 'A Clash of Kings'
p title_case('THE WIND IN THE WILLOWS', 'The In') == 'The Wind in the Willows'
p title_case('the quick brown fox') == 'The Quick Brown Fox'
p title_case('a bc', 'bc') == 'A bc'