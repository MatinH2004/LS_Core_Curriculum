# From Joseph Ochoa
# give class Barbarian the functionality of the Monster instance attack method:
  # If you used class inheritance, now try doing it without class inheritance directly.
  # If you used modules, now try not using modules
  # If you used duck typing, now don't use duck typing 

module Attackable
  def attack
    "attacks!"
  end
end

class Monster
  include Attackable

  def attack
    "attacks!"
  end
end

# using class inheritance
class Barbarian < Monster
end

# using a module
class Barbarian
  include Attackable
end

# using duck-typing
class Barbarian
  def attack
    "attacks!"
  end
end

Barbarian.new.attack # => attacks!