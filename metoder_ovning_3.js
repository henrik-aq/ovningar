// ********* Metoder Övning 3 *****************

/*3. Skapa en ny klass. Döp den till Larare. Den skall ha egenskaperna förnamn, efternamn
och telefonnummer, anställningsdatum, lön. Skapa properties för alla dessa
egenskaper. Skapa kod för att sätta värden på alla properties och hämta sedan
värden från objektet och skriv ut på skärmen. */

function Teacher(firstName, lastName, phoneNr, number, salary){
	this.FirstName = firstName;
	this.LastName = lastName;
	this.PhoneNr = phoneNr;
	this.Number = number;
	this.Salary = salary;
}


let newTeacher = new Teacher('Pelle', 'Nilsson', '070555555', '12345', '33000');
newTeacher.FirstName = "Peter";


console.log(newTeacher.FirstName + ' ' + newTeacher.LastName + ' ' + newTeacher.PhoneNr + ' ' + newTeacher.Number);

