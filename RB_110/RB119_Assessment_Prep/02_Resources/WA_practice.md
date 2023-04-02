# Written Assessment Practice | RB119

### 1. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = arr.map do |n|
  n > 1
end
p new_array
```

On line 1, local variable `arr` is initialized to the array object`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. On line 3, the `map` method is called upon `arr` and a `do..end` block passed in as an argument, taking `n` as a block parameter. Within the block, the current elemenet `n` is compared to `1` using the `#>` operator, which returns `true` everytime the left hand value is a greater integer value than the right hand value, and `false` otherwise A new array `[false, true, true ... true]` is returned and assigned to local variable `new_array`. On line 6, the `p` method is invoked, and `new_array` is passed in as an argument, which outputs and returns: [false, true, true, true, true, true, true, true, true, true]

This demonstrates the concept of `#map` and how it evaluates the returnvalue of the block to perform transformation on the collection.

### 2. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
{ a: "ant", b: "bear", c: "cat" }.all? do |key, value|
  value.length >= 3
end
```

On line 1, the `Enumberable#all?` is called upon the hash containing 3 key-value pairs, and a `do..end` block passed in as an argument from line 1 to 3. Because we are dealing with a hash, the block takes two parameters, `key` and `value`. Within the block, the `String#length` method is called on `value` which returns the lenght of the string object, and is compared to integer `3` using the `>=` operator. This evaluates whether the left hand element is greater than or equal to the right hand element, which returns `true`, otherwise returns `false`. The `#all?` method returns `true` only if return value of the block is truthy on every iteration, otherwise returns `false`. There is no output.

The concept demonstrated is how the `#all?` method functions, how it evaluates the returns value of the block,and will return `true` only if the return value of the block is truthy in every iteration.

### 3. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
{ a: "ant", b: "bear", c: "cat" }.each_with_object({}) do |(key, value), hash|
  hash[value] = key
end
```

On line 1, the `#each_with_object` method is invoked upon the hash `{ a: "ant", b: "bear", c: "cat" }`. The method takes curly braces `{}` as an argument which creates an empty hash object, and a `do..end` block is passed in on lines 1 - 3, as another argument to the method. They block takes parameters `(key, value)`, which are bind to the key value pairs of the calling hash, and `hash` which represents the empty hash initialized by the method.

Within the block, we pass in the value of the calling hash and assign it as a key, and take the key from the calling hash and assign it as the value, using the setter method `#=`, essentially reversing the key-value pairs from the original hash. This will cause the `#each_with_object` method to return `{ 'ant' => :a, 'bear' => :b, 'cat' => :c }`. There is no output.

The concept demonstrated is how the `#each_with_object` method works, where it will return a new collection instead of the original object unlike the `#each` method.

### 4. What does the following code return? What does it output? Why? What concept does it demonstrate? What are a, b, and c? What if the last line was c = a.uniq!?

```ruby
a = [1, 2, 3, 3]
b = a
c = a.uniq
```

On line 1 local variable `a` is initialized to the array object `[1, 2, 3, 3]`. On the next line, local variable `b` is initialized to the object referenced by variable `a`, so now they both point to the same object. On line 3, local variable `c` is initialized to the return value of `#uniq` method being called on `a`, which returns an array without any duplicates: `[1, 2, 3]`.

`a` is [1, 2, 3, 3]
`b` is [1, 2, 3, 3]
`c` is [1, 2, 3]

If the last line was `c = a.uniq!`, the value of `c` would be the same, however since we are mutating the calling object, it affects both `a` and `b`, and they both reference the same array which is `[1, 2, 3]`.

`a` is [1, 2, 3]
`b` is [1, 2, 3]
`c` is [1, 2, 3]

There is no output.

This demonstrates the concept of pass by value and object copying. This is shown by the `#uniq` method which creates a new copy of the object that `c` is in reference to.

### 5. What does the following code return? What does it output? Why? What concept does it demonstrate? What values do s and t have? Why?

```ruby
def fix(value)
 value[1] = 'x'
 value
end

s = 'abc'
t = fix(s)
```

On lines 1 to 4, the method `fix` is defined, which takes a single parameter `value`. On line 6, local variable `s` is initialized to the string object `'abc'`. On line 7, `fix` is invoked and `s` is passed in as an argument.
Within the method, `s` is bound to method parameter `value`. On line 2, we perform indexed assignemnt on `value`
which is a destuctive action, affecting the object outside the method. We assign string object `x` to index 1 of `value`, which changes the string from `'abc'` to `'axc'`. On line 3, we implicitly return `value` from the method, and assign it to local variable `t` on line 7. Since indexed assignment is destructive, both `s` and `t` now point to the string object `'axc'`. There is no output.

This demonstrates the concept of pass by reference and object mutability. Indexed assignment `String#[]=` is a destructive action which changes the original collection that is being accessed within. This is reflected in the values that both `s` and `t` reference.

### 6. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
def a_method(string)
  string << ' world'
end

a = 'hello'
a_method(a)

