module Displayable

  def display_invalid
    puts "Invalid input, try again."
  end

  def display_remaining_guesses
    puts "\nYou have #{guesses_left} guesses left."
  end

  def display_player_prompt
    puts "\nEnter a number between #{min} and #{max}:"
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
    pause
  end

  def display_win
    puts "\nYou guessed it! You win!"
    pause
  end

  def display_result
    guess == secret ? display_win : display_lose
  end

  def display_new_game
    puts "\n===== NEW GAME ====="
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
    # feat. valid range for input
  end
end

class GuessingGame
  include Displayable

  attr_reader :player, :secret, :guesses_left, :guess, :max, :min

  def initialize(min, max)
    @player = Player.new
    @guesses_left = nil
    @max_guess = Math.log2(max - min + 1).to_i + 1
    @max, @min = max, min
  end

  def play
    initialize_game
    main_loop
    display_result
    new_game
  end

  private

  def clear_screen
    system('clear') || system('cls')
  end

  def pause
    puts "\nPress [enter] to continue"
    gets
  end

  def set_secret_num
    @secret = rand(min..max)
  end

  def set_num_of_guesses
    self.guesses_left = @max_guess
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
      display_guess_high
    elsif guess < secret
      display_guess_low
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

  def new_game
    clear_screen
    display_new_game
    play
  end

  attr_writer :secret, :guesses_left, :guess
end

game = GuessingGame.new(501, 1500)
game.play
