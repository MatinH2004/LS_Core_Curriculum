=begin

P: Write a method that determines the average of three scores passed into
   it, and returns the letter value associated with that grade.

E: - get the average of the three numbers
     - and check which grade it matches

I: - none identified

T: (95, 90, 93) == "A"
   (50, 50, 95) == "D"

A: /* given three integers */
   - initialize grade hash
   - find the average of three integers
   - check which grade the number matches

=end

GRADES = {
  A: (90..),
  B: (80..90),
  C: (70..80),
  D: (60..70),
  F: (0..60)
}

def get_grade(num1, num2, num3)
  average = (num1 + num2 + num3) / 3
  GRADES.keys.each {|x| return x.to_s if GRADES[x].include?(average)}
end

p get_grade(95, 90, 93) == "A"
p get_grade(50, 50, 95) == "D"
p get_grade(100, 104, 102) == "A"
