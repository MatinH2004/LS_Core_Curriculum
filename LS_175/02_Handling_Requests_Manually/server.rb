require "socket"

server = TCPServer.new("localhost", 3003)

loop do
  client = server.accept

  request_line = client.gets
  next if !request_line || request_line =~ /favicon/

  puts request_line

  client.puts request_line
  client.puts "HTTP/1.1 200 OK"
  client.puts "Content-Type: text/plain\r\n\r\n"
  client.close
end