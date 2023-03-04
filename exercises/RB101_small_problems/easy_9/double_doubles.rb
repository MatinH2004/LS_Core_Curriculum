=begin

P: Write a method that returns 2 times the number unless the number is
   a double number. Double numbers should be returned as is.

   Double number:
     - a number with even number of digits
     - left-side digits are exactly the same as its right-side digits
     - ex. 44, 3333, 103103, 7676

E: - multiply number by 2 if not a double number
   - return number as is if double number

I: - none identified

T: (test cases written at the bottom)

A: /* given an integer */
   - convert to string and check number of digits
     - if odd digits return num times 2
     - if even digits, check if both sides of the number is identical
       - if yes, return num
       - if not, return number * 2

=end

def twice(num)
  s = num.to_s
  if s.size.even?
    if s[0, s.size / 2] == s[s.size / 2..-1]
      num
    else
      num * 2
    end
  else
    num * 2
  end
end

# refactor
def twice(num)
  s = num.to_s
  s.size.odd? ? num * 2 : s[0, s.size / 2] == s[s.size / 2..-1] ? num : num * 2
end

p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10