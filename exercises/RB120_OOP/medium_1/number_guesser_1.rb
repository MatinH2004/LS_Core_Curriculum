module Displayable

  def display_invalid
    puts "Invalid input, try again."
  end

  def display_remaining_guesses
    puts "\nYou have #{guesses_left} guesses left."
  end

  def display_player_prompt
    puts "\nEnter a number between 1 and 100:"
  end

  def display_guess_high
    puts "\nYour guess is too high."
  end

  def display_guess_low
    puts "\nYour guess is too low."
  end

  def display_lose
    puts "\nYou ran out of guesses. You lose :("
    puts "Secret number was: #{secret}"
  end

  def display_win
    puts "\nYou guessed it! You win!"
  end

  def display_result
    guess == secret ? display_win : display_lose
  end
end

class Player
  include Displayable

  def choose
    choice = nil
    loop do
      choice = gets.chomp
      validate_input(choice) ? break : display_invalid
    end
    choice.to_i
  end

  def validate_input(input)
    /^-?\d+$/.match?(input)
  end
end

class GuessingGame
  include Displayable

  TOTAL_ATTEMPTS = 7
  RANGE = rand(1..100)

  attr_reader :player, :secret, :guesses_left, :guess

  def initialize
    @player = Player.new
    @secret = nil
    @guesses_left = nil
  end

  def set_secret_num
    @secret = RANGE
  end

  def set_num_of_guesses
    self.guesses_left = TOTAL_ATTEMPTS
  end

  def initialize_game
    set_secret_num
    set_num_of_guesses
  end

  def player_guess
    player.choose
  end

  def evaluate_guess
    if guess > secret
      puts "Guess is too high"
    elsif guess < secret
      puts "Guess is too low"
    end
  end

  def decrement_guess
    self.guesses_left -= 1
  end

  def main_loop
    while guesses_left > 0
      display_remaining_guesses
      display_player_prompt
      self.guess = player_guess
      evaluate_guess
      decrement_guess
      break if guess == secret
    end
  end

  def play
    initialize_game
    main_loop
    display_result
  end

  private

  attr_writer :secret, :guesses_left, :guess
end

game = GuessingGame.new
game.play
