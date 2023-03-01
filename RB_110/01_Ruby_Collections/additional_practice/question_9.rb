# Capitalize every word in the string
words = "the flintstones rock"

p words.split.map(&:capitalize).join(' ')

=begin

Alt solution:

words.split.map {|word| word.capitalize}.join(' ')

=end