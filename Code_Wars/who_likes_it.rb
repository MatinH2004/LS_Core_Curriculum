=begin

# -------------------------- Problem
  Restate the problem:

Write a method which takes an array containing the names of people that like
and item. It must return the text shown below in the 'Test Case' section.

  Input: array of names
  Output: string of people who liked

# -------------------------- Test Cases

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

# -------------------------- Data Structure



# -------------------------- Scrapbook

- if 0 people like return "no one likes this"
- if 1 person likes return "[person] likes this"
- if 2 people like return "[person] and [person] like this"
- if 3 people like return "[person], [person] and [person] like this"
- if 4 people like return "[person], [person] and 2 others like this"

  if more than 4 people like; subtract 2 to get "others" number

# -------------------------- Algorithm

    /* given an array of names */
  - case array
    - if length is 0; return "no one likes this"
    - if length is 1; return "person likes this"
    - if lenght is 2; return "person and person likes this"
    - ....

=end

# def likes(names)
#   size = names.length
#  if size == 0
#   return "no one likes this"
#  elsif size == 1
#   return "#{names[0]} likes this"
#  elsif size == 2
#   return "#{names[0]} and #{names[1]} like this"
#  elsif size == 3
#   return "#{names[0]}, #{names[1]} and #{names[2]} like this"
#  elsif size >= 4
#   return "#{names[0]}, #{names[1]} and #{size - 2} others like this"
#  end
# end

def likes(names)
  case names.size
  when 0 then return "no one likes this"
  when 1 then return "#{names[0]} likes this"
  when 2 then return "#{names[0]} and #{names[1]} like this"
  when 3 then return "#{names[0]}, #{names[1]} and #{names[2]} like this"
  else return "#{names[0]}, #{names[1]} and #{names.size - 2} others like this"
  end
end

p likes([]) == "no one likes this"
p likes(['Peter']) == "Peter likes this"
p likes(['Jacob', 'Alex']) == "Jacob and Alex like this"
p likes(['Max', 'John', 'Mark']) == "Max, John and Mark like this"
p likes(['Alex', 'Jacob', 'Mark', 'Max']) == "Alex, Jacob and 2 others like this"
