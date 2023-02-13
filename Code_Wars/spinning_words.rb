=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes a sentence, and reverses the words,
  if the words are larger that five letters.

  Input:
  Output:

# -------------------------- Test Cases

  - strings will only contain spaces and letters
  
  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
  spinWords( "This is a test") => returns "This is a test" 
  spinWords( "This is another test" )=> returns "This is rehtona test"

# -------------------------- Data Structure

  string -> array -> string

# -------------------------- Scrapbook



# -------------------------- Algorithm

  /* given a string */
    - split string into words

    - iterate through the word
      - if word length is greater than or equal to 5
        - reverse the word
    
    - join back the sentence and return

=end

def spin_words(str)
  str.split.map do |word|
    if word.length >= 5
      word.chars.reverse.join
    else
      word
    end
  end.join(' ')
end

# one liner
def spin_words(s)
  s.split.map {|w| w.size >= 5 ? w.chars.reverse.join : w}.join(' ')
end

p spin_words("Hey fellow warriors") == "Hey wollef sroirraw" 
p spin_words("This is a test") == "This is a test"
p spin_words("This is another test") == "This is rehtona test" 
p spin_words('test') == 'test'