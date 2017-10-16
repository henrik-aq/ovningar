//************* Array Övning 5 *******************

/*4. Skapa en array med 6 tal. Ta fram det tal som är störst via kod
(utan att använda sort-metoden) . Skriv resultatet på skärmen.

5. Lös samma problem som i förra uppgiften, men använd array objektet och de
metoder som finns där istället (tex sort). */ 

var numArr = [5, 100, 8, 34, 1, 10];

numArr.sort(function(a, b) {
  return b - a;
});
console.log(numArr[0]);