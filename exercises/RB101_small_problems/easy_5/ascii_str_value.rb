# Write a method that determines and returns the ASCII string value of a string that is passed in as an argument.
def ascii_value(str)
  total = 0
  counter = 0
  loop do
    break if str.size == counter
    total += str[counter].ord
    counter += 1
  end
  total
end

p ascii_value('Four score') == 984
p ascii_value('Launch School') == 1251
p ascii_value('a') == 97
p ascii_value('') == 0

# LS Solution:

# def ascii_value(str)
#   total = 0
#   str.each_char {|char| total += char.ord}
#   total
# end