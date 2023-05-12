# Which of these two classes would create objects that would 
# have an instance variable and how do you know?

class Fruit
  def initialize(name)
    name = name
  end
end

class Pizza
  def initialize(name)
    @name = name
  end
end

# the Pizza class would create an object with an instance variable
# as it is declared in the #initialize method, denoted with a @

# in the Fruit class definition, within the #intialize method
# a local variable is being declared since the name doesnt start
# with a @

hot_pizza = Pizza.new("cheese")
orange    = Fruit.new("apple")

hot_pizza.instance_variables
# => [:@name]
orange.instance_variables
# => []