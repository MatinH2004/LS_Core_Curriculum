class MeMyselfAndI
  self #=> class

  def self.me #=> class
    self #=> class
  end

  def myself
    self #=> instance (i)
  end
end

i = MeMyselfAndI.new