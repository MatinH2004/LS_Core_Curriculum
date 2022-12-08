require 'yaml'
require 'pry'
MESSAGES = YAML.load_file('calculator_messages.yml')
language = 'en'

# default language: english
def messages(message, lang='en')
  MESSAGES[lang][message]
end

def prompt(message)
  Kernel.puts("=> #{message}")
end

# remove decimal if number is whole
def int_format(num)
  num % 1 == 0 ? num.to_i() : num
end

# validate user number
def number?(num)
  (num.to_f.to_s == num || num.to_i.to_s == num)
end

def operation_to_message(op, lang)
  operation = case op
              when '1' then prompt(messages('add_nums', lang))
              when '2' then prompt(messages('subtract_nums', lang))
              when '3' then prompt(messages('multiply_nums', lang))
              when '4' then prompt(messages('divide_nums', lang))
              end
  operation
end

prompt(MESSAGES['en']['choose_lang'])
prompt(MESSAGES['fr']['choose_lang'])

language_pref = ''
loop do
  language_pref = Kernel.gets().chomp().strip()
  if language_pref.downcase() == 'en'
    language = 'en'
    break
  elsif language_pref.downcase() == 'fr'
    language = 'fr'
    break
  end
  prompt(messages('invalid_lang', language))
end

prompt(messages('welcome', language))

name = ''
loop do
  name = Kernel.gets().chomp().strip()

  if name.empty?()
    prompt(messages('invalid_name', language))
  else
    break
  end
end

prompt(messages('greeting', language) + "#{name}!")

loop do # main loop
  number1 = ''
  loop do
    prompt(messages('first_number', language))
    number1 = Kernel.gets().chomp().strip()

    if number?(number1)
      break
    else
      prompt(messages('invalid_number', language))
    end
  end

  number2 = ''
  loop do
    prompt(messages('second_number', language))
    number2 = Kernel.gets().chomp().strip()

    if number?(number2)
      break
    else
      prompt(messages('invalid_number', language))
    end
  end

  prompt(messages('operator', language))

  operator = ''
  loop do
    operator = Kernel.gets().chomp().strip()

    if %w(1 2 3 4).include?(operator)
      operation_to_message(operator, language)
      break
    else
      prompt(messages('choose_operator', language))
    end
  end

  result = case operator
           when '1' then number1.to_f() + number2.to_f()
           when '2' then number1.to_f() - number2.to_f()
           when '3' then number1.to_f() * number2.to_f()
           when '4' then number1.to_f() / number2.to_f()
           end

  prompt(messages('result', language) + int_format(result).to_s())

  prompt(messages('calculate_again', language))
  exit_program = false
  loop do
    answer = Kernel.gets().chomp().downcase().strip()
    if answer.start_with?('y')
      system('clear')
      break
    elsif answer.start_with?('n')
      exit_program = true
      break
    else
      prompt(messages('invalid_again?', language))
    end
  end
  break if exit_program
end

prompt(messages('goodbye', language) + "#{name}!")
