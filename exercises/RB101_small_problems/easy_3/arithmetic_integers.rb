# create a method that takes two numbers
# performs addition, subtraction, product, quotient, remainder, and power of the two numbers

# test case:
#   ==> Enter the first number:
#   23
#   ==> Enter the second number:
#   17
#   ==> 23 + 17 = 40
#   ==> 23 - 17 = 6
#   ==> 23 * 17 = 391
#   ==> 23 / 17 = 1
#   ==> 23 % 17 = 6
#   ==> 23 ** 17 = 141050039560662968926103

def prompt(str)
  puts "\n==> #{str}"
end

def num_operations(num1, num2)
  operations = %w(+ - * / % **)
  operations.each do |op|
    calc = num1.public_send(op, num2)
    prompt("#{num1} #{op} #{num2} = #{calc}")
  end
end

puts "Enter first number:"
num1 = gets.chomp.to_i

puts "Enter second number:"
num2 = gets.chomp.to_i

num_operations(num1, num2)

# op = %w(+ - * / % **) # SIMPLE SOLUTION
# result = <<-MSG
# #{num1} + #{num2} = #{num1 + num2}
# #{num1} - #{num2} = #{num1 - num2}
# #{num1} * #{num2} = #{num1 * num2}
# #{num1} / #{num2} = #{num1 / num2}
# #{num1} % #{num2} = #{num1 % num2}
# #{num1} ** #{num2} = #{num1 ** num2}
# MSG

# puts result
