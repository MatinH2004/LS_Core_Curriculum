=begin
# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string, and then returns a hash that contains
  3 keys: one represents the percentage of characters in the string that are
  lowercased, one the percentage of characters that are uppercased, and one
  the percentage of characters that are neither.

  Input: string
  Output: hash containing 3 keys

# --------------------------- Test Cases + Rules

  Explicit:
    - keys:
      - lowercase: percentage of lowercased chars
      - uppercase: percentage of uppercased chars
      - nethier: percentage of chars that are neither

# --------------------------- Data Structure

  Hash = { lowercase: 0.0, uppercase: 0.0, neither: 0.0 }

# --------------------------- Scrapbook

  #count
  regex

# --------------------------- Algorithm

  /* given a string */
    - 

=end

def letter_percentages(str)
  hash = { lowercase: 0.0, uppercase: 0.0, neither: 0.0 }
  str.each_char do |char|
    if char.match?(/[^a-z]/i)
      hash[:neither] += 1
    elsif char.upcase == char
      hash[:uppercase] += 1
    elsif char.downcase == char
      hash[:lowercase] += 1
    end
  end

  hash.each {|k, v| hash[k] = ((v / str.size) * 100).round(1)}; hash
end

p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }