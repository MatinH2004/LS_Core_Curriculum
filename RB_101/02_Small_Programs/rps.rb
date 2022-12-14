VALID_CHOICES = %w(rock paper scissors)

def win?(first, second)
  (first == 'rock' && second == 'scissors') ||
    (first == 'paper' && second == 'rock') ||
    (first == 'scissors' && second == 'paper')
end

def display_results(player, computer)
  if win?(player, computer)
    prompt('You won!')
  elsif win?(computer, player)
    prompt('You lose')
  else
    prompt("It's a tie!")
  end
end

def prompt(message)
  puts("=> #{message}")
end

loop do
  choice = ''
  loop do # main loop
    system('clear')
    prompt("Choose one: #{VALID_CHOICES.join(', ')}")
    choice = gets.chomp.strip.downcase

    if VALID_CHOICES.include?(choice)
      break
    else
      prompt("That's not a valid choice.")
    end
  end

  computer_choice = VALID_CHOICES.sample

  prompt("You chose: #{choice}; computer chose: #{computer_choice}.")

  display_results(choice, computer_choice)

  prompt("Play again? y/n")
  answer = gets.chomp.downcase.strip
  break unless answer.start_with?('y')
end

prompt("Thanks for playing. Good bye!")
