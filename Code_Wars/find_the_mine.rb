=begin

P: Write a method that takes a 2D array, and returns
   the location of the mine. The mine is represented
   as `1` in the 2D array. Areas that are not the mine
   will be represented as `0`.

   The location of the mine must be returned using
   an array [row, column].

E: - mine represented as 1
   - empty spots represented as 0
   - return location: [row, column]

I: - none identified

T: mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) => returns [0, 0] 
   mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) => returns [1, 1] 
   mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) => returns [2, 1]

A: /* given a 2D array */
   - iterate through the 2D array with index
   - when current object is 1 return the location of the mine

=end

def mineLocation(arr)
  arr.each_with_index do |sub_arr, idx|
    sub_arr.each_with_index do |num, idxx|
      return [idx, idxx] if num == 1
    end
  end
end

# refactor
def mineLocation(arr)
  arr.each_with_index do |subarr, idx|
    return [idx, subarr.index(1)] if subarr.include?(1)
  end
end

p mineLocation( [ [1, 0, 0], [0, 0, 0], [0, 0, 0] ] ) == [0, 0] 
p mineLocation( [ [0, 0, 0], [0, 1, 0], [0, 0, 0] ] ) == [1, 1] 
p mineLocation( [ [0, 0, 0], [0, 0, 0], [0, 1, 0] ] ) == [2, 1] 
p mineLocation([ [1, 0], [0, 0] ]) == [0, 0]
p mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]) == [0, 0]
p mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]) == [2, 2]