# The time of day can be represented as the number of minutes before or after midnight. 
# If the number of minutes is positive, the time is after midnight.
# If the number of minutes is negative, the time is before midnight.

# Write a method that takes a time using this minute-based format and returns the time of day 
# in 24 hour format (hh:mm). Your method should work with any integer input.

# You may not use ruby's Date and Time classes.

def time_of_day(time)
  hours, minutes = time.divmod(60)

  if hours < 0
    hours += 24 until hours >= 0
    "#{sprintf('%02d:%02d', hours, minutes)}"
  elsif hours > 24
    hours /= 24
    "#{sprintf('%02d:%02d', hours, minutes)}"
  else
    "#{sprintf('%02d:%02d', hours, minutes)}"
  end
end

# -------------------------------------------------------

# Input: Integer, negative, 0, positive
# Output: String

# Explicit Rules:
# Time of day represented as the number of minutes before or after midnight
# If number of minutes is positive, the time is after midnight
# If number of minutes is negative, the time is before midnight
# Use minute-based format
# Return time of day in 24 hour format (hh:mm)
# Method should work with any integer input

# Implicit Rules:
# 24 hour format in minutes is 1440 minutes
# Max is 60 minutes
# Max is 24 hours
# Conversion 60 minutes is 1 hour

# Examples:
p time_of_day(0) == "00:00"
p time_of_day(-3) == "23:57"
p time_of_day(35) == "00:35"
p time_of_day(-1437) == "00:03"
p time_of_day(3000) == "02:00"
p time_of_day(800) == "13:20"
p time_of_day(-4231) == "01:29"

# Algorithm:

# /Given an Integer/

# 1. Divide Integer by 60 with remainder
# 2. Result is Hours, and remainder is Minutes
# 3. Divide Hours greater than 24 by 24 = Hours of the day
# 4. We have our positive time of the day
# 5. If we have a negative number, our Hours will be less than 0
# 6. Dividing by -24 doesn't accurately handle this
# 7. So let's add 24 until Hours is greater than 0 (like 24 -23 = 23rd hour)
# 8. We have our negative time of the day
# 9. Format using #sprintf / #format