
def greetings(name, details)
  name = name.join(' ')
  details = "#{details[:title]} #{details[:occupation]}"
  "Hello, #{name}! Nice to have a #{details} around."
end

puts greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' })
# => Hello, John Q Doe! Nice to have a Master Plumber around.