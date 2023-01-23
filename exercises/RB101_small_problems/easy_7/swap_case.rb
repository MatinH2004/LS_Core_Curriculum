=begin

* P:

  Write a method that takes a string as an argument and returns a new
  string in which every uppercase is replaced by its lowercase version,
  and every lowercase letter by its uppercase version. All other characters
  should be unchanged.

  Explicit:
    - replace lowercase with uppercase
      - and uppercase with lower case
    - dont change non-alphabetic characters

  Implicit:
    - cannot use #swapcase

* Test Cases:
  swapcase('CamelCase') == 'cAMELcASE'
  swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'

* DS + Algo:
  
  */ Given a string of words/*
  - split sentence into words
  - iterate through words
    - iterate through characters
      - if char == char.downcase, upcase
      - else, downcase
      - append word into new array and join

=end

def swapcase(str)
  characters = str.chars.map do |char|
    if char =~ /[A-Z]/
      char.downcase
    elsif char =~ /[a-z]/
      char.upcase
    else
      char
    end
  end.join
  #characters.join
end

p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'

# Using ternary operation:

def swapcase(str)
  str.chars.map do |x|
    x.upcase == x ? x.downcase : x.upcase
  end.join
end