require 'pry'
require 'pry-doc'

INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'

WINNING_SCORE = 2
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
                [[1, 5, 9], [3, 5, 7]]              # diagonals

def prompt(msg)
  puts "\n=> #{msg}"
end

# rubocop:disable Metrics/AbcSize
def display_board(brd, score)
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
  puts "Player Score: #{score['Player']}"
  puts "Computer Score: #{score['Computer']}"
  puts ""
end
# rubocop:enable Metrics/AbcSize

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def player_places_peice!(brd)
  square = ''
  loop do
    prompt "Choose a position to place a peice: (#{joinor(empty_squares(brd))}):"
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
  
  # binding.pry

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
    brd.select { |k, v| line.include?(k) && v == INITIAL_MARKER }.keys[0]
  else
    nil
  end
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


def joinor(arr, char=', ', word='or')
  arr.size > 2 ? arr.join(char).insert(-3, " #{word}") : arr.join(" #{word} ")
end

def continue
  prompt('Press [enter] to proceed')
  gets
end

loop do
  score = {'Player' => 0, 'Computer' => 0}
  winner = ''

  until score['Player'] == WINNING_SCORE || score['Computer'] == WINNING_SCORE
    board = initialize_board
    loop do
      display_board(board, score)
      
      player_places_peice!(board)
      break if someone_won?(board) || board_full?(board)
      
      computer_places_peice!(board)
      break if someone_won?(board) || board_full?(board)
    end

    display_board(board, score)

    if someone_won?(board)
      winner = detect_winner(board)
      score[winner] += 1
      prompt "#{detect_winner(board)} won this round"
      continue()
    else
      prompt "It's a tie!"
      continue()
    end
  end

  display_board(board, score)

  prompt "Final score: #{score['Player']} - #{score['Computer']}"
  prompt "#{winner} won the match!"
  continue()
  prompt "Play again? (y or n)"
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt "Thanks for playing Tic Tac Toe!"
