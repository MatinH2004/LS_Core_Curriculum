arr = ["9", "8", "7", "10", "11"]
arr.sort! do |x, y| # my solution
  y.to_i <=> x.to_i
end

p arr

# Expected output: ["11", "10", "9", "8", "7"] 
# Actual output: ["10", "11", "7", "8", "9"] 

# LS Solution 1
p(
  arr.sort do |x, y|
    y.to_i <=> x.to_i
  end
)

# LS Solution 2
p arr.sort { |x, y| y.to_i <=> x.to_i }

=begin
  
-- Written Assesment Evaluation --

On line 1 we initialize local variable `arr` to the array object
`["9", "8", "7", "10", "11"]`. We then call `sort!` upon `arr` and
pass in a `do..end` block on lines 2 to 4 as an argument. The block 
takes two parameters `x` and `y`. 

In order to sort the array in reverse
order, we must call the comparison operator `<=>` on block parameter `y`
and pass `x` in as an argument. This compares the second item and orders
it in reverse order.

Finally we call the `p` method which takes `arr` as
an argument, and outputs the reverse sorted array, and returns the array
as well.
  
=end