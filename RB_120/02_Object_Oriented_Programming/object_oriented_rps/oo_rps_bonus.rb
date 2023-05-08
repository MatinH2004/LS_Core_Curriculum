require 'pry'

module Displayable
  def prompt_name
    puts "\nHello, please enter your name:"
  end

  def prompt_invalid(n=1)
    case n
    when 1 then puts "Sorry, invalid choice."
    when 2 then puts "Sorry, must enter a value."
    when 3 then puts "Sorry, must be y or n."
    end
  end

  def prompt_choose
    puts "\nPlease choose [r]ock, [p]aper, [sc]issors, [sp]ock, [l]izard, or [h]istory:"
  end

  def prompt_history
    puts "\nView move history:\n\n"
  end

  def prompt_rule
    puts "\nFirst one to win #{RPSGame::WIN_SCORE} times wins!"
  end

  def prompt_play_again
    puts "\nWould you like to play again? (y/n)"
  end

  def display_goodbye_message
    puts "Thanks for playing RPSSL, goodbye #{human.name}!"
  end

  def display_moves
    puts "\n#{human.name} chose #{human.move}."
    puts "#{computer.name} chose #{computer.move}."
  end
  
  def display_score
    puts "\n#{human.name}: #{human.score}"
    puts "#{computer.name}: #{computer.score}"
  end

  def display_round_results
    display_moves
    determine_winner
    display_score
    continue
  end

  def display_grand_winner
    winner = human.score > computer.score ? human : computer
    puts "\n#{winner.name} is the grand winner!"
  end

  def determine_winner
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
end

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
    value
  end
end

class Move
  attr_reader :value

  HISTORY = []

  VALUES = {
    'rock'     => {abbr: 'r',  beats: ['scissors', 'lizard']},
    'paper'    => {abbr: 'p',  beats: ['rock', 'spock']},
    'scissors' => {abbr: 'sc', beats: ['paper', 'lizard']},
    'lizard'   => {abbr: 'l',  beats: ['paper', 'spock']},
    'spock'    => {abbr: 'sp', beats: ['scissors', 'rock']}
  }

  def initialize(value)
    @value = value
    HISTORY << value
  end

  def >(other_move)
    VALUES[value][:beats].include?(other_move)
  end

  def <(other_move)
    VALUES[other_move][:beats].include?(value)
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

  def move
    @move.value
  end
end

class Human < Player
  include Displayable
  def set_name
    system('clear') || system('cls')
    n = nil
    loop do
      prompt_name
      n = gets.chomp.strip.capitalize
      break unless n.empty?
      prompt_invalid(2)
    end
    self.name = n
  end

  def choose
    choice = nil
    loop do
      prompt_choose
      choice = gets.chomp.strip.downcase
      next if display_history(choice)
      break if valid_move?(choice)
      prompt_invalid
    end
    self.move = Move.new(valid_move?(choice))
  end

  def search_by_abbr(choice)
    action = Move::VALUES.select do |_, hsh|
      hsh[:abbr] == choice
    end

    action.keys.first
  end

  def valid_move?(choice)
    if !search_by_abbr(choice).nil?
      search_by_abbr(choice)
    elsif Move::VALUES.keys.include?(choice)
      choice
    end
  end # if not valid, nil is returned

  def display_history(choice)
    return if choice.chr != 'h'
    prompt_history
    Move::HISTORY.each_with_index do |move, idx|
      next if idx.odd?
      puts "#{move} - #{Move::HISTORY[idx+1]}"
    end
  end
end

class Computer < Player
  def set_name
    self.name = ['Ahmed', 'Atefeh', 'Saeed', 'Abdul Hossein'].sample
  end

  def choose
    self.move = Move.new(Move::VALUES.keys.sample)
  end
end

class RPSGame
  include Displayable
  attr_accessor :human, :computer

  WIN_SCORE = 3
  RULES = File.open('oo_rps_text.txt', 'r')

  def initialize
    @human = Human.new
    @computer = Computer.new
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

  private

  def display_welcome_message
    system('clear') || system('cls')
    puts RULES.read
    prompt_rule
    continue
  end

  def continue
    sleep(1.5)
    puts "\npress [enter] to continue"
    gets
    system('clear') || system('cls')
  end

  def game_over?
    [human, computer].any? { |player| player.score == WIN_SCORE}
  end

  def players_choose
    human.choose
    computer.choose
  end

  def play_again?
    answer = nil
    loop do
      prompt_play_again
      answer = gets.chomp.strip.downcase
      break if ['y', 'n'].include?(answer)
      prompt_invalid(3)
    end
    [human, computer].each { |player| player.reset_score }
    answer == 'y' ? true : display_goodbye_message
  end
end

RPSGame.new.play
