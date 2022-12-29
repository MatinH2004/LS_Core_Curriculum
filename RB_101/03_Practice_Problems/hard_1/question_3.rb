# What will be printed by each of these code groups?

# A
def mess_with_vars(one, two, three)
  one = two      # reassignment, no mutation
  two = three
  three = one
end

one = "one"
two = "two"
three = "three"

mess_with_vars(one, two, three)

puts "one is: #{one}"       # => 'one'
puts "two is: #{two}"       # => 'two'
puts "three is: #{three}"   # => 'three'

# B
def mess_with_vars(one, two, three)
  one = "two"     # reassignment, still no mutation
  two = "three"
  three = "one"
end

one = "one"
two = "two"
three = "three"

mess_with_vars(one, two, three)

puts "one is: #{one}"       # => 'one'
puts "two is: #{two}"       # => 'two'
puts "three is: #{three}"   # => 'three'

# C
def mess_with_vars(one, two, three)
  one.gsub!("one","two")      # destructive method, mutation occurs
  two.gsub!("two","three")
  three.gsub!("three","one")
end

one = "one"
two = "two"
three = "three"

mess_with_vars(one, two, three)

puts "one is: #{one}"       # => 'two'
puts "two is: #{two}"       # => 'three'
puts "three is: #{three}"   # => 'one'