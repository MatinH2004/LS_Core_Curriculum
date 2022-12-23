# Describe the difference between ! and ? in Ruby. And explain what would happen in the following scenarios:

# what is != and where should you use it?
#     - means 'not equals' operator

# put ! before something, like !user_name
#     - (bang) means the 'not' opeartor
#     - Changes an objects bool value: !false == true

# put ! after something, like words.uniq!
#     - '!' after a method name usually means that the method is destructive

# put ? before something
#     - means that it is a ternary operation: a ? b : c

# put ? after something
#     - '?' after a method name usually means that the method returns a bool value

# put !! before something, like !!user_name
#     - used to turn any object into their boolean equivalent: !!false == false