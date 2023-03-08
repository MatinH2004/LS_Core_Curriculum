# Write a method that takes a string and converts every 2nd letter of every
# 3rd word to uppercase.

def to_weird_case(str)
  str.split.map.with_index do |word, idx|
    if (idx + 1) % 3 == 0
      word.chars.map.with_index do |letter, idx|
        idx.odd? ? letter.upcase : letter
      end.join
    else 
      word
    end
  end.flatten.join(' ')
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