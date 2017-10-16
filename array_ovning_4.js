//************* Array Övning 5 *******************

/*4. Skapa en array med 6 tal. Ta fram det tal som är störst via kod
(utan att använda sort-metoden) . Skriv resultatet på skärmen.

*/ 

var numArr = [5, 7, 8, 34, 1, 45];
var swapped;

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