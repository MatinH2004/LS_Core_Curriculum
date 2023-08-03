# NOT FUNCTIONING - TO BE CONTINUED LATER...

module Displayable
  def display_main_menu
    <<-DOC
    Choose an option:
    1 - withdraw
    2 - deposit
    3 - check balance
    4 - log out
    DOC
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
    @name = name.split.map(&:capitalize).join(' ')
    @amount = initial_amount
    @pin = pin
  end

  def run_program
    validate_access
    main_menu
  end

  private

  def withdraw
    input = nil
    loop do
      puts "\nInput withdraw amount:"
      input = gets.chomp.strip.to_f
      input > @amount ? (raise OverdraftError, "Insufficient Balance") : break
    end
    self.amount -= input
    puts "Withdrew: $#{input}", "\nNew balace: $#{amount}"
  end

  def deposit
    deposit_amount = 0
    loop do
      puts "Enter deposit amount:"
      deposit_amount = gets.chomp.to_f
      validate_deposit(deposit_amount)
      break if deposit_amount >= 0 && deposit_amount <= MAX_DEPOSIT
    end
    self.amount += deposit_amount
    puts "Deposit successful!"
  end

  def validate_deposit(deposit_amount)
    if deposit_amount > MAX_DEPOSIT
      raise DepositAmountError, "Exceeded Maximum Deposit Amount"
    elsif deposit_amount < 0
      raise DepositAmountError, "Deposit Amount Cannot Be Lower Than $0"
    end
  end

  def check_balance
    puts "\nAccount Balance: #{amount}"
  end

  def log_out
    puts "\nThanks for banking with us, goodbye #{name}!"
    self.logged_in = false
  end

  def validate_access
    puts "*** Welcome to Bank of Ruby ***"
    loop do
      print "\nPlease enter your 4-digit PIN: "
      gets.chomp.to_i == @pin ? break : (raise InvalidPinError, "Invalid PIN")
    end
    puts "Authorization successful!"
    self.logged_in = true
    # sleep 2
  end

  def main_menu
    while logged_in
      display_main_menu
      input = choose_main_option
      process_choice(input)
    rescue BankError => error
      puts error.message
    end
  end

  def choose_main_option
    choice = nil
    loop do
      choice = gets.chomp.strip.to_i
      break unless (1..4).include?(choice)
      puts "Invalid input, please choose 1, 2, 3, or 4:"
    end
    choice
  end

  def process_choice(input)
    case input
    when 1 then send(:withdraw)
    when 2 then send(:deposit)
    when 3 then send(:check_balance)
    when 4 then send(:log_out)
    end
  end

  def clear_screen
    system('clear') || system('cls')
  end

  attr_reader :name, :pin
  attr_accessor :amount, :logged_in
end

Bank.new('Matin hassan Pour', 200, 1234).run_program