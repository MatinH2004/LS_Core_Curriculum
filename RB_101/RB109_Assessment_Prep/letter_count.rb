=begin
# ------------ Problem

Count all lowercase letters in a given string and 
return the letter count in a hash with 'letter' as key
and count as 'value'. The key must be a symbol instead of
string.

# ------------ Test Cases

p letter_count('codewars') == {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1}
p letter_count('activity') == {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1}
p letter_count('arithmetics') == {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}


# ------------ DS

- use each_with_object to return hash

# ------------ Algo

- split string into individual chars
- initialize hash with default value as 0
- iterate through each char
  - add letter as key, and incrememnt value by 1

=end

def letter_count(str)
  str.chars.each_with_object(Hash.new(0)) do |char, hash|
    hash[char.to_sym] += 1
  end
end

p letter_count('codewars') == {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1}
p letter_count('activity') == {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1}
p letter_count('arithmetics') == {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}
