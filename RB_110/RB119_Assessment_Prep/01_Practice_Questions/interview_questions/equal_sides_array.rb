=begin

Start time: 6:22

# --------------------------- Problem
  Restate the problem:

  Given an array of integers, find the index N where the sum of the
  integers to the left of N is equal to the sum of integers to the
  right of N. If there is no index that would make this happen,
  return -1.

  Input: array of integer
  Output: integer (index N)

# --------------------------- Test Cases + Rules
  Explicit:
    - find the index where the sum of ints to the left and right match
    - return -1 if not possible

  Implicit:
    - If you are given an array with multiple answers, 
      return the lowest correct index.

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN AN ARRAY OF INTS:
    1. initialize vairables
      - initialize `index` to int 0
      - assign `left` = 0..index - 1
      - assign 'right' = index..-1
    2. Loop through array
      - return index if sum of left and right equal
        - else increment index
    
=end
require 'pry'

def find_even_index(arr)
  index = 0
  
  loop do
    break if index >= arr.size
    
    right = arr[index..-1]
    left = arr[0, index]

    return index if left.sum == right[1..-1].sum


    index += 1
  end

  -1
end

# refactor

def find_even_index(arr)
  arr.each_with_index do |_, idx|
    return idx if arr[0...idx].sum == arr[idx + 1..-1].sum
  end

  -1
end

p find_even_index([1,2,3,4,3,2,1]) == 3
p find_even_index([1,100,50,-51,1,1]) == 1
p find_even_index([1,2,3,4,5,6]) == -1
p find_even_index([20,10,30,10,10,15,35]) == 3
p find_even_index([20,10,-80,10,10,15,35]) == 0
p find_even_index([10,-80,10,10,15,35,20]) == 6
p find_even_index(Array(1..100)) == -1
p find_even_index([0,0,0,0,0]) == 0
p find_even_index([-1,-2,-3,-4,-3,-2,-1]) == 3
p find_even_index(Array(-100..-1)) == -1