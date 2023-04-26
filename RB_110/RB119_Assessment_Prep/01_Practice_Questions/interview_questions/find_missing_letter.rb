=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Given an array of consecutive (increasing) letters as input,
  return the missing letter in that array. You will always get
  a valid array. And it will be always exactly one letter missing.
  The array will contain letters in only one case.

  Input: array of strings
  Output: string

# --------------------------- Test Cases + Rules
  Explicit:
    - find the missing letter in alphabetical order of the array
    - input array will always be valid
    - only one letter will be missing
    - the array will contain letters in one case (upper or lower)

  Implicit:
    - input array will have a minimum of 2 elements

# --------------------------- Data Structure
  - arrays
# --------------------------- Scratch Book

# --------------------------- Algorithm
GIVEN AN ARRAY OF STRINGS:
  1. Init ALPHABET constant to hold the alphabet letters in lower and upper case
  2. Find the full array that covers the range of letters as the input array
  3. iterate through full array
    - compare to input array
    - if current char doesn't equal char in input array, return char

=end

ALPHABET = ('a'..'z').to_a + ('A'..'Z').to_a

def get_full_array(arr)
  first_char = arr[0]
  length = arr.size + 1
  first_idx = ALPHABET.index(first_char)
  ALPHABET.slice(first_idx, length)
end

def find_missing_letter(arr)
  full_arr = get_full_array(arr)
  full_arr.each_with_index do |letter, idx|
    return letter if letter != arr[idx]
  end
end

# refactor

def find_missing_letter(arr)
  arr.each_with_index do |char, idx|
    return char.succ if char.succ != arr[idx+1]
  end
end

p find_missing_letter(["a","b","c","d","f"]) == "e"
p find_missing_letter(["O","Q","R","S"]) == "P"
p find_missing_letter(["b","d"]) == "c"
p find_missing_letter(["a","b","d"]) == "c"
p find_missing_letter(["b","d","e"]) == "c"