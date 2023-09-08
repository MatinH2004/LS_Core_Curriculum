=begin

P:

Write a program that manages robot factory settings
Random name is generated when robots are boot up: ie RX837 or BC811
When robot is reset, their name is wiped and a new one is generated

The names must be random
They should not follow a predictable sequence
Random names means risk of collisions
Same name shall not be generated

E:

Names must match /^[A-Z]{2}\d{3}$/ regex

D:

Use array to keep track of all names

A:

1. constructor
  - call generate_name method to return a name and assign to @name

2. generate_name
  - name must have two upper case letters at beginning and 3 random nums like: RX420
  - for random letters: initilize alphabet arr, shuffle it, and get the first two letters
  - for random number: concat string with rand(100..999).to_s

3. reset
  - append current name to class variable array
  - generate new robot name
=end

class Robot
  @@name_history = []

  def name
    return @name if @name

    until !@@name_history.include?(@name)
      @name = generate_name
    end

    @@name_history << @name
    @name
  end

  def reset
    @@name_history.delete(name)
    @name = nil
  end

  private

  def generate_name
    ('A'..'Z').to_a.shuffle[0, 2].join + rand(100..999).to_s
  end
end