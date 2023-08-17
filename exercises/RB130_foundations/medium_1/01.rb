class Device
  def initialize
    @recordings = []
  end

  def listen
    return unless block_given?
    record(yield)
  end

  # alternate method implementation
  def listen
    recording = yield if block_given?
    record(recording) if recording
  end

  def play
    puts @recordings.last
  end

  private

  def record(recording)
    @recordings << recording
  end
end

listener = Device.new
listener.listen { "Hello World!" }
listener.listen
listener.play # Outputs "Hello World!"