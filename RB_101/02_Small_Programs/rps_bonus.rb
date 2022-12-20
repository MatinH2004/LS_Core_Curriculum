require 'yaml'
MESSAGES = YAML.load_file('rps_messages.yml')
MATCH_WINNING_SCORE = 3
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

def prompt(message, yaml=true)
  if yaml
    puts("\n=> #{MESSAGES[message]}")
  else
    puts "\n=> #{message}"
  end
end

# ask player for choice; can input by name or ABBReviation
def ask_player(choice, actions=ACTIONS)
  loop do
    prompt('choose_action')
    choice = gets.strip.downcase
    if !search_by_abbr(choice).nil?
      choice = search_by_abbr(choice)
      break
    elsif actions.keys.include?(choice)
      break
    end
    system('clear')
    prompt('invalid_choice')
  end
  choice
end

# search action by abbreviation, 'r' => 'rock'
def search_by_abbr(choice, h=ACTIONS)
  action = h.select do |_, hash|
    hash[:abbr] == choice
  end
  action.keys[0]
end

# determine winner of the round
def determine_outcome(player, computer, score, actions=ACTIONS)
  if player == computer
    display_outcome()
  elsif actions[player][:beats].include?(computer)
    display_outcome('player', score)
  else
    display_outcome('computer', score)
  end
end

def display_outcome(winner='', score=nil)
  return prompt('tie') if winner.empty?
  update_score(winner, score)
  if winner == 'player'
    prompt('win')
  else
    prompt('lose')
  end
end

def display_score(score)
  result = <<-MSG
  Your score: #{score['player']}
  Computer score: #{score['computer']}
  MSG
  puts result
end

def update_score(player, data)
  data[player] += 1
end

def start
  system('clear')
  prompt('welcome')
  prompt('rules')
  continue()
end

def continue
  prompt('press_continue')
  gets
end

start()
loop do # main loop
  system('clear')
  exit_program = false
  loop do
    display_score(score)
    choice = ''

    choice = ask_player(choice)
    computer_choice = ACTIONS.keys.sample
    prompt("You chose: #{choice}; computer chose: #{computer_choice}.", false)

    determine_outcome(choice, computer_choice, score)
    continue()

    if score['player'] == MATCH_WINNING_SCORE
      prompt('win_match')
      break
    elsif score['computer'] == MATCH_WINNING_SCORE
      prompt('lose_match')
      break
    end
    system('clear')
  end

  answer = ''
  loop do
    prompt('play_again?')
    answer = gets.strip.downcase
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
