# find the average of the input array

def average(arr)
  arr.inject(:+) / arr.size
end

puts average([1, 6]) == 3 # integer division: (1 + 6) / 2 -> 3
puts average([1, 5, 87, 45, 8, 8]) == 25
puts average([9, 47, 23, 95, 16, 52]) == 40

# further exploration - return a float
def average_float(arr)
  arr.inject(:+) / arr.size.to_f
end

puts average_float([1, 6]) == 3.5
puts average_float([1, 5, 87, 45, 8, 8]) == 25.666666666666668
puts average_float([9, 47, 23, 95, 16, 52]) == 40.333333333333336