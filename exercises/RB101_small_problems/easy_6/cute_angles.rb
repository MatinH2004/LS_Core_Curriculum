
DEGREE = "\xC2\xB0" # degree symbol unicode

# def dms(float)
#   degree = float.to_i
#   minutes = (float * 60).divmod(60)[1].to_i
#   seconds = (float * 60 * 60).divmod(60)[1].to_i
#   format(%(#{degree}#{DEGREE}%02d'%02d"), minutes, seconds)
# end

# p dms(30) == %(30°00'00")
# p dms(76.73) == %(76°43'48")
# p dms(254.6) == %(254°36'00")
# p dms(93.034773) == %(93°02'05")
# p dms(0) == %(0°00'00")
# p dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

# Further Exploration

def dms(float)
  if float > 360
    float -= 360 until float <= 360
  elsif float < 0
    float += 360 until float >= 0
  end

  degree = float.to_i
  minutes = (float * 60).divmod(60)[1].to_i
  seconds = (float * 60 * 60).divmod(60)[1].to_i
  format(%(#{degree}#{DEGREE}%02d'%02d"), minutes, seconds)
end

p dms(400) == %(40°00'00")
p dms(-40) == %(320°00'00")
p dms(-420) == %(300°00'00")
