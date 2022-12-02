# Solution using PEDAC

# We understand the problem:
# Write a method that counts the number of occurrences of each element in a given array.

# Test Case
  # car => 4
  # truck => 3
  # SUV => 1
  # motorcycle => 2

# Data Structure:
  # input: array of cars
  # output: how many different types of cars

# Algorithm:
  # create method `count_occurences(array)`
    # create hash with default value as 0
    # iterate over array and increment each car type
    # return hash

# Code with intend:

def count_occurrences(array)
  vehicles = Hash.new(0)

  car_count = array.select do |value|
    # further exploration - case sensitive values
    value.upcase! if value == 'suv'

    vehicles[value] += 1
  end
  
  vehicles.each {|key, value| puts "#{key} => #{value}"}
    
end

vehicles = [
  'car', 'car', 'truck', 'car', 'suv', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurrences(vehicles)
