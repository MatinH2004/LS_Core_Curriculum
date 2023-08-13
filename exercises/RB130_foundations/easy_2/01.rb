def step(start, finish, step)
  current_val = start
  while current_val <= finish
    yield(current_val)
    current_val += step
  end
  current_val
end

p step(1, 10, 3) { |value| puts "value = #{value}" }

# value = 1
# value = 4
# value = 7
# value = 10