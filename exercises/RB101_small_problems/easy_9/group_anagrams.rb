=begin

P: Given the following array:

  words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
            'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
            'flow', 'neon']
  
   Write a method that prints out groups of words that are anagrams.
   Anagrams are words that have the same exact letters in them but in
   different order. Method should output arrays of anagrams.

E: - given the `words` array, output groups (array) of anagrams

I: - none identified

T: Output should look like this:

  ["demo", "dome", "mode"]
  ["neon", "none"]
  #(etc)

A: /* given an array of words */
   - initialize result hash
   - iterate through words array
     - sort each word into alphabetical order
     - if result hash contains the key, push the current word into values array
       - otherwise, create a new key with this sorted word

=end

words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
  'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
  'flow', 'neon']

result = {}

words.each do |word|
  key = word.chars.sort.join # can use #split('') instead of #chars
  result.key?(key) ? result[key].push(word) : result[key] = [word]
end

result.each_value do |value|
  puts '------'
  p value
end

# Refactor using #each_with_object

matches = words.each_with_object({}) do |word, result|
  key = word.chars.sort.join
  result.key?(key) ? result[key].push(word) : result[key] = [word]
end

matches.each_value do |value|
  puts '--------' * value.size
  p value
end

# ------------------------
# ["demo", "dome", "mode"]
# ----------------
# ["none", "neon"]
# --------------------------------
# ["tied", "diet", "edit", "tide"]
# --------------------------------
# ["evil", "live", "veil", "vile"]
# ------------------------
# ["fowl", "wolf", "flow"]

# one-liner solution:
words.group_by {|word| word.chars.tally}.each_value {|words| p words}
