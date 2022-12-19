def tip_calc(total, tip_percent)
  tip_amount = (tip_percent / 100) * total
  puts "The tip is $#{format('%.2f', tip_amount)}\n" + \
       "The total is $#{format('%.2f', total + tip_amount)}"
end

puts "What is the bill?"
bill = gets.chomp.to_f
puts "What is the tip percentage?"
tip = gets.chomp.to_f

tip_calc(bill, tip)