require 'yaml'

MSG = YAML.load_file('ttt_msg.yaml')

INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'

SCORE = { 'Player' => 0, 'Computer' => 0, 'Tie' => 0 }

WINNING_SCORE = 1
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                [[1, 5, 9], [3, 5, 7]]              # diagonals

# initialize before game starts

def initialize_game(name)
  system 'clear'
  game_start_msg
  get_name!(name)
end

# methods for outputting game info

def prompt(msg)
  puts "\n=> #{msg}"
end

def game_start_msg
  puts "Tic Tac Toe - Matin H."
  puts "Created: March 11, 2023"
  puts "Version 1.0.0\n"
end

def output_score
  puts "Player: #{SCORE['Player']}"
  puts "Computer: #{SCORE['Computer']}"
  puts "Ties: #{SCORE['Tie']}"
end

def output_match_result(winner)
  prompt "Final score: #{SCORE['Player']} - #{SCORE['Computer']}"
  prompt "#{winner} won the match!"
  continue
end

def joinor(arr, char = ', ', word = 'or')
  arr.size > 2 ? arr.join(char).insert(-3, " #{word}") : arr.join(" #{word} ")
end

# rubocop:disable Metrics/AbcSize
def display_board(brd)
  system 'clear'
  puts "You are #{PLAYER_MARKER}. Computer is #{COMPUTER_MARKER}.\n\n"
  puts "     |     |"
  puts "  #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}"
  puts "     |     |"
  puts "-----+-----+-----"
  puts "     |     |"
  puts "  #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}"
  puts "     |     |"
  puts ""
  output_score
end
# rubocop:enable Metrics/AbcSize

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

# select all empty squares

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

# determine who makes the first move

def first_move
  answer = ''
  loop do
    prompt "Who goes first? [player / computer / random]"
    answer = gets.chomp.downcase
    if answer.start_with?('p')
      return 'Player'
    elsif answer.start_with?('c')
      return 'Computer'
    elsif answer.start_with?('r')
      return ['Player', 'Computer'].sample
    end
    prompt 'Invalid choice, try again.'
  end
end

def place_peice!(brd, player)
  case player
  when 'Computer'
    computer_places_peice!(brd)
  when 'Player'
    player_places_peice!(brd)
  end
end

# player's move

def player_places_peice!(brd)
  square = ''
  loop do
    prompt "Choose a square: (#{joinor(empty_squares(brd))}):"
    square = gets.chomp.to_i
    break if empty_squares(brd).include?(square)
    prompt "Sorry, that's not a valid choice."
  end

  brd[square] = PLAYER_MARKER
end

def computer_places_peice!(brd)
  square = offensive_strategy(brd)
  square ||= defensive_strategy(brd)
  square ||= empty_squares(brd).select { |s| s == 5 }[0]
  square ||= empty_squares(brd).sample

  brd[square] = COMPUTER_MARKER
end

def offensive_strategy(brd)
  square = nil

  WINNING_LINES.each do |line|
    tictactoe = brd.values_at(*line)

    if (tictactoe.count(COMPUTER_MARKER) == 2) &&
       (tictactoe.count(INITIAL_MARKER) == 1)
      square = line.at(tictactoe.index { |i| i == INITIAL_MARKER })
    end
  end

  square
end

def defensive_strategy(brd)
  square = nil

  WINNING_LINES.each do |line|
    tictactoe = brd.values_at(*line)

    if (tictactoe.count(PLAYER_MARKER) == 2) &&
       (tictactoe.count(INITIAL_MARKER) == 1)
      square = line.at(tictactoe.index { |i| i == INITIAL_MARKER })
    end
  end

  square
end

# switch current player after every turn

def alternate_player(current_player)
  case current_player
  when 'Player' then 'Computer'
  when 'Computer' then 'Player'
  end
end

# check for round winner

def detect_winner(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 3
      return 'Player'
    elsif brd.values_at(*line).count(COMPUTER_MARKER) == 3
      return 'Computer'
    end
  end
  nil
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def board_full?(brd)
  empty_squares(brd).empty?
end

# pace of gameplay controlled by user using [enter] inputs

def continue
  prompt 'Press [enter] to continue'
  gets
end

# player info

def get_name!(name)
  prompt 'Welcome to Tic Tac Toe!'
  loop do
    prompt "Please enter your name:"
    name << gets.chomp.strip.capitalize
    break unless name.empty?
    prompt "Invalid input."
  end
  prompt "Hello #{name}!"
end

player_name = ''

initialize_game(player_name)

# main loop

loop do
  winner = ''
  current_player = first_move

  # rounds loop

  until SCORE.any? { |k, v| v == WINNING_SCORE unless k == 'Tie' }
    board = initialize_board

    loop do
      display_board(board)
      place_peice!(board, current_player)
      current_player = alternate_player(current_player)
      break if someone_won?(board) || board_full?(board)
    end

    display_board(board)

    if someone_won?(board)
      winner = detect_winner(board)
      SCORE[winner] += 1
      prompt "#{detect_winner(board)} won this round!"
    else
      SCORE['Tie'] += 1
      prompt "It's a tie!"
    end
    continue
  end

  output_match_result(winner)

  # play again loop

  exit_game = false

  loop do
    prompt "Play again? [yes / no]"
    choice = gets.chomp.strip.downcase

    if choice.chr == 'y'
      SCORE.each { |k, _| SCORE[k] = 0 }
    elsif choice.chr == 'n'
      prompt "Thanks for playing! Goodbye #{player_name}!"
      exit_game = true
    else
      prompt "Invalid choice, must enter [yes / no]"
      next
    end

    break
  end

  break if exit_game
end