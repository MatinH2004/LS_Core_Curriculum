
# Code Explanation Using Precise Language

## Local Variable Scope

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