def running_total(arr)
  result = []
  total = 0
  count = 0

  loop do
    return arr if arr.empty?
    total += arr[count]
    result << total
    count += 1
    break if count == arr.size
  end

  result
end

# LS Solution:
# def running_total(array)
#   sum = 0
#   array.map { |value| sum += value }
# end

p running_total([2, 5, 13]) == [2, 7, 20]                       # true
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]    # true
p running_total([3]) == [3]                                     # true
p running_total([]) == []                                       # true