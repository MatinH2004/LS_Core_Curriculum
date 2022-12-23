# In this hash of people and their age, see if 'Spot' is present.
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

p ages.include?('Spot')
p ages.member?('Spot')
p ages.key?('Spot')

=begin

#member(key) -> true/false:
Checks if the given key is present in hash.

=end