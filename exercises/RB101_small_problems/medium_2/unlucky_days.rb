=begin
# --------------------------- Problem
  Restate the problem:

  Write a method that returns the number of Friday the 13ths
  in a year given by an argument. Assume the year is greater than
  1752 (when the United Kingdom adopted the modern Gregorian Calendar)
  and that it will remain in use in for the foreseeable future.

  Input: integer (year)
  Output: integer (num of days)

# --------------------------- Test Cases + Rules

  Explicit:
    - assume year is greater 1752
    - return number of friday the 13ths in given year

  Implicit:
    - none identified

# --------------------------- Data Structure

# --------------------------- Scrapbook

  - initialize Date object
  - look at #friday? method

# --------------------------- Algorithm
  /* given an integer representing the year */
    - initialize date to new date object
    - initialize count variable
    - iterate 12 times over date
      - if date is friday? increment count
    - return count

=end

require 'date'

def friday_13th(year)
  date = Date.new(year, 12, 13)
  count = 0

  11.times do
    count += 1 if date.friday?
    date = date << 1 
    # ^ reassing date to 1 month before self
  end

  count
end

p friday_13th(2015) == 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2