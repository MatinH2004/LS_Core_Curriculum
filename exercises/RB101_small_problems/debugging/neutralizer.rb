# We wrote a neutralize method that removes negative words 
# from sentences. However, it fails to remove all of them. 
# What exactly happens?

def neutralize(sentence)
  words = sentence.split(' ')

  # Solution: use #reject! to remove negative words
  words.reject! { |word| negative?(word) }

  # other solution: create duplicate copy of `words` array
  # words.dup.each do |word|
  #   words.delete(word) if negative?(word)
  # end

  words.join(' ')
end

def negative?(word)
  [ 'dull',
    'boring',
    'annoying',
    'chaotic'
  ].include?(word)
end

puts neutralize('These dull boring cards are part of a chaotic board game.')
# Expected: These cards are part of a board game.
# Actual: These boring cards are part of a board game.

=begin
  
-- Written Assesment Evaluation --

On lines 5 to 17, the method `neutralize` is defined, and takes one param.

On lines 19 to 25, the method `negative?` is defined, and takes one param.
  
On line 27, within the argument of our `puts` method, `neutralize` is invoked,
and passed in the string object `'These dull boring cards are part of a chaotic board game.'`,
which is bound to method parameter `sentence`.

On line 6 local variable `words` is initialized to the return value of `split` method
being called on our string `sentence`, with the delimiters of `' '`.

We call a mutative method, `Enumerable#reject!` on the `words` array, and pass in a
block with `word` as the block parameter. Within the block, we call the `negative?` method
and pass in the `word` as the current word. Within that method, it checks if `word` is
included in the array of negative words. If the return value is true, the word is removed
from our `words` array, otherwise it stays.

Finally we call `join` with the delimiters of `' '` on our `words` array which will
join our strings back into one string sentence.

'These cards are part of a board game.' is output to the screen and `nil` is returned.


=end