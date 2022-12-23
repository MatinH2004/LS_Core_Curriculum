# Back in the stone age (before CSS) we used spaces to align things on the screen. 
# If we had a table of Flintstone family members that was forty characters in width, 
# how could we easily center that title above the table with spaces?

title = "Flintstone Family Members"

p title               # => "Flintstone Family Members"
p title.center(40)    # => "       Flintstone Family Members        "