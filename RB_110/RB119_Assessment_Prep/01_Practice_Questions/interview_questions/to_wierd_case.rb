=begin

Start time: 1:53pm

# --------------------------- Problem
  Restate the problem:

  Write a method that takes a string, and returns the same
  sequence of characters with every 2nd character in every 
  third word converted to uppercase. Other chars should remain the same.

  Input: string
  Output: string

# --------------------------- Test Cases + Rules
  Explicit:
    - upcase every 2nd char in every 3rd word
    - ignore other chars

  Implicit:
    - assume input is a non-empty string

# --------------------------- Data Structure
  - arrays, strings

# --------------------------- Scratch Book
  - map, with_index

# --------------------------- Algorithm
  GIVEN A STRING:
    1. split string into individual words
    2. iterate though the words
      - if (index + 1) of the word is divisible by 3
        - split word into chars
        - if index of char's position is odd, upcase the char
        - otherwise, continue to next char
        - join word back into string
      - else go to next word
    3. join words back into string and return

=end

def to_weird_case(string)
  string.split.map.with_index do |word, idx|
    if (idx + 1) % 3 == 0
      word.chars.map.with_index do |char, i|
        i.odd? ? char.upcase : char
      end.join
    else
      word
    end
  end.join(' ')
end

p to_weird_case('Lorem Ipsum is simply dummy text of the printing') ==
                'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
p to_weird_case(
  'It is a long established fact that a reader will be distracted') ==
  'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
p to_weird_case('aaA bB c') == 'aaA bB c'
p to_weird_case(
  'Miss Mary Poppins word is supercalifragilisticexpialidocious') ==
  'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'