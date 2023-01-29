=begin
# ------------ Problem

Write a method that returns true if every element
of array is an integer or float with no decimals.
Must return true if array is empty, and false
for every other input, such as strings & nil

# ------------ Test Cases

p is_int_array([]) == true
p is_int_array([1, 2, 3, 4]) == true
p is_int_array([-11, -12, -13, -14]) == true
p is_int_array([1.0, 2.0, 3.0]) == true
p is_int_array([1, 2, nil]) == false
p is_int_array(nil) == false
p is_int_array("") == false
p is_int_array([nil]) == false
p is_int_array([1.0, 2.0, 3.0001]) == false
p is_int_array(["-1"]) == false

# ------------ DS


# ------------ Algo

- Check if input is an array, if not return false
- iterate through the array and check if every num is
an integer or float with no decimal
    - if yes, true
    - return false if not

=end

def is_int_array(arr)
  return false unless arr.is_a? Array
  arr.each {|n| return false if n != n.to_i}
  true
end

p is_int_array([]) == true
p is_int_array([1, 2, 3, 4]) == true
p is_int_array([-11, -12, -13, -14]) == true
p is_int_array([1.0, 2.0, 3.0]) == true
p is_int_array([1, 2, nil]) == false
p is_int_array(nil) == false
p is_int_array("") == false
p is_int_array([nil]) == false
p is_int_array([1.0, 2.0, 3.0001]) == false
p is_int_array(["-1"]) == false

# Solution using `or` operator

def is_int_array(arr)
  return false unless arr.is_a? Array
  arr.empty? || arr.all? {|num| num.is_a?(Numeric) && num.floor == num}
end