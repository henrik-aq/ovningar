// ********* Iteration Övning 5 *****************

/*5. Skapa ett program som skriver ut alla udda tal under 100. Ett tips är att använda
operatorn % (modulus) . Detta räknar ut resten efter att två tal divideras tex 5 % 2
blir 1.*/

var y = 100;

for (var y; y >= 0; y--) {
	if (y % 2 != 0){
		console.log(y);
	}
}