require 'pry'

module Names
  NAMES = [
    "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", "Elijah", "Charlotte",
    "William", "Sophia", "James", "Amelia", "Benjamin", "Isabella", "Lucas",
    "Mia", "Henry", "Harper", "Alexander", "Evelyn", "Sebastian", "Abigail",
    "Jack", "Emily", "Daniel", "Elizabeth", "Michael", "Mila", "Matthew",
    "Ella", "Jackson", "Avery", "Logan", "Sofia", "David", "Camila", "Joseph",
    "Scarlett", "Samuel", "Luna", "Owen", "Grace", "John", "Chloe", "Luke",
    "Victoria", "Gabriel", "Penelope", "Anthony", "Chris Lee"
  ]
end

module Displayable
  def prompt_input(choice)
    case choice
    when :name then puts "Please enter your name:"
    when :marker then puts "\nPlease choose a marker (must be one character):"
    when :first_move then puts "\nWho goes first? [me] | [opponent] | [random]"
    when :choose_move
      puts "Choose a square between #{joinor(board.unmarked_keys)}:"
    end
  end

  def prompt_invalid(choice)
    case choice
    when :retry then puts "\nInvalid choice, please try again."
    when :one_chr then puts "\nInvalid choice, please enter one character."
    when :yes_or_no then puts "\nSorry, input must be y or n"
    end
  end

  def prompt_winner(winner)
    case winner
    when :player
      human.update_score
      puts "#{human.name} won!"
    when :computer
      computer.update_score
      puts "#{computer.name} won!"
    when :tie then puts "It's a tie!"
    end
  end

  def prompt_play_again
    puts "\nWould like to play again? (y/n)"
  end

  def prompt_search_for_player
    puts "\nSearching for player:\n\n"
  end
  
  def press_enter
    puts "\nPress [enter] to continue"
    gets
  end

  def display_welcome_message
    clear
    puts "Welcome to Tic Tac Toe!\n\n"
  end

  def display_goodbye_message
    puts "\nThanks for playing Tic Tac Toe! Goodbye #{human.name}!"
  end

  def display_score
    puts "Player score: #{human.score}"
    puts "Computer score: #{computer.score}\n\n"
  end

  def display_board
    print "#{human.name} is #{human.marker}. "
    print "#{computer.name} is #{computer.marker}.\n\n"
    puts "\n#{board.draw}"
    display_score
  end

  def display_grand_winner
    winner = human.score > computer.score ? human.name : computer.name
    clear_and_display_board
    puts "#{winner} is the grand winner!\n\n"
  end

  def joinor(arr, char = ', ', word = 'or')
    arr.size > 2 ? arr.join(char).insert(-3, " #{word}") : arr.join(" #{word} ")
  end
end

