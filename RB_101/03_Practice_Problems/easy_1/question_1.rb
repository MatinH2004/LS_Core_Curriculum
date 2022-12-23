
# What would you expect the code below to print out?

numbers = [1, 2, 2, 3]
numbers.uniq

puts numbers

=begin

The code above should print: [1, 2, 2, 3]
#uniq is not a mutative method, therefore numbers is not modified.
#uniq!, however is destructive, and would change the array to: [1, 2, 3]

=end
