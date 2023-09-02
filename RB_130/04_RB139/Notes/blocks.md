# Blocks {...}

## Closure

- A “chunk of code” that we can save and execute at a later time
- It retains reference to its surrounding artifacts (variable, method name) — its **************binding**************
- Ways to work with closures:
    - Instantiate an object from the `Proc` class
    - Use `lambdas`
    - Use blocks
---

## Calling Methods with Blocks

```ruby
[1, 2, 3].each do |num|
  puts num
end

[1, 2, 3].each { |num| puts num }
```

- Blocks are defined using curly braces `{}` or `do..end`
- Blocks are passed in to the method as an ****************argument****************
- The block is not part of the method implementation. The method decides what to do with the code in the block.

---

### Writing Methods That Take Blocks

- All methods in ruby implicitly accept blocks
- When a block is passed in, we can invoke the code using `yield`
- If we call `yield` but no block is passed into the method:
    - `LocalJumpError: no block given (yield)` exception is raised
- We can call `Kernel#block_given?` method, which returns true if a block is passed into the method
- Code execution:
    - Method execution
    - Block is executed
    - Method execution continues
- If block contains any block parameters, we can pass in a value to the param by passing in an argument to `yield`

```ruby
# method implementation
def increment(number)
  if block_given?
    yield(number + 1)
  end
  number + 1
end

# method invocation
increment(5) do |num|
  puts num
end
```

- Mental model: Calling a block is almost like calling another method
- Blocks and Procs don’t complain when you pass too many or too few arguments
    - ⇒ **Lenient arity**
- Methods and Lambdas expect you to pass in the exact number of arguments
    - ⇒ **Strict arity**
---

### When to use blocks in your own methods

1. Defer some implementation code to method invocation decision
  - allow method user to refine the method implementation without modifying the method implementation
2. Methods that need to perform before and after actions - sandwich code
  - time an action, open file close file, etc.

### Methods with an explicit block parameter
- An explicit block is a block that gets treated as a named object
  - assigned to a method parameter so that it can be managed liek any other object
  - it can be reassigned, passed to other methods, and invoked many times

```ruby
def test(&block)
  puts "What's &block? #{block}"
end

test { sleep(1) }

# What's &block? #<Proc:0x007f98e32b83c8@(irb):59>
# => nil
```

- `&block` converts a block into a simple `Proc` object
- We drop the `&` when calling the proc in the method
- We can call the proc object like: `block.call`

### Summary

- blocks are one way that Ruby implements closures. Closures are a way to pass around an unnamed "chunk of code" to be executed later.
- blocks can take arguments, just like normal methods. But unlike normal methods, it won't complain about the wrong number of arguments being passed to it.
- blocks return a value, just like normal methods.
- blocks are a way to defer some implementation decisions to method invocation time. It allows method users to refine a method at invocation time for a specific use case. It allows method implementors to build generic methods that can be used in a variety of ways.
- blocks are a good use case for "sandwich code" scenarios, like closing a File automatically.
- methods and blocks can return a chunk of code by returning a Proc or lambda.

## Blocks and Variable Scope

## Symbol to Proc