require 'yaml'
require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

helpers do

  def count_interests
    total = 0
    @users.each_value do |hash|
      total += hash[:interests].size
    end
    total
  end

end

before do
  @users = YAML.load_file("users.yaml")
end

get "/" do
  redirect "/users"
end

get "/users" do
  erb :home
end

# this method finds the correct user
# and returns their info in a hash
def find_user(hash, target)
  hash.each do |name, info|
    result = {}
    result[name] = info
    return result if name == target
  end
end

get "/users/:name" do
  @name = params[:name].intern
  @info = find_user(@users, @name)
  @others = @users.keys.reject { |name| name == @name }
  
  erb :user_page
end

# --- NOTES ---

# f = YAML.load_file("users.yaml")
# p f[:jamy][:interests]

=begin

file.each { |person| p person }

[
  :jamy, 
  {
    :email=>"jamy.rustenburg@gmail.com", 
    :interests=>["woodworking", "cooking", "reading"]
  }
]


[:nora, {:email=>"nora.alnes@yahoo.com", :interests=>["cycling", "basketball", "economics"]}]
[:hiroko, {:email=>"hiroko.ohara@hotmail.com", :interests=>["politics", "history", "birding"]}]

=end