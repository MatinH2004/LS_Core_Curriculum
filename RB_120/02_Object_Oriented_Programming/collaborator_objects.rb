class Person
  attr_accessor :name, :pet

  def initialize(name)
    @name = name
  end
end

bob = Person.new("Robert")
bud = Bulldog.new             # assume Bulldog class from previous assignment

bob.pet = bud

# We are able to set custom objects as attributes of
# other custom objects we have created.

bob.pet                       # => #<Bulldog:0x007fd8399eb920>
bob.pet.class                 # => Bulldog

bob.pet.speak                 # => "bark!"
bob.pet.fetch                 # => "fetching!"

=begin

Objects that are stored as state within another object are also called
"collaborator objects". We call such objects collaborators because they
work in conjunction (or in collaboration) with the class they are associated with.

Collaborator objects play an important role in object oriented design,
since they also represent the connections between various actors in your program.

Summary:

When working with collaborator objects in your class, you may be working with strings,
integers, arrays, hashes, or even custom objects. Collaborator objects allow you to chop 
up and modularize the problem domain into cohesive pieces; they are at the core of 
OO programming and play an important role in modeling complicated problem domains.

=end