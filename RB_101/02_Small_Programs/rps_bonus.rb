require 'yaml'
MESSAGES = YAML.load_file('rps_messages.yml')
CHOICES = %w(rock paper scissors spock lizard)
VALID_INPUTS = %w(r p sc sp l)

def prompt(message, yaml=true)
  if yaml
    puts("\n=> #{MESSAGES[message]}")
  else
    puts "\n=> #{message}"
  end
end

def ask_player(choice, valid_inputs=VALID_INPUTS)
  loop do
    prompt('choose_action')
    choice = gets.chomp.strip.downcase
    break if valid_inputs.include?(choice)
    system 'clear'
    prompt('invalid_choice')
  end
  choice
end

def win?(player, computer, score, actions=ACTIONS)
  if player == computer
    prompt('tie')
  elsif actions[player].include?(computer)
    score['player'] += 1
    prompt('win')
  else
    score['computer'] += 1
    prompt('lose')
  end
end

def input_format(choice)
  case choice
  when 'r' then 'rock'
  when 'p' then 'paper'
  when 'sc' then 'scissors'
  when 'sp' then 'spock'
  when 'l' then 'lizard'
  end
end

def display_score(score)
  result = <<-MSG
  Your score: #{score['player']}
  Computer score: #{score['computer']}
  MSG
  puts result
end

def start
  system 'clear'
  prompt('welcome')
  prompt('rules')
  continue()
end

def continue
  prompt('press_continue')
  gets
end

ACTIONS = {
  'rock' => ['scissors', 'lizard'],
  'paper' => ['rock', 'spock'],
  'scissors' => ['paper', 'lizard'],
  'spock' => ['scissors', 'rock'],
  'lizard' => ['paper', 'spock']
}

score = {
  'player' => 0,
  'computer' => 0
}

start()
loop do # main loop
  system 'clear'
  exit_program = false
  loop do
    display_score(score)
    choice = ''

    choice = input_format(ask_player(choice))
    computer_choice = CHOICES.sample
    prompt("You chose: #{choice}; computer chose: #{computer_choice}.", false)

    win?(choice, computer_choice, score)
    continue()

    if score['player'] > 2
      prompt('win_match')
      break
    elsif score['computer'] > 2
      prompt('lose_match')
      break
    end
    system 'clear'
  end

  answer = ''
  loop do
    prompt('play_again?')
    answer = gets.chomp.strip.downcase
    if answer.start_with?('y')
      score['player'] = 0 && score['computer'] = 0
      break
    elsif answer.start_with?('n')
      exit_program = true
      break
    end
    prompt('invalid_choice')
  end
  break if exit_program
end

prompt('goodbye')
