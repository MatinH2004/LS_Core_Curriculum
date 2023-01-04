def select_fruit(produce_list)
  produce_keys = produce_list.keys
  results = {}
  counter = 0

  loop do
    break if counter == produce_list.keys.size

    current_key = produce_keys[counter]
    current_value = produce_list[current_key]

    if current_value == 'Fruit'
      results[current_key] = current_value
    end

    counter += 1
  end

  p results
end

produce = {
  'apple' => 'Fruit',
  'carrot' => 'Vegetable',
  'pear' => 'Fruit',
  'broccoli' => 'Vegetable'
}

p select_fruit(produce) # => {"apple"=>"Fruit", "pear"=>"Fruit"}