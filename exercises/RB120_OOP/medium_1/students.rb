# Graduate students have the option to use on-campus parking, while Undergraduate students do not.
# Graduate and Undergraduate students both have a name and year associated with them.

class Student
  def initialize(name, year)
    @name = name
    @year = year
  end

  def grades
    puts "Grades sent to email."
  end
end

class Graduate < Student
  def initialize(name, year, parking)
    super(name, year)
    @parking = parking
  end
end

class Undergraduate < Student
  def initialize(name, year)
    super
  end

  def grades
    super()
  end
end

u = Undergraduate.new('Sahaj', 2022)
g = Graduate.new('Sepehr', 2018, 'G69')

u.grades
g.grades
