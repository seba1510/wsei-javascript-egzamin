function bigestSumOfTwoElements(array){
	var max = 0;
	var previousmax = 0;
	
if(array.length<1){
	return false;
}
else {
for(let i = 0; i  < array.length; i++){
	if(array[i]>max)
	{
	previousmax = max;
	max  = array[i];
	}
}
var sum =  max + previousmax;
return sum;	
}
}

bigestSumOfTwoElements([1,2,3,4]) // => 7
bigestSumOfTwoElements([]) // => false
bigestSumOfTwoElements([76]) // => 76
bigestSumOfTwoElements([23,45,17,12]) // => 68
