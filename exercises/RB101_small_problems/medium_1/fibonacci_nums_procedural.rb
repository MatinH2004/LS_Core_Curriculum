
def fibonacci(nth)
  fib = Enumerator.new do |y|
    a = b = 1
    loop do
      y << a
      a, b = b, a + b
    end
  end
  fib.take(nth).last
end

p fibonacci(20)      # => 6765
p fibonacci(100)     # => 354224848179261915075
p fibonacci(100_001) # => 4202692702.....8285979669707537501

# LS Solution

def fibonacci(nth)
  first, last = [1, 1]
  3.upto(nth) do
    first, last = [last, first + last]
  end

  last
end

# one-liner solution
def fibonacci(n)
  n.times.reduce([0, 1]) { |(res, add), _| res, add = res + add, res }[0]
end