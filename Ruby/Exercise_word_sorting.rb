
def my_function(string)
	array = string.split(' ')
	array.each { |s| s.gsub! /\p{^Alnum}/, '' }  
	puts array.sort_by{|word| word.downcase}
end

puts "What do you want to sort, dear Valentine?"
sentence = gets.chomp
my_function(sentence)


