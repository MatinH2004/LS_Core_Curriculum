=begin

1. A method that returns the sum of two integers

START

METHOD sum(arg1, arg2)
  arg1.to_i
  arg2.to_i

  SET result = arg1 + arg2

PRINT result

END

2. a method that takes an array of strings, and returns a string that is all those strings concatenated together

# given a collection of strings in an array
  - use #join method on the array to concatenate all strings inside

3. a method that takes an array of integers, and returns a new array with every 
   other element from the original array, starting with the first element. 
   For instance: every_other([1,4,7,2,5]) # => [1,7,5]

# take the array of numbers
  - use #each_with_index method on array { |number, index| }
  - if index.even? => print item
  - else skip to next iteration

4. a method that determines the index of the 3rd occurrence of a given character 
   in a string. For instance, if the given character is 'x' and the string is 'axbxcdxex', the method 
   should return 6 (the index of the 3rd 'x'). If the given character does not occur at least 3 times, return nil.

# given a string of characters
  - use #count(letter) method on string to find how many times 


=end