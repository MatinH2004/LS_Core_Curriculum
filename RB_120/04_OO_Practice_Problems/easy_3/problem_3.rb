class AngryCat
  def initialize(age, name)
    @age  = age
    @name = name
  end

  def age
    puts @age
  end

  def name
    puts @name
  end

  def hiss
    puts "Hisssss!!!"
  end
end

# how do we create two different instances of this class with 
# separate names and ages?

tom = AngryCat.new(10, "Tom")
eli = AngryCat.new(7, "Eli")

tom.name
tom.age

eli.name
eli.age