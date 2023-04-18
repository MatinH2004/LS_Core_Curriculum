=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a hash and an array. The hash keys represent the pockets of
  the people being investigated, and the values represent the items in pockets. The
  array represents the items allowed. If the hash values contain any value that isn't
  in the allowed items list, the person is a suspect.

  The method should return nil if no suspects or no pockets are found.

  Input:
  Output:

# --------------------------- Test Cases + Rules
  Explicit:
    - hash key => person; hash value => array (person's pocket)
    - if pockets contain any other values than the ones
      in allowed_items, the person is a suspect
    - pocket array could be empty or nil
    - return nil if no pockets or no suspect found

  Implicit:

# --------------------------- Data Structure
  - array, hash
# --------------------------- Scratch Book

# --------------------------- Algorithm
  GIVEN A HSH AND AN ARRAY:
    1. return nil if pockets are empty
    2. initialize suspects array
    3. iterate thorugh pockets hash
      - add person to suspects list if pocket contains illegal item
    4. return suspect list unless its empty
=end
require 'pry'

def find_suspects(pockets, allowed_items)
  return nil if pockets.empty?
  suspects = []

  pockets.each do |person, items|
    next if items.nil?
    suspects << person if !(items - allowed_items).empty?
  end

  suspects.empty? ? nil : suspects
end

pockets = { 
  bob: [1],
  tom: [2, 5],
  jane: [7]
}

p find_suspects(pockets, [1, 2]) == [:tom, :jane]
p find_suspects(pockets, [1, 7, 5, 2]) == nil
p find_suspects(pockets, []) == [:bob, :tom, :jane]
p find_suspects(pockets, [7]) == [:bob, :tom]

# refactor
def find_suspects(pockets, allowed_items)
  suspects = pockets.select { |name, items| ([*items]-allowed_items).any? }.keys
  suspects.any? ? suspects : nil
end