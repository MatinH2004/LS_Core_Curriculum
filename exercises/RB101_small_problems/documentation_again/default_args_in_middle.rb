
def my_method(a, b = 2, c = 3, d)
  p [a, b, c, d]
end

my_method(4, 5, 6)

# => [4, 5, 3, 6]
# if default arg isnt given a value, it will return the default value.