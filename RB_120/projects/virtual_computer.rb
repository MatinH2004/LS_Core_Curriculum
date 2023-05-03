# Codecademy OOP exercise

class Computer
  @@users = {}
  def initialize(username, password)
    @username = username
    @password = password
    @files = {}
    @@users[username] = password
  end

  def create(filename)
    time = Time.now
    @files[filename] = time
    puts "#{@username} created #{filename} at #{time}"
  end
  
  def delete(filename)
    if @files.member?(filename)
      @files.delete(filename)
    else
      puts "#{filename} file doesn't exist"
    end
  end

  def display_files
    # sort files by extension
    sorted = @files.sort_by do |file|
      file[0].split('.')[1]
    end

    sorted.each do |arr|
      puts arr[0]
    end
  end

  def self.get_users
    puts "\nUsers:"
    @@users.each_key {|u| puts u}
  end
end

my_computer = Computer.new('matin2004', 12345)
eli_computer = Computer.new('eli123', 5421)
my_computer.create('hello_world.rb')
my_computer.create('ruby.rb')
my_computer.create('text.txt')
my_computer.create('paint.txt')
my_computer.delete('bruh.txt')
my_computer.create('fibonacci.rb')
my_computer.display_files
Computer.get_users