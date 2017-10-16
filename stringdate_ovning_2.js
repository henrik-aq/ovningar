//************** Datum/Sträng Övning 2 *****************************''

/*2. Skapa en funktion tar emot två datum och räknar ut differensen mellan dessa dvs.
hur många dagar som skiljer. */ 



let date1 = new Date(67, 4, 4);
let date2 = new Date(78, 6, 8);

let diffDay = date2.getDate() - date1.getDate();
let diffMonth = date2.getMonth() - date1.getMonth();
let diffYear = date2.getFullYear() - date1.getFullYear();


console.log('Det skiljer ' + diffYear + ' år' + ' och ' + diffMonth + ' månader, samt ' + diffDay + ' dagar.');


