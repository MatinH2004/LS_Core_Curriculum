class Song
  attr_reader :title, :artist

  def initialize(title)
    @title = title
  end

  def artist=(name)
    @artist = name
    name.upcase!
  end
end

song = Song.new("Superstition")
p song.artist = "Stevie Wonder"
p song.artist

# The code above demonstrates the concept of setter methods, specifically the fact that
# the argument that is passed in is returned by the setter method everytime.

# Also we can see that @artist is also upcased when we call it on line 16. This is because
# within the artist= setter method, the instance variable `@artist` points to the `name` string object.
# However, on line 10, we call the destructive `#upcase!` method, which mutates the string object
# and anything else that points to that object.