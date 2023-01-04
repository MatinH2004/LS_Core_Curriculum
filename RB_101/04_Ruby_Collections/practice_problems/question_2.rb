# How does count treat the block's return value? How can we find out?
['ant', 'bat', 'caterpillar'].count do |str|
  str.length < 4
end
# => 2
# returns the count of elements for which the block returns a truthy value