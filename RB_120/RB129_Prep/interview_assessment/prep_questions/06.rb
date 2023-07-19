class BenjaminButton 
  attr_accessor :actual_age, :appearance_age

  def initialize
    @actual_age = 0
    @appearance_age = 100
  end
  
  def get_older
    self.appearance_age -= 1
    self.actual_age += 1
  end
  
  def look_younger
    self.actual_age -= 1
  end
  
  def die
    self.actual_age = 100
    self.appearance_age = 0
  end
end

benjamin = BenjaminButton.new
p benjamin.actual_age # => 0
p benjamin.appearance_age # => 100

benjamin.actual_age = 1
p benjamin.actual_age # => 1

benjamin.get_older
p benjamin.actual_age # => 2
p benjamin.appearance_age # => 99

benjamin.die
p benjamin.actual_age # => 100
p benjamin.appearance_age # => 0