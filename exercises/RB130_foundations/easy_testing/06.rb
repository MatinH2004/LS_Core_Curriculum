require 'minitest/autorun'

class NoExperienceError < StandardError; end

class Employee
  def initialize(name, age)
    @name, @age, @experience = name, age, false
  end

  def hire
    raise NoExperienceError unless @experience
    "Employee Hired!"
  end
end

class ExceptionAssertion < Minitest::Test
  def setup
    @employee = Employee.new('Chris', 30)
  end

  def test_exception
    assert_raises(NoExperienceError) { @employee.hire }
  end
end