class Book
  attr_reader :author, :title

  def initialize(author, title)
    @author = author
    @title = title
  end

  def to_s
    %("#{title}", by #{author})
  end
end

book = Book.new("Neil Stephenson", "Snow Crash")
puts %(The author of "#{book.title}" is #{book.author}.)
puts %(book = #{book}.)

# The reason why we need to use attr_reader instead of the other tw
# is that there is no need for a setter method, as we are just
# calling the `title` and `author` getter methods.

# However, using attr_accessor would also work, as it creates both
# a setter and getter method.

# Further Exploration

# adding the code below would not change the behaviour as they are also
# getter methods for `title` and `author` instance variables:

# def title
#   @title
# end

# def author
#   @author
# end