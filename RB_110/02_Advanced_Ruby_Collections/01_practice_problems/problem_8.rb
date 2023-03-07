# Using the each method, write some code to output all of the vowels from the strings.

hsh = {first: ['the', 'quick'], second: ['brown', 'fox'], third: ['jumped'], fourth: ['over', 'the', 'lazy', 'dog']}

hsh.each do |_, arr|
  arr.each do |str|
    str.chars.each do |char|
      print char if char.match?(/[aeiou]/i)
    end
  end
end

# => euiooueoeeao

# using Hash#values
hsh.values.flatten.each do |str|
  str.chars.each do |char|
    print char if char.match?(/[aeiou]/i)
  end
end

# => euiooueoeeao