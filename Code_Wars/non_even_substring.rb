=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes a string of integers, and returns
  the number of every odd-numbered substrings.

  Input: string (integers)
  Output: integer (size of array)

# -------------------------- Test Cases

  "1341" -> 1, 1, 3, 13, 41, 341, 1341 = 7 numbers

# -------------------------- Data Structure

  string -> array (of odd numbered substrings) -> integer

# -------------------------- Scrapbook

  - #upto
  - #chars

# -------------------------- Algorithm

  /* given a string of integer */
  - initialize result array

  - convert input string into array

  - iterate though each element
    - find all substrings
      - if substring integer is odd? 
        - push to results array

  - return size of result array

=end

def solve(str)
  result = []
  str_arr = str.chars

  0.upto(str_arr.size - 1) do |i|
    i.upto(str_arr.size - 1) do |j|
      if str_arr[i..j].inject(:+).to_i.odd?
        result << str_arr[i..j].inject(:+)
      end
    end
  end

  result.size
end

p solve("1341") == 7
p solve("1357") == 10
p solve("13471") == 12
p solve("134721") == 13
p solve("1347231") == 20 
p solve("13472315") == 28