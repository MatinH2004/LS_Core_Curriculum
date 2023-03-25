=begin
# --------------------------- Problem
  Restate the problem:

  Write a method that takes an array as an argument, and sorts the array
  using the bubble sort algorithm described below. Note that the array
  passed in should be mutated. Assume array contains at least 2 elements.

  * Bubble Sort Algorithm:
    - works by making multiple passes (iterations) through the array.
    - On each pass, each pair of consecutive elements is compared.
    - If first of the two elements is greater than the second:
      - the two elements are swapped.
    - This process is repeated until a complete pass is made without
      performing any swaps; at that point, the array is sorted.

  Input: array (contains at least 2 elements)
  Output: original array (mutated)

# --------------------------- Test Cases + Rules

  Explicit:
    - Sort elements of array using bubble sort algo
    - modify passed in array
    - assume input array contains at least 2 elements

  Implicit:
    - none identified

# --------------------------- Data Structure

  * Array:
    - multiple assignment to sort array (mutative)
    - nested loops (loop do)

# --------------------------- Scrapbook

# --------------------------- Algorithm
  /* given an array */

  1. initialize index variable to 0
  2. Using a while loop:
      - while index is less than size of array - 1
      - if current element is greater than next element
        - swap places in array
        - set index to 0
      - else
        - increment index by 1

=end

def bubble_sort!(arr)
  index = 0

  while index < arr.size - 1 do
    if arr[index] > arr[index+1]
      arr[index], arr[index+1] = arr[index+1], arr[index]
      index = 0
    else
      index += 1
    end
  end

end

array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
bubble_sort!(array)
p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)

# further optimised solution
def bubble_sort2!(arr)
  n = arr.size - 1
  while n > 1
    unsorted = 0
    n.times do |i|
      if arr[i] > arr[i + 1]
        arr[i], arr[i + 1] = arr[i + 1], arr[i]
        unsorted = i
      end
    end
    n = unsorted
  end
end