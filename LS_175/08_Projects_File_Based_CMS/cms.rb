require "sinatra"
require "sinatra/reloader"
require "tilt/erubis"

root = File.expand_path("..", __FILE__)

get "/" do
  @files = Dir.glob(root + "/data/*").map do |path|
    File.basename(path)
  end
  erb :layout
end

get "/:filename" do
  file_path = root + "/data/" + params[:filename]
  
  headers["Content-Type"] = "text/plain"
  File.read(file_path)
end