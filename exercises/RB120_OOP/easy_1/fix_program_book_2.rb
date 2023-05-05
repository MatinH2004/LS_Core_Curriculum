class Book
  attr_accessor :author, :title

  def to_s
    %("#{title}", by #{author})
  end
end

book = Book.new
book.author = "Neil Stephenson"
book.title = "Snow Crash"
puts %(The author of "#{book.title}" is #{book.author}.)
puts %(book = #{book}.)

=begin

It is better to create and initialize objects within the constructor method
`initialize` that is invoked upon instantiation of the object. This gives the
Book object some attributes upon instantiation, and ensures that we won't be
referencing any `nil` values as the instance variables have been given a value.

=end