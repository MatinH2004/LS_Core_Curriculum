# What concept does the following code aim to demonstrate?
module Greet
  def greet(message)
    puts message
  end
end

class Teacher
  include Greet
end

class Student
  include Greet
end

tom = Teacher.new
rob = Student.new

tom.greet "Bonjour!"
rob.greet "Hello!"

# Concept of interface inheritance:
# - behaviour defined in a module is available to classes that inherit
# - 'has-a' relatiopnship

# Concept of polymorphism:
# - Classes of different types respond to the same behaviour (method) that has the same name
#   and takes the same number of args.