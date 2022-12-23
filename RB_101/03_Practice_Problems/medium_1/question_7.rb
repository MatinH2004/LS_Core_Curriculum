# One day Spot was playing with the Munster family's home computer 
# and he wrote a small program to mess with their demographic data:

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

def mess_with_demographics(demo_hash)
  demo_hash.values.each do |family_member|
    family_member["age"] += 42
    family_member["gender"] = "other"
  end
end

mess_with_demographics(munsters)
p munsters

# Did the family's data get ransacked? Why or why not?

=begin

Ruby passes the object_id of each argument to the method. The method stores 
these object_id's internally in locally scoped (private to the method) 
variables (named per the method definition's parameter list).

So Spot's demo_hash is pointing to the munsters hash. In this case, the program 
does not create a new hash for the result -- it just uses the existing hash as-is. 
So the actual hash object that is being messed with inside of the method IS the munsters hash.

=end