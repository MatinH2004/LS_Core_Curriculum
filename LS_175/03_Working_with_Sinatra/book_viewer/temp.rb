def highlight(text, term)
  text.gsub(term, %(<strong>#{term}</strong>))
end

text = "But you have hopes?"

search = "have hopes"

p highlight(text, search)
