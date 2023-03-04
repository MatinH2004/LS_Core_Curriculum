=begin

P: Write a method that takes 2 arguments, a starting number
   and an ending number. The method must print the numbers from
   starting to end. If the number is divisible by 3 print 'fizz',
   if divisible by 5 print 'buzz', and if divisible by 3 and 5 print
   'fizzbuzz'.

E: - method takes 2 arguments => (start, end)
   - if number divisible by 3, print 'fizz'
   - if number divisible by 5, print 'buzz'
   - if number divisible by 15, print 'fizzbuzz'

I: - if number is not divisible by 3, 5, or 15, print the number.

T: (1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

A: /* given two integers */
   - using a range, iterate through the numbers start to finish
     - if number is divisible by 3 print 'fizz' to the screen
     - if number is divisible by 5 print 'buzz' to the screen
     - if number is divisible by 15 print 'fizzbuzz' to the screen

=end

def fizzbuzz(first, last)
  first.upto(last) do |n|
    if n % 15 == 0
      puts 'FizzBuzz'
    elsif n % 5 == 0
      puts 'Buzz'
    elsif n % 3 == 0
      puts 'Fizz'
    else
      puts n
    end
  end
end

# refactor using case statement
def fizzbuzz(s, e)
  (s..e).each do |num|
    case
    when num % 15 == 0 then puts 'FizzBuzz'
    when num % 5 == 0 then puts 'Buzz'
    when num % 3 == 0 then puts 'Fizz'
    else puts num
    end
  end
end

fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz