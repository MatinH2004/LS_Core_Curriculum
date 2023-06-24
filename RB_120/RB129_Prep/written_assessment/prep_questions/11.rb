STR = "Main"

module Walk
  STR = "Walking"
end

module Run
  STR = "Running"
end

module Jump
  STR = "Jumping"
end

class Bunny
  include Jump
  include Walk
  include Run
end

class Bugs < Bunny
  def self.str
    STR
  end

  def str
    STR
  end
end

p Bugs.ancestors

p Bugs::STR     # 'Running'
p Bugs.str      # 'Running'
p Bugs.new.str  # 'Running'

# Ruby searches up inheritance chain, then searches from the last module included, which is Run.
# If ruby doesn't find a reference to STR in any classes/modules, the main scope will be searched
# which would be STR = 'Main'