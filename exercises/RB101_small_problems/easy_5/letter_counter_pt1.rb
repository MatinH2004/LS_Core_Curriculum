# --- Understand the Problem

# Write a method that takes a string with one or more space
# seperated words and returns a hash that shows the number 
# of words of different.

# Words consist of any string of characters that do not include a space.

# Explicit:
#   - Symbols and signs count as words: "what's" = 6 letter word
#   - Words are seperated by spaces
#   - Input: string of words
#   - Output: hash

# Implicit:
#   - Return new hash with letter count

# --- Test Case / Examples

# word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
# word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
# word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
# word_sizes('') == {}

# --- Data Structure + Algorithm

#   */ Given a string of words /*
# - split sentence into words
# - initialize hash with default value of 0
# - loop through words:
#   - get word's length and add it as key in hash
#   - increment value += 1
# - return hash

def word_sizes(sentence)
  sentence.split.each_with_object(Hash.new(0)) do |word, hash|
    hash[word.size] += 1
  end
end

p word_sizes('Four score and seven.') == { 3 => 1, 4 => 1, 5 => 1, 6 => 1 }
p word_sizes('Hey diddle diddle, the cat and the fiddle!') == { 3 => 5, 6 => 1, 7 => 2 }
p word_sizes("What's up doc?") == { 6 => 1, 2 => 1, 4 => 1 }
p word_sizes('') == {}

# --- Further Exploration

# Different Ways To Initialize Hash

h = Hash.new("Go Fish")
h["a"] = 100
h["b"] = 200
h["a"]           #=> 100
h["c"]           #=> "Go Fish"
# The following alters the single default object
h["c"].upcase!   #=> "GO FISH"
h["d"]           #=> "GO FISH"
h.keys           #=> ["a", "b"]

# While this creates a new default object each time
h = Hash.new { |hash, key| hash[key] = "Go Fish: #{key}" }
h["c"]           #=> "Go Fish: c"
h["c"].upcase!   #=> "GO FISH: C"
h["d"]           #=> "Go Fish: d"
h.keys           #=> ["c", "d"]