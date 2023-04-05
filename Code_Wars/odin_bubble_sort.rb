# Build a bubble_sort method that takes an array of
# integers and returns a sorted array.
# Cannot use #sort

def bubble_sort!(arr)
  index = 0

  while index < arr.size - 1 do
    if arr[index] > arr[index + 1]
      arr[index], arr[index + 1] = arr[index + 1], arr[index]
      index = 0
    else
      index += 1
    end
  end

end

arr = [4,3,78,2,0,2]
bubble_sort!(arr)
p arr == [0, 2, 2, 3, 4, 78]

# Non destructive method

def bubble_sort(arr)
  arr = arr.clone
  index = 0

  while index < arr.size - 1 do
    if arr[index] > arr[index + 1]
      arr[index], arr[index + 1] = arr[index + 1], arr[index]
      index = 0
    else
      index += 1
    end
  end

  arr
end

arr = [2, 8, 4, 5]
p bubble_sort(arr) # [2, 4, 5, 8]
p arr              # [2, 8, 4, 5]