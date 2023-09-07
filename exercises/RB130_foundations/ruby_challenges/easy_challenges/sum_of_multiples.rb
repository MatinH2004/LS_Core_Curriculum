=begin

Start time: 7:25
Finish: 7:45

# --------------------------- Problem
  Restate the problem:

  Given a whole number (max) and a set of one or more numbers, find sum of the multiples
  upto (not including) the max number. If set of numbers not given, use 3 and 5.

  Input: set of numbers
  Output: integer (sum)

# --------------------------- Test Cases + Rules
  Explicit: 
  Implicit:

  max 20: 3, 5, 6, 9, 10, 12, 15, and 18 == 78

# --------------------------- Data Structure

  use array to iterate through multiples

# --------------------------- Scratch Book

# --------------------------- Algorithm

- if set not given, use multiples of 3 and 5
- if set given, use multiples of numbers from set

- generate an array that returns multiples of the numbers upto max number
- sum the array

=end

# class SumOfMultiples
#   def initialize(*set)
#     set = [3, 5] if set.empty?
#     @multiples = set
#   end

#   def to(max)
#     (1...max).select do |n|
#       @multiples.any? { |i| n % i == 0 }
#     end.sum
#   end

#   def self.to(max)
#     (1...max).select do |n|
#       [3, 5].any? { |i| n % i == 0 }
#     end.sum
#   end
# end

class SumOfMultiples
  def initialize(*set)
    @multiples = set#set.empty? ? [3, 5] : set
  end

  def to(max)
    self.class.to(max, @multiples)
  end

  def self.to(max, multiples=[3, 5])
    (1...max).select do |n|
      multiples.any? { |i| n % i == 0 }
    end.sum
  end
end
