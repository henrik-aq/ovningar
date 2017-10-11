// ********* Iteration Övning 7 *****************

/*7. Använd nested for loops dvs en for-loop i en for-loop for att lösa denna uppgift. Din
kod ska skriva ut multiplikationstabellen upp till 10 enligt följande struktur:
1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 20
3 6 9 12 15 18 21 24 27 30
Osv fram till 10 */

var tabell = "";

for (var i = 1; i <= 10; i++){
	for (var x = 1; x <= 10; x++) {
		var siffra = x * i;
		tabell = tabell + siffra + " ";
		
	}
	tabell = tabell + "\n";
}
console.log (tabell);