
# Write a method that takes an integer and returns an array of all integers
# in sequence between 1 and to the argument.

# Assume argument will be valid integer that is greater than 0

def sequence(n)
  (1..n).to_a
end

p sequence(5) == [1, 2, 3, 4, 5]
p sequence(3) == [1, 2, 3]
p sequence(1) == [1]

# Further Exploration

# if argument is positive, count up to that number
# if argument is negative or 0, count down to that number

# starting point will always be 1

def sequence(n)
  n > 0 ? (1..n).to_a : (n..1).to_a.reverse
end

p sequence(5)  # => [1, 2, 3, 4, 5]
p sequence(-5) # => [1, 0, -1, -2, -3, -4, -5]
p sequence(0)  # => [1, 0]