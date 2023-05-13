class InvoiceEntry
  attr_reader :product_name, :quantity
  # or change to attr_accessor ^

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    # prevent negative quantities from being set
    # quantity = updated_count if updated_count >= 0
    @quantity = updated_count if updated_count >= 0
  end
end