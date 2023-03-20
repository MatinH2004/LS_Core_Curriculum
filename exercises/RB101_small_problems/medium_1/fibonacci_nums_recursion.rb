
def fibonacci(nth)
  return 1 if nth == 1 or nth == 2
  fibonacci(nth - 1) + fibonacci(nth - 2)
end

p fibonacci(3)

fib = Enumerator.new do |y|
  a = b = 1
  loop do
    y << a
    a, b = b, a + b
  end
end

p fib.take(5)

# tail recursion is a way to write recursive methods so the language 
# processor can optimize it better; this often leads to faster solutions, 
# and the ability to recurse more "deeply."

def fibonacci_tail(nth, acc1, acc2)
  if nth == 1
    acc1
  elsif nth == 2
    acc2
  else
    fibonacci_tail(nth - 1, acc2, acc2 + acc1)
  end
end

def fibonacci(nth)
  fibonacci_tail(nth, 1, 1)
end
