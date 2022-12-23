# write a method that uses the multiply() method to square a number

def multiply(a, b)
  a * b
end

def square(a)
  multiply(a, a)
end

p square(5) == 25   # true
p square(-8) == 64  # true

# --- Further Exploration ---

def power(a, b)
  multiply(a, 1) ** b
end

p power(2, 3) == 8     # true
p power(5, 5) == 3125  # true
