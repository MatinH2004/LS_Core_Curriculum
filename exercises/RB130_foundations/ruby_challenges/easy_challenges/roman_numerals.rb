class RomanNumeral
  ROMAN_NUMERALS = {
    1000 => 'M',
    900 => 'CM',
    500 => 'D',
    400 => 'CD',
    100 => 'C',
    90 => 'XC',
    50 => 'L',
    40 => 'XL',
    10 => 'X',
    9 => 'IX',
    5 => 'V',
    4 => 'IV',
    1 => 'I'
  }

  def initialize(num)
    @num = num
  end

  def to_roman
    converted_numeral = ''
    digits = @num

    ROMAN_NUMERALS.each do |num, rom|
      while digits >= num
        converted_numeral << rom
        digits -= num
      end
    end
  
    converted_numeral
  end
end
