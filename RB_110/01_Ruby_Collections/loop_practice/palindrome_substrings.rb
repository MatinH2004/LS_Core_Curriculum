# finds all substrings that are a palindrome
def palindrome_substrings(str)
  result = []
  return result if str.empty?

  0.upto(str.size - 1) do |i|
    0.upto(str.size - 1) do |j|
      subs = str[i..j]
      if subs == subs.reverse && subs.size > 1
        result << subs
      end
    end
  end

  result
end

p palindrome_substrings("supercalifragilisticexpialidocious") == ["ili"] # true
p palindrome_substrings("abcddcbA") == ["bcddcb", "cddc", "dd"]          # true
p palindrome_substrings("palindrome") == []                              # true
p palindrome_substrings("") == []                                        # true