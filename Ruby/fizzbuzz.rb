
array = Array (1..100)

for x in array
	result = ""
	if x % 3 == 0
	result << "Fizz"
	end 

	if x % 5 == 0
	result << "Buzz"
	end 

	if x.to_s[0] == "1"
	result << "Bang"
	end 

	if result == ""
	puts x
	else 
	puts result
	end 
end 




