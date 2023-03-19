=begin
P: Write a method that displays a diamond in an n x n grid. 
   Assume given integer is always odd.

E: - Height and width of diamond must be equal to integer
   - Argument integer is always odd.

I: - none

T: diamond(1) = *
   diamond(3) = 
                 *
                ***
                 *
   
   diamond(9) =     *
                   ***
                  *****
                 *******
                *********
                 *******
                  *****
                   ***
                    *

A: /* given an odd integer */
   - 

=end
def print_row(grid_size, distance_from_center)
  number_of_stars = grid_size - 2 * distance_from_center
  stars = '*' * number_of_stars
  puts stars.center(grid_size)
end

def diamond(grid_size)
  max_distance = (grid_size - 1) / 2
  max_distance.downto(0) { |distance| print_row(grid_size, distance) }
  1.upto(max_distance)   { |distance| print_row(grid_size, distance) }
end

p diamond(3)
p diamond(27)