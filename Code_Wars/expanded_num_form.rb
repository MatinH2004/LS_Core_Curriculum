=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes an integer and returns the number
  as a string in expanded form.

  Input: integer
  Output: string (expanded form integer)

# -------------------------- Test Cases

  All numbers will be whole numbers greater than 0

  expanded_form(12); # Should return '10 + 2'
  expanded_form(42); # Should return '40 + 2'
  expanded_form(70304); # Should return '70000 + 300 + 4'

# -------------------------- Data Structure

  integer -> array -> string

# -------------------------- Algorithm

  /* given an integer */
    - initialize `numbers` array

    - convert integer to string
      - save size of string to `len` variable

    - iterate through string with index
      - if number is 1-9, add [index] number of zeros and push to `numbers` array
      - skip to next iteration if number is 0
    
    - join numbers from array using '+'

=end

def expanded_form(num)
  numbers = []
  len = num.to_s.length
  
  num.to_s.chars.each do |n|
    if n.to_i != 0
      numbers << n + ('0' * (len-1))
    end
    len -= 1
  end

  numbers.join(' + ')
end

# refactor
def expanded_form(n)
  len = n.to_s.size
  n.to_s.chars.each_with_object([]) do |i, arr|
    arr << i + ('0' * (len - 1)) if i != '0'
    len -= 1
  end.join(' + ')
end

p expanded_form(12) == '10 + 2'             # true
p expanded_form(42) == '40 + 2'             # true
p expanded_form(70304) == '70000 + 300 + 4' # true
