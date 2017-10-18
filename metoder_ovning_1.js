// ********* Metoder Övning 1 *****************

/*1. Skapa en klass som du döper till Meddelande . Klassen skall ha en property och den
skall heta Text. Det skall finnas en metod som heter VisaMeddelande(). Metoden
skall returnera värdet i propertyn text (skriv ut på consolen eller alert). Skapa kod
för att skapa en ny instans av klassen, sätta ett värde på propertyn och sedan anropa
metoden.  */

function Meddelande(text){

	this.Text = text;

		this.VisaMeddelande = function (){
		return console.log(this.Text);
		}
}

let mittMeddelande = Meddelande('Hej!');

VisaMeddelande();


