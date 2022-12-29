# What is the result of the last line in the code below?
greetings = { a: 'hi' }
informal_greeting = greetings[:a]
informal_greeting << ' there'

puts informal_greeting  #  => "hi there"
puts greetings          #  => {:a=>'hi there'}

=begin

Solution 1 
  - Initialize `informal_greeting` with a reference to a new object containing the same value
    by using #clone: informal_greeting = greetings[:a].clone

Solution 2
  - Use string concatenation:
    informal_greeting = informal_greeting + ' there'

=end
