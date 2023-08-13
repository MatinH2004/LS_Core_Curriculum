# - iterate until falsy block value returned

# LS Solution
def drop_while(array)
  index = 0
  while index < array.size && yield(array[index])
    index += 1
  end
  array[index..-1]
end

def drop_while(array)
  index = 0
  array.each do |ele|
    break if !yield(ele)
    index += 1
  end
  array[index..]
end

p drop_while([1, 3, 5, 6]) { |value| value.odd? } == [6]
p drop_while([1, 3, 5, 6]) { |value| value.even? } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| true } == []
p drop_while([1, 3, 5, 6]) { |value| false } == [1, 3, 5, 6]
p drop_while([1, 3, 5, 6]) { |value| value < 5 } == [5, 6]
p drop_while([]) { |value| true } == []