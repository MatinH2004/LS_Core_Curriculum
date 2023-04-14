=begin

Start time: 1:22

# --------------------------- Problem
  Restate the problem:

  Given a string of integers, return the number of odd-numbered substrings
  that can be formed.

  eg. '1341' => 1, 1, 3, 13, 41, 341, 1341; total of 7 numbers

  Input: string representing integer
  Output: integer

# --------------------------- Test Cases + Rules
  Explicit:
    - count the number of odd substrings

  Implicit:
    - assume string only contains numbers
    - assume string is non-empty

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

# --------------------------- Algorithm

  GIVEN A STRING OF NUMBERS:
    1. Initialize odd_numbers array
    2. iterate from index 0 to the length of input string, non-inclusive
      - find all substrings
        - append all odd substrings to odd_numbers array
    3. return the size of odd_numbers array

=end

def solve(str)
  odd_numbers = []

  (0...str.size).each do |i|
    (0...str.size).each do |j|
      odd_numbers << str[i..j] if str[i..j].to_i.odd?
    end
  end

  odd_numbers.size
end

p solve("1341") == 7
p solve("1357") == 10
p solve("13471") == 12
p solve("134721") == 13
p solve("1347231") == 20 
p solve("13472315") == 28