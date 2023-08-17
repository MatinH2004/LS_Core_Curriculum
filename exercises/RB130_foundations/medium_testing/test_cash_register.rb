require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class CashRegisterTest < Minitest::Test
  def setup
    @register = CashRegister.new(1000)
    @transaction = Transaction.new(50)
  end

  def test_accept_money
    @transaction.amount_paid = 60

    previous_amount = @register.total_money
    @register.accept_money(@transaction)
    current_amount = @register.total_money

    assert_equal(previous_amount + 60, current_amount)
  end

  def test_change
    @transaction.amount_paid = 100

    assert_equal(50, @register.change(@transaction))
  end

  def test_give_receipt
    item_cost = 50
    @transaction.amount_paid = item_cost

    assert_output("You've paid $#{item_cost}.\n") { @register.give_receipt(@transaction) }
  end
end