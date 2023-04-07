# Given an integer, find the next bigger number containing
# the same digits as the input integer. If no bigger numbers
# are able to be made, return -1.

def next_bigger_num(int)
  max = int.digits.sort {|a,b| b <=> a}.join.to_i

  for i in (int.succ..max) do
    return i if i.digits.sort == int.digits.sort
  end

  -1
end

p next_bigger_num(9) == -1
p next_bigger_num(12) == 21
p next_bigger_num(513) == 531
p next_bigger_num(2017) == 2071
p next_bigger_num(111) == -1
p next_bigger_num(531) == -1
p next_bigger_num(123456789) == 123456798