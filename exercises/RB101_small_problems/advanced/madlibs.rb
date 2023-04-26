=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Make a madlibs program that reads in some text from a text file that you have created, and then plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text and prints it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program, but the text data should come from a file or other external source. Your program should read this text, and for each line, it should place random words of the appropriate types into the text, and print the result.

  Input: 
  Output:

# --------------------------- Test Cases + Rules
  Explicit:

  Implicit:

# --------------------------- Data Structure

# --------------------------- Scratch Book

# --------------------------- Algorithm

=end

ADJECTIVES = %w(quick lazy sleepy ugly).freeze
NOUNS = %w(fox dog head leg).freeze
VERBS = %w(jumps lifts bites licks).freeze
ADVERB = %w(easily lazily noisily excitedly).freeze

def word_substitute(word)
  case
  when word.include?('<adjective>') then word.gsub('<adjective>', ADJECTIVES.sample)
  when word.include?('<noun>') then word.gsub('<noun>', NOUNS.sample)
  when word.include?('<verb>') then word.gsub('<verb>', VERBS.sample)
  when word.include?('<adverb>') then word.gsub('<adverb>', ADVERB.sample)
  else
    word
  end
end

def madlibs(text)
  puts text.split.map { |word| word_substitute(word) }.join(' ')
end

text = "The <adjective> brown <noun> <adverb>
<verb> the <adjective> yellow
<noun>, who <adverb> <verb> his
<noun> and looks around."

madlibs(text)