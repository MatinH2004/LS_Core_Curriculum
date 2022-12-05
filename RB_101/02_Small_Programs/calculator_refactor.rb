require 'yaml'
MESSAGES = YAML.load_file('calculator_messages.yml')
language = 'en'

def messages(message, lang='en')
  MESSAGES[lang][message]
end

def prompt(message)
  Kernel.puts("=> #{message}")
end

def number?(num)
  if num.to_i == num
    num.to_i
    true
  elsif num.to_f == num
    num.to_f
    true
  else
    false
  end
end

def operation_to_message(op)
  case op
  when '1'
    'Adding'
  when '2'
    'Subracting'
  when '3'
    'Multiplying'
  when '4'
    'Dividing'
  end
  op
end

prompt(MESSAGES['en']['choose_lang'])
prompt(MESSAGES['fr']['choose_lang'])

language_pref = ''
loop do
  language_pref = Kernel.gets().chomp()
  if language_pref.downcase() == 'en'
    language = 'en'
    break
  elsif language_pref.downcase() == 'fr'
    language = 'fr'
    break
  end
  prompt('invalid_lang')
end

prompt(messages('welcome', language))

name = ''
loop do
  name = Kernel.gets().chomp()

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
    number1 = Kernel.gets().chomp()

    if number?(number1.to_f)
      break
    else
      prompt(messages('invalid_name', language))
    end
  end

  number2 = ''
  loop do
    prompt(messages('second_number', language))
    number2 = Kernel.gets().chomp()

    if number?(number2.to_f)
      break
    else
      prompt(messages('invalid_number', language))
    end
  end

  prompt(messages('operator', language))

  operator = ''
  loop do
    operator = Kernel.gets().chomp()

    if %w(1 2 3 4).include?(operator)
      break
    else
      prompt(messages('choose_operator', language))
    end
  end

  prompt(operation_to_message(operator).to_s() + messages('numbers', language))

  result = case operator
           when '1' then number1.to_f() + number2.to_f()
           when '2' then number1.to_f() - number2.to_f()
           when '3' then number1.to_f() * number2.to_f()
           when '4' then number1.to_f() / number2.to_f()
           end

  prompt(messages('result', language) + result.to_s())

  prompt(messages('calculate_again', language))
  answer = Kernel.gets().chomp()
  break unless answer.downcase().start_with?('y')
end

prompt(messages('goodbye', language) + "#{name}!")
