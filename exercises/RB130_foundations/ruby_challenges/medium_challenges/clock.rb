=begin

P:

Create a clock you can add and subtract minutes from
Should NOT mutate an Clock object when adding/subtracting
  - return a new Clock object
Dont use any builtin Date/Time classes

E:

Clock.at(8).to_s => "08:00"
Clock.at(9).to_s => "09:00"

Clock.at(11, 9).to_s => "11:09"

(Clock.at(10) + 3).to_s => "10:03" (new object returned)

(Clock.at(0) - 50).to_s => "23:10"

(Clock.at(10) + 3061).to_s => "13:01"

D:

A:

1. self.at(hr, min)
  - if hr is greater than 24, -= 24 until hr is less than 24
  - if min is 60 or greater, -= 60 += 1 hr, until min is less than 60

  - clock.new(hr, min)

2. + min
  - 

3. - min

4. to_s

5. ==

=end

# class Clock

#   attr_reader :minute, :hour

#   ONE_DAY = 24 * 60

#   def initialize(hour, min)
#     @hour = hour
#     @min = min
#   end
#   def self.at(hour, min=0)
#     new(hour, min)
#   end
  
#   def +(add_minutes)
#     minutes_since_midnight = compute_minutes_since_midnight + add_minutes
#     while minutes_since_midnight >= ONE_DAY
#       minutes_since_midnight -= ONE_DAY
#     end

#     compute_time_from(minutes_since_midnight)
#   end

#   def -(sub_minutes)
#     minutes_since_midnight = compute_minutes_since_midnight - sub_minutes
#     while minutes_since_midnight > 0
#       minutes_since_midnight -= ONE_DAY
#     end

#     compute_time_from(minutes_since_midnight)
#   end

#   def ==(other_time)
#     hour == other_time.hour && minute == other_time.minute
#   end

#   def to_s
#     sprintf("%02d:%02d", @hour, @min)
#   end

#   private

#   def compute_minutes_since_midnight
#     total_minutes = 60 * hour + minute
#     total_minutes % ONE_DAY
#   end

#   def compute_time_from(minutes_since_midnight)
#     hours, minutes = minutes_since_midnight.divmod(60)
#     hours %= 24
#     self.class.new(hours, minutes)
#   end
# end

class Clock
  def self.at(hh, mm = 0)
    self.new(hh * 60 + mm)
  end

  def initialize(minutes)
    @val = minutes.divmod(1440).last
  end

  def ==(other)
    self.val == other.val
  end

  def +(add)
    self.class.new(self.val + add)
  end

  def -(add)
    self.+(-add)
  end

  def to_s
    format("%02d:%02d", *@val.divmod(60))
  end

  protected

  attr_reader :val
end