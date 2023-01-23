def negative(num)
  if num.negative? || num == 0
    num
  else
    num * -1
  end
end

p negative(5) == -5
p negative(-3) == -3
p negative(0) == 0      # There's no such thing as -0 in ruby

# LS Solution:

# def negative(number)
#   number > 0 ? -number : number
# end