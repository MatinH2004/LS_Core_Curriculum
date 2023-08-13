def each_with_index(array)
  array.each { |ele| yield(ele, array.index(ele)) }
end

result = each_with_index([1, 3, 6]) do |value, index|
  puts "#{index} -> #{value**index}"
end

puts result == [1, 3, 6]

# 0 -> 1
# 1 -> 3
# 2 -> 36
# true

# LS Solution
def each_with_index(array)
  index = 0
  array.each do |item|
    yield(item, index)
    index += 1
  end
end