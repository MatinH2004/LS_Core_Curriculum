# Without adding any methods below, implement a solution; originally by Natalie Thompson, 
# this version by Oscar Cortes

class ClassA 
  attr_reader :field1, :field2
  
  def initialize(num)
    @field1 = "xyz"
    @field2 = num
  end

  def >(other)
    return "Can't compare!" if self.class != other.class
    field2 > other.field2
  end
end

class ClassB 
  attr_reader :field1

  def initialize
    @field1 = "abc"
  end
end


obj1 = ClassA.new(50)
obj2 = ClassA.new(25)
obj3 = ClassB.new


p obj1 > obj2 # true
p obj2 > obj3 # "Can't compare!"