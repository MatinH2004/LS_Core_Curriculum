=begin

Start time: 

# --------------------------- Problem
  Restate the problem:

  Write a method that takes 2 arrays, and checks if they share the 
  same multiplicities. "Same" means, here, that elements in array 2
  are elements in array 1 squared, regardless of the order.

  Input: two arrays
  Output: boolean (true/false)

# --------------------------- Test Cases + Rules
  Explicit:
    - check both arrays for multiplicities
    - return false if any input array is nil

  Implicit:

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

# --------------------------- Algorithm

=end

def comp(a1, a2)
  return false if a1.nil? || a2.nil?
  a2.all? { |num| a1.include?(Integer.sqrt(num)) }
end

p comp( [121, 144, 19, 161, 19, 144, 19, 11], 
  [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19])