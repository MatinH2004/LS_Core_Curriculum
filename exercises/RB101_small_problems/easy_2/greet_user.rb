def greet(name)
  if name[-1] == '!'
    name = name.chop # or use .chomp('!')
    puts "HELLO #{name.upcase}. WHY ARE WE SCREAMING?"
  else
    puts "Hello #{name}"
  end
end

puts "What is your name?"
name = gets.chomp

greet(name)