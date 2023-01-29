# def solution(str, ending)
#   return true if ending.empty?
#   index = ending.size

#   loop do
#     if str[-index] == ending[-index]
#       index -= 1
#     else
#       return false
#     end
#   end

#   true
# end

# p solution('abc', 'bc') == true
# p solution('abcd', 'ef') == false
# p solution('abc', '') == true

# def test(b)
#   b.map {|letter| "I like the letter: #{letter}"}
# end

# a = %w(a b c)
# puts test(a)
# puts a

# a = 5.2
# puts a.object_id
# b = 7.3
# puts b.object_id
# a = b     # a reasigned to b
# puts a.object_id
# b += 1.1  # b points to new object
# puts b.object_id

# puts a
# puts b

# def test(str)
#   str += '!'      # new object created
#   str.downcase!   # mutates new object, no effect on test_str
# end

# test_str = 'Written Assessment'
# test(test_str)
# puts test_str

# def plus(x, y)
#   x = x + y
# end

# a = 3
# b = plus(a, 2)

# puts a # => 3
# puts b # => 5

# example of pass by value - cannot mutate immutable objects

# def increment(x)
#   x << 'b'
# end

# y = 'a'
# increment(y)
# puts y

# example of pass by reference - original string object is mutated

# def change_name(name)
#   name = 'Bob'
#   # does this reassignmnet change the object outside?
# end

# name = 'jim'
# change_name(name)
# puts name

# answer: no, in the method the arg is reassigned to a new object

# def cap(str)
#   str.capitalize!
#   # does this affect object outside?
# end

# name = 'jim'
# cap(name)
# puts name # => Jim

# answer: yes because #capitalize! is destructive

# arr1 = %w(a b c)
# arr2 = arr1.dup

# arr2.map! do |char|
#   char.upcase
# end

# puts arr1
# puts arr2

# arr1 remains the same since it was duplicated on line 94

# def fix(value)
#   value.upcase!
#   value.concat('!')
#   value
# end

# s = 'hello'   # => 'HELLO!'
# t = fix(s)    # => 'HELLO!'

# puts t
# puts s

# def fix(value)
#   value = value.upcase
#   value.concat('!')
# end

# s = 'hello'   # didn't mutate: => 'hello'
# t = fix(s)    # => 'HELLO!'

# p s
# p t

# def fix(value)
#   value << 'xyz'        # mutate
#   value = value.upcase  # new object here, everything after non mutating
#   value.concat('!')
# end

# s = 'hello'
# t = fix(s)

# p s
# p t

# def fix(value)
#   value[1] = 'x'
#   value
# end

# s = 'abc'
# t = fix(s)

# p s # => 'axc'
# p t # => 'axc'

# def a_method(string)
#   string << 'world'
# end

# a = 'hello'
# a_method(a)
# p a # => 'helloworld'

# a = %w(a b c)
# a[1] = '-'
# p a # => [a, '-', c]

# def add_name(arr, name)
#   arr = arr + [name]
# end

# names = %w(bob kim)
# add_name(names, 'jim')
# p names # => ['bob', 'kim']

# def add_name(arr, name)
#   arr = arr << name
# end

# names = %w(bob kim)
# add_name(names, 'jim')
# p names # => ['bob', 'kim', 'jim']

# ----------------

# array = [1, 2, 3, 4, 5]
# a = array.select do |num|
#   puts num if num.odd? # => returns nil (because of puts)
# end
# p a
# output: 1, 3, 5
# => []

# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# a = arr.select {|n| n.odd?}
# p a # => [1, 3, 5, 7, 9]

# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# new_arr = arr.select do |n|
#   n + 1
# end
# p new_arr # => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# new_arr = arr.select do |n|
#   n + 1
#   puts n
# end
# p new_arr # => []

# words = %w(jump trip laugh run talk)
# new_arr = words.map do |word|
#   word.start_with?('t')
# end
# p new_arr # => [false, true, false, false, true]

# arr = (1..10).to_a
# arr.each {|n| puts n}
# # => outputs numbers 1 to 10

# arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# incremented = arr.map do |n|
#   n + 1
# end
# p incremented # => [2..11]

# arr = (1..10).to_a
# new_arr = arr.map do |n|
#   n > 1
# end
# p new_arr # => [false, true...]

# arr = (1..10).to_a
# new_arr = arr.map do |n|
#   n > 1
#   puts n
# end
# p new_arr # => [every value is nil]

# a = 'hello'
# p [1, 2, 3].map {|num| a}
# # => ['hello', 'hello', 'hello']

# [1, 2, 3].each do |num|
#   puts num
# end
# # output: 1, 2, 3

# a = { a: "ant", b: "bear", c: "cat" }.each_with_object([]) do |pair, array|
#   array << pair.last
# end
# p a # => ["ant", "bear", "cat"]

# def test
#   puts "written assessment"
# end

# var = test()
# if var
#   puts 'written' # truthy
# else
#   puts 'interview'
# end
