=begin

P:

 Write a Meetup class that takes two arguments: month (1-12) and year
 and a #day method that takes (weekday, schedule)
 where weekday is one of: monday, tuesday, wednesday, etc.
 and schedule is first, second, third, fourth, fifth, last, or teenth.

 The method should return a Date object with the correct day

E: - weekday arg case insensitive ('first' and 'FiRst' treat equal)
   - 'teenth': day that ends with ..teenth. 13-19

I: - #day method should return Date object as correct day

D: string -> numbers -> Date

Helpful Date methods:
- #monday? -> friday? => true/false
- #day => 1..31
- #+ => increments day
- Date.new(2001, 2, 3).wday # => 6 (0..6) = weekdays

Side note:
- For 'teenth': (13..19).include?(date.day)

1. require 'date' class

2. constructor(year, month):
  - create a new Date object given the year and month

3. day(weekday, schedule) method:
  - save @date to date variable
  - save current month to month variable
  - save day variable to @date.wday
  - save count to 0

  - initialize hash
    - first  -> 1
    - second -> 2
    - third  -> 3
    - fourth -> 4
    - fifth  -> 5

  - while count <= hash[schedule]
    - if weekday == day
      - increment count
    - increment date to next day
    - return nil if date.month =! month

5. find 'teenth' day:
  - starting from 13th day of the month
  - increment up until day is found

6. find last day
  - starting from last day of month
  - decrement until day is found

=end

require 'date'

class Meetup
  DAY_OF_WEEK = {
    'SUNDAY'    => 0,
    'MONDAY'    => 1,
    'TUESDAY'   => 2,
    'WEDNESDAY' => 3,
    'THURSDAY'  => 4,
    'FRIDAY'    => 5,
    'SATURDAY'  => 6
  }.freeze

  WHICH_DAY = {
    'FIRST'  => 1,
    'SECOND' => 2,
    'THIRD'  => 3,
    'FOURTH' => 4,
    'FIFTH'  => 5
  }.freeze

  def initialize(year, month)
    @date = Date.new(year, month)
  end

  def day(weekday, schedule)
    date = @date
    month = @date.month
    day = DAY_OF_WEEK[weekday.upcase]
    count = 0

    return find_teenth_day(day) if schedule.upcase == 'TEENTH'
    return find_last_day(day) if schedule.upcase == 'LAST'

    while count <= WHICH_DAY[schedule.upcase]
      if date.wday == day
        count += 1
        break if count == WHICH_DAY[schedule.upcase]
      end

      date += 1

      return nil unless date.month == month
    end
    
    date
  end

  private

  # check starting with 13th day and up
  def find_teenth_day(day)
    date = Date.new(@date.year, @date.month, 13)
    date += 1 until date.wday == day
    date
  end

  # check starting with last day and down
  def find_last_day(day)
    date = Date.new(@date.year, @date.month, -1)
    date -= 1 until date.wday == day
    date
  end
end
