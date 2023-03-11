require 'yaml'
require 'pry'
require 'pry-doc'

MSG = YAML.load_file('ttt_msg.yaml')

INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'

SCORE = { 'Player' => 0, 'Computer' => 0, 'Tie' => 0 }

WINNING_SCORE = 2
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                [[1, 5, 9], [3, 5, 7]]              # diagonals

# Methods for outputting information

def prompt(msg)
  puts "\n=> #{msg}"
end

def output_score
  puts "Player: #{SCORE['Player']}"
  puts "Computer: #{SCORE['Computer']}"
  puts "Ties: #{SCORE['Tie']}"
end

# rubocop:disable Metrics/AbcSize
def display_board(brd)
  system 'clear'
  puts "You are #{PLAYER_MARKER}. Computer is #{COMPUTER_MARKER}."
  puts ""
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
  output_score()
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
  square = nil

  # play offensive move first
  WINNING_LINES.each do |line|
    square = find_at_risk_square(line, brd, COMPUTER_MARKER)
    break if square
  end

  # defend after offensive move
  if !square
    WINNING_LINES.each do |line|
      square = find_at_risk_square(line, brd, PLAYER_MARKER)
      break if square
    end
  end

  # pick square 5 if available else pick random
  if !square && empty_squares(brd).include?(5)
    square = 5
  elsif !square
    square = empty_squares(brd).sample
  end

  brd[square] = COMPUTER_MARKER
end

def find_at_risk_square(line, brd, marker)
  if brd.values_at(*line).count(marker) == 2
    return brd.select { |k, v| line.include?(k) && v == INITIAL_MARKER }.keys[0]
  end
  nil
end

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

def board_full?(brd)
  empty_squares(brd).empty?
end

def someone_won?(brd)
  !!detect_winner(brd)
end

def joinor(arr, char = ', ', word = 'or')
  arr.size > 2 ? arr.join(char).insert(-3, " #{word}") : arr.join(" #{word} ")
end

def continue
  prompt 'Press [enter] to continue'
  gets
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

# switch current player after every turn

def alternate_player(current_player)
  case current_player
  when 'Player' then 'Computer'
  when 'Computer' then 'Player'
  end
end

loop do
  winner = ''
  current_player = first_move

  # refactor score
  until SCORE.any? {|k, v| v == WINNING_SCORE unless k == 'Tie'}
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
      prompt "#{detect_winner(board)} won this round"
    else
      SCORE['Tie'] += 1
      prompt "It's a tie!"
    end
    continue
  end

  prompt "Final score: #{SCORE['Player']} - #{SCORE['Computer']}"
  prompt "#{winner} won the match!"
  continue

  # play again loop
  exit_game = false

  loop do
    prompt "Play again? [yes / no]"
    choice = gets.chomp.downcase

    case choice
    when 'y', 'yes'
      SCORE.each { |k, _| SCORE[k] = 0 }
    when 'n', 'no'
      prompt 'Thanks for playing! Goodbye!'
      exit_game = true
    else
      prompt "Invalid choice, must enter [yes / no]"
      next
    end
    break
  end

  break if exit_game
end
