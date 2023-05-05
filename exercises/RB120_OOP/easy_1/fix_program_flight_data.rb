class Flight
  # delete the line below
  attr_accessor :database_handle

  def initialize(flight_number)
    @database_handle = Database.init
    @flight_number = flight_number
  end
end

=begin

The problem with this definition is that we are providing easy access to the 
@database_handle instance variable, which is almost certainly just an 
implementation detail. As an implementation detail, users of this class should 
have no need for it, so we should not be providing direct access to it.

=end