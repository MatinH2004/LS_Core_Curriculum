# OO Calculator

module Displayable
  def clear_screen
    (system 'clear') || (system 'cls')
  end

  def start_button
    puts "\npress [enter] to calculate"
    puts "type [history] to view history"
    show_history if gets.chomp.strip.downcase.chr == 'h'
  end

  def welcome_message
    clear_screen
    puts "=== Welcome to Calculator ==="
    start_button
  end

  def display_operations
    clear_screen
    puts "Valid Operations: [+] [-] [/] [*] [**] [%]"
  end

  def calculate_again?
    puts "\nCalculate again? y/n"
    gets.chomp.strip.downcase.chr == 'y'
  end

  def log_out
    time = Time.now.strftime("%H:%M:%S")
    puts "\nLogged out at #{time}"
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
  attr_reader :list

  def initialize
    @list = []
  end

  def log(first, second, operation, result)
    list << "#{first} #{operation} #{second} = #{result}"
  end

  def display_log
    list.empty? ? no_history : display_history
    gets
  end

  private

  def display_history
    puts "___Calculator History___"
    list.each do |equation|
      puts "\n=> #{equation}"
    end
    puts "\npress [enter] to continue"
  end

  def no_history
    puts "\nHistory is clear."
  end
end

class Calculator
  VALID_OPERATIONS = %w(+ - * ** / %)
  
  include Displayable

  attr_accessor :first_num, :second_num, :operation

  def initialize
    @history = History.new
  end

  def start
    welcome
    play
    log_out
  end

  
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
      result = calculate_inputs
      @history.log(first_num, second_num, operation, result)
      display_calculation(result)
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
  
  def show_history
    clear_screen
    @history.display_log
  end
end

my_calculator = Calculator.new

# calculate
my_calculator.start

# view history
my_calculator.send :show_history

