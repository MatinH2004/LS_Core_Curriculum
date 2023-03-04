=begin

P: Write a method that takes a string, and returns a new string with every 
   character doubled, EXCEPT vowels, digits, punctuation, and whitespace.

E: - return new string with every consonant char doubled
   - do not double:
     - vowels (a,e,i,o,u)
     - digits (0-9)
     - punctuation
     - whitespace " "

I: - return empty string if input is empty

T: ('String') == "SSttrrinngg"
   ("Hello-World!") == "HHellllo-WWorrlldd!"
   ("July 4th") == "JJullyy 4tthh"
   ('') == ""

A: /* given a string */
   - initialize a consonant regex
   - split input string into chars and map through
     - if current char matches the regex, double the character
     - else, dont do anything
   - join mapped array and return

=end

def double_consonants(str)
  consonant_regex = /^[bcdfghjklmnpqrstvwxyz]$/i
  str.chars.map do |char|
    char.match?(consonant_regex) ? char * 2 : char
  end.join
end

p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""