module SportMode
  def enable_sport_mode
    puts "Your car is now on sport mode."
  end

  def disable_sport_mode
    puts "Sport mode disabled."
  end
end

module Towable
  def can_tow?(pounds)
    pounds < 2000
  end
end

class Vehicle
  attr_accessor :color
  attr_reader :year, :model

  @@number_of_vehicles = 0

  def initialize(year, model, color)
    @year = year
    @color = color
    @model = model
    @speed = 0
    @@number_of_vehicles += 1
  end

  def self.number_of_vehicles
    puts "This program has created #{@@number_of_vehicles} vehicles."
  end

  def self.gas_mileage(gallons, miles)
    puts "#{miles / gallons} miles per gallon of gas."
  end

  def speed_up(number)
    @speed += number
    puts "You push the gas and accelerate #{number} km/h."
  end

  def brake(number)
    if @speed == 0
      puts "Car is not moving"
    else
      @speed -= number
      puts "You push the brake and decelerate #{number} km/h."
    end
  end

  def current_speed
    puts "You are going #{@speed} km/h."
  end

  def turn_off
    @speed = 0
    puts "Car is turned off."
  end

  def spray_paint(color)
    puts "You changed the color from #{self.color} to #{color}."
    self.color = color
  end

  def age
    puts "Your #{self.model} is #{years_old} years old"
  end

  private

  def years_old
    Time.now.year - self.year
  end
end

class MyCar < Vehicle
  include SportMode

  NUMBER_OF_DOORS = 4

  def to_s
    "Car details: #{year}, #{color}, #{model}"
  end
end

class MyTruck < Vehicle
  include Towable

  NUMBER_OF_DOORS = 2

  def to_s
    "Truck details: #{year}, #{color}, #{model}"
  end
end

my_car = MyCar.new(2018, "BMW M3", "Black")
my_truck = MyTruck.new(2022, "Ford Raptor", "White")

# puts my_car
# puts my_truck

# Vehicle.number_of_vehicles

# my_car.enable_sport_mode
# my_car.disable_sport_mode

# my_truck.can_tow?(1500) # true

# puts MyCar.ancestors
# puts MyTruck.ancestors
# puts Vehicle.ancestors

puts my_car

my_car.current_speed
my_car.speed_up(60)
my_car.current_speed
my_car.brake(15)
my_car.current_speed
my_car.brake(45)
my_car.current_speed
my_car.turn_off
MyCar.gas_mileage(14, 350)

my_car.age

my_car.spray_paint('Blue')