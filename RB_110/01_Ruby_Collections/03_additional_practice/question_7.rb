# Create a hash that expresses the frequency with which each letter occurs in this string:
statement = "The Flintstones Rock"

result = Hash.new(0)
letters = ('A'..'Z').to_a + ('a'..'z').to_a

letters.each do |letter|
  letter_frequency = statement.count(letter)
  result[letter] = letter_frequency if letter_frequency > 0
end

p result
# => {"F"=>1, "R"=>1, "T"=>1, "c"=>1, "e"=>2, "h"=>1, "i"=>1, "k"=>1, "l"=>1, "n"=>2, "o"=>2, "s"=>2, "t"=>2}

# Solution using #each_with_object
statement.split.join.chars.each_with_object(res={}) do |letter, hsh|
  hsh[letter] = statement.count(letter)
end

p res