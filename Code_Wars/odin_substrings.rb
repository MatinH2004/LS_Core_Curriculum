# implement a substrings method that takes a word
# and an array of valid substrings (dictionary).

# The method should return a hash listing each
# substring (case insensitive) that was found in the
# original string.

dictionary = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings(word, arr)
  word = word.downcase
  substrings = []

  (0...word.size).each do |i|
    (i...word.size).each do |j|
      if arr.include?(word[i..j])
        substrings << word[i..j]
      end
    end
  end

  substrings.each_with_object(Hash.new(0)) do |subs, hsh|
    hsh[subs] += 1
  end
end

p substrings("Howdy partner, sit down! How's it going?", dictionary) == 
{ "down" => 1, "go" => 1, "going" => 1, "how" => 2, "howdy" => 1, "it" => 2, "i" => 3, "own" => 1, "part" => 1, "partner" => 1, "sit" => 1 }
# => true

p substrings("below", dictionary) == 
{ "below" => 1, "low" => 1 }
# => true