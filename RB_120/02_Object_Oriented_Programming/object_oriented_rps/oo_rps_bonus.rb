require 'pry'

class Score
  attr_reader :value

  def initialize
    @value = 0
  end

  def increment
    @value += 1
  end

  def reset
    @value = 0
  end

  def to_s
    "#{value}"
  end
end

class Move
  VALUES = ['rock', 'paper', 'scissors']

  def initialize(value)
    @value = value
  end

  def rock?
    @value == 'rock'
  end

  def paper?
    @value == 'paper'
  end

  def scissors?
    @value == 'scissors'
  end

  def >(other_move)
    (rock? && other_move.scissors?) ||
      (paper? && other_move.rock?) ||
      (scissors? && other_move.paper?)
  end

  def <(other_move)
    (rock? && other_move.paper?) ||
      (paper? && other_move.scissors?) ||
      (scissors? && other_move.rock?)
  end

  def to_s
    @value
  end
end

class Player
  attr_accessor :name, :move, :score

  def initialize
    set_name
    @score = Score.new
  end

  def update_score
    @score.increment
  end

  def reset_score
    @score.reset
  end

  def score
    @score.value
  end
end

class Human < Player
  def set_name
    n = nil
    loop do
      puts "What's your name?"
      n = gets.chomp.strip.capitalize
      break unless n.empty?
      puts "Sorry, must enter a value."
    end
    self.name = n
  end

  def choose
    choice = nil
    loop do
      puts "\nPlease choose rock, paper, or scissors:"
      choice = gets.chomp
      break if Move::VALUES.include?(choice)
      puts "Sorry, invalid choice."
    end
    self.move = Move.new(choice)
  end
end

class Computer < Player
  def set_name
    self.name = ['Ahmed', 'Atefeh', 'Saeed', 'Abdul Hossein'].sample
  end

  def choose
    self.move = Move.new(Move::VALUES.sample)
  end
end

class RPSGame
  attr_accessor :human, :computer

  WIN_SCORE = 1

  def initialize
    @human = Human.new
    @computer = Computer.new
  end

  def display_welcome_message
    system('clear') || system('cls')
    puts "Welcome to Rock, Paper, Scissors!"
    puts "First one to win #{WIN_SCORE} times wins!"
  end

  def display_goodbye_message
    puts "Thanks for playing Rock Paper Scissors, goodbye!"
  end

  def display_moves
    puts "\n#{human.name} chose #{human.move}."
    puts "#{computer.name} chose #{computer.move}."
  end

  def display_winner
    human_move = human.move
    computer_move = computer.move

    if human_move > computer_move
      human.update_score
      puts "\n#{human.name} won!"
    elsif human_move < computer_move
      computer.update_score
      puts "\n#{computer.name} won!"
    else
      puts "\nIt's a tie!"
    end
  end

  def display_grand_winner
    winner = human.score > computer.score ? human : computer
    puts "\n#{winner.name} is the grand winner!"
  end

  def display_score
    puts "\n#{human.name}: #{human.score}"
    puts "#{computer.name}: #{computer.score}"
  end

  def continue
    puts "\npress [enter] to continue"
    gets
    system('clear') || system('cls')
  end

  def play_again?
    answer = nil
    loop do
      puts "\nWould you like to play again? (y/n)"
      answer = gets.chomp.strip.downcase
      break if ['y', 'n'].include?(answer)
      puts "Sorry, must be y or n"
    end
    [human, computer].each { |player| player.reset_score }
    answer == 'y' ? true : display_goodbye_message
  end

  def game_over?
    [human, computer].any? { |player| player.score == WIN_SCORE}
  end

  def display_round_results
    display_moves
    display_winner
    display_score
    continue
  end

  def players_choose
    human.choose
    computer.choose
  end

  def play
    display_welcome_message
    while !game_over?
      players_choose
      display_round_results
    end
    display_score
    display_grand_winner
    play if play_again?
  end
end

RPSGame.new.play
