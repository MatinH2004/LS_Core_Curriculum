=begin

# -------------------------- Problem
  Restate the problem:

  Write a method that takes an URL as a string, parses out the domain
  name and returns it as a string.

  Input: string (url)
  Output: string (domain)

# -------------------------- Test Cases

  domain_name("http://github.com/carbonfive/raygun") == "github" 
  domain_name("http://www.zombie-bites.com") == "zombie-bites" 
  domain_name("https://www.cnet.com") == "cnet"

# -------------------------- Data Structure

  string -> split into array -> string

# -------------------------- Scrapbook

  #match
  #split
  #slice

# -------------------------- Algorithm

  /* given an url as an string */
    - if the string includes 'www' split the string at every dot into array
      - return the second string in array

    - else, split string by every slash "/"
      - then get string that includes domain
      - split that string by every "." and return the first string.

=end

def domain_name(url)
  if url.include?('www')
    url.split('.')[1]
  else
    url.split('/')[2].split('.')[0]
  end
end

# one-liner
def domain_name(url)
  url.match?('www') ? url.split('.')[1] : url.split('/')[2].split('.')[0]
end

p domain_name("http://github.com/carbonfive/raygun") == "github" 
p domain_name("http://www.zombie-bites.com")== "zombie-bites" 
p domain_name("https://www.cnet.com") == "cnet"
p domain_name("http://google.com") == "google"
p domain_name("http://google.co.jp") == "google"
p domain_name("www.xakep.ru") == "xakep"
p domain_name("https://youtube.com") == "youtube"