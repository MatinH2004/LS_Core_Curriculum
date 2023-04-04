# RB119 | Practice Test

### 1. What will the following code print? Why?

```ruby
def count_sheep
  5.times do |sheep|
    puts sheep
    if sheep >= 2
      return
    end
  end
end

p count_sheep
```

On lines 1 to 8, the `#count_sheep` method is defined. On line 10, the `p` method is called and the return value of `#count_sheep` method is passed in as an argument. Within the `#count_sheep` method, on line 2, the `Integer#times` method is called upon the integer value `5` along with a `do..end` block, which takes `sheep` as a block parameter. In the block, the `puts` method is called and `sheep` is passed in as an argument, which outputs the current integer referenced by `sheep` and returns `nil`. On the next line, we have an `if` condition which compares the integer referenced by `sheep` and `2` using the `>=` operator. This returns `true` if the left hand value is greater than or equal to the right side value. If this evaluates to `true`, we exit the method using an explicit `return`, otherwise keep iterating. This would output  and return:

```
0
1
2
nil
=> nil
```

The reason `nil` is printed is because on the iteration when `sheep` is greater than `2`, the explicit return is not executed and the last evaluated line would be the line with the `puts` method, which returned `nil`, which is why is it output and returned, due to `p`.

### 2. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
a = 4
b = 2

2.times do |a|
  a = 5
  puts a
end

puts a
puts b
```

On line 1, local variable `a` is initialized to integer object `4`. O Local variable `b` is initialized to integer object `2`, on line 2. On line 3, the `Integer#times` method is invoked upon integer object `2`, and passed a `do..end` block as an argument on lines 3 to 6. The block contains a block parameter, `a` which references the current number at iteration from `0 to 2`. In the block, block parameter `a` is reassigned to integer object `5`, and on the following line, the `puts` method is invoked and `a` is passed as an argument, which outputs `5` and returns `nil`. On line 8, the `puts` method is invoked and `a` is passed as an argument, which outputs `4` and returns `nil`. On line 9, the `puts` method is called once again, and `b` is passed as an argument. This outputs `2`, and returns `nil`.

This demonstrates the concept of variable shadowing. This is reflected when local variable `a` shares the same name as the block parameter `a`, because `a` is left unchanged, and the object referenced within the block was reassigned to the integer value `5`.

### 3. How does `#count` treat the block's return value? How can we find out?

```ruby
['ant', 'bat', 'caterpillar'].count do |str|
  str.length < 4
end
```

The `#count` method relies on the blocks return value to count items from a collection. Specifically the truthiness of the return value. If the return value of the block evaluates as truthy, then `#count` increments the count. We can test this by playing around with the block.

For example, if we switch out `str.length < 4` to `puts str`, a falsy value since `puts` returns `nil`, the elements of the calling object are output, and `#count` returns `0`.
```ruby
['ant', 'bat', 'caterpillar'].count do |str|
  puts str
end

# ant
# bat
# caterpillar
# => 0
```

However, if we leave the code in the block just as `str`, a truthy value, the method counts it in every iteration and returns `3`.
```ruby
['ant', 'bat', 'caterpillar'].count do |str|
  str
end

# => 3
```

To conclude, it is safe to say that `#count` increments the count based on the truthiness of the return value of the block.

### 4. Our predict_weather method should output a message indicating whether a sunny or cloudy day lies ahead. However, the output is the same every time the method is invoked. Why? Fix the code so that it behaves as expected.

```ruby
def predict_weather
  sunshine = ['true', 'false'].sample
  
  if sunshine
    puts "Today's weather will be sunny!"
  else
    puts "Today's weather will be cloudy!"
  end
end
```

The problem here is that both `'true'` and `'false'` are strings, and since strings are truthy values (not equal to `false` or `nil`), the `if` condition evaluates the `sunshine` variable to be truthy every time it is executed. The solution here is to change the array object elements from `['true', 'false']` to `[true, false]`:

```ruby
def predict_weather
  sunshine = [true, false].sample
  
  if sunshine
    puts "Today's weather will be sunny!"
  else
    puts "Today's weather will be cloudy!"
  end
end
```

### 5. What is the return value of map in the following code? Why?

