# Add up all of the ages from the Munster family hash:
ages = { "Herman" => 32, "Lily" => 30, "Grandpa" => 5843, "Eddie" => 10, "Marilyn" => 22, "Spot" => 237 }

sum_of_ages = 0
ages.map do |_, v|
  sum_of_ages += v
end

p sum_of_ages

=begin

Alt solution:

ages.values.inject(:+)

or:

ages.values.reduce(:+)

=end