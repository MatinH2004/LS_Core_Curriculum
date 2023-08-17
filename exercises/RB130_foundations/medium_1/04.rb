# Based on the examples shown above, write a method that takes an array as an argument. 
# The method should yield the contents of the array to a block, which should assign your 
# block parameters in such a way that it ignores the first two elements, and groups all 
# remaining elements as a raptors array.

birds = %w(finch woodpecker hawk pelican)

def types(arr)
  yield(arr)
end

types(birds) do |_, _, *carnivores|
  puts "Carnivores: #{carnivores.join(', ')}"
end