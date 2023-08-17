items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  puts "#{yield(items)}"
  puts "Nice selection of food we have gathered!"
end

p gather(items) { |produce| produce.join(', ') }
p gather(items) { |produce| produce.join('--') }
p gather(items) { |produce| produce.map(&:capitalize).join(' + ') }

a = gather(items) do |produce|
  puts "We've gathered some vegetables: #{produce[1]} and #{produce[2]}"
end

p a