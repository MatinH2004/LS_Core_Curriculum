
a = %w(a b c d e)

#puts a.fetch(7) 
# IndexError - index 7 outside of array bounds

puts a.fetch(-1)
# negative indexes count from end of array

puts a.fetch(7, 'beats me') 
# returns 'beat me', since index does not exist
# note: the second param is a default arg

puts a.fetch(7) { |index| index**2 }
# index does not exist, so it returns
# value from block

p a