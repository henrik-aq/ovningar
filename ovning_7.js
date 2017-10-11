var diceA = Math.floor((Math.random() * 6) + 1);;
var diceB = Math.floor((Math.random() * 6) + 1);;

while (diceA != diceB) {
diceA = Math.floor((Math.random() * 6) + 1);
diceB = Math.floor((Math.random() * 6) + 1);
console.log(diceA + " " + diceB);
}

console.log("Det är jämt!")