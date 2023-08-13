require 'minitest/autorun'

class AssertKind < Minitest::Test
  def test_kind
    value1 = 10
    value2 = 20.00

    assert_kind_of(Numeric, value1)
    assert_kind_of(Numeric, value2)
  end
end