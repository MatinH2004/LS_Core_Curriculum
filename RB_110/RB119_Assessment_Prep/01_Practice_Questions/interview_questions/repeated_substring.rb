=begin

Start time: 1:40

# --------------------------- Problem
  Restate the problem:

  For a given non-empty string, find a minimum substring and the
  maximum number, such that the entire string is equal to the substring
  repeated x times. Return an array containing the substring and the number
  of times it can be repeated to make the string. Eg. 'ababab' => ['ab', 3]

  Input: string
  Output: array [str, int]

# --------------------------- Test Cases + Rules
  Explicit:
    - find the number of times the substring can be repeated to make the string

  Implicit:
    - none identified

# --------------------------- Data Structure
  - array
# --------------------------- Scratch Book

'ababab'

# --------------------------- Algorithm
  GIVEN AN STRING:
    1. iterate from index 0 to length of string
      - initialize the size of string to count variable
      - loop until count is 0
        - if substring times count equals the input string
          - return array: [substring, count]
        - decrement count

=end

def f(s)
  (0...s.size).each do |i|
    (i...s.size).each do |j|
      count = s.size
      loop do
        break if count == 0
        return [s[i..j], count] if s[i..j] * count == s
        count -= 1
      end
    end
  end
end

# refactor

def f(s)
  (1..s.size).each do |substr_size|
    substr = s[0, substr_size]
    repetitions = s.size / substr_size

    return [substr, repetitions] if substr * repetitions == s
  end
end

p f("ababab") == ["ab", 3]
p f("abcde") == ["abcde", 1]