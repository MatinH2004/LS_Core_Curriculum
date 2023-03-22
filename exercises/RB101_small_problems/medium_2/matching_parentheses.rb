=begin
# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string as an argument, and returns true if
  all parentheses in the string are properly balanced, false otherwise.
  To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

  Input: string
  Output: boolean (true/false)

# --------------------------- Test Cases + Rules

  Explicit:
    - count all '(' and ')' pairs
    - makesure it starts with '(' and ends with ')'
    - true if string contains no parentheses

  Implicit:
    - none identitified

  Test cases shown at the bottom

# --------------------------- Data Structure

  str -> array -> boolean

  Array: push parentheses to array and check conditions

# --------------------------- Scrapbook

# --------------------------- Algorithm

  /* given a string */
    - iterate through each char using array
      - if char is a parentheses, append to array
    - return true if:
      - number of '(' equals number of ')'
      - array starts with '(' and ends with ')'
      - array is empty
    - otherwise return false
    
=end

def balanced?(str)
  str.chars.each_with_object(arr = []) do |char, arr|
    arr << char if char == '(' || char == ')'
  end
  
  if arr.count('(') == arr.count(')') &&
    arr[0] == '(' && arr[-1] == ')' ||
    arr.empty?
    true
  else
    false
  end
end

p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false