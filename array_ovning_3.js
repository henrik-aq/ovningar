//************* Array Övning 3 *******************

/*3. Skapa en array av 5 heltal och fyll den med värden. Byt ut alla udda tal i arrayen mot
talet 0. Skriv sedan efteråt ut innehållet i hela arrayen till skärmen. */ 

let numArr = [8, 6, 5, 3, 4];
let newNum = 0;

for (let num = 0; num < numArr.length; num++){
	
	newNum = numArr[num] % 2;

	if (newNum === 0)
		console.log(numArr[num]);
}