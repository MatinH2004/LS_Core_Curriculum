=begin

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string as an argument and groups the
  number of time each character appears in the string as a hash sorted
  by the highest number of occurences.

  Input: string
  Output: hash (key: num of occurences, value: arr of letters)

# --------------------------- Test Cases + Rules

  get_char_count("cba") => {1=>["a", "b", "c"]}

# --------------------------- Data Structure

  string -> array -> hash

# --------------------------- Algorithm

  /* given a string */
    - initialize hash with array as default value
    
    - split sentence into chars and select alphabetic chars only

    - remove duplicates and count each char from original string
      - add letter to hash to correct key

    - sort all hash values alphabetically
    - return hash sorted by the highest number of occurence


=end

def get_char_count(str)
  hsh = {}
  str = str.downcase.chars.select {|n| n.match?(/[a-z0-9]/i)}

  str.uniq.each do |i|
    count = str.count(i)
    hsh.key?(count) ? hsh[count] << i : hsh[count] = [i]
  end
  
  hsh.each_value {|v| v.sort!}
  hsh.sort.reverse.to_h
end

p get_char_count("Mississippi") == {4=>["i", "s"], 2=>["p"], 1=>["m"]}
p get_char_count("Hello. Hello? HELLO!!") == {6=>["l"], 3=>["e", "h", "o"]}
p get_char_count("aaa...bb...c!") == {3=>["a"], 2=>["b"], 1=>["c"]}
p get_char_count("aaabbbccc") == {3=>["a", "b", "c"]}
p get_char_count("abc123") == {1=>["1", "2", "3", "a", "b", "c"]}