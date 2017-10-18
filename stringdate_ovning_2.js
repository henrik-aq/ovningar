//************** Datum/Sträng Övning 2 *****************************''

/*2. Skapa en funktion tar emot två datum och räknar ut differensen mellan dessa dvs.
hur många dagar som skiljer. */ 



let date1 = new Date(2005, 6, 9);
let date2 = new Date();

let diffDay = date2.getDate() - date1.getDate();
let diffMonth = date2.getMonth() - date1.getMonth();
let diffYear = date2.getFullYear() - date1.getFullYear();
let days.getDate() = date2

console.log('Det skiljer ' + diffYear + ' år' + ' och ' + diffMonth + ' månader, samt ' + diffDay + ' dagar.');


