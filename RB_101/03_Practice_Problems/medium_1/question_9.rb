# Consider these two simple methods:
def foo(param = "no")
  "yes"
end

def bar(param = "no")
  param == "no" ? "yes" : "no"
end

# What would be the return value of the following method invocation?
p bar(foo)

=begin

Since we dont pass `foo` an argument, it defaults to 'no'
which then returns 'yes'. So, in bar(), foo != 'no', therefore
'no' from the ternary operation is returned.

=end