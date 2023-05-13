class InvoiceEntry
  attr_accessor :quantity, :product_name

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    quantity = updated_count if updated_count >= 0
  end
end

# changing line 2 from attr_reader to attr_accessor gives the
# public the ability to change quantity by calling 
# `instance.quantity = new_value` instead of using the 
# #update_quantity method.

# It means that the protections built into the update_quantity method 
# can be circumvented and potentially pose problems down the line.
