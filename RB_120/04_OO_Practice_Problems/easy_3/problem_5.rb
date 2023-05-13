class Television
  def self.manufacturer
    # method logic
  end

  def model
    # method logic
  end
end

# What would happen when the methods below are called?:

tv = Television.new
tv.manufacturer         # undefined method
tv.model                # calls `model` instance method

Television.manufacturer # calls `self.manufacturer` from class
Television.model        # undefined method; no class methods named `model`