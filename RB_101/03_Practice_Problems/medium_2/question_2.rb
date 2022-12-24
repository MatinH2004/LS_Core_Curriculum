# Take a look at the following code and predict the output:
a = 42
b = 42
c = a

puts a.object_id # => 85
puts b.object_id # => 85
puts c.object_id # => 85

=begin

In contrast to strings, integers all reference the
same id, because integers are IMMUTABLE. The value
of an integer object cannot be modified, therefore
`a`, `b`, and `c` all reference the same immutable
integer.

This also applies to `true`, `false`, and `nil`.

=end