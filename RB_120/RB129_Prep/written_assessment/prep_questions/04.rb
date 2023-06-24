class Student
  def initialize(id, name)
    @id = id
    @name = name
  end
  
  def ==(other)
    self.id == other.id
  end

  # private
  protected
  
  attr_reader :id, :name
end

rob = Student.new(123, "Rob")
tom = Student.new(456, "Tom")

p rob == tom # => false

# The code above raises a NoMethodError exception, as the getter methods are defined
# privately. To fix this, we must change the private keyword to `protected`.