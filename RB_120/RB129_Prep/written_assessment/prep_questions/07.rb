class Bird
  def fly
    p "#{self.class} is flying!"
  end
end

class Pigeon < Bird; end
class Duck < Bird; end

birds = [Bird.new, Pigeon.new, Duck.new].each(&:fly)

# The code above demonstrates the concept of polymorphism, as on line 10, instances
# of different classes respond to the same behavior, which is the `fly` instance method.