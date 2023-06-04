class FixedArray
  attr_reader :size, :array

  def initialize(size)
    @size = size
    @array = [nil] * size
  end

  def [](index)
    validate_index(index)
    array[index]
  end

  def []=(index, element)
    validate_index(index)
    self.array[index] = element
  end

  def to_a
    array.clone
  end

  def to_s
    "#{array.inspect}"
  end
  
  private

  def validate_index(idx)
    raise IndexError if idx.abs > size
  end
end

fixed_array = FixedArray.new(5)
puts fixed_array[3] == nil
puts fixed_array.to_a == [nil] * 5

fixed_array[3] = 'a'
puts fixed_array[3] == 'a'
puts fixed_array.to_a == [nil, nil, nil, 'a', nil]

fixed_array[1] = 'b'
puts fixed_array[1] == 'b'
puts fixed_array.to_a == [nil, 'b', nil, 'a', nil]

fixed_array[1] = 'c'
puts fixed_array[1] == 'c'
puts fixed_array.to_a == [nil, 'c', nil, 'a', nil]

fixed_array[4] = 'd'
puts fixed_array[4] == 'd'
puts fixed_array.to_a == [nil, 'c', nil, 'a', 'd']
puts fixed_array.to_s == '[nil, "c", nil, "a", "d"]'

puts fixed_array[-1] == 'd'
puts fixed_array[-4] == 'c'

begin
  fixed_array[6]
  puts false
rescue IndexError
  puts true
end

begin
  fixed_array[-7] = 3
  puts false
rescue IndexError
  puts true
end

begin
  fixed_array[7] = 3
  puts false
rescue IndexError
  puts true
end

# refactored solution

class FixedArray
  def initialize(max_size)
    @array = Array.new(max_size)
  end

  def [](idx)
    @array.fetch(idx)
  end

  def []=(idx, obj)
    self[idx]           # raise error if idx is invalid 
    @array[idx] = obj
  end

  def to_a
    @array.clone
  end

  def to_s
    to_a.to_s
  end
end