# Object Oriented Twenty-One

Let's follow our familiar pattern on tackling OO Twenty-One game:
1. Write a description of the problem and extract major nouns and verbs.
2. Make an initial guess at organizing the verbs into nouns and do a spike to explore the problem with temporary code.
3. Optional - model thoughts into CRC cards.

## Nouns and Verbs

Game description:
```
Twenty-One is a card game consisting of a dealer and a player, where the participants try to get as close to 21 as possible without going over.

Here is an overview of the game:
- Both participants are initially dealt 2 cards from a 52-card deck.
- The player takes the first turn, and can "hit" or "stay".
- If the player busts, he loses. If he stays, it's the dealer's turn.
- The dealer must hit until his cards add up to at least 17.
- If he busts, the player wins. If both player and dealer stays, then the highest total wins.
- If both totals are equal, then it's a tie, and nobody wins.
```

Nouns and verbs:
```
Nouns: card, player, dealer, participant, deck, game, total
Verbs: deal, hit, stay, busts
```

'Total' will not be a class, but a property of another class. It can be thought of as verb 'calculate_total'.

'Busts' is not an action anyone is performing, rather it's a state - is the player/dealer busted?

Let's write the classes and organize the verbs:
```
Player
- hit
- stay
- busted?
- total
Dealer
- hit
- stay
- busted?
- total
- deal (should this be here, or in Deck?)
Participant
Deck
- deal (should this be here, or in Dealer?)
Card
Game
- start
```

The `Player` and the `Dealer` classes have a lot of redundancy, so we might have to create a module to capture this redundancy.

## Spike

Let's make an initial spike at our code design:
```ruby
class Player
  def initialize
    # what would the "data" or "states" of a Player object entail?
    # maybe cards? a name?
  end

  def hit
  end

  def stay
  end

  def busted?
  end

  def total
    # definitely looks like we need to know about "cards" to produce some total
  end
end

class Dealer
  def initialize
    # seems like very similar to Player... do we even need this?
  end

  def deal
    # does the dealer or the deck deal?
  end

  def hit
  end

  def stay
  end

  def busted?
  end

  def total
  end
end

class Participant
  # what goes in here? all the redundant behaviors from Player and Dealer?
end

class Deck
  def initialize
    # obviously, we need some data structure to keep track of cards
    # array, hash, something else?
  end

  def deal
    # does the dealer or the deck deal?
  end
end

class Card
  def initialize
    # what are the "states" of a card?
  end
end

class Game
  def start
    # what's the sequence of steps to execute the game play?
  end
end

Game.new.start
```

Let's take a stab at the `Game#start` method, which will drive the implementation of the other classes.

```ruby
class Game
  def start
    deal_cards
    show_initial_cards
    player_turn
    dealer_turn
    show_result
  end
end
```