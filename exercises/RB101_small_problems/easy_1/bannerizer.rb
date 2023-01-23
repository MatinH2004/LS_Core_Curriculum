def print_in_box(str)
  horizontal_line = "+#{'-' * (str.size + 2)}+"
  empty_line = "|#{' ' * (str.size + 2)}|"

  puts horizontal_line
  puts empty_line
  puts "| #{str} |"
  puts empty_line
  puts horizontal_line
end

print_in_box('To boldly go where no one has gone before.')