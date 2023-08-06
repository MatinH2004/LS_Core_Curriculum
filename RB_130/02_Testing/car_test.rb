require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

require_relative 'car'

class CarTest < Minitest::Test
  def setup
    @car = Car.new
  end

  def test_car_exists
    assert(@car)
  end

  def test_wheels
    assert_equal(4, @car.wheels)
  end

  def test_name_is_nil
    assert_nil(@car.name)
  end

  def test_raise_initialize_with_arg
    assert_raises(ArgumentError) do
      car = Car.new(name: "Joey")
    end
  end

  def test_instance_of_car
    assert_instance_of(Car, @car)
  end

  def test_includes_car
    arr = [1, 2, 3]
    arr << @car

    assert_includes(arr, @car)
  end

  def teardown
    # executed after tests are run
  end
end

=begin

  *** SEAT APPROACH ***:

1. Set up necessary objects
2. Execute the code against the objects we're testing
3. Assert that the executed code did the right thing
4. Teardown and clean up any lingering artifacts

- The #setup method will be called before running tests
  - for instantiating objects, etc.

- The #teardown method will be called after running tests
  - for cleaning up files, logging info, or closing db connections

=end