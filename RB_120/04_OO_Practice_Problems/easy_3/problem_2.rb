class Greeting
  def greet(message)
    puts message
  end
end

# class Hello < Greeting
#   def hi
#     greet("Hello")
#   end
# end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end

# If we call Hello.hi we get an error message. How would you fix this?

class Hello < Greeting
  def self.hi
    greeting = Greeting.new
    greeting.greet('hello')
  end
end

Hello.hi

# Note that we cannot simply call greet in the self.hi method 
# definition because the Greeting class itself only defines greet 
# on its instances, rather than on the Greeting class itself.