```ruby
{ a: 'ant', b: 'bear' }.map do |key, value|
  if value.size > 3
    value
  end
end
```

The `#map` method is called upon our hash object `{ a: 'ant', b: 'bear' }`, and a `do..end` block is passed in as an argument on lines 1 to 5. `#map` considers the return value of the block at each iteration, and the return values of the block are added to a new array object. The block takes two parameters, `key` and `value` which refernce the key-value pairs respectively. Within the block, the if conditional `if value.size > 3` is given. The `size` method called upon local block variable `value` returns an integer value representing the number of characters in the string. The `>` operator is invoked on this integer value and integer obejct `3` is passed as an argument. If the calling object of `size` is greater than argument object, the statement evaluates as truthy, and the object referenced by `value` is returned, otherwise if the `if` statement evaluates as falsy, `nil` is returned. On the first iteration, the object referenced by `value` is `'ant'`, which does not pass the `if` condition, so `nil` is returned. On the second iteration, `'bear'` is referenced by `value`, and it does pass the conditional statement, so `value` or `'bear'` is returned, resulting in the return value of `#map` to be a new array containing: `[nil, 'bear']`.

### 6. What will the following code print? Why?

```ruby
def tricky_number
  if true
    number = 1
  else
    2
  end
end

puts tricky_number
```

On lines 1 to 7, the `#tricky_number` method is defined, taking no parameters.  On line 9, the `#tricky_number` method is invoked. Within the method, an `if` conditional evaulates `true` which will always be truthy, so local variable `number` assigned to integer obejct value `1` is returned. If the conditional evaluated to false, integer value `2` would be returned. The return value of `#tricky_number` method is integer value `1`, which is passed as an argument to the `puts` method invocation on line 9. This outputs `1` and returns `nil`.

### 7. The following code throws an error. Find out what is wrong and think about how you would fix it.

```ruby
colors = ['red', 'yellow', 'purple', 'green', 'dark blue', 'turquoise', 'silver', 'black']
things = ['pen', 'mouse pad', 'coffee mug', 'sofa', 'surf board', 'training mat', 'notebook']

colors.shuffle!
things.shuffle!

i = 0
loop do
  break if i > colors.length
  
  if i == 0
    puts 'I have a ' + colors[i] + ' ' + things[i] + '.'
  else
    puts 'And a ' + colors[i] + ' ' + things[i] + '.'
  end
  
  i += 1
end
```

In this code, the TypeError is thrown, beacause on line 14, `nil` is being concatnated with a string object, which does not work. The issue is that the `colors` array is one element larger than the `things` array. There are two ways to fix this.

**Solution 1:**
Change `break if i > colors.length` to `break if i >= colors.length - 1` to match the size of the `things` array. Note that the `>` operator was changed to `>=`.

```ruby
loop do
  break if i >= colors.length - 1
  
  if i == 0
    puts 'I have a ' + colors[i] + ' ' + things[i] + '.'
  else
    puts 'And a ' + colors[i] + ' ' + things[i] + '.'
  end
  
  i += 1
end
```

**Solution 2:**
In this solution, the loop stops iterating once all elements from the `things` array have been output. Note that the `>` operator was changed to `>=`.

```ruby
loop do
  break if i >= things.length
  
  if i == 0
    puts 'I have a ' + colors[i] + ' ' + things[i] + '.'
  else
    puts 'And a ' + colors[i] + ' ' + things[i] + '.'
  end
  
  i += 1
end
```

### 8. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
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

On line 1, local variable `arr` is initialized to array object containing integer values, `[1, 2, 3, 4]`. On line 3 and 4, local variable `counter` and local variable `sum` are both initialized to integer object `0`, respectively. On line 6, there is a `loop` method invocation, taking a `do..end` block as an argument. Within the block, the `#[]` method is called upon `arr` and the integer obejct that `counter` references is passed as an argument. This allows for element referencing, as `arr[counter]` will access the given integer value of whatever `counter` is referncing. The `Integer#+` method is invoked on `sum` and the integer object referenced by `arr[counter]` is passed as an argument, and `sum` is reassigned to the return value of this. On the next line, `counter` is reassigned to return value of the `Integer#+` method invokated upon `counter` and integer object `1` is passed as an argument. On line 9, we exit out of the loop using a `break` keyword, if the `if` conditional evaluates as true. In the conditional, the `#==` method is called on `counter` and the integer returned by `arr.size` is passed in as an argument. This will check if the integer referenced by `counter` is equal to the integer representing the size of the `arr` array object. On line 12, the `puts` method is called and using string interpolation, `"Your total is #{sum}"` is passed in as an argument. This will return `nil` and output:

