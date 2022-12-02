
def stringy(number, start=1)
  (start..number).to_a.map {|num| num.odd? ? '1' : '0'}.join
end

puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'