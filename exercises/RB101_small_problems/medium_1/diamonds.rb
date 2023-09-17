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

def diamond(n)
   first_half = []
 
   (0..(n/2)).each do |idx|
     stars = '*' * (((idx + 1) * 2) - 1)
     first_half << stars.center(n, ' ')
   end
 
   mirrored_half = first_half[0..-2].reverse
   first_half << mirrored_half
   first_half.join("\n")
 end
 
 puts diamond(5)
 
 def hollow_diamod(n)
   first_half = []
 
   (0..(n/2)).each do |idx|
     if idx.zero?
       first_half << '*'.center(n, ' ')
     else
       space = ' ' * (idx * 2 - 1)
       first_half << ('*' + space + '*').center(n, ' ')
     end
   end
 
   mirrored_half = first_half[0..-2].reverse
   first_half << mirrored_half
   first_half.join("\n")
 end
 
 puts hollow_diamod(5)