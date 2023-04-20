=begin

Start time: 2:15

# --------------------------- Problem
  Restate the problem:

  Given an array of hashes containing names, return a string formatted
  as a list of names separated by commas except for the last two names
  which should be seperated by an ampersand.

  Input: array of hashes
  Output: string

# --------------------------- Test Cases + Rules
  Explicit:
    - names should be seperated by comma ',' and ampersand

  Implicit:
    - return empty string if input arr is empty

# --------------------------- Data Structure
   - array
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN AN ARRAY OF HASHES:
    1. map through input array and transform hashes to names
    2. in a case statement
      - if array contains more than 2 names
        - 0..-2 elements should be seperated by comma
        - last element should be seperated by ampersand
      - if array contains 2 names
        - seperate with ampersand
      
=end

def list(arr)
  arr = arr.map {|hash| hash[:name]}
  case arr.size
  when 1 then arr.join
  when 2 then arr.join(' & ')
  else arr[0..-2].join(', ') + ' & ' + arr[-1]
  end
end

p list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])
p list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
p list([ {name: 'Bart'}, {name: 'Lisa'} ])
p list([ {name: 'Bart'} ])