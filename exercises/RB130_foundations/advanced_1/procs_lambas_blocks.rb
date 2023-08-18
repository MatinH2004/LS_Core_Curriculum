# Group 1
my_proc = proc { |thing| puts "This is a #{thing}." }
puts my_proc
puts my_proc.class
my_proc.call
my_proc.call('cat')

# Group 2
my_lambda = lambda { |thing| puts "This is a #{thing}." }
my_second_lambda = -> (thing) { puts "This is a #{thing}." }
puts my_lambda
puts my_second_lambda
puts my_lambda.class
my_lambda.call('dog')
# my_lambda.call
my_third_lambda = Lambda.new { |thing| puts "This is a #{thing}." }

# Group 3
def block_method_1(animal)
  yield
end

block_method_1('seal') { |seal| puts "This is a #{seal}."}
block_method_1('seal')

# Group 4
def block_method_2(animal)
  yield(animal)
end

block_method_2('turtle') { |turtle| puts "This is a #{turtle}."}
block_method_2('turtle') do |turtle, seal|
  puts "This is a #{turtle} and a #{seal}."
end
block_method_2('turtle') { puts "This is a #{animal}."}

=begin

--- OBSERVATIONS ---

GROUP 1:
- we define a proc, by writing proc followed by a block
- calling `puts` on a proc object outputs the proc's object encoding
- calling `class` on a proc object returns 'Proc'
- if no arguments are yielded to the proc, the parameter references `nil`
- when `call` is invoked with an argument, the argument is referenced by the block parameter

GROUP 2:
- lambdas are defined by writing lambda followed by a block
  - or like this: my_lambda = -> (block_param) { puts "#{block_param}" }
  - we cannot define a lambda using `Lambda.new`, they are an instance of Proc class
- just like procs, calling puts on a lambda outputs a proc object encoding
- calling `class` on a lambda returns `Proc`
- we can call a lambda by invoking `call` on the object and passing in the correct number of args
- not passing in the correct number of args raises ArgumentError, due to lamda's strict arity

GROUP 3:
- when no args are passed with the `yield` method, the block parameter references nil
- blocks dont care about number of args => lenient arity
- LocalJumpError is raised when yield is called without a block passed in to the method

GROUP 4:
- when the method param is passed as arg in the yield method, the block param references the object passed in
- when less than arguments are passed to the block through yield, the other block params refer nil
- we cannot call method parameters in a block. NameError is raised.

--- ANALYSIS ---

* Lambdas are types of Proc's. Technically they are both Proc objects. 
  An implicit block is a grouping of code,a type of closure, it is not an Object.

* Lambdas enforce the number of arguments passed to them. Implicit blocks and 
  Procs do not enforce the number of arguments passed in.

=end