Your total is 10

This demonstrates local variable scoping. As counter and sum were initialized in an outer scope and then reassigned in a block scope. Then once again sum is accessed in an outer scope.

### 9. What is a? What if we called `map!` instead of `map`?

```ruby
def test(b)
  b.map {|letter| "I like the letter: #{letter}"}
end

a = ['a', 'b', 'c']
test(a)
```

On lines 1 to 3, the `test` method is defined, taking a parameter called `b`. On line 5, local variable `a` is initialized to the array object containing string: `['a', 'b', 'c']`. On line 6, the `test` method is invoked and `a` is passed in as an argument. Within the method, `a` is bind to method parameter `b`. On line 2, the `map` method is called upon the array object referenced by `b`, and a block is passed in as an argument. Each element of the array is passed into the block, using the `letter` block parameter. Within the block, the string object `"I like the letter: #{letter}"` is returned using string interpolation. After done iterating, `map` returns a new array containing `["I like the letter: a", "I like the letter: b", "I like the letter: c"]`. There is no output.

If we had called `map!` instead, `a` would permanently change to the new transformed array, since `map!` mutates the caller.

### 10. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
def plus(x, y)
  x = x + y
end

a = 3
b = plus(a, 2)

puts a
puts b
```

On lines 1 to 3, the `plus` method is defined, taking two paramters: `x` and `y`. On line 5, local variable `a` is initialized to integer object `3`. On line 6, the `plus` method is invoked, taking `a` and integer `2` as arguments. Within the method, `a` is bind to `x`, and `2` is bind to `y`. On line 2, the `Integer#+` method is invoked upon `x` and takes `y` as an argument, which then returns integer `5` as addition was performed. `x` is reassigned using `=` to the integer value `5`, and returned from the `plus` method. On line 8, the `puts` method is invoked, taking `a` as an argument. This outputs `3` and returns `nil`. Next line, once again the `puts` method is called and takes `b` as an argument. This outputs `5` and returns `nil`.

This demonstrates the concept of pass by value, as the `+` method creates a copy of the argument object added onto the calling object. This leaves the object that `a` references unaffected.

### 11. What values do s and t have? Why?

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

### 12. What is the return value of `each_with_object` in the following code? Why?

```ruby
['ant', 'bear', 'cat'].each_with_object({}) do |value, hash|
  hash[value[0]] = value
end
```

On line 1, the `each_with_object` method is called upon an array object containing string object values: `['ant', 'bear', 'cat']`. The method takes `{}` as an argument which creates an empty hash object that can be referenced using the `hash` block parameter. On lines 1 to 3 a `do..end` block is defined and is passed into the method. In the block, block parameter `value` represents the current string object from the calling array object. On line 2, both the hash setter method `#[]=` and the element refence method `#[]`. `value[0]` allows for the first index assignment to be accessed. In this case, it would be the first character of the string object, which is being set as the key in our hash setter method. And the full string referenced by `value` will be set as the value. Once done iteration, the new array returned is: `{ 'a' => 'ant', 'b' => 'bear', 'c' => 'cat' }`.

### 13. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

new_array = arr.select do |n| 
  n + 1
  puts n
end

p new_array
```

On line 1, local variable `arr` is initialized to an array object containing integer values: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. On line 3, the `select` method is called upon the `arr` array objet along with a `do..end` block on lines 3 to 6. The `select` method returns a new array containing elements based on the truthiness of the return value of the block. Within the block, `n` referenced the current integer value from the calling array. On line 4, the `Integer#+` method is invoked on `n` and integer value `1` is passed in as an argument, which returns the sum of `n` and `1`. On line 5, the `puts` method is called and `n` is passed as an argument. This outputs the original integer value from the array and returns `nil`. Since `nil` is the return value of the block on each iteration, no elements are selected, and an empty array is returned. This empty array is assigned to the local variable `new_array` on line 3. On line 8, the `p` method is called and `new_array` is passed into the method. This both outputs and returns an empty array object: `[]`.

