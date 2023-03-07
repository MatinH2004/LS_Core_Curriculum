# print out the name, age and gender of each family member:

munsters = {
  "Herman" => { "age" => 32, "gender" => "male" },
  "Lily" => { "age" => 30, "gender" => "female" },
  "Grandpa" => { "age" => 402, "gender" => "male" },
  "Eddie" => { "age" => 10, "gender" => "male" },
  "Marilyn" => { "age" => 23, "gender" => "female"}
}

# Like this: (Name) is a (age)-year-old (male or female).

munsters.each do |name, details|
  puts "#{name} is a #{details['age']}-year-old #{details['gender']}"
end
