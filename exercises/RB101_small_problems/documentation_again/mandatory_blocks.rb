
a = [1, 4, 8, 11, 15, 19]

puts a.bsearch { |value| value > 8}

=begin

#bsearch {|x| block} -> elem

If we want to find the first element that 
fits our critera with bsearch, we would use 
'Find-minimum' mode. For this mode, the 
block must evaulate to either true or false.

=end