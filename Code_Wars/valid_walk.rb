# https://www.codewars.com/kata/54da539698b8a2ad76000228/train/ruby

def is_valid_walk(walk)
  return false unless walk.size == 10
  
  walk.each_with_object(map = Hash.new(0)) do |x, hash|
    hash[x] += 1
  end
  
  map.values.uniq.size == 1 ? true : false
end

# one liner
def is_valid_walk(walk)
  walk.count == 10 and walk.count('n') == walk.count('s') and walk.count('e') == walk.count('w')
end

p is_valid_walk(['n','s','n','s','n','s','n','s','n','s']) == true
p is_valid_walk(['w','e','w','e','w','e','w','e','w','e','w','e']) == false 
p is_valid_walk(['w']) == false
p is_valid_walk(['n','n','n','s','n','s','n','s','n','s']) == false