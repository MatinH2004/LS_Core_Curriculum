NUM = {
  'one'   => '1',
  'two'   => '2',
  'three' => '3',
  'four'  => '4',
  'five'  => '5',
  'six'   => '6',
  'seven' => '7',
  'eight' => '8',
  'nine'  => '9'
}

def word_to_digit(string)
  string.split.map do |word|
    if NUM.include?(word.downcase)
      NUM[word.downcase]
    elsif NUM.include?(word[0..-2].downcase)
      punc = word.chars.pop
      NUM[word[0..-2].downcase] + punc
    else
      word
    end
  end.join(' ')
end

p word_to_digit('Please call me at five five five one two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'