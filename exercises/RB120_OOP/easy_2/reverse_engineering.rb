class Transform
  attr_reader :text

  def initialize(text)
    @text = text
  end

  def uppercase
    text.upcase
  end

  def self.lowercase(str)
    str.downcase
  end
end

my_data = Transform.new('abc')
puts my_data.uppercase
puts Transform.lowercase('XYZ')

# ABC
# xyz