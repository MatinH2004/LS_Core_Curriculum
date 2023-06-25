# Inside a preschool there are children, teachers, class assistants, a principle, janitors, and cafeteria workers.
# Both teachers and assistants can help a student with schoolwork and watch them on the playground.
# A teacher teaches
# and an assistant helps kids with any bathroom emergencies.
# Kids themselves can learn and play.
# A teacher and principle can supervise a class.
# Only the principle has the ability to expel a kid.
# Janitors have the ability to clean.
# Cafeteria workers have the ability to serve food.
# Children, teachers, class assistants, principles, janitors and cafeteria workers all have the ability to eat lunch.

module Chaperonable
  def watch_kids
    puts "watches kids on the playground"
  end

  def help_kids
    puts "help kids with schoolwork"
  end
end

module Supervisable
  def watch_class
    puts "supervises class"
  end
end

module Edible
  def eat
    puts "eats lunch"
  end
end

class Teacher
  include Supervisable
  include Chaperonable
  include Edible

  def teach
    puts "teaches a lesson"
  end
end

class ClassAssistant
  include Chaperonable
  include Edible

  def bathroom_emergency
    puts "helps kids with bathroom emergencies"
  end
end

class Child
  include Edible

  def play
    puts "plays with toys"
  end

  def learn
    puts "learns a subject"
  end
end

class Janitor
  include Edible

  def clean
    puts "cleans the hallways"
  end
end

class Principal
  include Supervisable
  include Edible

  def expel
    puts "expelled a student for bad behaviour"
  end
end

class CafeteriaLady
  include Edible

  def serve_food
    puts "serves food to the kids"
  end
end

teacher = Teacher.new
assistant = ClassAssistant.new
child = Child.new
principal = Principal.new
janitor = Janitor.new
cafeteria = CafeteriaLady.new

teacher.teach
teacher.watch_class
teacher.watch_kids
teacher.help_kids
teacher.eat

puts ""

assistant.watch_kids
assistant.help_kids
assistant.bathroom_emergency
assistant.eat

puts ""

child.play
child.learn
child.eat

puts ""

principal.watch_class
principal.expel
principal.eat

puts ""

janitor.clean
janitor.eat

puts ""

cafeteria.serve_food
cafeteria.eat

# OUTPUT:

# teaches a lesson
# supervises class
# watches kids on the playground
# help kids with schoolwork
# eats lunch

# watches kids on the playground
# help kids with schoolwork
# helps kids with bathroom emergencies
# eats lunch

# plays with toys
# learns a subject
# eats lunch

# supervises class
# expelled a student for bad behaviour
# eats lunch

# cleans the hallways
# eats lunch

# serves food to the kids
# eats lunch
