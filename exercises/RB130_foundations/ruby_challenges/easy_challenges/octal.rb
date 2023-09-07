=begin

Start time: 6:50
Finish: 7:20

# --------------------------- Problem
  Restate the problem:

  Given an octal number in string form, write a method that converts it to decimal form
  Treat invalid inputs as octal 0

  Multiply numbers from left to right by 8 raised to a certain power (starting 0)
  Valid octal numbers include digits 0 - 7

  Input: string octal
  Output: integer decimal

# --------------------------- Test Cases + Rules
  Explicit:
  Implicit:

# --------------------------- Data Structure

  Array to iterate through digits and convert, then finally sum

# --------------------------- Scratch Book

# --------------------------- Algorithm
- split number into digits and reverse the array
- iterate through array
  - multiply each number by 8 raised to the power of current index
  - sum array

=end

class Octal
  VALID_NUMS = ('0'..'7').to_a

  def initialize(str)
    @num = str.chars.reverse
  end

  def to_decimal
    return 0 unless (@num - VALID_NUMS).empty?

    @num.map.with_index do |n, i|
      n.to_i * (8 ** i)
    end.sum
  end
end
