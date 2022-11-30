s = 'abc'
puts s.public_methods.inspect
# outputs all public methods

puts s.public_methods(false).inspect
# outputs all public methods only defined/overriden in String class

=begin

Object#public_methods(all=true)

- #public_methods belongs in the Object class

- although the class String do not have #public_methods 
  listed, it still inherits the method since the class 
  Object is its parent.

- public_methods(all=true) → array - Returns the list 
  of public methods accessible to obj. If the all parameter 
  is set to **false, only those methods in the receiver will 
  be listed.

=end