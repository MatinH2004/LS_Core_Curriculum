# Method that takes a string and displays the number of total chars

def count_char(str)
  count = str.delete(' ').size
  puts "There are #{count} characters in '#{str}'"
end

puts "Please write word(s):"
words = gets.strip
count_char(words)