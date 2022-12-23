# Part 1
def palindrome?(str)
  str == str.reverse
end

# p palindrome?('madam') == true
# p palindrome?('Madam') == false          # (case matters)
# p palindrome?("madam i'm adam") == false # (all characters matter)
# p palindrome?('356653') == true

# --- Further Exploration ---

def arr_palindrome?(arr)
  arr.inject(:+) == arr.reverse.inject(:+)
end

# p arr_palindrome?([1, 2, 3, 3, 2, 1]) == true
# p arr_palindrome?(['a', 'b', 'b', 'a']) == true
# p arr_palindrome?(['hello', 'there', 'there', 'hello']) == true

# Part 2
def real_palindrome?(str)
  alpha_num = str.gsub(/[^\w]/,"").downcase # 
  palindrome?(alpha_num)
end

p real_palindrome?('madam') == true
p real_palindrome?('Madam') == true           # (case does not matter)
p real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
p real_palindrome?('356653') == true
p real_palindrome?('356a653') == true
p real_palindrome?('123ab321') == false