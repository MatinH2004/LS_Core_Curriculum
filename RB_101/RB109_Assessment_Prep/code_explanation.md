
# Code Explanation Using Precise Language

[Problems & Examples](https://fine-ocean-68c.notion.site/RB109-Written-Questions-From-Christian-Larwood-s-Blog-91bcc598a24d4ad6aadad86802e7412b)

### Example 1

What does the following code return? What does it output? Why? What concept does it demonstrate?

```
a = “Hello”
b = a
a = “Goodbye”

puts a
puts b
```

On the first line, local variable `a` is assigned to the String object `"Hello"`. On the next line, local variable `b` is assigned to the object referenced by variable `a`, which is the String object `"Hello"`. On the following line, `a` is reassigned to `'Goodbye'`. Next, we call the method `puts` and pass the reference of variable `a`, which then `'Goodbye'` is output, and `nil` is returned. On the next line, similarly, the call the method `puts` and pass in the object variable `b` is referencing, which outputs `"Hello"` and returns `nil`.

### Example 2

What does the following code return? What does it output? Why? What concept does it demonstrate?

```
a = 4

loop do  
  a = 5  
  b = 3

  break
end

puts a
puts b
```

On line 1, we assign local variable `a` to the Integer object `4`. On lines 3 to 8, we call the `loop` method, along with a `do/end` which defines a block. Within the block, our local variable `a` is reassigned to the Integer object `5`, and a new local variable `b` is bound to the Integer object `3`. Next, the program exits the loop from the `break` statement. Then, we call the `puts` method and pass in our local variable `a` as an argument, which outputs `5` to the console, and returns `nil`. On the next line, we call `puts` method again, but this time we pass in the variable `b` which we initialized previously, inside the block. This action would raise an exception, and throw the error 'undefined local variable `b' for main:Object'. This problem demonstrates the concept of variable scope, specifically the fact that variables created in an inner scope aren't available in the outer scope (the rest of our program).

### Example 3

What does the following code return? What does it output? Why? What concept does it demonstrate?

```
a = 4
b = 2

loop do  
  c = 3  
  a = c  
  break
end

puts a
puts b
```

The local variable `a` is assigned to Integer object `4`, and local variable `b` is assigned to Integer object `2` on lines 1 to 2. The `do..end` along side the `loop` method invocation on lines 4 to 8 defines a new block, where a new local variable `c` is assigned to Integer object `3`, and `a` is reassigned to the value referenced by `c`. `a` is now a new object and has a new value. Finally, we exit the loop from the `break` statement on line 7. On line 10, the `puts` method is called and `a` is passed in as an argument, which outputs `3`, and returns `nil`. Once again, the `puts` method is called again and `b` is passed in as an argument, which outputs `2` and returns `nil`. This problem demonstrates the concept of variable scope and reassignment.

### Example 4

What does the following code return? What does it output? Why? What concept does it demonstrate?

```
def example(str)
  i = 3  
  loop do    
    puts str    
    i -= 1    
    break if i == 0  
  end
end

example('hello')
```

On line 1, we are defining a method called `example` which takes one parameter named `str`. The variable `i` is assigned to Integer object `3` which is scoped at the method-level, on line 2. The `do..end` alongside the `loop` method invocation defines a new block on lines 3 to 7. Within the block, the `puts` method is called and the method parameter `str` is passed in as an argument, which would output the object referenced, and return `nil`. Next line, we are reassigning the variable `i` to the return value of `Integer#-` method called on `i` with the integer `1` passed to it as an argument. We break out of the loop with the keyword `break` if the value of the object that local variable `i` is referencing is equal to `0`. Finally, we call the `example` method and pass the String object `'hello'` as an argument, which would output `'hello'` three times and return `nil`. This problem demonstrates the concept of variable scope within method definitions.

### Example 5

What does the following code return? What does it output? Why? What concept does it demonstrate?

```
def greetings(str)
  puts str
  puts "Goodbye"
end

word = 'Hello'
greetings(word)
```

Local variable `word` is initialized to the String object `'hello'` on line 6. On line 7, we call `greetings` method and pass in a reference of local variable `word` as an argument. On line 1, the `greetings` method is defined and takes one parameter, `str`. `str` is local variable scoped at the method-level and contains a reference to the String object assigned to `word`. The `puts` method is invoked and `str` is passed in as an argument, on line 2. As a result, `'Hello'` will be output, and `nil` will be returned. On line 3, we invoke the `puts` method and pass in the String object `'Goodbye'`, which the string will be output to the console, and `nil` will be returned. Since our `puts` method is the last evaluated line in out `greetings` method, it will have a return value of `nil`. This problem demonstrates the concept of variable scope.

### Example 7

What does the following code return? What does it output? Why? What concept does it demonstrate?

```
a = 'Bob'

5.times do |x|  
  a = 'Bill'
end

p a
```

The local variable `a` is assigned to the String object `'Bob'` on line 1. On line 3, the `Integer#times` method is invoked on the Integer object `5`, and passed in a `do..end` block as an argument. The block is defined on line 3 to 5, and contains the block parameter `x`. On line 4, our local variable `a` is reassigned to String object `'Bill'` five times until the iteration ends. We invoke the `p` method and pass in the local variable `a` as an argument, which will output `'Bill'` and return `nil`. This problem demonstrates the concept of variable scope; specifically the fact that local variables initialized in our main program is accessible in inner scopes throughout the program.