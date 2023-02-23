=begin

P: Write a method that takes 2 hashes:
     - param 1 is the recipe for a cake
     - param 2 is the available ingredients
       - Ingredients that are not present in the objects, can be considered as 0.
     - find the maximum number of cakes pete can bake

E:

I: - return 0 if available is empty

T: // must return 2
    cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
   // must return 0
    cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

A: /* given two hashes  */
   - initialize max variable
   - iterate through recipe hash
     - if current key is available in ingredients hash
       - find how many times ingredients value is divisible by current recipe value
       - save that value to max variable if it is greater than the max value
         OR if max variable is nil
     - else go to next iteration
   - return max

=end

def cakes(recipe, available)
  return 0 if available.empty?

  max_cakes = []
  recipe.keys.each do |current_key|
    if available.keys.include?(current_key)
      max_cakes << available[current_key] / recipe[current_key]
    else
      return 0
    end
  end
  
  if max_cakes.uniq.size == 1
    max_cakes[0]
  else
    max_cakes.min
  end
end

# refactor
def cakes(recipe, available)
  return 0 if recipe.keys.count > available.keys.count
  max_cakes = []

  recipe.each do |k, v|
    available.keys.include?(k) ? max_cakes << available[k] / v : (return 0)
  end

  max_cakes.uniq.size < 2 ? max_cakes[0] : max_cakes.min
end

# one liner
def cakes recipe, available
  recipe.collect {|k, v| available[k].to_i / v}.min # nil.to_i becomes 0
end 

p cakes({"flour"=>500, "sugar"=>200, "eggs"=>1},{"flour"=>1200, "sugar"=>1200, "eggs"=>5, "milk"=>200}) == 2 
p cakes({"cream"=>200, "flour"=>300, "sugar"=>150, "milk"=>100, "oil"=>100},{"sugar"=>1700, "flour"=>20000, "milk"=>20000, "oil"=>30000, "cream"=>5000}) == 11
p cakes({"apples"=>3, "flour"=>300, "sugar"=>150, "milk"=>100, "oil"=>100},{"sugar"=>500, "flour"=>2000, "milk"=>2000}) == 0
p cakes({"apples"=>3, "flour"=>300, "sugar"=>150, "milk"=>100, "oil"=>100},{"sugar"=>500, "flour"=>2000, "milk"=>2000, "apples"=>15, "oil"=>20}) == 0
p cakes({"eggs"=>4, "flour"=>400},{}) == 0
p cakes({"cream"=>1, "flour"=>3, "sugar"=>1, "milk"=>1, "oil"=>1, "eggs"=>1},{"sugar"=>1, "eggs"=>1, "flour"=>3, "cream"=>1, "oil"=>1, "milk"=>1}) == 1
