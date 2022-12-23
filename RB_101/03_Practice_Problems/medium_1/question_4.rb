=begin

Alyssa was asked to write an implementation of a rolling buffer. 
Elements are added to the rolling buffer and if the buffer becomes full, 
then new elements that are added will displace the oldest elements in the buffer.

She wrote two implementations saying, 
"Take your pick. Do you like << or + for modifying the buffer?". 
Is there a difference between the two, other than what operator she 
chose to use to concatenate an element to the buffer?

=end

def rolling_buffer1(buffer, max_buffer_size, new_element)
  buffer << new_element # side effect, mutative
  buffer.shift if buffer.size > max_buffer_size
  buffer
end

def rolling_buffer2(input_array, max_buffer_size, new_element)
  buffer = input_array + [new_element] # doesnt mutate
  buffer.shift if buffer.size > max_buffer_size
  buffer
end

=begin

Both methods return the same thing, just a few subtle differences:

`rolling_buffer1` has a side effect, and has a return value, 
which is something we want to avoid.

`rolling_buffer2` returns a new object, and doesn't modify
the original array. Therefore it is the better implementation

=end