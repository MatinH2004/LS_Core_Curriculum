# Write two methods thats each take a time of day in 24 hour format
# Return the number of minutes before and after midnight, respectively.
# Both methods should return a value in the range 0..1439

# You may not use Date and Time methods

HOURS_PER_DAY = 24
MINUTES_PER_HOUR = 60
MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR

def after_midnight(str)
  hours, minutes = str.split(':').map(&:to_i)
  (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY
end

def before_midnight(str)
  delta_minutes = MINUTES_PER_DAY - after_midnight(str)
  delta_minutes = 0 if delta_minutes == MINUTES_PER_DAY
  delta_minutes
end

p after_midnight('00:00') == 0
p before_midnight('00:00') == 0
p after_midnight('12:34') == 754
p before_midnight('12:34') == 686
p after_midnight('24:00') == 0
p before_midnight('24:00') == 0

# ----------------------------------------

# Input: string representing time (24 hour format)
# Output: positive integer reperesenting minutes