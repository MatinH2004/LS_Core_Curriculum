# Build the #select method from scratch

# The #select method implementation examples:
# array = [1, 2, 3, 4, 5]

# array.select { |num| num.odd? }       # => [1, 3, 5]
# array.select { |num| puts num }       # => [], because "puts num" returns nil and evaluates to false
# array.select { |num| num + 1 }        # => [1, 2, 3, 4, 5], because "num + 1" evaluates to true

# My implementation:

def select(arr)
  counter = 0
  result = []

  while counter < arr.size
    result.push(arr[counter]) if yield(arr[counter])
    counter += 1
  end

  result
end

# Solution using #each_with_object:

def select(arr)
  arr.each_with_object([]) do |item, result|
    result << item if yield(item)
  end
end

array = [1, 2, 3, 4, 5]

p select(array) { |num| num.odd? }      # => [1, 3, 5]
p select(array) { |num| puts num }      # => [], because "puts num" returns nil and evaluates to false
p select(array) { |num| num + 1 }       # => [1, 2, 3, 4, 5], because "num + 1" evaluates to true