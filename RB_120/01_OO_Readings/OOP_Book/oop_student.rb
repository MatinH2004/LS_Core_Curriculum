# OOP Inheritance | Exercise 7 - 8

class Student
  attr_accessor :name
  attr_writer :grade

  def initialize(name, grade)
    @name = name
    @grade = grade
  end

  def better_grade_than?(other_student)
    self.grade > other_student.grade
  end

  protected

  def grade
    @grade
  end
end

joe = Student.new('Joe', 69)
matt = Student.new('Matt', 43)

puts "Well done!" if joe.better_grade_than?(matt)

# Exercise 8

class Person
  def public_hi
    hi
  end

  private

  def hi
    puts 'Hi!!'
  end
end

bob = Person.new
bob.public_hi
bob.hi # error