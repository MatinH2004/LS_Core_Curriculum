# Given this code, what would be the final values of a and b? 
# Try to work this out without running the code.

a = 2
b = [5, 8]
arr = [a, b]   # => [2, [5, 8]]

arr[0] += 2    # => [4, [5, 8]]
arr[1][0] -= a # => [4, [3, 8]]

p a # => 2
p b # => [3, 8]
