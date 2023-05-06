# Object Oriented RPS

We would like to create a rock, paper, scissors game in object oriented style, using classes and objects.

Flow of the game:
  - user makes a choice
  - computer makes a choice
  - winner is displayed

## Approach to OOP

The classical approach to object oriented programming is:
  1. Write a **textual description** of the problem or exercise.
  2. Extract the major **nouns** and **verbs** from the description.
  3. Organize and associate the verbs with the nouns.
  4. The **nouns are the classes** and the **verbs are the behaviours** (or methods).

In OO, we don't think about the game flow logic. It's all about organizing and modularizing the code into a cohesive structure - classes.

Step 1: Let's write a textual description of RPS
```
Rock, Paper, Scissors is a two-player game where each player chooses
one of three possible moves: rock, paper, or scissors. The chosen moves
will then be compared to see who wins, according to the following rules:

- rock beats scissors
- scissors beats paper
- paper beats rock

If the players chose the same move, then it's a tie.
```

Step 2: Let's extract the major nouns and verbs
```
Nouns: player, move, rule
Verbs: choose, compare
```

Step 3: Organize nouns with the verbs
```
Player
 - choose
Move
Rule

- compare
```

Step 4: Let's code up the classes and methods
```ruby

class Player
  def initialize
    # maybe a "name"? what about a "move"?
  end

  def choose

  end
end

class Move
  def initialize
    # seems like we need something to keep track
    # of the choice... a move object can be "paper", "rock" or "scissors"
  end
end

class Rule
  def initialize
    # not sure what the "state" of a rule object should be
  end
end

# not sure where "compare" goes yet
def compare(move1, move2)

end
```

After we're done organizing nouns and verbs into classes, we need an "engine" of some sort to orchestrate the objects. This is where the **procedural program flow** should be.

```ruby
RPSGame.new.play
```

Given the interface above, we can start creating the class definition.
```ruby
class RPSGame
  def initialize

  end

  def play

  end
end
```

Starting from that skeleton, we can start to think about what objects are required in the play method to facilitate the game.
```ruby
def play
  display_welcome_message
  human_choose_move
  computer_choose_move
  display_winner
  display_goodbye_message
end
```

What if "human" and "computer" were both objects of the Player class? They'd both immediately have the Player#choose method. With that insight, we update the RPSGame class definition:
```ruby
class RPSGame
  attr_accessor :human, :computer

  def initialize
    @human = Player.new
    @computer = Player.new
  end

  def play
    display_welcome_message
    human.choose
    computer.choose
    display_winner
    display_goodbye_message
  end
end
```

## Summary

This has given you an outline of how to approach solving a problem with an OO mindset. One of the hardest things to understand about OOP is that there is no absolute "right" solution. In OOP, it's all a matter of tradeoffs. However, there are absolutely wrong approaches.