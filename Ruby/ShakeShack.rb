class MilkShake
  def initialize
    @base_price = 3
    @ingredients = [ ]    
  end

  def add_ingredient(ingredient)
  	@ingredients.push(ingredient)
  end 

  def price_of_milkshake
    #Let's establish what our counter should be before we start adding ingredients into the mix
    total_price_of_milkshake = @base_price
    #Add each ingredients price to our total
    @ingredients.each do |ingredient|
      total_price_of_milkshake += ingredient.price
    end
    #return  our total price to whoever called for it
     total_price_of_milkshake
  end
end

class Ingredient
	attr_reader :name, :price
  def initialize(name, price)
    @name = name
    @price = price
  end
end

class Shackshop
  def initialize 
    @milkshakes = [ ]
  end

  def add_milkshake(milkshake)
    @milkshakes.push(milkshake)
  end 

  def checkout
    sum = 0
    @milkshakes.each do |milkshake| 
      sum += milkshake.price_of_milkshake
    end 
    puts sum
  end 

end

choco_banana = MilkShake.new
apple_strawberry = MilkShake.new
caviar_strawberry = MilkShake.new

banana = Ingredient.new("Banana", 2)
chocolate_chips = Ingredient.new("Chocolate Chips", 1)
apple = Ingredient.new("Apple", 2)
strawberry = Ingredient.new("Strawberry", 3)
caviar = Ingredient.new("Caviar", 1000)

choco_banana.add_ingredient(banana)
choco_banana.add_ingredient(chocolate_chips)
apple_strawberry.add_ingredient(apple)
apple_strawberry.add_ingredient(strawberry)
caviar_strawberry.add_ingredient(caviar)
caviar_strawberry.add_ingredient(strawberry)


lorenzos_shop = Shackshop.new
lorenzos_shop.add_milkshake(choco_banana)
lorenzos_shop.add_milkshake(apple_strawberry)
lorenzos_shop.add_milkshake(caviar_strawberry)


lorenzos_shop.checkout

