class Greeting
  def greet(message)
    puts message
  end
end

class Hello < Greeting
  def hi
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("Goodbye")
  end
end

# case 1
hello = Hello.new
puts hello.hi

# => Hello

# case 2
hello = Hello.new
puts hello.bye

# => NoMethodError

# case 3
hello = Hello.new
puts hello.greet

# => ArgumentError

# case 4
hello = Hello.new
puts hello.greet("Goodbye")

# => Goodbye

# case 5
puts Hello.hi

# => NoMethodError