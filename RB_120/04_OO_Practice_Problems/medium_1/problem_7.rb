class Light
  attr_accessor :brightness, :color

  def initialize(brightness, color)
    @brightness = brightness
    @color = color
  end
  # How could you change the method name below so that the 
  # method name is more clear and less repetitive?

  # def light_status
  #   "I have a brightness level of #{brightness} and a color of #{color}"
  # end

  def status
    "I have a brightness level of #{brightness} and a color of #{color}"
  end

end
