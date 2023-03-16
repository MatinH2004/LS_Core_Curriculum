require 'yaml'
require 'pry'

MSG = YAML.load_file('twenty_one_msg.yaml')
RULES = File.open('twenty_one_rules.txt', 'r')

SUITS = %w(Clovers Diamonds Hearts Spades)
VALUES = %w(Ace 2 3 4 5 6 7 8 9 10 Jack King Queen)

# methods for displaying information

def prompt(msg)
  puts "=> #{msg}"
end

def new_card_msg(hand)
  prompt "You were dealt the #{hand[-1][0]} of #{hand[-1][1]}."
  prompt "Your total is #{total(hand)}\n\n"
end

def display_rules
  system("clear") || system("cls")
  puts RULES.read
  gets
end

def display_cards(dealer, player, reveal_card = false)
  dealer_values = dealer.map { |card| card[1] }
  player_values = player.map { |card| card[1] }

  if reveal_card
    prompt "Dealer has: #{dealer_values.join(', ')}."
    prompt "You have: #{player_values.join(', ')}.\n\n"
    prompt "Your total: #{total(player)}; Dealer total: #{total(dealer)}\n\n"
  else
    prompt "Dealer has: #{dealer_values[0]} and unknown card."
    prompt "You have: #{player_values.join(' and ')}.\n\n"
    prompt "Your total: #{total(player)}; Dealer total: (?)\n\n"
  end
end

def display_result(dealer, player)
  case detect_result(dealer, player)
  when :player_busted then prompt "You busted! Dealer wins!\n\n"
  when :dealer_busted then prompt "Dealer busted! You win!\n\n"
  when :player then prompt "You win!\n\n"
  when :dealer then prompt "Dealer wins!\n\n"
  when :tie then prompt "It's a tie!\n\n"
  end
end

# methods for handling the deck and hands

def initialize_deck
  SUITS.product(VALUES).shuffle
end

def initial_deal(deck)
  deck.shift(2)
end

def deal_card(deck, hand)
  hand << deck.shift
end

# methods for handling player/dealer actions

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
  prompt "Dealer's turn..."
  loop do
    if total(dealer_hand) < 17
      prompt "The dealer hits."
      deal_card(deck, dealer_hand)
      sleep 1
      dealer_values = dealer_hand.map { |card| card[1] }.join(', ')
      prompt "Dealer's cards are now: #{dealer_values}."
      break if busted?(dealer_hand) || blackjack?(dealer_hand)
    elsif total(dealer_hand) >= 17
      prompt "The dealer stays.\n\n"
      break
    end
  end
end

# method for summing player/dealer hands

def total(hand)
  values = hand.map { |card| card[1] }
  sum = 0

  values.each do |value|
    sum += if value == 'Ace'
            11
           elsif value.to_i == 0 # J, Q, K
            10
           else
            value.to_i
           end
  end

  # correct for aces
  values.select { |value| value == 'Ace'}.count.times do
    sum -= 10 if sum > 21
  end

  sum
end

# methods for determining winner / loser

def busted?(hand)
  total(hand) > 21
end

def blackjack?(hand)
  total(hand) == 21
end

def detect_result(dealer, player)
  player_total = total(player)
  dealer_total = total(dealer)

  if player_total > 21
    :player_busted
  elsif dealer_total > 21
    :dealer_busted
  elsif dealer_total < player_total
    :player
  elsif dealer_total > player_total
    :dealer
  else
    :tie
  end
end

# method asks user to play again or leave

def play_again?
  answer = nil
  loop do
    prompt "Would you like to play again? [yes / no]"
    answer = gets.chomp.strip.downcase
    if answer.chr == 'y'
      return true
    elsif answer.chr == 'n'
      return false
    end
    prompt "Invalid choice."
  end
end

# main loop

display_rules

loop do
  system('clear') || system('cls')

  deck = initialize_deck

  prompt "Dealing cards...\n\n"
  sleep 2

  player_hand = [["Diamonds", "Ace"], ["Spades", "10"]] #initial_deal(deck)
  dealer_hand = initial_deal(deck)

  display_cards(dealer_hand, player_hand)
  player_turn(deck, player_hand)
  
  if busted?(player_hand)
    prompt "Busted! Dealer wins."
    play_again? ? next : break
  # elsif blackjack?(player_hand)
  #   prompt "Blackjack! You win!"
  #   display_result(dealer_hand, player_hand)
  #   play_again? ? next : break
  else
    prompt "You chose to stay!\n\n"
  end

  dealer_turn(deck, dealer_hand)

  display_cards(dealer_hand, player_hand, true)
  display_result(dealer_hand, player_hand)

  break unless play_again?
end

prompt "Thanks for playing! Goodbye."