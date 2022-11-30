
# How are File::path and File#path different?

# class methods are called on the class
puts File.path('bin')
# prints path of file

# while instance methods are called on the object
f = File.new('test_file.txt', 'w') # creates a new file in working directory
puts f.path # prints the path to the file created.