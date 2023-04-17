=begin

Your goal is to write the group_and_count method, which should receive 
and array as unique parameter and return a hash. Empty or nil input must 
return nil instead of a hash. This hash returned must contain as keys the 
unique values of the array, and as values the counting of each value.

=end

def group_and_count(input)
  return nil if input.nil? || input.empty?
  input.each_with_object(Hash.new(0)) do |n, hsh|
    hsh[n] += 1
  end
end

p group_and_count([0, 1, 1, 0]) == {0 => 2, 1 => 2}