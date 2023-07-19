VAL = 'Global'

module Foo
  VAL = 'Local'

  class Bar
    VAL = 'Local' # <= add this so #value2 has access to VAL

    def value1
      VAL
    end
  end
end

class Foo::Bar
  # mental model: an extension class to Bar class in Foo module
  # different lexical scope, though
  def value2
    VAL
  end
end

p Foo::Bar.new.value1 # 'Local'
p Foo::Bar.new.value2 # 'Local'

#13a — What will be returned by the value1 and value2 method calls? 
# => "Local" will be output by both method calls

#13b — If we omit the first line (VAL = ‘Global’), what will the returned values be then? 
# => "Local" is still output to the screen

#13c — What line of code can you add to the Bar class inside the Foo module to allow value2 access to the same VAL as value1 ?
# => On line 7, we can define the VAL constant to "Local", so #value2 method has access to a VAL constant other than the one
#    defined on line 1.