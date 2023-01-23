# --- Understand the Problem

# Modify method from part 1, so non_alphabetic characters
# dont get counted as a letter. Ex. length of "it's" is 3 not 4.

# --- Test Cases

# word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
# word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
# word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
# word_sizes('') == {}

def word_sizes(sentence)
  sentence.split.each_with_object(Hash.new(0)) do |word, hash|
    hash[word.gsub(/[^a-zA-Z]/, '').size] += 1
  end
end

p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 2 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 3 }
p word_sizes("What's up doc?") == { 5 => 1, 2 => 1, 3 => 1 }
p word_sizes('') == {}

# --- The Daniel Chae One-liner Solution:

# gsub + tally one-liner
# def word_sizes(s)
#   s.gsub(/[^a-z ]+/i, "").split.map(&:length).tally
# end