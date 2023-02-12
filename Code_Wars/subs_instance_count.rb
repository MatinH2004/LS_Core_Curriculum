=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes two arguments: full_text and search_text.
  The method must return the number of times the search_text is found
  within the full_text.

  Input: string sentence, search word
  Output: integer, for the number of times the search word is found.

# -------------------------- Test Cases

  solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice 
  solution('aaabbbcccc', 'bbb') # should return 1

# -------------------------- Data Structure

  string -> array -> integer

# -------------------------- Scrapbook



# -------------------------- Algorithm

  /* given a sentence and a seach word */
    - intialize a count variable to 0

    - iterate through sentence to find all substrings
      - if substring matches search word
        - increment count variable
    
    - return count variable

=end

def solution(full_text, search_text)
  count = 0

  0.upto(full_text.length - 1) do |i|
    i.upto(full_text.length - 1) do |j|
      full_text[i..j] == search_text ? count += 1 : next
    end
  end

  count
end

# one-liner solution
def solution(full_text, search_text)
  full_text.scan(search_text).size
end

p solution('abcdeb','b') == 2 
p solution('abcdeb', 'a') == 1 
p solution('abbc', 'bb') == 1