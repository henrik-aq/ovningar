// ********* Metoder Övning 2 *****************

/*2. Skapa en ny klass och döp den till Kurs. Den skall ha egenskaperna namn, antal
poäng, startdatum och slutdatum. Skapa kod för att sätta värden på alla properties
och hämta sedan värden från objektet och skriv ut på skärmen. */

function Course(name, points, start, end){
	this.Name = name;
	this.Points = points;
	this.Start = start;
	this.End = end;
}


let newCourse = new Course('FEND17', 35, '17/09/01', '17/10/31');

console.log(newCourse.Name + ' ' + newCourse.Points + ' ' + newCourse.Start + ' ' + newCourse.End);

