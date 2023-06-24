module Displayable
  def display_main_menu
    puts "What would you like to do?"
    puts "1 - withdraw"
    puts "2 - deposit"
    puts "3 - check balance"
    puts "4 - log out"
    puts "\nChoose option:"
  end
end

class BankError < StandardError; end

class OverdraftError < BankError; end
class InvalidPinError < BankError; end
class DepositAmountError < BankError; end

class Bank
  include Displayable

  MAX_DEPOSIT = 500_000

  def initialize(name, initial_amount, pin)
    @name = name.split.each {|x| x.capitalize}.join(' ')
    @amount = initial_amount
    @pin = pin
  end

  def run_program
    begin
      validate_access
      main_menu
    rescue BankError => error
      puts error.message
    end
  end

  private

  def withdraw
    input = nil
    loop do
      puts "\nInput withdraw amount:"
      input = gets.chomp.strip.to_i
      input > @amount ? (raise OverdraftError, "Insufficient Balance") : break
    end
    self.amount -= input
    puts "Withdrew: $#{input}", "\nNew balace: $#{amount}"
  end

  def deposit
    # maximum deposit is $500,000
    raise DepositAmountError, "Exceeded Maximum Deposit Amount"
  end

  def check_balance
    puts "\nAccount Balance: #{amount}"
  end

  def log_out
    puts "\nThanks for banking with us, goodbye #{name}!"
  end

  def validate_access
    puts "*** Welcome to Bank of Ruby ***"
    loop do
      print "\nPlease enter your 4-digit PIN: "
      gets.chomp.to_i == @pin ? break : (raise InvalidPinError, "Invalid PIN")
    end
    puts "Authorization successful!"
    # sleep 2
  end

  def main_menu
    display_main_menu
    input = choose_main_option
    process_choice(input)
  end

  def choose_main_option
    choice = nil
    loop do
      choice = gets.chomp.strip
      break unless (choice.empty? || !choice.is_a?(Integer))
      puts "Invalid input, please choose 1, 2, 3, or 4:"
    end
    choice.to_i
  end

  def process_choice(input)
    case input
    when 1 then send(:withdraw)
    when 2 then send(:deposit)
    when 3 then send(:check_balance)
    when 4 then send(:log_out)
    end
  end

  attr_reader :name, :pin
  attr_accessor :amount
end

Bank.new('Matin hassan Pour', 200, 1234).run_program