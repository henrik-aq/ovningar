// ********* Iteration Övning 6 *****************

/*6. Du har en fårfarm med 4 får. Dom blir hela tiden 4 gånger så många varje månad dvs
efter en månad har du 4*4=16 får. Gör en lösning som räknar ut hur många får det är
efter 12 månader och skriv ut resultatet på consolen.*/

var sheep = 4;
var month = 1;

for (var i = month; i <= 12; i++) {
	sheep = sheep * 4;
	console.log(sheep);
}