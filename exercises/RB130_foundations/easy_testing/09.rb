require 'minitest/autorun'

class SameObjectAssertion < Minitest::Test
  attr_accessor :list

  class List
    def process
      "foo"
    end
  end

  def setup
    @list = List.new
  end

  def test_assert_same
    # this test will fail
    skip
    assert_same(list, list.process)
  end

  def test_refute_same
    refute_same(list, list.process)
  end
end