// ********* Iteration Övning 2 *****************

/*2. Skapa kod som tar emot två tal. Låt sedan programmet skriva ut alla tal som finns
mellan dessa två tal på skärmen. Lös detta med en for-loop.*/

var tal1 = 6;
var tal2 = 1;

if (tal1 < tal2) {
	for (var tal1; tal1 < tal2; tal1++){
	console.log(tal1);
	}
}
else	{
for (var tal2; tal2 < tal1; tal2++){
	console.log(tal2);
	}
}