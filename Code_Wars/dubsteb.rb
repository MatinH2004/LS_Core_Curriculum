=begin

# -------------------------- Problem
  Restate the problem:

  Given a string covered with 'WUB' around letters, remove the 'WUB' to
  decode the song.

  Input:  The input consists of a single non-empty string, consisting only of 
          uppercase English letters, the string's length doesn't exceed 200 characters
  Output: Return the words of the initial song that Polycarpus used to make a dubsteb 
          remix. Separate the words with a space.


# -------------------------- Test Cases

  For example, a song with words "I AM X" can transform into a dubstep remix as 
  "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

# -------------------------- Data Structure

  string -> array -> string

# -------------------------- Algorithm

  /* given a string */
    - split the string at every 'WUB' occurence
    - to avoid empty spaces, only select string that contain letters
    - join string back together

=end

def song_decoder(song)
  song.split('WUB').select {|s| s =~ /[A-Z]/}.join(' ')
end

p song_decoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") == 'WE ARE THE CHAMPIONS MY FRIEND'
p song_decoder("AWUBBWUBC") == "A B C"
p song_decoder("AWUBWUBWUBBWUBWUBWUBC") == "A B C"
p song_decoder("WUBAWUBBWUBCWUB") == "A B C"