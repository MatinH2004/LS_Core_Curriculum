# implement a caesar cipher that takes
# in a string and the shift factor
# and then outputs the modified string.

def caesar_cipher(str, shift)
  for i in 0...str.size do 
    char_code = str[i].ord

    (a, z) = case char_code
             when 97..122 then [97, 122] # a-z
             when 65..90  then [65, 90]  # A-Z
             else next # skip non-alpha chars
    end

    rotate = shift > 0 ? 26 : -26

    char_code += shift
    char_code -= rotate unless char_code.between?(a, z)

    str[i] = char_code.chr
  end
end

msg = "What a string!"

caesar_cipher(msg, 5) #== "Bmfy f xywnsl!"

p msg == "Bmfy f xywnsl!" # true