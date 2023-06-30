### Dental Office Alumni (by Rona Hsu)

# There's a dental office called Dental People Inc. Within this office, there's 2 oral surgeons, 2 orthodontists, 1 general dentist.
# Both general dentists and oral surgeons can pull teeth. Orthodontists cannot pull teeth.  Orthodontists straighten teeth.
# All of these aforementioned specialties are dentists. All dentists graduated from dental school.  Oral surgeons place implants.
# General dentists fill teeth

module CanPullTeeth
  def pull_teeth
    puts "#{name} is a #{self.class} that can pull teeth."
  end
end

class Dentist
  OFFICE_NAME = 'Dental People Inc.'

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def graduate_from_dental_school
    puts "#{name} graduated from dental school."
  end
end

class OralSurgeon < Dentist
  include CanPullTeeth

  def place_implants
    puts "#{name} is an OralSurgeon that can place implants."
  end
end

class Orthodontist < Dentist
  def straighten_teeth
    puts "#{name} is an Orthodontist that can straighten teeth."
  end
end

class GeneralDentist < Dentist
  include CanPullTeeth

  def fill_teeth
    puts "#{name} is a GeneralDentist that can fill teeth."
  end
end

# Create instances of dentists
dentist1 = OralSurgeon.new("Dr. Smith")
dentist2 = OralSurgeon.new("Dr. Johnson")
dentist3 = Orthodontist.new("Dr. Thompson")
dentist4 = Orthodontist.new("Dr. Anderson")
dentist5 = GeneralDentist.new("Dr. Davis")

# Demonstrate their capabilities
dentist1.graduate_from_dental_school
dentist1.pull_teeth
dentist1.place_implants

dentist3.graduate_from_dental_school
dentist3.straighten_teeth

dentist5.graduate_from_dental_school
dentist5.fill_teeth
dentist5.pull_teeth

# OUTPUT:

# Dr. Smith graduated from dental school.
# Dr. Smith is a OralSurgeon that can pull teeth.
# Dr. Smith is an OralSurgeon that can place implants.
# Dr. Thompson graduated from dental school.
# Dr. Thompson is an Orthodontist that can straighten teeth.
# Dr. Davis graduated from dental school.
# Dr. Davis is a GeneralDentist that can fill teeth.
# Dr. Davis is a GeneralDentist that can pull teeth.
