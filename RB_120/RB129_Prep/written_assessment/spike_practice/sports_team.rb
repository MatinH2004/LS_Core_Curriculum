# Design a Sports Team
# 
# - Include 4 players (attacker, midfielder, defender, goalkeeper)
# - All the players’ jersey is blue, except the goalkeeper, his jersey is white with blue stripes
# - All players can run and shoot the ball.
# - Attacker should be able to lob the ball
# - Midfielder should be able to pass the ball
# - Defender should be able to block the ball
# - The referee has a whistle. He wears black and is able to run and whistle.

module Runnable
  def run
    "running"
  end
end

class Person
  include Runnable

  def initialize(jersey_color)
    @jersey = jersey_color
  end
end

class Player < Person
  def initialize(jersey_color = 'blue')
    super
  end

  def shoot
    "shooting the ball"
  end
end

class Attacker < Player
  def lob
    "lobbing the ball"
  end
end

class Midfielder < Player
  def pass
    "passing the ball"
  end
end

class Defender < Player
  def block
    "blocking the ball"
  end
end

class Goalkeeper < Player
  def initialize(jersey_color = 'white with blue stripes')
    super
  end
end

class Referee < Person
  def initialize(jersey_color = 'black')
    super
  end

  def blow_whistle
    "hooooooooooot!"
  end
end

class Team
  attr_reader :members

  def initialize(*members)
    @members = members
  end
end

referee = Referee.new
attacker = Attacker.new
defender = Defender.new
midfielder = Midfielder.new
goalkeeper = Goalkeeper.new

vancouver_white_caps = Team.new(referee, attacker, defender, midfielder, goalkeeper)
puts vancouver_white_caps.members