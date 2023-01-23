
# --- Understand the Problem

# Write a method that takes an array of strings,
# and returns an array of the same string values,
# except witht the vowels (a, e, i, o, u) removed.

# Explicit:
#   - remove vowels
#   - input: array of strings
#   - output: same array of strings

# Implicit:
#   - modify the original object

# --- Test Cases:

# remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
# remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
# remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# --- Data Structure + ALgorithm

# */ Given an array of strings/*
# - create an empty string variable called 'word'
# - iterate through each string using #each
#   - iterate through each character using #each_char
#     - add all non vowel characters to word variable

def remove_vowels(strings)
  vowels = 'aeiouAEIOU'
  result = []
  word = ''

  strings.each do |str|
    str.each_char do |char|
      str.delete!(char) if vowels.include?(char)
    end
  end
end

p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']

# -- LS Solution:

# def remove_vowels(strings)
#   strings.map { |string| string.delete('aeiouAEIOU') }
# end

# Note: #delete will delete any character specified in param from str

# -- Solution using regex:

# def remove_vowels(arr)
#   arr.map { |str| str.gsub(/[aeiouAEIOU]/,'') }
# end