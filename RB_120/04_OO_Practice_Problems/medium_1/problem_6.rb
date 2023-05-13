class Computer
  attr_accessor :template

  def create_template
    @template = "template 14231"
  end

  def show_template
    template
  end
end

comp = Computer.new
comp.show_template

# ---

class Computer
  attr_accessor :template

  def create_template
    @template = "template 14231"
  end

  def show_template
    self.template   # self not needed
  end
end
