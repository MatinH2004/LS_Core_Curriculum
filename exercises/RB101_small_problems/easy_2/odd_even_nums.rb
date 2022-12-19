# print odd nums from 1 to 99
(1..99).select {|n| puts n if n.odd?}

1.upto(99) {|n| puts n if n.odd?}

# print even nums from 1 to 99
(1..99).select {|n| puts n if n.even?}
