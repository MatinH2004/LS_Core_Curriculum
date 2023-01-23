# Create a hash that expresses the frequency with which each letter occurs in this string:
statement = "The Flintstones Rock"

result = Hash.new(0)
letters = ('A'..'Z').to_a + ('a'..'z').to_a

letters.each do |letter|
  letter_frequency = statement.count(letter)
  result[letter] = letter_frequency if letter_frequency > 0
end

p result