=begin

P: 

  Given a string of digits, return all possible consecutive series
  of a specified length in that string

E: - Throw argument error if series > length of str
I: - return an array of subarrays containing the series

T:

01234 -> 3 digit series: 012 123 234
01234 -> 4 digit series: 0123 1234

D:

Use arrays for finding substrings and constructing the final result

A: /* Given a string of digits */

* slices method:
  - 

=end

class Series
  def initialize(str)
    @digits = str.chars.map(&:to_i)
  end

  def slices(num)
    raise ArgumentError if num > @digits.size
    
    result = []
    (0...@digits.size).each do |i|
      (i...@digits.size).each do |ii|
        result << @digits[i..ii] if @digits[i..ii].size == num
      end
    end
    result
  end
end

# refactor
class Series
  def initialize(str)
    @digits = str.chars
  end

  def slices(len)
    raise ArgumentError if len > @digits.size
    @digits.map(&:to_i).each_cons(len).to_a
  end
end