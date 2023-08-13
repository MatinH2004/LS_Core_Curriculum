require "minitest/autorun"

class EqualityTest < Minitest::Test
  def test_equality_1
    value = "XYZ"
    assert_equal("xyz", value.downcase)
  end

  def test_equality_2
    value = "ABC"
    assert_equal("xyz", value.downcase)
  end
end