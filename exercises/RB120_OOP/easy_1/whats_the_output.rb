class Pet
  attr_reader :name

  def initialize(name)
    @name = name.to_s
  end

  def to_s
    # @name.upcase!           # remove mutating method
    "My name is #{@name.upcase}."    # add non mutative method here
  end
end

name = 'Fluffy'
fluffy = Pet.new(name)
puts fluffy.name
puts fluffy
puts fluffy.name
puts name

# Further Exploration

name = 42
fluffy = Pet.new(name)
name += 1
puts fluffy.name
puts fluffy
puts fluffy.name
puts name