=begin

Start time: 7:50

# --------------------------- Problem
  Restate the problem:

  Write a program that can generate the lyrics of the 99 Bottles of Beer song

  Input: integer (verse)
  Output: string (verse of song)

# --------------------------- Test Cases + Rules
  Explicit:
    - Create BeerSong class
    - should have 3 methods:
      - verse(): takes an number, indicating how many beer will be
        present in the verse
      - verses(): takes two numbers, first one indicating which verse
        to start in, and second number is the verse to end on
      - lyrics: no args, returns all verses of the song

  Implicit:

# --------------------------- Data Structure
  We know that we will be working with strings, and using 
  numbers to track our verses. We may also use an array to 
  collect multiple verses before returning them as a single string.
# --------------------------- Scratch Book

# --------------------------- Algorithm

1. Verse method:
  - Each line of the verse should be seperate by a newline "\n"
  - Number of bottles should be replaced by method arg
  - Return the verse string

2. Verses method:
  - second argument should be less than the first, but greater than 0
  - First argument should be less than 100
  - We can start with empty array or string to hold our results
  - Count down from first argument to the second (inclusive)
  - Handle verses that need singular 'bottle' or 'no more' bottle verses
  - The verse when one bottle remains starts out as "Take it down" instead of "Take one down".
  - Add the string verse for each of these numbers to our result
  - return result as a string

3. Lyrics method:
  - build up a string containing all 100 verses of the song
  - The verses should count down from 99 to 'no more'
  - Each line of the verse should be seperated by a newline
  - Each unique verse should be separated by a blank line (2 newlines)
  - return string containing full lyrics

=end

class Verse
  attr_reader :bottles

  def initialize(bottles)
    @bottles = bottles
  end

  def single_verse
    case bottles
    when 0 then zero_bottle_verse
    when 1 then single_bottle_verse
    when 2 then two_bottle_verse
    else        default_verse
    end
  end

  private

  def default_verse
    "#{bottles} bottles of beer on the wall, #{bottles}" +
    " bottles of beer.\nTake one down and pass it around, " +
    "#{bottles-1} bottles of beer on the wall.\n"
  end

  def two_bottle_verse
    "2 bottles of beer on the wall, 2 bottles of beer.\n" +
    "Take one down and pass it around, 1 bottle of beer " +
    "on the wall.\n"
  end

  def single_bottle_verse
    "1 bottle of beer on the wall, 1 bottle of beer.\n" +
    "Take it down and pass it around, no more bottles of beer " +
    "on the wall.\n"
  end

  def zero_bottle_verse
    "No more bottles of beer on the wall, no more bottles " +
    "of beer.\nGo to the store and buy some more, 99 bottles " +
    "of beer on the wall.\n"
  end
end

class BeerSong
  def self.verse(num)
    Verse.new(num).single_verse
  end

  def self.verses(start, stop)
    current_verse = start
    result = []

    while current_verse >= stop
      result << "#{verse(current_verse)}"
      current_verse -= 1
    end

    result.join("\n")
  end

  def self.lyrics
    verses(99, 0)
  end
end