
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

On the first line, local variable `a` is assigned to the String object `"Hello"`. On the next line, local variable `b` is assigned to the object referenced by variable `a`, which is the String object `"Hello"`. On the following line, `a` is reassigned to `'Goodbye'`. 

Next, we call the method `puts` and pass in the reference of variable `a` as an argument, which then `'Goodbye'` is output, and `nil` is returned. On the next line, similarly, we call the method `puts` and pass in the object that variable `b` is referencing, which outputs `"Hello"` and returns `nil`.

This problem demonstrates the concept of variables as pointers; specifically the fact that more than one variable can point to the same object, and later be reassigned to a new object.

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

On line 1, we assign local variable `a` to the Integer object `4`. On lines 3 to 8, we call the `loop` method, along with a `do..end` block passed in as an argument. Within the block, our local variable `a` is reassigned to the Integer object `5`, and a new local variable `b` is bound to the Integer object `3`. Next, the program exits the loop using the `break` keyword. 

Then, on line 10, we call the `puts` method and pass in our local variable `a` as an argument, which outputs `5` to the console, and returns `nil`. On the next line, we call `puts` method again, but this time we pass in the variable `b` which we initialized previously, inside the block. This action would raise an exception, and throw the error 'undefined local variable or method `b' for main:Object'.

This problem demonstrates the concept of variable scope, specifically the fact that  local variables that are initialized in an inner scope CAN’T be accessed in the outer scope, but local variables that are initialized in the outer scope CAN be accessed in an inner scope.

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

The local variable `a` is assigned to Integer object `4`, and local variable `b` is assigned to Integer object `2` on lines 1 - 2. The `do..end` along side the `loop` method invocation on lines 4 to 8 defines a new block, where a new local variable `c` is assigned to Integer object `3`, and `a` is reassigned to the value referenced by `c`. `a` is now a new object and has a new value. Finally, we exit the loop from the `break` statement on line 7. On line 10, the `puts` method is called and `a` is passed in as an argument, which outputs `3`, and returns `nil`. Once again, the `puts` method is called again and `b` is passed in as an argument, which outputs `2` and returns `nil`. 

This problem demonstrates the concept of variable scope and pointers, because we were able to reassign local variable `a` to point to a new object within the block.

### Example 4 *

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

On lines 1-8 we are defining the method `example` which takes 1 parameter named `str`. On line 10 we are calling the method `example` and passing in the string object `'hello'` as an argument.

**Side note:** Methods are defined with **parameters**, but they are called with **arguments**.

On line 2 of this code, we are initializing the local variable `i` (scoped at the method-level) and assigning to it an integer object with the value of `3`. On line 3, we are calling the method `loop` and **passing in** the `do..end` block as an argument. Within the block, on line 4, we are calling the `puts` method and passing in local variable `str` as an argument. On line 5, local variable `i` is reassigned. We invoke the `Integer#-` method on `i` with the integer `1` passed to it as an argument. On line 6, we break out of the loop using the `break` keyword if the value of the object that local variable `i` is referencing is equal to `0`. On line 10, we call the method `example` and pass in the string object `'hello'` as an argument.

Finally, this code **outputs** string `'hello'` 3 times and **returns** `nil`, because the last evaluated expression is `break if i == 0`. This problem demonstrates the concept of variable scope within method definitions.

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

Local variable `word` is initialized to the String object `'hello'` on line 6. On line 7, we call `greetings` method and pass in a reference of local variable `word` as an argument. 

On line 1, the `greetings` method is defined and takes one parameter, `str`. `str` is local variable scoped at the method-level and contains a reference to the String object assigned to `word`. The `puts` method is invoked and `str` is passed in as an argument, on line 2. As a result, `'Hello'` will be output, and `nil` will be returned. On line 3, we invoke the `puts` method and pass in the String object `'Goodbye'`, which the string will be output to the console, and `nil` will be returned. Since our `puts` method is the last evaluated line in out `greetings` method, it will have a return value of `nil`. This problem demonstrates the concept of variable scope.

