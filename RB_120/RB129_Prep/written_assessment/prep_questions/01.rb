# What will the following code output?

class Student
  attr_reader :id

  def initialize(name)
    @name = name
    @id
  end

  def id=(value)      # setter method `id=`
    self.id = value   # setter method `self.id =` being called within its own definition
  end
end

tom = Student.new("Tom")
tom.id = 45

# The code raises a SystemStackError as the setter method 
# `id=` is being called recursively without a termination value.