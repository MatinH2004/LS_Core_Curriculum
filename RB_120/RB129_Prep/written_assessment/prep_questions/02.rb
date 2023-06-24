# Define a class of your choice with the following:
# - Constructor method that initializes 2 instance variables.
# - Instance method that outputs an interpolated string of those variables.
# - Getter methods for both (you can use shorthand notation if you want).
# - Prevent instances from accessing these methods outside of the class.
# - Finally, explain what concepts you've just demonstrated with your code.

class Student
  def initialize(name, grade)
    @name = name
    @grade = grade
  end

  def to_s
    "Student: #{name}\nGrade: #{grade}"
  end

  private

  attr_reader :name, :grade
end

mike = Student.new('Michael', 'B+')
puts mike
# mike.name  #=> error, private method called
# mike.grade #=> error, private method called

# - On lines 9 - 12, we initialize our instance variables to the respective values provided by the arguments
# - We define a #to_s method on line 14 - 16, which allows us to output the object's states when called with `puts`
# - Line 20 defines getter methods for the states of our object
# - We make the getter methods only accessible within the class by calling the `private` keyword above the getter 
#   method definitions