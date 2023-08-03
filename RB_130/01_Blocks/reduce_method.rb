# Build the #reduce/#inject method from scratch

# The #reduce method:
[1, 2, 3].reduce { |acc, num| acc + num }       # => 6
[1, 2, 3].reduce(10) { |acc, num| acc + num }   # => 16

# My implementation:

# - iterate thru arr elements
# - yield to block current element and accumulator
# - reassign acc to return value of block

def reduce(arr, acc=0)
  arr.each { |item| acc = yield(acc, item) }; acc
end

# LS solution:

def reduce(array, default=0)
  counter = 0
  accumulator = default

  while counter < array.size
    accumulator = yield(accumulator, array[counter])
    counter += 1
  end

  accumulator
end

array = [1, 2, 3, 4, 5]

# p reduce(array) { |acc, num| acc + num }                    # => 15
# p reduce(array, 10) { |acc, num| acc + num }                # => 25
# p reduce(array) { |acc, num| acc + num if num.odd? }        # => NoMethodError: undefined method `+' for nil:NilClass

# Further Exploration:

def reduce(arr)
  acc = arr[0].class.new

  arr.each do |item|
    acc = yield(acc, item)
  end

  acc
end

p reduce(['a', 'b', 'c']) { |acc, value| acc += value }     # => 'abc'
p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']