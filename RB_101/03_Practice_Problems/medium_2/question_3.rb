# Let's call a method, and pass both a string and an array as arguments and see how 
# even though they are treated in the same way by Ruby, the results can be different.

# Study the following code and state what will be displayed...and why:
def tricky_method(a_string_param, an_array_param)
  a_string_param += "rutabaga" # `a_string_param` pointing to: "pumpkinsrutabaga" (`my_string` remains the same)
  an_array_param << "rutabaga" # '<<' modifies the original object, therefore remains the same
end

my_string = "pumpkins"
my_array = ["pumpkins"]
tricky_method(my_string, my_array)

puts "My string looks like this now: #{my_string}"  # => "pumpkins"
puts "My array looks like this now: #{my_array}"    # => ["pumpkins", "rutabaga"]

=begin

string:
  - The String#+= operation is re-assignment and creates a new String object.
  - This means that a_string_param and my_string no longer point to the same object.
  - `my_string` still pointing to "pumpkins"
array:
  - an_array_param still points to the original object
  - the local variables my_array and an_array_param are still pointing at the same object
=end