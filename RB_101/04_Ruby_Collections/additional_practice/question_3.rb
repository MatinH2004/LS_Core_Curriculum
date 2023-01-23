# remove people with age 100 and greater.
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 402, "Eddie" => 10 }

ages.keep_if {|_, age| age < 100}

p ages

=begin

Can alternatively use #select! method

=end