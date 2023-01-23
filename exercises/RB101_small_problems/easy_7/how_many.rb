# Write a method that counts the number of occurences of each element.
# Words are case sensitive, 'suv' != 'SUV'

def count_occurrences(arr)
  arr.each_with_object({car:0, truck:0, SUV:0, motorcycle:0}) do |ele, hash|
    hash[ele.to_sym] += 1
  end
end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

p count_occurrences(vehicles)
# => {:car=>4, :truck=>3, :SUV=>1, :motorcycle=>2}