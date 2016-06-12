class ShoppingCart
	def initialize
		@items = []
	end 
end 

class Item
	def initialize(name, price)
		@name = name
		@price = price
	end 

	def price
		price = @price
	end
end 

class Houseware < Item
  def price
  	starting_price = @price
  	if @price > 100
  		price = 0.95 * starting_price
  	else
  		price = @price
  		end
	end
end 


class Fruit < Item
	def price
	if Time.now.saturday? || Time.now.sunday? 
		price = 0.9 * @price
		else 
			price = @price
		end 
	end
end 

class ShoppingCart
	def initialize 
		@items = []
	end 

	def add_item(item)
		@items.push(item)
	end 

	def checkout
		sum = 0 
		@items.each do |item|
		sum += item.price
		end
		puts sum
	end 

		

end 

banana = Fruit.new("Banana", 10)
orange_juice = Fruit.new("Orange juice", 10)
rice = Item.new("rice", 1)
vacuum_cleaner = Houseware.new("Vacuum Cleaner", 150)
anchovies = Item.new("Anchovies", 2)
wok = Houseware.new("Wok", 40)

my_cart = ShoppingCart.new
my_cart.add_item(banana)
my_cart.add_item(orange_juice)
my_cart.add_item(rice)
my_cart.add_item(vacuum_cleaner)
my_cart.add_item(anchovies)


puts rice.price
puts anchovies.price
puts vacuum_cleaner.price
puts wok.price
puts banana.price
puts my_cart.checkout





