
def shout_out_to(name)
  # name.chars.each { |c| c.upcase! }
  name = name.upcase

  puts 'HEY ' + name
end

shout_out_to('you') # expected: 'HEY YOU'

=begin
  
-- Written Assesment Evaluation --

On lines 2 to 7, the `shout_out_to` method is defined, taking a single
parameter.

On line 9, the `shout_out_to` method is called and string object
`"you"` is passed in as an argument. The string is now bound to
method parameter `name`. Within the method, `name` is reassigned to
the return value of `String#upcase` being called on `name`, which 
returns an uppercased version of `name`.

On line 6, the string `"HEY "` is concatenated with `name` using
`String#+` and the return value is passed in as an argument to the
invocation of the puts method, which outputs `"HEY YOU"` to the screen
and returns `nil`.
  
=end