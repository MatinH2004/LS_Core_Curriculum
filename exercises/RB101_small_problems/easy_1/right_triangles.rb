# Write a method that takes a positive integer, n, as an argument, and displays a right triangle whose sides each have n stars. 
def triangle(num)
  for i in (1..num) do
    puts ' ' * (num - i) + '*' * i
  end
end

triangle(5)
triangle(9)