This demonstrates how the `select` method functions. The return value of the block is crucial, because it decides which elements are selected into the new array.

### 14. Explain the `Hash#any?` method and what it's doing in this code.

```ruby
{ a: "ant", b: "bear", c: "cat" }.any? do |key, value|
  value.size > 4
end
```

The `Hash#any?` method iterates through the hash collection, taking two block parameters representing the key-value pairs, and stops executing once the block's return value is truthy. In the code above, the `any?` method is called upon a hash object: `{ a: "ant", b: "bear", c: "cat" }`, along with a `do..end` block on lines 1 to 3. Within the block, the calling hash's key-value pairs are passed into the block through the block parameters: `key`, and `value`. On line 2, the `String#size` method is called upon `value` returning the string object's length of characters, which then is compared to integer value `4` using the `>` operator, which returns true if the left hand operator is larger than the right hand operator. The `any?` method returns `false` because no string objects referenced by `value` are larger than 4 characters.

### 15. We want to iterate through the numbers array and return a new array containing only the even numbers. However, our code isn't producing the expected output. Why not? How can we change it to produce the expected result?

```ruby
numbers = [5, 2, 9, 6, 3, 1, 8]

even_numbers = numbers.map do |n|
  n if n.even?
end

p even_numbers # expected output: [2, 6, 8]
```

The issue here is that the `map` method uses the return value of the block to perform transformation. In this case, when the current number, `n`, is not an even number, `nil` is returned and added to the new array. To fix this, we can change the `map` method to `select`, so only even numbers are added to the array.
```ruby
even_numbers = numbers.select do |n|
  n if n.even?
end
```

Another solution would be to call `#compact` on the new array, so all `nil` values are removed from the array. Note that we're using the `map` method here:
```ruby
even_numbers = numbers.map do |n|
  n if n.even?
end.compact
```

### 16. What will the following code print, and why?

```ruby
a = 7

def my_value(b)
  b = a + a
end

my_value(a)
puts a
```

On line 1, local variable `a` is initialized to the integer object `7`. On lines 3 to 5, the `my_value` method is defined taking a parameter, `b`. On line 7, the `my_value` method is called an `a` is passed into the method. Within the method, `a` is bound to method parameter `b`. On line 4, `b` is reassigned to the return value of `Integer#+` method called on `a` and `a` is passed as an argument. This raises the NameError exception, due to `a` not being visible at the method-level scope. The program stops executing here, and any code further is not ran.

### 17. The output of the code below tells you that you have around $70. However it should be $238.

```ruby
# you expected your bank account to have about $238. What did we do wrong?

# Financially, you started the year with a clean slate.

balance = 0

# Here's what you earned and spent during the first three months.

january = {
  income: [ 1200, 75 ],
  expenses: [ 650, 140, 33.2, 100, 26.9, 78 ]
}

february = {
  income: [ 1200 ],
  expenses: [ 650, 140, 320, 46.7, 122.5 ]
}

march = {
  income: [ 1200, 10, 75 ],
  expenses: [ 650, 140, 350, 12, 59.9, 2.5 ]
}

# Let's see how much you've got now...

def calculate_balance(month)
  plus  = month[:income].sum
  minus = month[:expenses].sum
  
  plus - minus
end

[january, february, march].each do |month|
  balance = calculate_balance(month)
end

puts balance

```

The problem here is that on line 34, the `balance` is reassigned to the return value of `calculate_balance` method, so the reason we end up with $70 is because that is because that is our balance for the last month, which is `march`. To fix this problem, instead of using the assignment on line 34, `#=`, we must increment the `balance` variable, so it adds the balance from each month.

```ruby
[january, february, march].each do |month|
  balance += calculate_balance(month)
end
```

### 18. What does the following code return? What does it output? Why? What concept does it demonstrate?

