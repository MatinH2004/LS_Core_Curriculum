require 'pry'

password = nil

def set_password
  puts 'What would you like your password to be?'
  new_password = gets.chomp
  # password = new_password
  new_password
end

def verify_password(password)
  puts '** Login **'
  print 'Password: '
  input = gets.chomp

  if input == password
    puts 'Welcome to the inside!'
  else
    puts 'Authentication failed.'
  end
end

if !password
  password = set_password
end

verify_password(password)

# Solution:
#   1. reassign `password` to return value of #set_password
#   2. return value of `new_password` instead of creating new var
#   3. pass in password as an argument to #verify_password method

