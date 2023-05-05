class Car
  attr_reader :make, :model

  def initialize(make, model)
    @make = make
    @model = model
  end

  def wheels
    4
  end

  def to_s
    "#{make} #{model}"
  end
end

class Motorcycle
  attr_reader :make, :model

  def initialize(make, model)
    @make = make
    @model = model
  end

  def wheels
    2
  end

  def to_s
    "#{make} #{model}"
  end
end

class Truck
  attr_reader :make, :model, :payload

  def initialize(make, model, payload)
    @make = make
    @model = model
    @payload = payload
  end

  def wheels
    6
  end

  def to_s
    "#{make} #{model}"
  end
end