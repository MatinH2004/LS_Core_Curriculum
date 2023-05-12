module Taste
  def flavor(flavor)
    puts "#{flavor}"
  end
end

class Orange
  include Taste
end

class HotSauce
  include Taste
end

puts Orange.ancestors.join(', ')
# Orange, Taste, Object, Kernel, BasicObject
puts
puts HotSauce.ancestors.join(', ')
# HotSauce, Taste, Object, Kernel, BasicObject