require 'yaml'
require 'pry'

SUITS = %w(Clovers Diamonds Hearts Spades)
VALUES = %w(Ace 2 3 4 5 6 7 8 9 10 Jack King Queen)

def prompt(msg)
  puts "\n=> #{msg}"
end

def initialize_deck
  SUITS.product(VALUES).shuffle
end

def initial_deal(deck)
  deck.shift(2)
end

def deal_card(deck, hand)
  hand << deck.shift
end

def new_card_msg(hand)
  prompt "You were dealt the #{hand[-1][0]} of #{hand[-1][1]}."
  prompt "Your total is #{total(hand)}"
end

def display_cards(player, dealer, reveal_card = false)
  dealer = dealer.map { |card| card[1] }
  player = player.map { |card| card[1] }

  if reveal_card
    prompt "Dealer has: #{dealer.join(', ')}."
    prompt "You have: #{player.join(', ')}."
  else
    prompt "Dealer has: #{dealer[0]} and unknown card."
    prompt "You have: #{player.join(', ')}."
  end
end

def player_turn(deck, player_hand)
  answer = nil
  loop do
    prompt "Player's turn: [hit] or [stay]?"
    answer = gets.chomp.downcase
    if answer.chr == 'h'
      deal_card(deck, player_hand)
      new_card_msg(player_hand)
      break if busted?(player_hand) || blackjack?(player_hand)
    elsif answer.chr == 's'
      break
    else
      prompt 'invalid choice.'
    end
  end
end

def dealer_turn(deck, dealer_hand)
  prompt "Dealer's turn."
  loop do
    if total(dealer_hand) < 17
      prompt "The dealer hits."
      deal_card(deck, dealer_hand)
      break if busted?(dealer_hand) || blackjack?(dealer_hand)
    elsif total(dealer_hand) >= 17
      prompt "The dealer stays."
      break
    end
  end
end

def total(cards)
  values = cards.map { |card| card[1] }
  sum = 0

  values.each do |value|
    sum += if value == 'A'
            11
           elsif value.to_i == 0 # J, Q, K
            10
           else
            value.to_i
           end
  end

  # correct for aces
  values.select { |value| value == 'A'}.count.times do
    sum -= 10 if sum > 21
  end

  sum
end

def busted?(hand)
  total(hand) > 21
end

def blackjack?(hand)
  total(hand) == 21
end

def compare_cards(player, dealer)
  case total(player) <=> total(dealer)
  when -1 then prompt "Dealer wins!"
  when 0 then prompt "Tie..."
  when 1 then prompt "You win!"
  end
end

# main loop

loop do
  system('clear') || system('cls')

  # dislay welcome msg + game rules


  # initialize deck
  deck = initialize_deck

  player_hand = initial_deal(deck)
  dealer_hand = initial_deal(deck)

  # display dealer + player cards
  display_cards(player_hand, dealer_hand)

  # loop: player turn: hit or stay
  player_turn(deck, player_hand)
  

  # play again or exit if busted
  if busted?(player_hand)
    prompt "Busted! Dealer wins."
    break
    # play again? - go to NEXT iteration
    # end game? - BREAK out of loop
  elsif blackjack?(player_hand)
    prompt "Blackjack! You win!"
    break
  else
    prompt "You chose to stay!"
  end

  # loop: dealer turn: hit or stay until >= 17
  dealer_turn(deck, dealer_hand)

  # compare cards, determine winner or tie
  compare_cards(player_hand, dealer_hand)
  display_cards(player_hand, dealer_hand, true)
  break
end