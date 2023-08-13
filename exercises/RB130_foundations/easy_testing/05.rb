require 'minitest/autorun'

class IncludedObjectAssertion < Minitest::Test
  def setup
    @array = ['abc', 'xyz']
  end

  def test_included_object
    assert_includes(@array, 'xyz')
    assert_equal(true, @array.include?('xyz'))
  end
end