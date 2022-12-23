# The Ruby Array class has several methods for removing items from the array. 
# Two of them have very similar names. Let's see how they differ:

numbers = [1, 2, 3, 4, 5]

# What do the following method calls do (assume we reset numbers to the original array between method calls)?

p numbers.delete_at(1) # => 2
p numbers.delete(1)    # => 1

=begin

The #delete_at method deletes values based on the index it is given.
Therefore, '2' will be deleted from array because it is at index 1.

The #delete method deletes any value that matches the value in param.
So, '1' (at index 0) will be deleted from the array.

=end