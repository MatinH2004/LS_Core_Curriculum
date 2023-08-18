factorial = Enumerator.new do |y|
  i = 0
  loop do
    y << ((1..i).reduce(:*) || 0)
    i += 1
  end
end

factorial_arr = factorial.first(5)
p factorial_arr

# external iterator

6.times { |number| puts "#{number}! == #{factorial.next}" } # correct value
puts "=========================="
6.times { |number| puts "#{number}! == #{factorial.next}" } # incorrect output, must rewind
puts "=========================="
factorial.rewind
6.times { |number| puts "#{number}! == #{factorial.next}" } # correct value
puts "=========================="

# internal iterator

factorial.each_with_index do |value, number|
  puts "#{number}! == #{value}"
  break if number >= 5
end