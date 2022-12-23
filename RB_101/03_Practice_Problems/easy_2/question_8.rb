# Shorten the following sentence:
advice = "Few things in life are as important as house training your pet dinosaur."

# Review the String#slice! documentation, and use that method to make the return value 
# "Few things in life are as important as ". But leave the advice variable as "house training your pet dinosaur.".

p advice.slice(0..38)                       # => "Few things in life are as important as "
p advice.slice!(0, advice.index('house'))   # => "Few things in life are as important as " (better way to do it)
p advice                                    # => "house training your pet dinosaur."

=begin 

What would happen if we used #slice instead of #slice! ?

Since #slice is non-mutative, it would still return:
"Few things in life are as important as "

However, the `advice` variable would still be pointing
to the original string.

=end