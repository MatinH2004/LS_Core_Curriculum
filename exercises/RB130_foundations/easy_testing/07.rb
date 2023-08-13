require 'minitest/autorun'

class TypeAssertion < Minitest::Test
  def setup
    @value = Numeric.new
  end
  
  def test_type
    assert_instance_of(Numeric, @value)
  end
end