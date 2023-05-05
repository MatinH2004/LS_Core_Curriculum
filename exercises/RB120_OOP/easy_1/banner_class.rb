=begin

TEST CASES:

banner = Banner.new('To boldly go where no one has gone before.')
puts banner
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

banner = Banner.new('')
puts banner
+--+
|  |
|  |
|  |
+--+

=end

class Banner
  attr_reader :message

  def initialize(message)
    @message = message
  end

  def to_s
    [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
  end

  private

  def horizontal_rule
    "+-#{'-' * @message.size}-+"
  end

  def empty_line
    "| #{ ' ' * @message.size } |"
  end

  def message_line
    "| #{@message} |"
  end
end

banner = Banner.new('To boldly go where no one has gone before.')
puts banner

puts ""

banner = Banner.new('')
puts banner

# Further Exploration

class Banner
  MAX_WIDTH = 80

  attr_reader :message, :width

  def initialize(message, width)
    @message = message
    @width = width < 4 ? 4 : width
  end

  def to_s
    if message.size > MAX_WIDTH || message.size > @width
      "Message is too long for the specified width."
    else
      [horizontal_rule, empty_line, message_line, empty_line, horizontal_rule].join("\n")
    end
  end

  private

  def horizontal_rule
    "+-#{ '-' * (@width)}-+"
  end

  def empty_line
    "| #{ ' ' * (@width)} |"
  end

  def message_line
    "| #{@message.center(width)} |"
  end
end

banner = Banner.new('Omae Wa Mou Shinderu, NANI!?', 69)
puts banner