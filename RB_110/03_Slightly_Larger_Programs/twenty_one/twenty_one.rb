require 'yaml'

MSG = YAML.load_file('twenty_one_msg.yaml')
RULES = File.open('twenty_one_rules.txt', 'r')

SUITS = %w(Clovers Diamonds Hearts Spades)
VALUES = %w(Ace 2 3 4 5 6 7 8 9 10 Jack King Queen)

MIN_DEALER_VALUE = 17
BLACKJACK = 21

WINNING_SCORE = 5

STATS = {
  'Player' => 0,
  'Dealer' => 0,
  'Ties' => 0
}

def initialize_round
  system('clear') || system('cls')
  prompt MSG['initial_deal']
  sleep 2
end

def continue
  prompt MSG['continue']
  gets
end

# methods for displaying information

def prompt(str)
  puts "=> #{str}"
end

def display_new_card(hand)
  prompt "You were dealt the #{hand[-1][0]} of #{hand[-1][1]}."
  prompt "Your total is #{total(hand)}\n\n"
end

def display_rules
  system("clear") || system("cls")
  puts RULES.read
  gets
end

def construct_card_msg(dealer, player)
  dealer_values = dealer.map { |card| card[1] }
  player_values = player.map { |card| card[1] }
  {
    all: ["Dealer cards: #{dealer_values.join(', ')}.",
          "Your cards: #{player_values.join(', ')}.\n\n",
          "Your total: #{total(player)}; Dealer total: #{total(dealer)}\n\n"],
    player: ["Your cards: #{player_values.join(', ')}.\n\n"],
    dealer: ["Dealer now has: #{dealer_values.join(', ')}.\n\n"],
    dealer_secret: ["Dealer cards: #{dealer_values[0]} and unknown card.",
                    "Your cards: #{player_values.join(' and ')}.\n\n",
                    "Your total: #{total(player)}; Dealer total: (?)\n\n"]
  }
end

# params initialized to empty arrays incase we don't need to display all hands

def display_cards(reveal_card, dealer = [], player = [])
  construct_card_msg(dealer, player)[reveal_card].each do |str|
    prompt str
  end
end

def display_score
  puts "==============".rjust(17)
  prompt "Scoreboard:\n\n"
  STATS.each do |key, score|
    case key
    when 'Ties' then puts "#{key}: #{score}".rjust(10)
    else puts "#{key} Wins: #{score}".rjust(17)
    end
  end
  puts "==============\n\n".rjust(19)
end

def display_result(dealer, player)
  case detect_result(dealer, player)
  when :player_busted then prompt MSG['player_bust']
  when :dealer_busted then prompt MSG['dealer_bust']
  when :player        then prompt MSG['player_win']
  when :dealer        then prompt MSG['dealer_win']
  when :tie           then prompt MSG['tie']
  end
  sleep 1.5
end

def display_grand_winner
  STATS.each do |key, score|
    if score == WINNING_SCORE
      prompt "Grand winner: #{key}!" unless key == 'Ties'
    end
  end
end

# methods for handling the deck, hands, and score

def initialize_deck
  SUITS.product(VALUES).shuffle
end

def initial_deal!(deck)
  deck.shift(2)
end

def deal_card!(deck, hand)
  hand << deck.shift
end

def update_score(result)
  if result == :player_busted || result == :dealer
    STATS['Dealer'] += 1
  elsif result == :dealer_busted || result == :player
    STATS['Player'] += 1
  else
    STATS['Ties'] += 1
  end
end

# methods for handling player/dealer moves

def player_turn(deck, player_hand)
  choice = ''
  loop do
    choice = player_action(deck, player_hand)
    break if busted?(player_hand) ||
             blackjack?(player_hand) ||
             choice == 's'
  end
end

def player_action(deck, player_hand)
  prompt "Player's turn: [hit] or [stay]?"
  case gets.chomp.strip.downcase.chr
  when 'h'
    deal_card!(deck, player_hand)
    display_new_card(player_hand)
  when 's' then 's'
  else prompt MSG['invalid_choice']
  end
end

def dealer_turn(deck, dealer_hand)
  prompt MSG['dealer_turn']
  loop do
    choice = dealer_action(deck, dealer_hand)
    break if busted?(dealer_hand) ||
             blackjack?(dealer_hand) ||
             choice == 's'
  end
end

def dealer_action(deck, dealer)
  if total(dealer) < MIN_DEALER_VALUE
    prompt MSG['dealer_hits']
    deal_card!(deck, dealer)
    display_cards(:dealer, dealer)
  elsif total(dealer) >= MIN_DEALER_VALUE
    prompt MSG['dealer_stays']
    's'
  end
end

# method for summing player/dealer hands

def total(hand)
  values = hand.map { |card| card[1] }
  sum = 0

  values.each do |value|
    sum += if value == 'Ace'
             11
           elsif value.to_i == 0 # Jack, Queen, King
             10
           else
             value.to_i
           end
  end

  # correct for Aces
  values.select { |value| value == 'Ace' }.count.times do
    sum -= 10 if sum > BLACKJACK
  end

  sum
end

# methods for determining winner / loser

def busted?(hand)
  total(hand) > BLACKJACK
end

def blackjack?(hand)
  total(hand) == BLACKJACK
end

def detect_result(dealer, player)
  player_total = total(player)
  dealer_total = total(dealer)

  if player_total > BLACKJACK
    :player_busted
  elsif dealer_total > BLACKJACK
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
    prompt MSG['play_again']
    answer = gets.chomp.strip.downcase
    if answer.chr == 'y'
      STATS.each { |key, _| STATS[key] = 0 }
      return true
    elsif answer.chr == 'n'
      return false
    end
    prompt MSG['invalid_choice']
  end
end

def goodbye
  system('clear') || system('cls')
  puts MSG['final_score']
  display_score
  prompt MSG['goodbye']
end

display_rules

loop do
  deck = initialize_deck

  until STATS.any? { |key, score| score == WINNING_SCORE unless key == 'Ties' }
    initialize_round

    player_hand = initial_deal!(deck)
    dealer_hand = initial_deal!(deck)

    display_cards(:dealer_secret, dealer_hand, player_hand)
    player_turn(deck, player_hand)
    dealer_turn(deck, dealer_hand) unless busted?(player_hand) ||
                                          blackjack?(player_hand)

    display_cards(:all, dealer_hand, player_hand)
    display_result(dealer_hand, player_hand)
    update_score(detect_result(dealer_hand, player_hand))

    display_score
    continue
  end

  display_grand_winner
  break unless play_again?
  system('clear') || system('cls')
end

goodbye
