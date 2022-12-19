def calc_retire(age, retire_age)
  t = Time.now.year
  years_til_retire = retire_age - age
  puts "It's #{t}. You will retire in #{t + years_til_retire}.\n" + \
       "You only have #{years_til_retire} years of work to go!"
end

puts "=> What is your age?"
age = gets.chomp.to_i

puts "=> At what age would you like to retire?"
retire_age = gets.chomp.to_i

calc_retire(age, retire_age)