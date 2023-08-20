class DNA
  def initialize(str)
    @dna = str
  end

  def hamming_distance(other_dna)
    counter = 0
    (@dna.size > other_dna.size ? other_dna : @dna).size.times do |idx|
      counter += 1 unless @dna[idx] == other_dna[idx]
    end
    counter
  end

  # refactor
  def hamming_distance(other_dna)
    [@dna, other_dna].map(&:size).min.times.count { |i| @dna[i] != other_dna[i] }
  end
end
