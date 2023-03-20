# compute a method that returns the last digit of the nth Fibonacci number.

# def fibonacci(nth)
#   first, last = [1, 1]
#   3.upto(nth) do
#     first, last = [last, first + last]
#   end

#   last
# end

# # part 1
# def fibonacci_last(n)
#   fibonacci(n).to_s[-1].to_i
# end

# # part 2
# def fibonacci_last(n)
#   last_2 = [1, 1]
#   3.upto(n) do
#     last_2 = [last_2.last, (last_2.first + last_2.last) % 10]
#   end

#   last_2.last
# end

def fibonacci_last(int)
  return 1 if int <= 2
  fib_sequence = [0, 1]
  int = int % 60

  (int - 1).times do
    fib_sequence << fib_sequence[-2..-1].sum
  end

  fib_sequence[-1].to_s.chars[-1].to_i
end

p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
p fibonacci_last(123456789) # -> 4