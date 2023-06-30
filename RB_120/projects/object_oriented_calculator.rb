# OO Calculator

# 1. Welcome user
# 2. ask for first number
# 3. ask for second number
# 4. ask for operation
# 5. display result
# 6. calculate again?

# valid operations: + - / * ** % 

module Displayable
  def start_button
    puts "\n    press [enter] to start"
    gets
  end

  def welcome_message
    puts "=== Welcome to Calculator ==="
    start_button
  end

  def display_operations
    clear_screen
    puts "Valid Operations: [+] [-] [/] [*] [**] [%]"
  end

  def prompt_input(choice)
    case choice
    when :first     then puts "\nEnter first number:"
    when :second    then puts "\nEnter second number:"
    when :operation then puts "\nChoose operation (+ - * % / **):"
    end
  end

  def prompt_invalid_input(error)
    case error
    when :number    then puts "\nInvalid input, please enter a number:"
    when :operation then puts "\nInvalid input, choose a valid operation:"
    end
  end

  def display_calculation(result)
    puts "\n= #{result}"
  end
end

class History

end

class Calculator
  VALID_OPERATIONS = %w(+ - * ** / %)
  
  attr_accessor :first_num, :second_num, :operation

  include Displayable

  def start
    welcome
    play
    log_out
  end

  # def show_history
  # end

  private

  def welcome
    welcome_message
    display_operations
  end

  def user_input
    display_operations
    input_first_num
    input_second_num
    input_operation
  end

  def calculate
    begin
      display_calculation(calculate_inputs)
    rescue ZeroDivisionError
      puts "\nCannot divide by 0!"
    end
  end

  def play
    user_input
    calculate
    play if calculate_again?
  end

  def input_first_num
    prompt_input(:first)
    choice = nil
    loop do
      choice = gets.chomp.strip
      break if contains_only_numbers?(choice)
      prompt_invalid_input(:number)
    end
    self.first_num = choice.to_f
  end

  def input_second_num
    prompt_input(:second)
    choice = nil
    loop do
      choice = gets.chomp.strip
      break if contains_only_numbers?(choice)
      prompt_invalid_input(:number)
    end
    self.second_num = choice.to_f
  end

  def contains_only_numbers?(str)
    /^[0-9]+$/.match?(str)
  end

  def input_operation
    prompt_input(:operation)
    choice = nil
    loop do
      choice = gets.chomp.strip
      break if VALID_OPERATIONS.include?(choice)
      prompt_invalid_input(:operation)
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
    puts "\nCalculate again? y/n"
    gets.chomp.strip.downcase.chr == 'y'
  end

  def clear_screen
    (system 'clear') || (system 'cls')
  end

  def log_out
    time = Time.now.strftime("%H:%M:%S")
    puts "\nLogged out at #{time}"
  end
end

my_calculator = Calculator.new

# attempt 1
my_calculator.start

# attempt 2
my_calculator.start

# check for previous history
# my_calculator.show_history
