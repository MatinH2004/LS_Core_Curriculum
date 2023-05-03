class Account
  attr_reader :name, :balance

  def initialize(name, balance=100)
    @name = name
    @balance = balance
  end

  def display_balance(pin_number)
    if pin == pin_number
      puts "Balance: $#{@balance}."
    else
      puts pin_error
    end
  end

  def withdraw(pin_number, amount)
    if pin == pin_number
      if amount <= @balance
        @balance -= amount
        puts "Withdrew $#{amount}. New balance: $#{@balance}."
      else
        puts "Insufficient balance..."
      end
    else
      puts pin_error
    end
  end

  def deposit(pin_number, amount)
    if pin == pin_number
      @balance += amount
      puts "Deposited $#{amount}. New balance: $#{@balance}."
    else
      puts pin_error
    end
  end

  private

  def pin
    @pin = 1234
  end

  def pin_error
    "Access denied: incorrect PIN."
  end
end

checking_account = Account.new('Matin', 500)
checking_account.display_balance(1234)
checking_account.withdraw(1234, 50)
checking_account.deposit(1234, 2000)