//************* Array Övning 5 *******************

/*4. Skapa en array med 6 tal. Ta fram det tal som är störst via kod
(utan att använda sort-metoden) . Skriv resultatet på skärmen.

*/ 

var numArr = [5, 7, 8, 34, 1, 45];

let swapped;

    do {
        swapped = false;
        for (var i=0; i < numArr.length-1; i++) {
            if (numArr[i] < numArr[i+1]) {
                var temp = numArr[i];
                numArr[i] = numArr[i+1];
                numArr[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

console.log(numArr[0]);

 var value1 = 24;
 var value2 = 19;
 var resultat = 10;
 var isOK = false;
 if (value1 >= 15 && value1 <= 25 && isOK != false)
 {
 if (value2 >= 25 || value2 <= 10)
 {
 resultat = resultat + 1;
 }
 }
 else if (value1 >= 15 && value1 <= 25 && isOK != true)
 {
 if ((value2 >= 5 && value2 <= 10) ||
 (value2 >= 15 && value2 <= 20))
 {
 resultat = resultat + 2;
 }
 }
 else
 {
 resultat = resultat + 3;
 }
 console.log(resultat);
