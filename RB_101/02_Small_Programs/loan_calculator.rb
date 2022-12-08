require 'yaml'
MESSAGES = YAML.load_file('loan_calc_messages.yml')

def prompt(message)
  puts("\n=> #{message}")
end

# sub! method removes leading zeros
def valid_num?(num, remove_zero=true)
  num.sub!(/^[0]+/, '') if remove_zero
  (num.to_i.to_s == num || num.to_f.to_s == num)
end

def calculate(loan_amount, interest, duration)
  interest_rate = ((interest / 12) / 100)
  payment = loan_amount *
            (interest_rate / (1 - (1 + interest_rate)**(-duration)))

  monthly_interest = (payment - (loan_amount / duration))
  total_payment = (duration * payment)

  result = <<-MSG
  Results:
  
  Total of #{duration} payments: $#{format('%.2f', total_payment)}
  Payment Every Month: $#{format('%.2f', payment)}
  Monthly interest: $#{format('%.2f', monthly_interest)}
  Total interest: $#{format('%.2f', (monthly_interest * duration))}
  MSG

  prompt(result)
end

prompt(MESSAGES['greeting'])
prompt(MESSAGES['name_input'])

name = ''
loop do
  name = gets.chomp
  break unless name.empty?
  prompt(MESSAGES['name_invalid'])
end

prompt("Hello #{name}!")

loop do # main loop
  prompt(MESSAGES['loan_amount'])
  loan = ''
  loop do
    loan = gets.chomp.tr('_', '')
    loan.delete!('$') if loan.include?('$')
    break unless loan.empty? || valid_num?(loan) == false
    prompt(MESSAGES['loan_invalid'])
  end

  prompt(MESSAGES['apr_rate'])
  apr = ''
  loop do
    apr = gets.chomp
    apr.delete!('%') if apr.include?('%')
    break if valid_num?(apr) && apr.to_f.between?(0, 100)
    prompt(MESSAGES['apr_invalid'])
  end

  prompt(MESSAGES['loan_duration'])
  years = ''
  months = ''
  loop do
    prompt(MESSAGES['duration_years'])
    loop do
      years = gets.chomp
      break if valid_num?(years, false)
      prompt(MESSAGES['duration_invalid'])
    end

    prompt(MESSAGES['duration_months'])
    loop do
      months = gets.chomp
      break if valid_num?(months, false)
      prompt(MESSAGES['duration_invalid'])
    end
    break unless years <= '0' && months <= '0'
    prompt(MESSAGES['zero_input'])
  end

  duration = ((years.to_i * 12) + months.to_i)

  prompt(MESSAGES['calculating'])
  calculate(loan.to_f, apr.to_f, duration)

  prompt(MESSAGES['calculate_again'])
  exit_program = false

  loop do
    answer = gets.chomp.downcase
    if answer.start_with?('y')
      system('clear')
      prompt(MESSAGES['recalculate'])
      break
    elsif answer.start_with?('n')
      exit_program = true
      break
    else
      prompt(MESSAGES['invalid_input'])
    end
  end
  break if exit_program
end

prompt("Goodbye #{name}!")
