# The method below returns a new object, because
# we are calling String#split on the input string.

def spin_me(str)
  str.split.each do |word|
    word.reverse!
  end.join(" ")
end

str = 'hello world'
puts str.object_id          # 47435609148580
puts spin_me(str).object_id # 47435609148360

# Below, the method returns the same object, however,
# the object was mutated by String#reverse!

def spin_me(arr)
  arr.each do |word|
    word.reverse!
  end
end

arr = ['hello', 'world']
puts arr.object_id          # 47264354160220
puts spin_me(arr).object_id # 47264354160220