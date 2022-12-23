# See if the name "Dino" appears in the string below:
advice = "Few things in life are as important as house training your pet dinosaur."

# Note that this is not a perfect solution, as it would match any substring with Dino in it.
p advice.match?(/Dino/)     # => false
p advice.include?('Dino')   # => false