def solve_cipher(input, shift=-3)
	array_ascii = input.split(//).map  do 
		|l| l.ord 
	end
	array_shifted = array_ascii.map  do 
		|l| l + shift
	end
	array_corrected = array_shifted.map do |l| 
		(l<97 && l>93 || l<65 && l>61 ? l + 26 : l) 
	
	end 

	puts array_corrected.map {|l| l.chr}.join
end 


solve_cipher("abcdefghijklmnopqrstuvwxyz")
solve_cipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
solve_cipher("p| uhdo qdph lv grqdog gxfn")
#still need to solve the space issue, gogo