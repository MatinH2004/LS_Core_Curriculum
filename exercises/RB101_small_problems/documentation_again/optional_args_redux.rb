
require 'date'
# Date must be imported in order to use
# because its not a part of core library

puts Date.civil # -4071-01-01
puts Date.civil(2016) # 2016-01-01
puts Date.civil(2016, 5) # 2016-05-01
puts Date.civil(2016, 5, 13) # 2016-05-13

# note that ::civil is a class method