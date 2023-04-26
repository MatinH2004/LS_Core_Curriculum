
ADJECTIVES = %w(quick lazy sleepy ugly).freeze
NOUNS = %w(fox dog head leg).freeze
VERBS = %w(jumps lifts bites licks).freeze
ADVERB = %w(easily lazily noisily excitedly).freeze

File.open('madlibs.txt') do |file|
  file.each do |line|
    puts format(line, adjective: ADJECTIVES.sample,
                      adverb:    ADVERB.sample,
                      verb:      VERBS.sample,
                      noun:      NOUNS.sample)
  end
end