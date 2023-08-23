=begin

P:

Write a method that can tell whether a number is:
- PERFECT (sum of all divisors is equal to number)
- ABUNDANT (sum of all divisors is more than the number)
- DEFICIENT (sum of all divisors is less than the number)

E:

6 is perfect because 1 + 2 + 3 == 6
28 is perfect because 1 + 2 + 4 + 7 + 14 == 28
15 is deficient because 1 + 3 + 5 == 9
24 is abundant because 1 + 2 + 3 + 4 + 6 + 8 + 12 == 36

D:

- use arrays to store divisors then sum it up

A:

- raise StandardError if number is negative
- initialize an array
  - iterate from 0 to number
    - if number % i == 0
    - append to array
  - if sum of array == number => perfect number
  - if sum of array > number => abundant number
  - if sum of array < number => deficient number


=end

# class PerfectNumber
#   def self.classify(int)
#     raise StandardError if int < 0
#     sum = (1...int).each_with_object([]) do |i, arr|
#       arr << i if int % i == 0
#     end.sum

#     if int == sum
#       'perfect'
#     elsif int < sum
#       'abundant'
#     elsif int > sum
#       'deficient'
#     end

#   end
# end

# refactor

class PerfectNumber
  def self.classify(int)
    raise StandardError if int < 0

    sum = (1...int).select { |i| int % i == 0 }.sum

    int == sum ? 'perfect' : int < sum ? 'abundant' : 'deficient'
  end
end