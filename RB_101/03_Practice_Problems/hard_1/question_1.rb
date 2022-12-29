# What do you expect to happen when the greeting variable is referenced in the last line of the code below?
if false
  greeting = "hello world"
end

greeting # => nil

=begin   

Returns `nil` because the condition evaluates to false
which prevents `greeting` from being assigned the value.

when you initialize a local variable within an if clause, 
even if that if clause doesn’t get executed, the local 
variable is initialized to nil.

=end