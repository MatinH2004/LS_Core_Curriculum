=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes a string of text (including special chars)
  and returns an array containing the top 3 most occuring words,
  in descending order of the number of occurences.

  Input: String (letters, special chars)
  Output: Array [top 3 words]

# -------------------------- Test Cases + Rules

  - A word is a string of letters (A to Z) optionally containing 
    one or more apostrophes (') in ASCII.
  - Apostrophes can appear at the start, middle or end of a word 
    ('abc, abc', 'abc', ab'c are all valid)
  - Specials characters such as (# \ / .) are not part of a word and should
    be treated as whitespace.
  - MAthces should be case-insensitive, and the words in the result should be
    lowercased.
  - If a text contains fewer than three unique words, then the top-2 or top-1
    words should be returned, or an empty array if a text contains no words.

# -------------------------- Data Structure

  String -> Array of words -> count using hash -> Result array

  Hash: increment value when key word is detected

# -------------------------- Algorithm

  /* given a string of text */
    - initialize result array
    - initialize hash to default value of 0

    - split string into individual words
      - for each word, if string contains any special chars
        (except apostrophe) remove it.
      - if string contains less than three words, return the words...

    - count each string using hash
    - append top three highest values to result array

# -------------------------- CODE:
=end

def top_3_words(text)
  count = Hash.new(0)
  results = []

  text.split.each do |word|
    if !!(word =~ /[^a-zA-Z']/)
      word = word.gsub(/[^a-zA-Z']/, '')
    end
    count[word] += 1 if word =~ /[a-z]/i
  end

  count.max_by(3) {|_, v| v}.map do |arr|
    arr[0]
  end
end

p top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") == ["e", "ddd", "aa"] 
p top_3_words(" //wont won't won't ") == ["won't", "wont"]
p top_3_words(" , e .. ") == ["e"]
p top_3_words(" ... ") == []
p top_3_words(" ' ") == []
p top_3_words(" ''' ") == []
p top_3_words("""In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.""") == ["a", "of", "on"]