p a
```

On lines 1 to 3 the `a_method` method is defined, which takes a single parameter, `string`. On line 5, local variable `a` is assigned to the string object value `'hello'`. On line 6, `a_method` is invoked and `a` is passed in as an argument. Within the method `a` is bound to the `string` parameter. The shovel method `String#<<` is invoked on `string` and string object value `' world'` is passed in as an argument. This destructively concatenates the strings together so `a` is changed outside the method. The return value of `a_method` is `'hello world'`. On line 9, we call the `p` method and pass in `a` as an argument. This will output and return `'hello world'`.

This demonstrates the concept of pass by reference and object mutability; specifically the fact that `a` was changed after the invocation of `a_method`.

### 7. What does the following code return? What does it output? Why? What concept does it demonstrate? What values do s and t have? Why?

```ruby
def fix(value)
  value = value.upcase!
  value.concat('!')
end

s = 'hello'
t = fix(s)
```

On lines 1 to 4 the `fix` method is defined taking a single parameter `value`. On line 6, local variable `s` is bound to the string object `'hello'`. On line 7, the `fix` method is called and `s` is passed as an argument. `s` is now bound to `value` within the method definition. On line 2, `value` is reassigned to the return value of `String#upcase!` which permanently changes the object's value outside the method too. On the next line, the destructive `String#concat` method is called upon `value`, with `'!'` passed in as an argument. At this point both `value` and `s` are modified to `'HELLO!'` as it was mutated twice. The return value of the `fix` method, `'HELLO!'` is assigned to the local variable `t`. Both `t` and `s` now point to the string object value `'HELLO!'`. There is no ouptut.

This demonstrates the concept of pass by reference and object mutability, as `value` was destructively modified twice, using the `#concat` and `#upcase!` methods, which affected `s` the local variable outside the method.

### 8. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
a = "Hello"
b = a
a = "Goodbye"
puts a
puts b
```

On line 1, local variable `a` is initialized to string object `'Hello'`. On line 2, local variable `b` is initialized to the object referenced by `a`. On line 3, `a` is reassinged to String object `'Goodbye'`. On line 4, the `puts` method is invoked and `a` is passed in as an argument, which outputs `'Goodbye'` and returns `nil`. On line 5, the `puts` method is invoked and `b` is passed in as an argument, which ouputs `'Hello'` and returns `nil`.

This demonstrates the concept of variables as pointers, specifically the fact that more than on variable can point to a single object, and be reassigned later.

### 9. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
a = "hello"

[1, 2, 3].map { |num| a }
```

On line 1, local variable `a` is initialized to String object `'hello'`. On line 3, the `#map` method is invoked on the array object containing integer values: `[1, 2, 3]`, and passed in a block as an argument. The current number on iteration is bound to block parameter `num`, which is unused in the block. The block's return value is `a`, which results in the array being transformed and return the following array: `['hello', 'hello', 'hello']`. There is no output.

This concept demonstrates how `#map` uses the return block to transform elements from the calling array.

### 10. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
[1, 2, 3].each do |num|
  puts num
end
```

On line 1, the `#each` method is called upon array object containing integer values, `[1, 2, 3]`, and passed in a `do..end` block on lines 1 to 3. Within the block each item of the calling array object is passed into the block and assigned to local block parameter `num`. In the block, the `puts` method is invoked and `num` passed in as an argument. This outputs the current integer referenced by `num` at each iteration and returns `nil`.

This demonstrates how the `#each` method functions. As the return value of the block doesn't matter, the method returns the calling object.

### 11. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

incremented = arr.map do |n|
              n + 1
            end
p incremented
```

On line 1 local variable `arr` is initialized to the array object containing integer values, `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. On line 3, local variable `incremented` is assigned to the return value of `#map` being invoked on `arr` with a `do..end` block passed in as an argument on lines 3 to 5. The block takes a parameter `n` which references each integer of the calling array object. Within the block, the `Integer#+` method is invoked on `n` and passed in the argument `1`. This increments the current integer by 1. The `#map` method returns a new array object with every integer from `arr` incremented by 1. On line 6 the `p` method is called and `incremented` is passed in as an argument, which outputs and returns `[2, 3, 4, 5, 6, 7, 8, 9, 10, 11]`.

What is demonstrated is how the #map method functions. How it evaluates the return value of the block at each iteration. Takes each value and adds to a new transformed collection onto a new array object value. And it will have the same amount of items as the original calling object.

### 12. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
a = 4

loop do
  a = 5
  b = 3

  break
end

puts a
puts b
```

On line 1, local variable `a` is assigned to integer object `4`. On line 3 the `loop` method is called along with a `do..end` block from line 3 to line 8. Within the block `a` is reassigned to integer object `5`, and local variable `b` is initialized to integer obejct `3`. On line 7 we exit out of the loop using the `break` keyword. On line 10, the `puts` method is called and `a` passed in as an argument. This outputs `5` and returns `nil`. On line 11, once again the `puts` method is called and `b` is passed in as an argument. This raises the NameError exception and throws the following error: `No local variable or method 'b'`.

This problem demonstrates the concept of variable scope, specifically the fact that local variables that are initialized in an inner scope CAN’T be accessed in the outer scope, but local variables that are initialized in the outer scope CAN be accessed in an inner scope.
