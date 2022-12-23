# Given the hash below
flintstones = { "Fred" => 0, "Wilma" => 1, "Barney" => 2, "Betty" => 3, "BamBam" => 4, "Pebbles" => 5 }

# Turn this into an array containing only two elements: Barney's name and Barney's number.

p flintstones.assoc('Barney') # => ["Barney", 2]

=begin

#assoc(obj) -> an array or nil

Searches through the hash comparing obj with the key using ==. 
Returns the key-value pair (two elements array) or nil if no match is found.

=end