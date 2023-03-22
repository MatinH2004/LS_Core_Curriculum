=begin
# --------------------------- Problem
  Restate the problem:

  Write a program that reads the contents of a text file, and prints the longest
  sentence in the file based on the number of words. Sentence may end with (. ? !).
  Any sequence of characters that are not spaces or sentence ending characters should be
  treated as a word. Also print the number of words in the sentence.

  Input: string text
  Output: string (longest sentence) + integer (number of words)

# --------------------------- Test Cases + Rules
  Explicit:
    - return longest sentence
    - split sentences by: '.', '?', '!'
    - print number of words

# --------------------------- Data Structure
  - split string into sentences (array)
  - return integer (num of words in longest sentence)

# --------------------------- Scrapbook
  regex: `sentences = text.split(/\.|\?|!/)`
  longest sentence: #max

# --------------------------- Algorithm
  /* given a large string of sentences */
    - assign `sentences` to array of text split using regex
    - assign `longest_sentence` to longest string
    - return `longest_sentence` and its word count
    
=end

def longest_sentence(text)
  sentences = text.split(/\.|\?|!/)
  longest_sentence = sentences.max_by(&:size).strip
  number_of_words = longest_sentence.split.size

  "Longest sentence:\n\n#{longest_sentence}.\n\nWords: #{number_of_words}"
end

example = "Four score and seven years ago our fathers brought forth
on this continent a new nation, conceived in liberty, and
dedicated to the proposition that all men are created
equal.

Now we are engaged in a great civil war, testing whether
that nation, or any nation so conceived and so dedicated,
can long endure. We are met on a great battlefield of that
war. We have come to dedicate a portion of that field, as
a final resting place for those who here gave their lives
that that nation might live. It is altogether fitting and
proper that we should do this.

But, in a larger sense, we can not dedicate, we can not
consecrate, we can not hallow this ground. The brave
men, living and dead, who struggled here, have
consecrated it, far above our poor power to add or
detract. The world will little note, nor long remember
what we say here, but it can never forget what they
did here. It is for us the living, rather, to be dedicated
here to the unfinished work which they who fought
here have thus far so nobly advanced. It is rather for
us to be here dedicated to the great task remaining
before us -- that from these honored dead we take
increased devotion to that cause for which they gave
the last full measure of devotion -- that we here highly
resolve that these dead shall not have died in vain
-- that this nation, under God, shall have a new birth
of freedom -- and that government of the people, by
the people, for the people, shall not perish from the
earth."

puts longest_sentence(example)
# =>
# Longest sentence:

# It is rather for
# us to be here dedicated to the great task remaining
# before us -- that from these honored dead we take
# increased devotion to that cause for which they gave
# the last full measure of devotion -- that we here highly
# resolve that these dead shall not have died in vain
# -- that this nation, under God, shall have a new birth
# of freedom -- and that government of the people, by
# the people, for the people, shall not perish from the
# earth.

# Words: 86

text = File.read('longest_sentence.txt')

puts longest_sentence(text)
# =>
# Longest sentence:

# “I have seen,” he said, “the most beautiful scenes
# of my own country; I have visited the lakes of Lucerne and Uri, where the
# snowy mountains descend almost perpendicularly to the water, casting black
# and impenetrable shades, which would cause a gloomy and mournful appearance
# were it not for the most verdant islands that relieve the eye by their gay
# appearance; I have seen this lake agitated by a tempest, when the wind tore
# up whirlwinds of water and gave you an idea of what the water-spout must be
# on the great ocean; and the waves dash with fury the base of the mountain,
# where the priest and his mistress were overwhelmed by an avalanche and
# where their dying voices are still said to be heard amid the pauses of the
# nightly wind; I have seen the mountains of La Valais, and the Pays de Vaud;
# but this country, Victor, pleases me more than all those wonders.

# Words: 157