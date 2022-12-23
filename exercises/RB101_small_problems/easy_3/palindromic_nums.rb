def palindromic_number?(num)
  num.to_s == num.to_s.reverse
end

p palindromic_number?(34543) == true
p palindromic_number?(123210) == false
p palindromic_number?(22) == true
p palindromic_number?(5) == true

# --- Further Exploration ---

def palindromic_number_zero?(num)
end # do next time