### Example 6

What does the following code return? What does it output? Why? What concept does it demonstrate?

```
arr = [1, 2, 3, 4]
counter = 0
sum = 0

loop do  
  sum += arr[counter]  
  counter += 1  
  break if counter == arr.size
end 

puts "Your total is #{sum}"
```

We initialize the local variable `arr` to the array `[1, 2, 3, 4]`, initialize the local variable `counter` to integer object `0`, and initialize local variable `sum` to integer object `0`, on the first 3 lines of our program. 

On line 5, the `loop` method is invoked, along with a `do..end` block as an argument. Within the block, the `Integer#+` method is called on `sum`, and `arr[counter]` passed in as an argument, which adds the value of `sum` to the first value in `arr`, which is `1`. Next line, the `Integer#+` is called on the `counter` variable, and the value of `1` passed in as an argument, which increments the value of `counter`. We break out of the loop using the `break` keyword if the `counter` variable is equal to the size of `arr`. 

Finally, the `puts` method is invoked, and the string `"Your total is #{sum}"` is passed in as an argument, which uses string interpolation to output the value of `sum` variable in the string. This problem demonstrates the concept of variable scope; specifically the fact that variables are accessible in an inner scope.

### Example 7

What does the following code return? What does it output? Why? What concept does it demonstrate?

```
a = 'Bob'

5.times do |x|  
  a = 'Bill'
end

p a
```

The local variable `a` is assigned to the String object `'Bob'` on line 1. On line 3, the `Integer#times` method is invoked on the Integer object `5`, and passed in a `do..end` block as an argument. The block is defined on line 3 to 5, and contains the block parameter `x`. On line 4, our local variable `a` is reassigned to String object `'Bill'` five times until the iteration ends. We invoke the `p` method and pass in the local variable `a` as an argument, which will output `'Bill'` and return `Bill`. 

This problem demonstrates the concept of variable scope; specifically the fact that local variables initialized in our main program is accessible in inner scopes throughout the program.

### Example 8

What does the following code return? What does it output? Why? What concept does it demonstrate?

```
animal = "dog"

loop do |_|  
  animal = "cat"  
  var = "ball"  
  break
end

puts animal
puts var
```

The String object `'dog'` is assigned to local variable `animal`, on the first line. On line 3, the `loop` method is invoked and passed in a `do..end` block as an argument. The block parameter `_` hints to us that it won't be used in the block, which is why it's defined as "_". Within the block, local variable `animal` is reassigned to the String object `'cat'`, and String object `'ball'` is assigned to a new local variable `var`. We break out of the loop using the `break` keyword. 

On the second to last line, the `puts` method is invoked along and local variable `animal` is passed in as an argument, which `'cat'` is output, and `nil` is returned. Next line, the `puts` method is invoked and local variable `var` is passed in as an argument, which raises an exception error: `undefined local variable or method 'var'`, because `var` was initialized inside the block, hence why it isn't available outside the block. 

This problem demonstrates the concept of variable scope; specifically the fact that variables created outside a block are accessible inside the block, but **NOT vice versa**.

## Problems from RB101 - RB109 Small Problems

### Always Negative

What does the following code return?

```
def negative(num)
  if num.negative? || num == 0
    num
  else
    num * -1
  end
end

negative(5)
```

On the last line, the method `negative` is invoked and passed in the integer value `5`. 

On line 1, the `negative` method is defined, and takes a parameter called `num`. `num` is a local variable scoped at the method-level. In our conditional statement on line 2, if `true` is returned from the `negative?` method called on `num`, or if `num` is equal to `0`, the value `num` is referencing is returned. If that conditional statement doesn't evaluate as true, then the `Integer#*` method is called on `num` and `-1` passed in as an argument to convert the positive integer into negative, which is what the final return value of the `negative` method will be.