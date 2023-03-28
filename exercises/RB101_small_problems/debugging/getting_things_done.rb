# We wrote a method for moving a given number of elements from one 
# array to another. We decide to test it on our todo list, but 
# invoking move on line 11 results in a SystemStackError. 
# What does this error mean and why does it happen?

def move(n, from_array, to_array)
  return if n == 0 || from_array.size < n # FE
  to_array << from_array.shift
  move(n - 1, from_array, to_array)
end

# Example

todo = ['study', 'walk the dog', 'coffee with Tom']
done = ['apply sunscreen', 'go to the beach']

move(2, todo, done)

p todo == ['coffee with Tom']
# true

p done == ['apply sunscreen', 'go to the beach', 'study', 'walk the dog']
# true

=begin
  
-- Written Assesment Evaluation --

Lines 6 to 10 defines the method `move` which takes two parameters.
On line 14 local variable `todo` is initialized to the array object
containing three strings: `'study', 'walk the dog', 'coffee with Tom'`.
Local variable `done` is initialized to the array object containing two
strings: `'apply sunscreen', 'go to the beach'`.

On line 17, the `move` method is invoked and pass in the arguments `2`, 
`todo` and `done`, bound to method parameters `n`, `from_array` and `to_array`,
respectively.

Within the `move` method, we have an explicit return if the value of `n` is
equal to `0` or if `n` is greater than size of `from_array`.

On line 8, we call `shift` on `from_array` to destructively remove the first
element from the array, and we append that element to the `to_array` using the 
shovel method `<<`.

On the following line we recursively call `move` again and pass in `n - 1`, `from_array`
and `to_array` as arguments. The `move` method should stop recurring once `n` is 0 or size
of `from_array` is smaller than `n`.


=end