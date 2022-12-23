# Programmatically determine if 42 lies between 10 and 100.
# hint: Use Ruby's range object in your solution.

p (10..100).cover?(42)

# the #cover(range) method checks if number is in 
# range/obj by comparing begin and end values.