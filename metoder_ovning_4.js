// ********* Metoder Övning 4 *****************

/* 4. Skapa en ny klass. Döp den till Student. Den skall ha egenskaperna förnamn,
efternamn, email och telefonnummer. Skapa properties för alla dessa egenskaper.
Skapa sedan kod där alla värden sätts på klassen. Hämta sedan alla värden från
klassen och skriv ut. Pröva sedan att göra samma lösning fast sätt alla värden via
konstruktorn istället.  */

function Student(){
	this.FirstName;
	this.LastName;// = lastName;
	this.PhoneNr;// = phoneNr;
	this.Email;// = email;
}

let student = new Student();

student.FirstName = 'Petter';

console.log(student);

