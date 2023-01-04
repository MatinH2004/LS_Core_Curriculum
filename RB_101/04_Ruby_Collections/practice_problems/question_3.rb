# What is the return value of reject in the following code? Why?
[1, 2, 3].reject do |num|
  puts num
end

# => [1, 2, 3]
# returns a new array containing items where the block's return value is "falsy".
# 'rejects' all values that meet the conditions from block.