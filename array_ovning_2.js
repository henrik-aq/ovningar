//************* Array Övning 2 *******************

/*2. Skapa en array med 4 tal. Loopa igenom arrayen och summera alla tal. Skriv
resultatet på skärmen*/ 

var numArr = [10, 10, 10, 20];
var total = 0;

for (var number = 0; number < numArr.length; number++){
	total  = total + numArr[number];

}

console.log(total);
