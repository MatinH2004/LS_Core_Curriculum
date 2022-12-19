age = rand(20..200)
puts "Teddy is #{age} years old"

#further exploration

name = gets.chomp

def random_age(name='Teddy')
  age = rand(20..200)
  puts "#{name.capitalize} is #{age} years old."
end

random_age(name)
random_age("Teddy")
random_age
random_age("Bill")