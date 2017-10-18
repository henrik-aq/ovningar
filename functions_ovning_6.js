// ************** Funktioner övning 6 ***********'

/*6. Skapa en Bubblesort funktion
Skriv en funktion bubbleSort(arr) som tar in en array av nummer och sorterar den
från minst till störst. Du kan anta att alla värden i arrayen är nummer, ingen
felhantering behövs.
Bubblesort är en sorteringsalgoritm där värdena jämförs parvis och byter plats på
dem om de är i fel ordning.
Test Data :
bubblesort([2,1,6,5])
Expected output:
[1,2,5,6] 
 */


let numArr = [2,4,5,6,1]
function bubbleSort(numbers) {

var swapped;

    do {
        swapped = false;
        for (var i=0; i < numbers.length-1; i++) {
            if (numbers[i] < numbers[i+1]) {
                var temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);    
return numbers;
}

console.log(bubbleSort(numArr));