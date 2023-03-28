
def reverse_sentence(sentence)
  words = sentence.split(' ')
  reversed_words = []

  i = 0
  while i < words.length
    # change below: words[i] --> [words[i]] to concat arrays
    reversed_words = [words[i]] + reversed_words
    i += 1
  end

  reversed_words.join(' ')
end

p reverse_sentence('how are you doing')
# expected output: 'doing you are how'

=begin
  
-- Written Assesment Evaluation --

On lines 2 to 14 the `reverse_sentence` method is defined, which
takes a method parameter called `sentence`. On line 3, local variable
`words` is assigned to the return value of `Array#split` method being called
upon `sentences` and passed in `' '` as the delimiters. Local variable
`reversed_words` is assigned to an empty array on line 4, and local
variable `i` is assigned to integer value `0`, both scoped at the method
level.

On line 7, a `while` loop is executed, while the return value of
`String#length` being called on `words` is greater than the integer
referenced by `i`. Within the loop, `reversed_words` is reassigned to
the return value of `words` at index `i` concatenated to `reversed_words`.
On the following line, the `Integer#+` method is called on `i` and passed
in the argument `1`, which increments `i` by 1.

On the last line of our method definition, `Array#join` is called on
our `reversed_words` array and passed `' '` as delimiter, which
concatenates every string from the array back together using ' '.

Finally, on line 16, the `p` method is invoked and the return value
of `reversed_sentence` passed in with the argument `'how are you doing'`,
which outputs `'doing you are how'` and returns `'doing you are how'`.
  
=end