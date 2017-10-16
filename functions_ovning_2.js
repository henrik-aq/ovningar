// ************** Funktioner övning 2 ***********'

/*2. Skriv en funktion som tar in två nummer och returnerar det största. Observera att
båda argumenten som skickas till funktionen kan vara samma nummer. Returnera
ett felmeddelande om minst en av parametrarna inte är ett nummer.
*/

function numbers(num1, num2){
	if (isNaN(num1)){
		console.log('Nu blev det fel');
	}
	if (isNaN(num2)){
		console.log('Nu blev det fel');
	}
		if (num1 > num2){
			console.log(num1);
		}
		else if (num2 > num1){
			console.log(num2);
		}
		else if(num1 === num2)
			console.log('Samma nummer');
	}

numbers('tfhg', 346);