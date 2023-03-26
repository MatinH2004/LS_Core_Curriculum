# -- RB119 Study Guide --
**This assessment focuses on working with collections in Ruby**

## Specific Topics of Interest
You should be familiar with Ruby syntax and operators, and be able to clearly explain the following topics:

* `String` and `Array` operations: 
  * indexing, 
  * range indexing (slicing), 
  * negative indexes, 
  * indexed assignment
* `Hash` operations:
  * indexing,
  * string and symbol keys
* `String`, `Array`, and `Hash` methods
* Iteration, `break`, and `next`
* Selection and transformation
* Nested iteration and nested data structures
* Shallow copy and deep copy
* Method chaining

### Important `String` methods:

* `chars`
  * returns new array of characters from str

* `concat`
  * can take multiple args
  * concatenate all args in order
  * returns original string (mutative)

* `count`
  * takes string or regex as arg
  * counts the set of chars from calling object
  * returns number of count

* `downcase` & `downcase!`
  * returns a new string with lowercased letters
  * mutative if called with `!`

* `freeze`
  * prevents further modification to object
  * `FrozenError` will be raised if modification is attempted
  * No way to "unfreeze" an object
  * To check if object is frozen: call `#frozen?`

* `include?`
  * returns true if the string contains the characters from arg

* `replace`
  * replaces the contents of string with the corresponding values of arg

* `reverse` & `reverse!`
  * returns new string with characters in reverse order
  * mutative is called with `!`

* `size`
  * returns the length of string
  * aliases with `String#length`

* `slice` & `slice!`
  * when passed in a single arg, returns character at that index
  * when passed in passed in two args -> (start, length)
  * if called with `!`, the slice is removed from original string

* `split`
  * takes delimiter as arg
  * (non-mutative)

* `strip` & `strip!`
  * removes leading and trailling whitespace
  * mutative if called with `!`

* `upcase` & `upcase!`
  * returns uppercased version of string
  * mutative if called with `!`

* `upto`
  * iterates through successive values starting at string and ending at arg

### Important `Array` methods:

* `all?`
  * returns `true` if block return value is true for all elements

* `any?`
  * returns `true` if block return value is true for any elements

* `each`
  * iterates through array
  * returns calling object

* `each_with_index`
  * same as each, but has 2nd block param for element's index

* `each_with_object`
  * iterates the given block for each element with an arbitrary object given, and returns the initially given object.

* `fetch`
  * tries to return element at given index
  * throws IndexError if index is out of bounds

* `first`
  * returns first element from array

* `include?`
  * returns true if given arg is in array

* `join`
  * joins array into string
  * use arg as delimiter

* `last`
  * return last element of array

* `map` & `map!`
  * iterates through collection
  * transforms elements based on return value of block
  * alias with `#collect` method

* `partition`
  * returns two arrays, the first containing the elements of enum for which the block evaluates to true, the second containing the rest.

* `pop`
  * returns and removes last item from array
  * mutative

* `push`
  * appends arg into array
  * mutative

* `reverse` & `reverse`
  * return array in reverse order
  * mutative if called with `!`

* `select` & `select!`
  * returns an array containing all elements of enum for which the given block returns a true value.
  * alias with `#find_all` method

* `shift`
  * returns and removes first element from array
  * mutative

* `unshift`
  * will append arg to beginning of array
  * mutative
  * alias with `#prepend` method

* `slice` & `slice!`
  * Returns the element at index, or returns a subarray starting at the start index and continuing for length elements, or returns a subarray specified by range of indices.
  * mutative if called with `!`

* `sort` & `sort!`
  * returns a new array created by sorting self.
  * comparisons for the sort will be done using the <=> operator or using an optional code block.

### Important `Hash` methods:

* `all?`
  * passes each element of the collection to the given block. The method returns true if the block never returns false or nil.

* `any?`
  * passes each element of the collection to the given block. The method returns true if any return value of block is true.

* `each_key`
  * calls block once for each key in hsh, passing the key as a parameter.

* `each_value`
  * calls block once for each value in hsh, passing the value as a parameter

* `empty?`
  * returns true if hsh contains no key-value pairs

* `include?`
  * returns true if given key is present in hash

* `key`
  * returns key when given value as arg
  * nil if key is not found

* `key?`
  * returns true if given key is present in hash

* `keys`
  * returns array of all keys in hash

* `map`
  * Returns a new array with the results of running block once for every element in enum.

* `select`
  * returns a new hash consisting of entries for which the block returns true.

* `select!`
  * equivalent to `#keep_if`, but returns nil if no changes were made.

* `value?`
  * returns true if the given value is present for some key in hsh.

* `values`
  * returns array of all values in hsh