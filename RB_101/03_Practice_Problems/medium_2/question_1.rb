# Take a look at the following code and predict the output:
a = "forty two"
b = "forty two"
c = a

puts a.object_id # => 60
puts b.object_id # => 80
puts c.object_id # => 60

=begin

`a` and `b` may look the same, however,
they reference different objects.

`a` and `c` have the same object_ids, because
they are both pointing to the same object.

=end