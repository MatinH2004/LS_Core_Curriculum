=begin

Our countdown to launch isn't behaving as expected.
Why? Change the code so that our program successfully 
counts down from 10 to 1.

  def decrease(counter)
    counter -= 1
  end

  counter = 10

  10.times do
    puts counter
    decrease(counter)
  end

  puts 'LAUNCH!'

Further Exploration:

We specify 10 two times, which looks a bit redundant. 
It should be possible to specify it only once. 
Can you refactor the code accordingly?

=end

def decrease(counter)
  counter - 1 # change from -= to -
end

counter = 10

# FE: change 10 to `counter`
counter.times do
  puts counter
  counter = decrease(counter) 
  # reassign counter to return value of #decrease
end

puts 'LAUNCH!'

=begin
  
-- Written Assesment Evaluation --

On lines 28 to 30 the `decrease` method is defined, which takes
a single parameter.

On line 32, we initialize local variable `counter` to the integer
value of `10`.

On line 35, we call the `Integer#times` method upon our `counter`
variable, and pass in a `do..end` block as an argument on lines 35
to 39. Within the block, the `puts` method is called, taking `counter`
as an argument, which outputs the value referenced by counter and returns
`nil`. On the next line, the `decrease` method is called and `counter` is
passed in as an argument. Within the method, the `Integer#-` method is called
on counter and `1` is passed in as an argument, which returns `counter`
decremented by `1`. Back to the block, `counter` is reassigned to the 
return value of the `decrease` method which is `counter` decremented by `1`.

Finally, on line 41, the `puts` method is called and string object
`"LAUNCH!"` is passed in as an argument, which outputs the string to
the screen, and returns `nil`.
  
=end