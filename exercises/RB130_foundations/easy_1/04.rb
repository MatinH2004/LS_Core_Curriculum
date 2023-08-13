# Write a method that returns a list of all of the divisors of the 
# positive integer passed in as an argument. The return value can 
# be in any sequence you wish.

# 1  = [1]
# 7  = [1, 7]
# 12 = [1, 2, 3, 4, 6, 12]
# 98 = [1, 2, 7, 14, 49, 98]
# 99400891 = [1, 9967, 9973, 99400891]

# - use range
# - use modulo

# 1. from range 1 to arg num
#   - add to new array all divisible nums

def divisors(int)
  (1..int).to_a.select { |x| int % x == 0 }
end  

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute

# Further Exploration

def divisors(int)
  num = Math.sqrt(int).to_i
  (1..num).each_with_object([]) do |n, result|
    if int % n == 0
      result << n
      result << int / n
    end
  end.uniq.sort
end

p divisors(99400891) == [1, 9967, 9973, 99400891]               # 0.098 seconds
p divisors(999962000357) == [1, 999979, 999983, 999962000357]   # 0.166 seconds
