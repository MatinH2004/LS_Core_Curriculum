def check_nums(arr, num)
  if arr.include?(num)
    puts "The number #{num} appears in #{arr}."
  else
    puts "The number #{num} does not appear in #{arr}."
  end
end

numbers = Array.new

puts "==> Enter the 1st number:"
numbers << gets.chomp.to_i
puts "==> Enter the 2nd number:"
numbers << gets.chomp.to_i
puts "==> Enter the 3rd number:"
numbers << gets.chomp.to_i
puts "==> Enter the 4th number:"
numbers << gets.chomp.to_i
puts "==> Enter the 5th number:"
numbers << gets.chomp.to_i
puts "==> Enter the last number:"
last = gets.chomp.to_i # check if last is in array

check_nums(numbers, last)