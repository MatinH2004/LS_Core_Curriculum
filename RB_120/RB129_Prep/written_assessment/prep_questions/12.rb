VAL = 'Global'

module Foo
  VAL = 'Local'

  class Bar
    # VAL = "Class"
    include Foo

    def value1
      VAL
    end
  end
end

class Foo::Bar
  def value2
    VAL
  end
end

p Foo::Bar.new.value1 #=> "Local"
p Foo::Bar.new.value2 #=> "Global

