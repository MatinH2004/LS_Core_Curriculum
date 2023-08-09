  # [97, 122]   # a-z
  # [65, 90]    # A-Z

def shift(ascii)
  case ascii
  when (97..109), (65..77) then ascii + 13
  when (110..122), (78..90) then ascii - 13
  end
end

def decipher(arr)
  arr.map do |name|
    name.bytes.map do |ascii|
      shift(ascii) unless ascii == 32 # shift chars except spaces
    end.map { |ascii| ascii.nil? ? ' ' : ascii.chr }.join
  end
end

secret_words = [
  "Nqn Ybirynpr",
  "Tenpr Ubccre",
  "Nqryr Tbyqfgvar",
  "Nyna Ghevat",
  "Puneyrf Onoontr",
  "Noqhyynu Zhunzznq ova Zhfn ny-Xujnevmzv",
  "Wbua Ngnanfbss",
  "Ybvf Unvog",
  "Pynhqr Funaaba",
  "Fgrir Wbof",
  "Ovyy Tngrf",
  "Gvz Orearef-Yrr",
  "Fgrir Jbmavnx",
  "Xbaenq Mhfr",
  "Fve Nagbal Ubner",
  "Zneiva Zvafxl",
  "Lhxvuveb Zngfhzbgb",
  "Unllvz Fybavzfxv",
  "Tregehqr Oynapu"
]

puts decipher(secret_words)

# OUTPUT:

# Ada Lovelace
# Grace Hopper
# Adele Goldstine
# Alan Turing
# Charles Babbage
# Abdullah Muhammad bin Musa al Khwarizmi
# John Atanasoff
# Lois Haibt
# Claude Shannon
# Steve Jobs
# Bill Gates
# Tim Berners Lee
# Steve Wozniak
# Konrad Zuse
# Sir Antony Hoare
# Marvin Minsky
# Yukihiro Matsumoto
# Hayyim Slonimski
# Gertrude Blanch