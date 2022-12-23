# Write a method that returns an Array that contains every other element of an Array that is passed in as an argument.

def oddities(arr)
  arr.select {|val| arr.index(val).even?}
end

p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]      # true
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]   # true
p oddities(['abc', 'def']) == ['abc']         # true
p oddities([123]) == [123]                    # true
p oddities([]) == []                          # true
p oddities([1, 2, 3, 4, 1]) == [1, 3, 1]      # true

# --- Further Exploration ---

def evenities(arr)
  arr.select {|val| arr.index(val).odd?}
end

p evenities([2, 3, 4, 5, 6]) == [3, 5]         # true
p evenities([1, 2, 3, 4, 5, 6]) == [2, 4, 6]   # true
p evenities(['abc', 'def']) == ['def']         # true
p evenities([123]) == []                       # true
p evenities([]) == []                          # true
p evenities([1, 2, 3, 4, 1]) == [2, 4]         # true