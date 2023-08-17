require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transaction'

class TransactionTest < Minitest::Test
  def setup
    @transaction = Transaction.new(20)
  end
  
  def test_prompt_payment
    input = StringIO.new('50\n')
    output = StringIO.new
    @transaction.prompt_for_payment(input: input, output: output)

    # can also save the output to a txt file:
    # @transaction.prompt_for_payment(input: input, output: File.new('test.txt', 'w+'))

    assert_equal(50, @transaction.amount_paid)
  end
end