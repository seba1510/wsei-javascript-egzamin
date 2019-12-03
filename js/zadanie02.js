function concatArray(array1, array2){
var tab = [];
var counter =  0;
for(let i = 0;  i<array1.length; i++){
		tab[i] = array1[i];
		counter++;
	}
for(let j =0 ; j <array2.length; j++){
		tab[counter] = array2[j];
		counter++;
	}	
return tab;
}
concatArray( [1,3],[3,5]);
