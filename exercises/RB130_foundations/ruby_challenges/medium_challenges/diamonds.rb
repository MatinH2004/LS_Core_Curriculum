=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Given an input as a letter, print a diamond starting with letter A upto the arg letter as the widest point in the diamond

  Input: letter (str)
  Output: string diamond

# --------------------------- Test Cases + Rules
  Explicit:
    - first and last row contain letter A
    - All rows, except first and last have two identical letters
    - the diamond is horizontally and vertically symmetric
    - the diamond has square shape (same width and height)
    - top half is in ascending order
    - bottom half is in descending order
    - four corners contain spaces

  Implicit:

  A

  A
 B B
  A

  A
 B B
C   C
 B B
  A

   A
  B B
 C   C
D     D
 C   C
  B B
   A

    A
   B B
  C   C
 D     D
E       E
 D     D
  C   C
   B B
    A


# --------------------------- Data Structure

# --------------------------- Scratch Book

# --------------------------- Algorithm

1. make_diamond() method:
  - initialize empty array called first_half
  - determine width of diamond and assign to diamond_width

  - iterate through letters with index
    - if index is zero, center letter in spaces (width), append to first_half
    - else
      - determine middle space by multiplying idx by 2
      - subtract index by 1 (because spaces go up by 1, 3, 5, 7...)
      - create string with 2 letters and space between them
        - center the string between spaces (width), append to first_half
  
  - for the second half of diamond (descending order)
    - assign reversed array (first_half) to mirrored_array
    - from index 1 to last of mirrored_array, append to first_half
  
  - join first_half

=end

class Diamond
  def self.make_diamond(letter)
    first_half = []
    diamond_width = ('A'..letter).to_a.size * 2 - 1

    ('A'..letter).each_with_index do |let, idx|
      if idx.zero?
        first_half << let.center(diamond_width, ' ') + "\n"
      else
        spaces = ' ' * (idx * 2 - 1)
        first_half << (let + spaces + let).center(diamond_width, ' ') + "\n"
      end
    end

    mirrored_half = first_half.reverse
    first_half << mirrored_half[1..-1]
    first_half.join
  end
end
