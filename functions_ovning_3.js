// ************** Funktioner övning 3 ***********'

/*3. Skapa en ny funktion som returnerar flera slumpvis valda tal. Du skall nu lägga till en
inparameter som anger hur många tal som skall returneras. Ta fram talen med
Math.Random . Se till att det bara blir heltal genom att använda parseInt. 

*/


function random(num){
 	let arr = [];
	for (var i = 0; i >= 0; i++) {
		arr[i] = Math.floor(Math.Random() * 10 + 1);
	}
	console.log(arr[num]);
}

console.log(random(5));