
=begin

1. create 'repeat' method
2. 2 args; 1 string, 1 int
3. integer arg must default to 1
4. use #times method to print string as many times
   as the user wants.

=end

def repeat(string, num = 1)
  num.times { puts string }
end

repeat('hello') # default = 1
repeat('Hi', 5) # print 5 times