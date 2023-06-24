class Cat
  attr_accessor :name

  def set_name
    name = "Cheetos"
    # solution:
    # self.name = "Cheetos"
  end
end

cat = Cat.new
cat.set_name
p cat.name

# The code above outputs `nil`, because in the #set_name method, instead of calling the `@name` instance variable,
# a local variable is initialized instead. To fix this we must prepend `self.` so ruby knows that we are calling
# the `name=` setter method.