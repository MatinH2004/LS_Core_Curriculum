# Solve using PEDAC

# --- Understand the problem:

# Given a string of words seperated by spaces, write a method that
# takes this string of words and returns a string in which the first
# and last letters of every word are swapped.

# Explicit:
#   - assume every word contains one letter
#   - assume string will always contain one word.
#   - assume string contains nothing but words and spaces.
#   - Input: string
#   - Output: new string

# Implicit:
#   - return string if contains one character
#   - words are case-sensitive

# --- Examples / Test Cases:

# swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
# swap('Abcde') == 'ebcdA'
# swap('a') == 'a'

# --- Data Structure + Algorithm

#   */Given an string of words/*
# - return string if contains one character
# - split string into individual words
# - loop through array and modify each word
#   - split word using #chars
#   - save first and last elements to a variable
#   - reassing first and last elements
# - append word into a new array
# - join array and return

def swap(str)
  return str if str.size == 1
  result = []

  str.split(' ').each do |word|
    word[0], word[-1] = word[-1], word[0]
    result << word
  end

  result.join(' ')
end

p swap('Oh what a wonderful day it is') == 'hO thaw a londerfuw yad ti si'
p swap('Abcde') == 'ebcdA'
p swap('a') == 'a'