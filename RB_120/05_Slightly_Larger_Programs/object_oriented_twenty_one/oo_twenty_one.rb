require 'pry'

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
    puts "=> Total: #{total}\n\n"
  end

  def total
    total = 0
    cards.each do |card|
      if card.ace?
        total += 11
      elsif card.jack? || card.queen? || card.king?
        total += 10
      else
        total += card.face.to_i
      end
    end
    
    # correct for Aces
    cards.select(&:ace?).count.times do
      break if total <= 21
      total -= 10
    end

    total
  end

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
    puts "Please enter your name:"
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
    puts "??\n\n"
  end
end

class TwentyOne
  attr_accessor :deck
  attr_reader :human, :dealer

  def initialize
    @deck = Deck.new
    @human = Human.new
    @dealer = Dealer.new
    @in_game = true
  end

  def start
    welcome_message
    init_players
    binding.pry
    while @in_game
      deal_cards
      show_initial_cards
      player_turn
      dealer_turn
    end
    show_hands
    display_result
    start if play_again?
  end

  private

  def clear_screen
    system('clear') || system('cls')
  end

  def pause
    puts "\npress [enter] to continue"
    gets
  end

  def welcome_message
    clear_screen
    puts "Welcome to Twenty-One"
    puts "\nYour goal is to get as close"
    puts "as you can to 21 without busting."
    puts "\nGood luck!"
    pause
  end

  def init_players
    clear_screen
    human.set_name
    dealer.set_name
  end

  def deal_cards
    2.times do
      human.add_card(deck.deal_one)
      dealer.add_card(deck.deal_one)
    end
  end

  def show_initial_cards
    clear_screen
    puts "Dealing cards..."
    sleep(2)
    [human, dealer].each { |player| player.show_flop }
  end

  def player_turn
    answer = nil
    until human.busted? || human.twenty_one?
      puts "\nDo you want to [hit] or [stay]?"
      answer = gets.chomp.strip.downcase.chr
      if answer == 's'
        puts "You chose to stay!"
        pause
        break
      elsif answer == 'h'
        human.add_card(deck.deal_one)
        puts "\nYou chose to hit!"
        human.show_hand
      else
        puts "Invalid choice, please try again."
      end
    end
    @in_game = false if bust_or_win?
  end

  def bust_or_win?
    human.busted? || human.twenty_one?
  end

  def dealer_turn
    clear_screen
    puts "Dealer's turn now."
    sleep(1)
    loop do
      if dealer.total >= 17 && !dealer.busted?
        puts "Dealer stays!"
        @in_game = false
        break
      elsif dealer.busted?
        @in_game = false
        break
      else
        puts "The dealer hits!"
        dealer.add_card(deck.deal_one)
      end
    end
    sleep(1)
  end

  def show_hands
    clear_screen
    puts "\n***** GAME RESULT *****"
    [human, dealer].each { |player| player.show_hand}
    pause 
  end

  def display_result # nogggagagaggaaa
    if human.total > 21
      puts "You busted! Dealer wins!"
    elsif dealer.total > 21
      puts "Dealer busted! You win!"
    elsif human.total > dealer.total
      puts "You win!"
    elsif dealer.total < human.total
      puts "Dealer wins!"
    else
      puts "It's a tie!"
    end
    pause
  end

  def play_again?
    clear_screen
    answer = nil
    loop do
      puts "\nWould you like to play again?"
      answer = gets.chomp.strip.downcase.chr
      break if %w(y n).include?(answer)
      puts "Invalid choice, try again."
    end
    answer == 'y' ? reset : (puts "\nGoodbye!")
  end

  def reset
    self.deck = Deck.new
    human.cards = []
    dealer.cards = []
    @in_game = true
  end
end

game = TwentyOne.new
game.start