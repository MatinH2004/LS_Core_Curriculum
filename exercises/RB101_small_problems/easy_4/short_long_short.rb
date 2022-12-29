# Write a method that takes two strings as arguments, 
# determines the longest of the two strings, and then 
# returns the result of concatenating the shorter string, 
# the longer string, and the shorter string once again.

def short_long_short(str1, str2)
  if str1.size > str2.size
    return str2 + str1 + str2
  elsif str1.size < str2.size
    return str1 + str2 + str1
  end
  "Error"
end

p short_long_short('abc', 'defgh') == "abcdefghabc"
p short_long_short('abcde', 'fgh') == "fghabcdefgh"
p short_long_short('', 'xyz') == "xyz"

# simpler version using sort algorithm:
def short_long_short(str1, str2)
  arr = [str1, str2].sort_by {|val| val.size}
  arr.first + arr.last + arr.first
end
