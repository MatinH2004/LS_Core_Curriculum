# Edge case: doesn't return new string
# def staggered_case(str)
#   need_upper = true
#   str.chars.each do |char|
#     next if char =~ /[^A-Za-z]/
#     need_upper ? (char.upcase!) : (char.downcase!)
#     need_upper = !need_upper
#   end.join
# end

# # Append characters to new string to return what question is asking for
# def staggered_case(str)
#   result = ''
#   need_upper = true
#   str.chars.each do |char|
#     if char =~ /[a-z]/i
#       if need_upper
#         result += char.upcase
#       else
#         result += char.downcase
#       end
#       need_upper = !need_upper
#     else
#       result += char
#     end
#   end
#   result
# end

# Further Exploration - not sure if right...
def staggered_case(string, count_all_chars = false)
  result = ''
  need_upper = true

  string.chars.each do |char|
    if count_all_chars == 'false'
      next if char =~ /[^a-z]/i
    end

    if need_upper
      result += char.upcase
    else
      result += char.downcase
    end

    need_upper = !need_upper
  end
  result
end


p staggered_case('I Love Launch School!', true) #== 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS', true) #== 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers', true) #== 'IgNoRe 77 ThE 444 nUmBeRs'