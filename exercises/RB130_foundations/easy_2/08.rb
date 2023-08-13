def max_by(arr)
  result = []
  arr.each { |ele| result << yield(ele) }
  arr[result.index(result.max)] unless arr.empty?
end

def max_by(collection)
  max_ele = collection.first
  collection.each do |ele|
    max_ele = ele if (yield(ele) > yield(max_ele))
  end
  max_ele
end

p max_by([1, 5, 3]) { |value| value + 2 } == 5
p max_by([1, 5, 3]) { |value| 9 - value } == 1
p max_by([1, 5, 3]) { |value| (96 - value).chr } == 1
p max_by([[1, 2], [3, 4, 5], [6]]) { |value| value.size } == [3, 4, 5]
p max_by([-7]) { |value| value * 3 } == -7
p max_by([]) { |value| value + 5 } == nil