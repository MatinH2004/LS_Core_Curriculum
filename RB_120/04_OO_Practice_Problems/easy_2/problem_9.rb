class Game
  def play
    "Start the game!"
  end
end

class Bingo < Game
  def rules_of_play
    #rules of play
  end

  def play
    "Eyes down"
  end
end

puts Bingo.new.play
# Eyes down

# if we added a play method to Bingo class, it would simply just
# overrride the play method in Game class, unless we call the super()
# keyword.