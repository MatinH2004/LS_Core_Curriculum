require 'minitest/autorun'

class EqualityTest < Minitest::Test
  def test_value_equality
    str1 = "hi there"
    str2 = "hi there"

    assert_equal(str1, str2)
    assert_same(str1, str2)
  end
end

# The assert_equal will pass because the strings have the same value
# The assert_same will not pass because str1 & str2 are different objects

# EQUALITY WITH CUSTOM CLASSES

class Car
  attr_accessor :wheels, :name

  def initialize
    @wheels = 4
  end

  def ==(other)
    other.is_a?(Car) && name == other.name
  end
end

class CarTest < Minitest::Test
  def test_value_equality
    car1 = Car.new
    car2 = Car.new

    car1.name = "Kim"
    car2.name = "Kim"

    assert_equal(car1, car2)  # This will pass
    assert_same(car1, car2)   # This will fail
  end
end