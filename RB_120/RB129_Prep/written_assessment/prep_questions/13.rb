class Person
  attr_reader :friends

  def initialize
    @friends = []
  end

  def <<(friend)
    friends << friend
  end

  def [](i)
    friends[i]
  end

  def []=(i, friend)
    friends[i] = friend
  end
end

class Friend
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def to_s
    name
  end
end

tom = Person.new
john = Friend.new('John')
amber = Friend.new('Amber')

tom << amber
tom[1] = john
puts tom[0]      # => Amber
puts tom.friends # => Amber
                 # => John