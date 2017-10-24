function Medlem (){
	this.Namn;
	this.Adress;
	this.Tel;
	this.Mail;
	this.Medlemstyp = new Medlemskap();
	
	this.Add = function (){

	}
}

function Medlemskap(){
	this.Typ;
	this.Pris;
}

function Traningspass(){
	this.StartTid;
	this.SlutTid;
}

function Bokning(){
	this.BokadMedlem = new Medlem();
	this.BokatTraningsPass = new Traningspass();
}

let nyMedlem = new Medlem();
nyMedlem.Namn = "Kalle";
nyMedlem.Mail = "hej@hej.se";


let typ = new Medlemskap();
typ.Typ = "Vardagsmedlem";
typ.Pris = "249";

nyMedlem.Medlemstyp = typ;

let pass = new Traningspass();
pass.StartTid = newDate();
pass.SlutTid = newDate();

let bokning = new Bokning();
bokning.BokadMedlem = nyMedlem;
bokning.BokatTraningsPass = pass;