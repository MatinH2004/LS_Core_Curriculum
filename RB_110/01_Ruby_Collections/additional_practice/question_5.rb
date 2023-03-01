# Find the index of the first name that starts with "Be"
flintstones = %w(Fred Barney Wilma Betty BamBam Pebbles)

flintstones.each_with_index do |name, idx|
  if name.start_with?('Be')
    puts idx
  end
end

=begin

alt solution:

flinststones.index {|name| name[0, 2] == 'Be'}

=end
