# Write a program that asks the user to enter an integer greater than 0, then asks if the 
# user wants to determine the sum or product of all numbers between 1 and the entered integer.

def calculate(num, op)
  start = 1
  if op == 's'
    result = (0..num).map {|n| start += n}
    puts "The sum of the integers between 1 and #{num} is #{result.last-1}"
  elsif op == 'p'
    result = (1..num).map {|n| start *= n}
    puts "The product of the integers between 1 and #{num} is #{result.last}"
  else
    puts "Unknow operation."
  end
end

puts "=> Please enter an integer greater than 0:"
num = gets.chomp.to_i

puts "=> Enter 's' to compute the sum, 'p' to compute the product."
operation = gets.chomp

calculate(num, operation)
calculate(5, 's') # => The sum of the integers between 1 and 5 is 15
calculate(6, 'p') # => The product of the integers between 1 and 6 is 720