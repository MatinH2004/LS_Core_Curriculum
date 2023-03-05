
# Write a method which takes a grocery list (array) of fruits with 
# quantities and converts it into an array of the correct number of each fruit.

def buy_fruit(list)
  list.each_with_object([]) do |sub_arr, result|
    sub_arr[1].times {result << sub_arr[0]}
  end
end

# one-liner
def buy_fruit(list)
  list.map {|fruit, quantity| [fruit] * quantity}.flatten
end

p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]
