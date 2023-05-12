class Oracle
  def predict_the_future
    "You will " + choices.sample
  end

  def choices
    ["eat a nice lunch", "take a nap soon", "stay at work late"]
  end
end

class RoadTrip < Oracle
  def choices
    ["visit Vegas", "fly to Fiji", "romp in Rome"]
  end
end

trip = RoadTrip.new
puts trip.predict_the_future

# Ruby will look for the `choices` method in the RoadTrip class
# first, then look in the inheritance chain if the method is not found

# choices is defined in the RoadTrip class, so that method is called