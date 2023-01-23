#   */ given an array of numbers/*
# - create new array to store string value of the nums
# - use NUM_WORDS to add string representation of the nums to array
# - 

NUM_WORDS = {
  'zero' => 0, 'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4,
  'five' => 5,'six' => 6, 'seven' => 7, 'eight' => 8, 'nine' => 9,
  'ten' => 10,'eleven' => 11, 'twelve' => 12, 'thirteen' => 13, 
  'fourteen' => 14, 'fifteen' => 15,'sixteen' => 16, 'seventeen' => 17, 
  'eighteen' => 18, 'nineteen' => 19
}

def alphabetic_number_sort(input)
  num_words = []
  result = []
  invert_words = NUM_WORDS.invert

  input.each do |num|
    num_words << invert_words[num]
  end

  num_words.sort.each do |n|
    result << NUM_WORDS[n]
  end
    
  result
end

p alphabetic_number_sort((0..19).to_a) == [
  8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17,
  6, 16, 10, 13, 3, 12, 2, 0
]

# LS Solution:

# NUMBER_WORDS = %w(zero one two three four
#   five six seven eight nine
#   ten eleven twelve thirteen fourteen
#   fifteen sixteen seventeen eighteen nineteen)

# def alphabetic_number_sort(numbers)
# numbers.sort_by { |number| NUMBER_WORDS[number] }
# end