=begin

*P:

Given a word, compute the Scrabble score for that word.

1: A, E, I, O, U, L, N, R, S, T
2: D, G
3: B, C, M, P
4: F, H, V, W, Y
5: K
8: J, X
10: Q, Z

input: word (string)
output: integer (score)

*E:

CABBAGE = 3 + 2*1 + 2*3 + 1
        = 14

*D:

- use hash object to set up score system
- use array to map through letters

*A:

--- constructor ---
- accepts a word in form of string and saves it

--- score (class method) ---
- takes string as argument
- split string into chars array
- map over chars
- in a nested loop find which array the letter is in
  - then return first score from that array
- once letters have been transformed to their scores
  - return sum of array

--- score (instance method) ---
- pass instance variable from #initalize to #score class method

=end

class Scrabble
  SCORES = {
    1 => %w(A E I O U L N R S T),
    2 => %w(D G),
    3 => %w(B C M P),
    4 => %w(F H V W Y),
    5 => %w(K),
    8 => %w(J X),
    10 => %w(Q Z)
  }

  def initialize(word)
    @word = word.to_s
  end

  def self.score(word)
    word.upcase.chars.map do |letter|
      score = 0
      SCORES.each do |num, arr|
        if arr.include?(letter)
          score = num
          break
        end
      end
      score
    end.sum
  end

  def score
    self.class.score(@word)
  end
end