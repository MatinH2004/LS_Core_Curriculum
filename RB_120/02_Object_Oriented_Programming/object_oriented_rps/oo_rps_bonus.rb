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
  attr_accessor :name, :move

  def initialize
    set_name
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
  attr_reader :score

  WIN_SCORE = 1

  def initialize
    @human = Human.new
    @computer = Computer.new
    @score = { @human => 0, @computer => 0 }
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
    if human.move > computer.move
      score[@human] += 1
      puts "\n#{human.name} won!"
    elsif human.move < computer.move
      score[@computer] += 1
      puts "\n#{computer.name} won!"
    else
      puts "It's a tie!"
    end
  end

  def display_grand_winner
    winner = score.key(score.values.max)
    puts "\n#{winner.name} is the grand winner!"
  end

  def display_score
    puts "\n#{human.name}: #{score[@human]}"
    puts "#{computer.name}: #{score[@computer]}"
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
    score.each { |k, _| score[k] = 0 }
    answer == 'y'
  end

  def display_actions
    display_moves
    display_winner
    display_score
    continue
  end

  # rubocop:disable Metrics/MethodLength
  def play
    loop do
      display_welcome_message

      until score.any? { |_, v| v == WIN_SCORE }
        human.choose
        computer.choose
        display_actions
      end

      display_score
      display_grand_winner
      break unless play_again?
    end

    display_goodbye_message
  end
  # rubocop:enable Metrics/MethodLength
end

RPSGame.new.play
