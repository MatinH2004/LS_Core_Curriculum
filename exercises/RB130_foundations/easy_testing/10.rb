require 'minitest/autorun'

class Refutation < Minitest::Test
  def test_refute_list
    list = ['abc', 'xyz']

    refute(list.include?('xyz'))  # will fail here
    refute_includes(list, 'xyz')
  end
end