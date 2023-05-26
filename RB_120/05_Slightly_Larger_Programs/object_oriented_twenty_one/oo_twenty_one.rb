require 'pry'

module Displayable
  RULES = File.open('twenty_one_rules.txt', 'r')

  def clear_screen
    system('clear') || system('cls')
  end

  def pause
    puts "\npress [enter] to continue"
    gets
  end

  def display_welcome_message
    clear_screen
    puts RULES.read
    gets
  end

  def display_goodbye_message
    puts "\nThanks for playing Twenty-One! Goodbye #{human.name} :)"
  end

  def display_initial_cards
    clear_screen
    puts "Dealing cards..."
    sleep(2)
    [human, dealer].each(&:show_flop)
  end

  def display_hands
    clear_screen
    puts "\n***** GAME RESULT *****"
    [human, dealer].each(&:show_hand)
    sleep(1)
  end

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  def display_result
    if human.total > 21
      puts "\nYou busted! #{dealer.name} wins!"
    elsif dealer.total > 21
      puts "\n#{dealer.name} busted! You win!"
    elsif human.total > dealer.total
      puts "\nYou win!"
    elsif dealer.total < human.total
      puts "\n#{dealer.name} wins!"
    else
      puts "\nIt's a tie!"
    end
    pause
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength

  def display_player_turn
    puts "\n#{human.name}'s turn: (h)it or (s)tay?"
  end

  def display_dealer_turn
    clear_screen
    puts "\n#{dealer.name}'s turn..."
    sleep(1)
  end
end

class Card
  SUITS = %w(H D S C)
  FACES = %w(A 2 3 4 5 6 7 8 9 J Q K)

  def initialize(suit, face)
    @suit = suit
    @face = face
  end

  def to_s
    "The #{face} of #{suit}"
  end

  def face
    case @face
    when 'J' then 'Jack'
    when 'Q' then 'Queen'
    when 'K' then 'King'
    when 'A' then 'Ace'
    else @face
    end
  end

  def suit
    case @suit
    when 'H' then 'Hearts'
    when 'D' then 'Diamonds'
    when 'S' then 'Spades'
    when 'C' then 'Clubs'
    end
  end

  def ace?
    face == 'Ace'
  end

  def jack?
    face == 'Jack'
  end

  def queen?
    face == 'Queen'
  end

  def king?
    face == 'King'
  end
end

class Deck
  attr_accessor :cards

  def initialize
    @cards = []
    Card::SUITS.each do |suit|
      Card::FACES.each do |face|
        @cards << Card.new(suit, face)
      end
    end

    scramble!
  end

  def scramble!
    cards.shuffle!
  end

  def deal_one
    cards.pop
  end
end

module Hand
  def show_hand
    puts "\n===== #{name}'s Hand ====="
    cards.each do |card|
      puts "=> #{card}"
    end
    puts "=> Total: #{total}\n"
  end

  # rubocop:disable Metrics/MethodLength
  def total
    total = 0
    cards.each do |card|
      total += if card.ace?
                 11
               elsif card.jack? || card.queen? || card.king?
                 10
               else
                 card.face.to_i
               end
    end

    # correct for Aces
    cards.select(&:ace?).count.times do
      break if total <= 21
      total -= 10
    end

    total
  end
  # rubocop:enable Metrics/MethodLength

  def add_card(new_card)
    cards << new_card
  end

  def busted?
    total > 21
  end

  def twenty_one?
    total == 21
  end
end

class Player
  include Hand

  attr_accessor :name, :cards

  def initialize
    @cards = []
  end
end

class Human < Player
  def set_name
    puts "\nPlease enter your name:"
    answer = nil
    loop do
      answer = gets.chomp.strip.capitalize
      break unless answer.empty?
      puts "Must enter a value."
    end
    self.name = answer
  end

  def show_flop
    show_hand
  end
end

class Dealer < Player
  NAMES = ['Chris Lee', 'Clare', 'Pete', 'Brandi']

  def set_name
    self.name = NAMES.sample
  end

  def show_flop
    puts "\n===== #{name}'s Hand ====="
    puts "=> #{cards.first}"
    puts "??\n"
  end
end

class TwentyOne
  include Displayable

  attr_accessor :deck
  attr_reader :human, :dealer

  def initialize
    @deck = Deck.new
    @human = Human.new
    @dealer = Dealer.new
  end

  def start
    display_welcome_message
    init_players
    main_game
  end

  private

  def main_game
    initial_deal
    display_initial_cards
    player_turn
    dealer_turn
    display_hands
    display_result
    main_game if play_again?
  end

  def game_over?
    human.busted? ||
      human.twenty_one? ||
      dealer.busted? ||
      dealer.twenty_one?
  end

  def init_players
    clear_screen
    human.set_name
    dealer.set_name
  end

  def initial_deal
    2.times do
      human.add_card(deck.deal_one)
      dealer.add_card(deck.deal_one)
    end
  end

  def player_turn
    choice = nil
    loop do
      choice = player_choice
      break if human.busted? ||
               human.twenty_one? ||
               choice == 'stay'
    end
    pause
  end

  def player_choice
    display_player_turn
    case gets.chomp.strip.downcase.chr
    when 'h'
      puts "\nYou chose to hit!"
      human.add_card(deck.deal_one)
      human.show_hand
    when 's'
      'stay'
    else puts "\nInvalid choice, try again."
    end
  end

  def dealer_turn
    return if game_over?
    display_dealer_turn
    loop do
      choice = dealer_action
      break if dealer.busted? ||
               dealer.twenty_one? ||
               choice == 'stay'
    end
    pause
  end

  def dealer_action
    if dealer.total < 17
      puts "\n#{dealer.name} hits!"
      dealer.add_card(deck.deal_one)
    else
      puts "\n#{dealer.name} stays!"
      'stay'
    end
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again?"
      answer = gets.chomp.strip.downcase.chr
      break if %w(y n).include?(answer)
      puts "Invalid choice, try again."
    end
    answer == 'y' ? reset : display_goodbye_message
  end

  def reset
    self.deck = Deck.new
    human.cards = []
    dealer.cards = []
  end
end

game = TwentyOne.new
game.start