```ruby
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

On line 1, local variable `a` is assigned to the integer object `4`. On line 2, local variable `b` is assigned to the integer object `2`. On line 4, the `loop` method is invoked, and a `do..end` block is passed as an argument on lines 4 to 8. Within the block, local variable `c` is initialized to the integer object `3`, and on the next line, `a` is reassiged to the integer object referenced by `c`. On line 7, we exit out of the loop using the `break` keyword. On line 10, the `puts` method is invoked and `a` is passed as an argument. This outputs `3`, because `a` was reassigned to the object refernced by `c` in the block. `nil` is returend. On line 11, the `puts` method is called once again, and `b` is passed into the method. This outputs `2` and returns `nil`.

### 19. We started writing an RPG game, but we have already run into an error message. Find the problem and fix it.

```ruby
# Each player starts with the same basic stats.

player = { strength: 10, dexterity: 10, charisma: 10, stamina: 10 }

# Then the player picks a character class and gets an upgrade accordingly.

character_classes = {
  warrior: { strength:  20 },
  thief:   { dexterity: 20 },
  scout:   { stamina:   20 },
  mage:    { charisma:  20 }
}

puts 'Please type your class (warrior, thief, scout, mage):'
input = gets.chomp.downcase

player.merge(character_classes[input])

puts 'Your character stats:'
puts player
```

There is two problems with the code here. First, when we merge the `player` hash with the new one to change the value to `20`, a new hash is returned by `#merge`, and `player` still references the unchanged hash. To fix this we must call the destructive `#merge!` method, or reassigned `player` to the return value of `#merge` method.

```ruby
player.merge!(character_classes[input])
# or
player = player.merge(character_classes[input])
```

The other problem is that the object referenced by `input` is a string, and to reference the key values from the `#character_classes` we need to convert `input` into a symbol object.

```ruby
player.merge!(character_classes[input.to_sym])
```

### 20. Explain `Hash#each_with_object` method and what it's doing in this code.

```ruby
{ a: "ant", b: "bear", c: "cat" }.each_with_object([]) do |pair, array|
  array << pair.last
end
```

On line 1, the `each_with_object` method is called upon a hash object: `{ a: "ant", b: "bear", c: "cat" }`. The method takes a `do..end` block and a `[]` argument, which creates an empty array. The empty array is passed into the block, and block parameter `array` points toward it. The block parameter `pair` points to an array object containing the key-value pair: `[key, value]`. On line 2, the shovel `<<` method is called on `array` and the return value of `#last` called on `pair` is passed as an argument. The `last` method returns the last or -1 index element of the array. The return value of `each_with_object` method is the array referenced by `array`, which contains every value from the calling hash object on line 1.

Result: `['ant', 'bear', 'cat']`

### 21. What will the following code print, and why?

```ruby
a = 7
array = [1, 2, 3]

array.each do |a|
  a += 1
end

puts a
```

On line 1, local variable `a` is initialized to the integer object `7`. On line 2, local variable `array` is initialized to an array object containing integer values: `[1, 2, 3]`. On line 4, the `each` method is called on the `array` object, and a `do..end` block is passed in as an argument on lines 4 to 6. Each integer value of the calling array object is sent into the block and are referenced by `n`. On line 5, the `Integer#+` method is called on `a` and integer value `1` is passed as an argument, which then the return value is reassigned back to `a`. This increments `a` by 1. On line 8, the `puts` method is called and `a` is passed as an argument. This outputs `7` and returns `nil`. This would be an example of variable shadowing, as `a` and the block parameter, `a` share the same name, so local variable `a` is left unchanged.

### 22. Magdalena has just adopted a new pet! She wants to add her new dog, Bowser, to the pets hash. After doing so, she realizes that her dogs Sparky and Fido have been mistakenly removed. Help Magdalena fix her code so that all three of her dogs' names will be associated with the key :dog in the pets hash.

```ruby
pets = { cat: 'fluffy', dog: ['sparky', 'fido'], fish: 'oscar' }

pets[:dog] = 'bowser'

p pets #=> {:cat=>"fluffy", :dog=>"bowser", :fish=>"oscar"}
```

In the code above, the `:dog` key in the `pets` hash is being reassigned to `'bowser'` instead of being added to the hash. To fix this, instead of using `=` assignmnet on line 3, we must use the shovel `<<` method to push `'bowser'` into the `:dog` array.

```ruby
pets[:dog] << 'bowser'

# similiar solution:
pets[:dog].push('bowser')
```
