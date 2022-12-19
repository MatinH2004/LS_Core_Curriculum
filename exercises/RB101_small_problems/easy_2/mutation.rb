array1 = %w(Moe Larry Curly Shemp Harpo Chico Groucho Zeppo)
array2 = []
array1.each { |value| array2 << value }
array1.each { |value| value.upcase! if value.start_with?('C', 'S') }
puts array2
# uh oh, array2 values have also changed
# to do this in a better way, use #map! method, and remove '!' from upcase to avoid changes in array2:

array1.map { |value| array2 << value }
array1.map! { |value| value.upcase if value.start_with?('C', 'S') }