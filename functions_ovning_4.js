// ************** Funktioner övning 4 ***********'

//Copy paste från https://github.com/bruer/javascript1

/*4. Skapa två funktioner , en som heter sum() och en som heter multiply() . Dessa skall
summera respektive multiplicera alla tal I en array av heltal. Till exempel ,
sum([1,2,3,4]) skall returnera 10, och multiply([1,2,3,4]) skall returna 24. */


var numArr = [1, 2, 3, 4];

function sum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function multiply(array) {
	var prod = 1;
	for (var i = 0; i < array.length; i++) {
		prod *= array[i];
	}
	return prod;
}

console.log(sum(numArr));
console.log(multiply(numArr));

