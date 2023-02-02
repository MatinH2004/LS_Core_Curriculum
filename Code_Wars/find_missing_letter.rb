=begin

# -------------------------- Problem
  Restate the problem:

Given an array of consecutive (increasing) letters in alphabetical order,
find the missing letter.

  Explicit:
    - input array will be valid
    - input array will have at least 2 letters
    - will contain letters in one case
  
  Implicit:
    - None identified.

  Input: Array of letters
  Output: missing letter

# -------------------------- Test Cases

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

# -------------------------- Data Structure


# -------------------------- Scrapbook

#succ

# -------------------------- Algorithm

  /* Given an array of letters */
  - loop through the array
    - if successor of current value != next value
      - return value
    - else, iterate


=end

# def find_missing_letter(arr)
#   index = 0
#   loop do
#     current_value = arr[index]
#     next_value = arr[index + 1]
#     if current_value.succ != next_value
#       return current_value.succ
#     end
#     index += 1
#   end
# end

# REFACTOR

def find_missing_letter(arr)
  arr.each_with_index do |letter, idx|
    if letter.succ != arr[idx + 1]
      return letter.succ
    end
  end
end

p find_missing_letter(['a', 'b', 'c', 'd', 'f']) == 'e'
p find_missing_letter(['O', 'Q', 'R', 'S']) == 'P'
p find_missing_letter(['a', 'c', 'd']) == 'b'