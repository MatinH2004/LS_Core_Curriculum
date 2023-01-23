# --- Understand the Problem

# Write a method that takes a string argument and returns a
# new string that contains the value of the original string with all
# consecutive duplicate characters collapsed into a single character.

# Cannot use String#squeeze or String#squeeze!

# Explicit:
#   - Input: string
#   - Ouput: new string
#   - delete all consecutive duplicate characters into one character

# Implicit:
#   - Return a new string

# --- Test Case
# crunch('ddaaiillyy ddoouubbllee') == 'daily double'
# crunch('4444abcabccba') == '4abcabcba'
# crunch('ggggggggggggggg') == 'g'
# crunch('a') == 'a'
# crunch('') == ''

# --- Data Structure + Algorithm

#   */ Given a string of duplicate chars/*
# - assign input string to new variable (using += or #clone / #dup)
# - assign first value of string to a variable (saved_value)
# - current value starts at index 1
#   - if current value equals saved value:
#     - delete current value, check next value
#   - else assign current value to saved value

# --- Code!

def crunch(str)
  result = []
  str.each_char do |char|
    result << char unless result.last == char
  end
  result.join
end

p crunch('ddaaiillyy ddoouubbllee') == 'daily double'
p crunch('4444abcabccba') == '4abcabcba'
p crunch('ggggggggggggggg') == 'g'
p crunch('a') == 'a'
p crunch('') == ''

# Solution Using Regex:

# def crunch(text)
#   text.gsub(/(.)\1+/, '\1')
# end

# Solution using #chars:
# def crunch(str)
#   result = []
#   str.chars.each do |char|
#     result << char unless result.last == char
#   end
#   result.join
# end

# LS Solution:

# def crunch(text)
#   index = 0
#   crunch_text = ''
#   while index <= text.length - 1
#     crunch_text << text[index] unless text[index] == text[index + 1]
#     index += 1
#   end
#   crunch_text
# end