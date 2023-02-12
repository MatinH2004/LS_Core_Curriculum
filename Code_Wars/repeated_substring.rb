=begin

# -------------------------- Problem
  Restate the problem:

  Given a nonempty string `s` find a minimum substring `t`
  and the maximum number `k`, such that the entire string `s`
  is equal to `t` repeated `k` times.

  Input: string
  Output: array [t, k]

# -------------------------- Test Cases

  s = 'ababab' --> ['ab', 3]
  s = 'abcde'  --> ['abcde', 1]

# -------------------------- Data Structure

  string -> array

# -------------------------- Algorithm

  /* given a string */
    - initialize substrings array
    - set string length to size var

    - iterate through string to find all substrings
      - if size of

=end

def f(s)
  substrings = []
  size = s.length

  (0...size).each do |i|
    (0...size).each do |j|
      count = size
      loop do
        break if count == 0
        if s[i..j] * count == s
          substrings << s[i..j] << count
        end
        count -= 1
      end
    end
  end

  substrings.first(2)
end

# refactored solution
def f(s)
  (1..s.size).each do |substr_size|
    substr = s[0, substr_size]
    repetitions = s.size / substr_size
    
    return [substr, repetitions] if substr * repetitions == s
  end
end

p f("ababab") == ["ab", 3]
p f("abcde") == ["abcde", 1]