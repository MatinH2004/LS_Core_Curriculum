class Cat
  @@cats_count = 0

  def initialize(type)
    @type = type
    @age  = 0
    @@cats_count += 1
  end

  def self.cats_count
    @@cats_count
  end
end

# Every time an instance of Cat is created, the class variable
# @@cats_count is incremented by 1. We can see the value of 
# the variable by calling Cat.cats_count.

puts Cat.cats_count # 0

billy = Cat.new('black')
george = Cat.new('curious')

puts Cat.cats_count # 2
