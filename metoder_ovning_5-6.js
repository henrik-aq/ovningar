// ********* Metoder Övning 5-6 *****************
/*
5. Skapa en klass som du kallar för Lektion. Den skall ha ett startdatum och ett
slutdatum och en sal. Skapa sedan flera lektioner via kod med datum och tid. En
lektion skall alltid vara 3 timmar lång. Skapa en array som du kallar för schema där du
lägger in alla lektioner. Gå sedan via kod igenom alla lektioner i schemat och skriv ut
på skärmen.


6. Skapa en klass som du kallar för Klassrum. Den skall ha en benämning (tex B204) och
en lista med lektioner(se förra uppgiften) . Skapa ett klassrum skapa några lektioner
och koppla dessa till klassrummet. Skriv sedan ut benämning på klassrummet och
vilka tider det är uppbokat genom att hämta värden från din instans. 
*/

function Lektion(startDatum, startTid, sal){
	this.StartDatum = startDatum;
	this.StartTid = startTid;
	this.SlutTid = Length(startTid);
	this.Sal = sal;

	function Length (tid){
		
		tid += 3;
		return tid;
	}
}

function Klassrum (){
	this.benamning;
	this.lektioner = new Array();
}

let lektionA = new Lektion('12082017', 15, 'B309');
let lektionB = new Lektion('13082017', 9,  'B204');

let schema = [lektionA, lektionB];
//console.log(schema);



var sal  = new Klassrum();

sal.benamning= "B309";
sal.lektioner.push(lektionA);
sal.lektioner.push(lektionB);

for(var lektion of sal.lektioner)
 {
 	if (){
 		console.log(sal.lektioner);
 	}
 }
