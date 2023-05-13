class Cat
  attr_reader :type

  def initialize(type)
    @type = type
  end

  def to_s
    "#{type} cat"
  end

  def display_type
    "I am a #{type} cat"
  end
end

kat = Cat.new('tabby')
puts kat
puts kat.display_type