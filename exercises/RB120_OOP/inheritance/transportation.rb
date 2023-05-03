# Create a module named Transportation that contains three classes:
# Vehicle, Truck, and Car. Truck and Car should both inherit from Vehicle.

module Transportation
  class Vehicle; end

  class Truck < Vehicle; end
  class Car < Vehicle; end
end

my_truck = Transportation::Truck.new
my_car = Transportation::Car.new