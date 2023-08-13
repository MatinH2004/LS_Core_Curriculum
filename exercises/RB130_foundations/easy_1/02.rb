def compute
  block_given? ? yield : 'Does not compute.'
end

p compute { 5 + 3 } == 8
p compute { 'a' + 'b' } == 'ab'
p compute == 'Does not compute.'

# Further Exploration

def compute(arg=nil)
  block_given? ? yield(arg) : 'Does not compute.'
end

p compute('Hello') { |str| str + ' world' }
p compute((0..5).to_a) { |arr| arr.map { |x| x * 3} }
p compute('420') { |num| 28_980 / num.to_i }