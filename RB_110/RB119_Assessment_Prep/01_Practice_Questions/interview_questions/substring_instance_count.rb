=begin

Start time: 3:52

# --------------------------- Problem
  Restate the problem:

  Write a method that takes two strings, `search_text` and `full_text`, and
  returns the number of times the `search_text` is found within the `full_text`.

  Input: two strings
  Output: integer

# --------------------------- Test Cases + Rules
  Explicit:
    - count how many times search_text is found in full_text

  Implicit:
    - assume string is non-empty

# --------------------------- Data Structure

   - array

# --------------------------- Scratch Book

# --------------------------- Algorithm

  GIVEN `search_text` AND `full_text`:
    1. Initialize count variable
    2. iterate from index 0 to length of full_text, non-inclusive
      - find all substrings of the string
      - if substring is equal to search_text
        - increment count variable
    3. return count

=end

def solution(full_text, search_text)
  count = 0

  (0...full_text.size).each do |i|
    (0...full_text.size).each do |j|
      count += 1 if full_text[i..j] == search_text
    end
  end

  count
end

# refactor

def solution(full_text, search_text)
  full_text.scan(search_text).size
end

p solution('aa_bb_cc_dd_bb_e', 'bb') == 2
p solution('aaabbbcccc', 'bbb') == 1