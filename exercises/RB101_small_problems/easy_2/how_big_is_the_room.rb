SQMETERS_TO_SQFEET = 10.7639

def calculate(length, width)
  area = (length * width).round(2)
  area_in_ft = ((length * width) * SQMETERS_TO_SQFEET).round(2)

  puts "The area of the room is #{area} " + \
       "square meters (#{area_in_ft} square ft)"
end

puts "=> Enter the length of the room in meters:"
length = gets.chomp.to_f

puts "=> Enter the width of the room in meters:"
width = gets.chomp.to_f

calculate(length, width)

# --- Further Exploartion ---

SQFEET_TO_SQINCHES = 144
SQFEET_TO_SQCM = 929.03

def calc_sqfeet(length, width)
  length * width
end

def sqfeet_to_sqinch(sq_feet)
  sq_feet * SQFEET_TO_SQINCHES
end

def sqfeet_to_sqcm(sq_feet)
  sq_feet * SQFEET_TO_SQCM
end

def display_area_size(sq_feet, sq_inches, sq_cm)
  puts "The room is #{sq_feet} square feet. This is equal to #{sq_inches} " \
  "square inches, or #{sq_cm} square centimeters."
end

room_area = Hash.new

puts "Enter room length in feet:"
length = gets.chomp.to_i
puts "Enter romm width in feet:"
width = gets.chomp.to_i

room_area['sq_feet'] = calc_sqfeet(length, width)
room_area['sq_inch'] = sqfeet_to_sqinch(room_area['sq_feet'])
room_area['sq_cm'] = sqfeet_to_sqcm(room_area['sq_feet'])

display_area_size(room_area['sq_feet'], room_area['sq_inch'], room_area['sq_cm'])