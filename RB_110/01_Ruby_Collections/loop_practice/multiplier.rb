# mutate original array
def multiply!(numbers, multiplier)
  counter = 0

  loop do
    break if counter == numbers.size
    numbers[counter] *= multiplier
    counter += 1
  end

  numbers
end

# 2.
def multiply_map!(numbers, multiplier)
  numbers.map! {|n| n * multiplier}
end

# return a new array

# 1.
def multiply(numbers, multiplier)
  multiplied_nums = []
  counter = 0

  loop do
    break if counter == numbers.size
    multiplied_nums << numbers[counter] * multiplier
    counter += 1
  end

  multiplied_nums
end

# 2.
def multiply_map(numbers, multiplier)
  numbers.map {|n| n * multiplier}
end

numbers = [1,2,3,4,5]

p multiply(numbers, 2)
p multiply_map(numbers, 2)
p multiply!(numbers, 2)
p multiply_map!(numbers, 2)
