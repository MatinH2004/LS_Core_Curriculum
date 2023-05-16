require 'pry'

class Board
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
  attr_reader :marker, :score

  def initialize(marker)
    @marker = marker
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

class TTTGame
  WIN_SCORE = 3
  HUMAN_MARKER = 'X'
  COMPUTER_MARKER = 'O'
  FIRST_TO_MOVE = HUMAN_MARKER

  attr_reader :board, :human, :computer

  def initialize
    @board = Board.new
    @human = Player.new(HUMAN_MARKER)
    @computer = Player.new(COMPUTER_MARKER)
    @current_marker = FIRST_TO_MOVE
  end

  def play
    display_welcome_message
    while !game_over?
      clear_and_display_board
      player_move
      display_result
    end
    display_grand_winner
    play if play_again?
  end

  private

  def clear
    system('clear') || system('cls')
  end

  def press_enter
    puts "\nPress [enter] to continue"
    gets
  end

  def display_welcome_message
    clear
    puts "Welcome to Tic Tac Toe!"
    press_enter
  end

  def display_goodbye_message
    puts "\nThanks for playing Tic Tac Toe! Goodbye!"
  end

  def display_score
    puts "Player score: #{human.score}"
    puts "Computer score: #{computer.score}\n\n"
  end

  def display_board
    puts "You are #{human.marker}. Computer is a #{computer.marker}.\n\n"
    puts "\n#{board.draw}"
    display_score
  end

  def clear_and_display_board
    clear
    display_board
  end

  def display_grand_winner
    winner = human.score > computer.score ? "You are" : "Computer is"
    clear_and_display_board
    puts "#{winner} the grand winner!\n\n"
  end

  def joinor(arr, char = ', ', word = 'or')
    arr.size > 2 ? arr.join(char).insert(-3, " #{word}") : arr.join(" #{word} ")
  end

  def human_moves
    puts "Choose a square between #{joinor(board.unmarked_keys)}:" 
    square = nil
    loop do
      square = gets.chomp.to_i
      break if board.unmarked_keys.include?(square)
      puts "Sorry, that's not a choice"
    end

    board[square] = human.marker
  end

  def computer_moves
    board[board.unmarked_keys.sample] = computer.marker
  end

  def human_turn?
    @current_marker == HUMAN_MARKER
  end

  def current_player_moves
    if human_turn?
      human_moves
      @current_marker = COMPUTER_MARKER
    else
      computer_moves
      @current_marker = HUMAN_MARKER
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
      human.update_score
      puts "You won!"
    when computer.marker
      computer.update_score
      puts "Computer won!"
    else puts "It's a tie!"
    end
    press_enter
    board.reset
  end

  def game_over?
    [human, computer].any? { |player| player.score == WIN_SCORE}
  end

  def play_again?
    choice = nil
    loop do
      puts "Would like to play again? (y/n)"
      choice = gets.chomp.downcase.strip
      break if ['y', 'n'].include?(choice)
      puts "Sorry, must be y or n"
    end
    choice.chr == 'y' ? reset : display_goodbye_message
  end

  def reset
    clear
    puts "Let's play again!\n\n"
    board.reset
    [human, computer].each { |player| player.reset_score }
    @current_marker = FIRST_TO_MOVE
  end
end

game = TTTGame.new
game.play
