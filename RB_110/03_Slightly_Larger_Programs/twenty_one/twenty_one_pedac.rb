=begin
# --------------------------- Problem
  Restate the problem:

  Input:
  Output:
# --------------------------- Test Cases + Rules

  - Use 52-card deck consisting 4 suits and 13 values:
    - (hearts, diamonds, clubs, spades)
    - (2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king, ace)

  - Get as close to 21 as possible, without going over.
    If you go over 21, it's a "bust" and you lose.

  - Card values:
    - 2 to 10:  face value
    - J, Q, K:  10
    - ace:      1 or 11

# --------------------------- Data Structure
  - Deck DS: Nested Array
    - 2 of Hearts, Jack of Spades, and Ace of Diamonds
    - [['H', '2'], ['S', 'J'], ['D', 'A']]

# --------------------------- Scrapbook
# --------------------------- Algorithm

  1. Initialize deck
  2. Deal cards to player and dealer
  3. Player turn: hit or stay
    - repeat until bust or "stay"
  4. If player bust, dealer wins.
  5. Dealer turn: hit or stay
    - repeat until total >= 17
  6. If dealer bust, player wins.
  7. Compare cards and declare winner.

Player turn:
  1. ask "hit" or "stay"
  2. if "stay", stop asking
  3. otherwise, go to #1

Dealer turn:
  1. hit if total less than 17
  3. show cards when hit
  2. if stay, compare cards

Display results:
  1. compare cards for winner
  2. display who won
  3. show both hands and total

Busted?:
  1. if hand > 21, busted! return true
  2. else return false
=end