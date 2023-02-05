
# def sum_or_product(arr, num)
#   sum = arr.sort.max(num).sum
#   prod = arr.sort.min(num).inject(:*)
#   if sum > prod
#     "sum"
#   elsif sum < prod
#     "product"
#   elsif sum == prod
#     "same"
#   end
# end

def sum_or_product(arr, num)
  sum = arr.sort.max(num).sum
  prod = arr.sort.min(num).inject(:*)
  case
  when sum > prod then "sum"
  when sum < prod then "product"
  when sum == prod then "same"
  end
end

p sum_or_product([10, 41, 8, 16, 20, 36, 9, 13, 20], 3) == "product"
p sum_or_product([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4) == "sum"
p sum_or_product([10, 20, 3, 30, 5, 4], 3) == "same"