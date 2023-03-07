
def generate_UUID
  characters = ('0'..'9').zip('a'..'f').flatten.reject {|x| x.nil?}
  uuid = ''

  sections = [8, 4, 4, 4, 12]
  sections.each_with_index do |section, idx|
    section.times {uuid += characters.sample}
    uuid += '-' unless idx >= sections.size - 1
  end

  uuid
end

p generate_UUID

# proper way to create UUID
require 'securerandom'
SecureRandom.uuid # => "9ab34455-f799-4973-b644-c660fca11b65"