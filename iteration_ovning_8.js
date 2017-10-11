// ********* Iteration Övning 8 *****************

/*8. Skriv ett program där datorn slår två stycken olika 6-sidiga tärningar (alltså inte
samma tärning två gånger). Efter varje slag ska vardera tärnings värde skrivas ut i
konsolen. Datorn ska slå tärningarna om och om igen tills dess att den får par, alltså
samma tal på båda tärningarna. (Använd random för att slumpa tal). */

var diceA = Math.floor((Math.random() * 6) + 1);
var diceB = Math.floor((Math.random() * 6) + 1);

while (diceA != diceB) {
diceA = Math.floor((Math.random() * 6) + 1);
diceB = Math.floor((Math.random() * 6) + 1);
console.log(diceA, diceB);
}

console.log("Det är jämt!")