require 'yaml'
MESSAGES = YAML.load_file('loan_calc_messages.yml')

def prompt(message)
  puts("\n=> #{message}")
end

def remove_zeros(num)
  num.to_f * 1
end

def valid_num?(num)
  return false if num.empty?
  new_num = remove_zeros(num) # remove leading & trailing zeros
  new_num.to_i == new_num || new_num.to_f == new_num
end

def calculate(loan_amount, apr, duration)
  interest_rate = ((apr / 12) / 100)
  if apr > 0
    payment = loan_amount *
              (interest_rate / (1 - (1 + interest_rate)**(-duration)))
  else
    payment = (loan_amount / duration)
  end

  monthly_interest = (payment - (loan_amount / duration))
  total_payment = (duration * payment)

  result = <<-MSG
  Loan summary:
  
  Total of #{duration} payments: $#{format('%.2f', total_payment)}
  Monthly Payment: $#{format('%.2f', payment)}
  Total interest: $#{format('%.2f', (monthly_interest * duration))}
  Monthly interest: $#{format('%.2f', monthly_interest)}
  MSG

  prompt(result)
end

system('clear')
prompt(MESSAGES['greeting'])
prompt(MESSAGES['name_input'])

name = ''
loop do
  name = gets.chomp.strip.capitalize
  break unless name.empty?
  prompt(MESSAGES['name_invalid'])
end

prompt("Hello #{name}!")

loop do # main loop
  prompt(MESSAGES['loan_amount'])
  loan = ''
  loop do
    loan = gets.chomp.strip.tr('_', '')
    loan.delete!('$') if loan.include?('$')
    break if valid_num?(loan)
    prompt(MESSAGES['loan_invalid'])
  end

  prompt(MESSAGES['apr_rate'])
  apr = ''
  loop do
    apr = gets.chomp.strip
    apr.delete!('%') if apr.include?('%')
    break if valid_num?(apr) && apr.to_f >= 0
    prompt(MESSAGES['apr_invalid'])
  end

  prompt(MESSAGES['loan_duration'])
  years = ''
  months = ''
  loop do
    prompt(MESSAGES['duration_years'])
    loop do
      years = gets.chomp.strip
      break if valid_num?(years)
      prompt(MESSAGES['duration_invalid'])
    end

    prompt(MESSAGES['duration_months'])
    loop do
      months = gets.chomp.strip
      break if valid_num?(months)
      prompt(MESSAGES['duration_invalid'])
    end

    break unless years <= '0' && months <= '0'
    prompt(MESSAGES['zero_input'])
  end

  duration = ((years.to_i.abs * 12) + months.to_i.abs)
  # to avoid errors, calculate using absolute values
  # incase a negative number was inputted by accident
  prompt(MESSAGES['calculating'])
  calculate(loan.to_f.abs, apr.to_f.abs, duration)

  prompt(MESSAGES['calculate_again'])
  exit_program = false

  loop do
    answer = gets.chomp.strip.downcase
    if answer.start_with?('y')
      system('clear')
      prompt(MESSAGES['recalculate'])
      break
    elsif answer.start_with?('n')
      exit_program = true
      break
    end
    prompt(MESSAGES['invalid_input'])
  end
  break if exit_program
end

prompt("Goodbye #{name}!")
