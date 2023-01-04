# What is the block's return value in the following code? 
# How is it determined? Also, what is the return value of #any? 
# in this code and what does it output?
[1, 2, 3].any? do |num|
  puts num
  num.odd?
end

# => true
# 1 is odd, so loop stops iterating after the first iteration.