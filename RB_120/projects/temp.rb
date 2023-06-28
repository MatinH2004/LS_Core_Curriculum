# OO Calculator

# 1. Welcome user
# 2. ask for first number
# 3. ask for second number
# 4. ask for operation
# 5. display result
# 6. calculate again?

# valid operations: + - / * ** % 

module Displayable
  def welcome_message
  end

  def display_operations
  end

  def prompt_first_number
  end

  def prompt_second_number
  end

  def prompt_invalid_input
  end

  def display_calculation
  end
end

class History; end

class Calculator
  VALID_OPERATIONS = %w(+ - * ** / %)

  attr_accessor :first_num, :second_num, :operation

  def start
    welcome
    user_input
    calculate
    start if calculate_again?
  end

  private

  def welcome
    welcome_message
    display_operations
  end

  def user_input
    input_first_num
    input_second_num
    input_operation
  end

  def calculate
    begin
      result = calculate_inputs
      display_calculation(result)
    rescue ZeroDivisionError => error
      puts error.message
    end
  end

  def input_first_num
    puts "\nEnter first number:"
    choice = nil
    loop do
      choice = gets.chomp.strip
      break if valid_input(choice)
      puts "\nInvalid input, please enter a number:"
    end
    self.first_num = choice.to_i
  end

  def input_second_num
    puts "\nEnter second number:"
    choice = nil
    loop do
      choice = gets.chomp.strip
      break if valid_input(choice)
      puts "\nInvalid input, please enter a number:"
    end
    self.second_num = choice.to_i
  end

  def validate_input(input)
    input.match?(/[^a-z]/i)
  end

  def input_operation
    puts "\nChoose operation (+ - * % / **):"
    choice = nil
    loop do
      choice = gets.chomp.strip
      break if VALID_OPERATIONS.include?(choice)
      puts "Invalid input, choose a valid operation:"
    end
    self.operation = choice.to_sym
  end

  def calculate_inputs
    case operation
    when :+  then (first_num + second_num)
    when :-  then (first_num - second_num)
    when :/  then (first_num / second_num)
    when :*  then (first_num * second_num)
    when :%  then (first_num % second_num)
    when :** then (first_num ** second_num)
    end
  end

  def calculate_again?
    puts "Calculate again? y/n"
    false unless gets.chomp.strip.downcase.chr == 'y'
  end
end

# Calculator.new.start

# loop do

#   begin
#     (9 / 0)
#   rescue ZeroDivisionError => e
#     puts e.message
#   end

#   break if gets.chomp == 'u'
# end

# puts 'end'