class Board
  attr_reader :squares

  WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                  [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                  [[1, 5, 9], [3, 5, 7]]              # diagonals

  def initialize
    @squares = {}
    reset
  end

  # rubocop:disable Metrics/AbcSize
  # rubocop:disable Metrics/MethodLength
  def draw
    puts "     |     |"
    puts "  #{@squares[1]}  |  #{@squares[2]}  |  #{@squares[3]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[4]}  |  #{@squares[5]}  |  #{@squares[6]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[7]}  |  #{@squares[8]}  |  #{@squares[9]}"
    puts "     |     |"
  end
  # rubocop:enable Metrics/AbcSize
  # rubocop:enable Metrics/MethodLength

  def []=(key, marker)
    @squares[key].marker = marker
  end

  def unmarked_keys
    @squares.keys.select { |key| @squares[key].unmarked? }
  end

  def full?
    unmarked_keys.empty?
  end

  def someone_won?
    !!winning_marker
  end

  # return winning marker or nil
  def winning_marker
    WINNING_LINES.each do |line|
      square = @squares.values_at(*line)
      if three_identical_markers?(square)
        return square.first.marker
      end
    end
    nil
  end

  def reset
    (1..9).each { |key| @squares[key] = Square.new }
  end

  private

  def three_identical_markers?(squares)
    markers = squares.select(&:marked?).collect(&:marker)
    return false if markers.size != 3
    markers.uniq.size == 1
  end
end

class Square
  attr_accessor :marker

  INITIAL_MARKER = ' '

  def initialize(marker=INITIAL_MARKER)
    @marker = marker
  end

  def marked?
    marker != INITIAL_MARKER
  end

  def unmarked?
    marker == INITIAL_MARKER
  end

  def to_s
    @marker
  end
end

class Score
  attr_accessor :value

  def initialize
    @value = 0
  end

  def update
    self.value += 1
  end

  def reset
    self.value = 0
  end
end

class Player
  attr_accessor :name, :marker

  COMPUTER_MARKER = 'O'

  def initialize
    @score = Score.new
  end

  def update_score
    @score.update
  end

  def reset_score
    @score.reset
  end

  def score
    @score.value
  end
end

class Human < Player
  include Displayable

  def initialize
    super
    @name = nil
    @marker = nil
  end

  def set_name
    choice = nil
    loop do
      prompt_input(:name)
      choice = gets.chomp.strip.capitalize
      break unless choice.empty?
      prompt_invalid(:retry)
    end
    self.name = choice
  end

  def set_marker
    choice = nil
    loop do
      prompt_input(:marker)
      choice = gets.chomp.strip.upcase
      break unless choice.length > 1 || choice.empty?
      prompt_invalid(:one_chr)
    end
    self.marker = choice
  end
end

class Computer < Player
  def initialize
    super
    @marker = COMPUTER_MARKER
  end
end

class TTTGame
  include Names
  include Displayable

  WIN_SCORE = 3

  attr_reader :board, :human, :computer
  attr_writer :current_marker

  def initialize
    @board = Board.new
    @human = Human.new
    @computer = Computer.new
    @current_marker = nil
  end

  def play
    init_game
    while !game_over?
      clear_and_display_board
      player_move
      display_result
    end
    display_grand_winner
    play if play_again?
  end

  private

  def init_game
    if human.name.nil? # skip if playing again
      display_welcome_message
      human_init
    end
    who_goes_first
    search_for_player
  end

  def clear
    system('clear') || system('cls')
  end

  def clear_and_display_board
    clear
    display_board
  end

  def clear_board
    press_enter
    board.reset
  end

  def search_for_player
    prompt_search_for_player
    NAMES.each_with_index do |name, idx|
      sleep(0.8 / (idx + 1))
      sleep(0.5) if idx == name.length - 1
      print "\r#{name}        "
      $stdout.flush
      computer.name = name
    end
    press_enter
  end

  def who_goes_first
    choice = nil
    loop do
      prompt_input(:first_move)
      choice = choose_player
      break unless choice.nil?
      prompt_invalid(:retry)
    end
    self.current_marker = choice
  end

  def choose_player
    case gets.chomp.downcase.strip.chr
    when 'm' then human.marker
    when 'o' then computer.marker
    when 'r' then [human.marker, computer.marker].sample
    end
  end

  def human_init
    human.set_name
    human.set_marker
  end

  def human_moves
    prompt_input(:choose_move)
    square = nil
    loop do
      square = gets.chomp.to_i
      break if board.unmarked_keys.include?(square)
      prompt_invalid(:retry)
    end

    board[square] = human.marker
  end

  def offensive_strategy
    square = nil

    Board::WINNING_LINES.each do |line|
      tictactoe = board.squares.values_at(*line).map(&:marker)

      if (tictactoe.count(computer.marker) == 2) &&
         (tictactoe.count(Square::INITIAL_MARKER) == 1)
        square = line.at(tictactoe.index { |i| i == Square::INITIAL_MARKER })
      end
    end

    square
  end

  def defensive_strategy
    square = nil

    Board::WINNING_LINES.each do |line|
      tictactoe = board.squares.values_at(*line).map(&:marker)

      if (tictactoe.count(human.marker) == 2) &&
         (tictactoe.count(Square::INITIAL_MARKER) == 1)
        square = line.at(tictactoe.index { |i| i == Square::INITIAL_MARKER })
      end
    end

    square
  end

  def computer_moves
    square = offensive_strategy
    square ||= defensive_strategy
    square ||= board.unmarked_keys.select { |sqr| sqr == 5 }[0]
    square ||= board.unmarked_keys.sample

    board[square] = computer.marker
  end

  def human_turn?
    @current_marker == human.marker
  end

  def current_player_moves
    if human_turn?
      human_moves
      @current_marker = computer.marker
    else
      computer_moves
      @current_marker = human.marker
    end
  end

  def player_move
    loop do
      current_player_moves
      break if board.someone_won? || board.full?
      clear_and_display_board if human_turn?
    end
  end

  def display_result
    clear_and_display_board
    case board.winning_marker
    when human.marker
      prompt_winner(:player)
    when computer.marker
      prompt_winner(:computer)
    else prompt_winner(:tie)
    end
    clear_board
  end

  def game_over?
    [human, computer].any? { |player| player.score == WIN_SCORE }
  end

  def play_again?
    choice = nil
    loop do
      prompt_play_again
      choice = gets.chomp.downcase.strip
      break if ['y', 'n'].include?(choice)
      prompt_invalid(:yes_or_no)
    end
    choice.chr == 'y' ? reset : display_goodbye_message
  end

  def reset
    clear
    NAMES.shuffle!
    board.reset
    [human, computer].each(&:reset_score)
  end
end

game = TTTGame.new
game.play
