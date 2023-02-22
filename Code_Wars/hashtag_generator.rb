=begin

P: Write a method that takes a string and turns it
   into a hashtag. First letter of every word must be
   capitalized. If final result is longer than 140 chars,
   or if input string is empty: return false

E: - capitalize words
   - return false if input is empty
   - return false if output string larger than 140 chars

I: - none identified

T: " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata" 
   " Hello World " => "#HelloWorld"
   "" => false

A: /* given a string */
   - return false if str is empty
   - initialize result variable as '#'
   - split string by every word
     - iterate through array
     - capitalize every word and append to result string
   - return false if length of result is greater than 140

=end

# def generate_hashtag(str)
#   return false if str.strip.empty?
#   result = '#'
#   str.split.each {|x| result += x.capitalize}
#   return false if result.size > 140
#   result
# end

# refactor
def generateHashtag(str)
  res = str.split.map {|x| x.capitalize}.prepend('#').join
  return false if str.strip.empty? || res.size > 140; res
end

p generateHashtag("") == false
p generateHashtag(" " * 200) == false
p generateHashtag("Do We have A Hashtag") == "#DoWeHaveAHashtag"
p generateHashtag("Codewars") == "#Codewars"
p generateHashtag("Codewars Is Nice") == "#CodewarsIsNice"
p generateHashtag("Codewars is nice") == "#CodewarsIsNice"
p generateHashtag("code" + " " * 140 + "wars") == "#CodeWars"
p generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat") == false
p generateHashtag("a" * 139) == "#A" + "a" * 138
p generateHashtag("a" * 140) == false