=begin

Start time: 11:13

# --------------------------- Problem
  Restate the problem:

  Given a string of letters, numbers, and spaces, return a string of the
  deciphered message. The second and the last letter are switched,
  and the first letter is replaced by its ascii char code.

  Input: string
  Output: string

# --------------------------- Test Cases + Rules
  Explicit:
    - string only contains letters, numbers, and spaces
    - first letter is replaced by its ascii char code
    - second and last letter of the word are switched
    - no special chars used

  Implicit
    - all letters are lower case
    - assume string is non-empty
    - return new string

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book
  - #chr, #chars,
# --------------------------- Algorithm
  GIVEN A STRING:
    1. split str into words
    2. iterate through each word

      - assign word to var
        - remove number from var and assign to num
        - case size of string
          - if 1: concat the num char to the char
          - if 2: concat the num char to the chars switched
          - if 3: concat the num char + last char + middle + second

      - Init num: get numbers of the string
      - init last: get second letter of string
      - init second: get last letter of string
      - transform to new word using vars above

    3. join array into str and return

=end

def decipher_this(str)
  words = str.split
  words.map do |word|

    # obtain the numbers of the string
    # and conver to integer
    num = word.scan(/\d+/).first.to_i

    # remove the numbers of string
    word = word.gsub(/\d/, '')

    # construct words based on number of letters
    case word.size
    when 0 then num.chr
    when 1 then num.chr + word
    when 2 then num.chr + word[-1] + word[-2]
    else num.chr + word[-1] + word[1..-2] + word[0]
    end

  end.join(' ')
end

p decipher_this("65 119esi 111dl 111lw 108dvei 105n 97n 111ka") == "A wise old owl lived in an oak"
p decipher_this("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp") == "The more he saw the less he spoke"
p decipher_this("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare") == "The less he spoke the more he heard"
p decipher_this("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri") == "Why can we not all be like that wise old bird"
p decipher_this("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple") == "Thank you Piotr for all your help"