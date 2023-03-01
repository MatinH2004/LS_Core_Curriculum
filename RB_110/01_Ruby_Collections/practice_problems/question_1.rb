# What is the return value of the select method below? Why?
[1, 2, 3].select do |num|
  num > 5
  'hi' # truthy value, so returns original array
end

# => [1, 2, 3]
