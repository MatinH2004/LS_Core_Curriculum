# Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.
# Update the method from the previous exercise to determine leap years both before and after 1752.

def leap_year?(year)
  if year < 1752 && year % 4 == 0
    true
  elsif year % 400 == 0
    true
  elsif year % 100 == 0
    false
  else
    year % 4 == 0
  end
end

# SHORT WAY:

# def leap_year?(year)
#   year % 4 == 0 && (year < 1752 || year % 100 != 0 || year % 400 == 0)
# end

p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == true
p leap_year?(1) == false
p leap_year?(100) == true
p leap_year?(400) == true