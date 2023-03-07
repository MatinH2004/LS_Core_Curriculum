# Determine the total age of just the male members of the family.

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

# My solution
total_male_age = munsters.map do |name, details|
  details['gender'] == 'male' ? details['age'] : 0
end.inject(:+) # nil.to_i becomes 0

p total_male_age

# LS Solution
total_male_age = 0

munsters.each_value do |details|
  total_male_age += details['age'] if details['gender'] == 'male'
end

p total_male_age