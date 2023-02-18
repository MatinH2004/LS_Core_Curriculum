=begin

P: Write a method that takes 2 arguments, str1 & str2, and return true or false
   based on if a portion of characters in str1 can be rearranged to match the word 
   in str2.

E: - str1 must contain all characters in str2 to return true.
   - only lower case letters used

I: - none identified

T: scramble('cedewaraaossoqqyt', 'codewars') => true 
   scramble('katas', 'steak') => false

A: /* given str1 and str2 */
   - split str2 chars to array
   - return true if all chars are included in str1, else false

=end

def scramble(str1, str2)
  str2.chars.all? {|x| str1.include?(x)} ? true : false
end

p scramble('rkqodlw', 'world') == true
p scramble('cedewaraaossoqqyt', 'codewars') == true 
p scramble('katas', 'steak') == false
p scramble('rkqodlw','world') == true
p scramble('cedewaraaossoqqyt','codewars') == true 
p scramble('katas','steak') == false
p scramble('scriptjava','javascript') == true
p scramble('scriptingjava','javascript') == true