apr = '4.5%'
apr.delete('%') if apr.include?('%')

p apr.include?('%') == true
p apr.delete!('%')