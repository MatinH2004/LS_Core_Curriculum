require 'minitest/autorun'

class EmptyObjectAssertion < Minitest::Test
  def setup
    @array = []
  end

  def test_empty_array
    assert_empty(@array)
    assert_equal(true, @array.empty?)
  end
end