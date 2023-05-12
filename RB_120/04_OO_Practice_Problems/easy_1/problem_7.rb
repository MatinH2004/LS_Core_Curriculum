class Cat
  attr_accessor :type, :age

  def initialize(type)
    @type = type
    @age  = 0
  end

  def make_one_year_older
    self.age += 1
  end
end

kitty = Cat.new('foo')

# You can see in the make_one_year_older method we have used self. 
# What does self refer to here?

# self refers to the instance of the object, which is the same as `kitty.age`