require 'yaml'
MESSAGES = YAML.load_file('rps_messages.yml')
CHOICES = %w(rock paper scissors spock lizard)


def prompt(message, yaml=true)
  if yaml
    puts("\n=> #{MESSAGES[message]}")
  else
    puts "\n=> #{message}"
  end
end

def ask_player(choice, actions=ACTIONS)
  loop do
    prompt('choose_action')
    choice = gets.chomp.strip.downcase
    if !search_by_abbr(choice).nil?
      choice = search_by_abbr(choice)
      break
    elsif actions.keys.include?(choice)
      break
    end
    system 'clear'
    prompt('invalid_choice')
  end
  choice
end

def win?(player, computer, score, actions=ACTIONS)
  if player == computer
    prompt('tie')
  elsif actions[player][:beats].include?(computer)
    score['player'] += 1
    prompt('win')
  else
    score['computer'] += 1
    prompt('lose')
  end
end

def search_by_abbr(choice, h=ACTIONS)
  action = h.select do |_, hash|
    hash[:abbr] == choice
  end
  action.keys[0]
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
  'rock' => { abbr: 'r', beats: ['scissors', 'lizard'] },
  'paper' => { abbr: 'p', beats: ['rock', 'spock'] },
  'scissors' => { abbr: 'sc', beats: ['paper', 'lizard'] },
  'spock' => { abbr: 'sp', beats: ['scissors', 'rock'] },
  'lizard' => { abbr: 'l', beats: ['paper', 'spock'] }
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

    choice = ask_player(choice)
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
