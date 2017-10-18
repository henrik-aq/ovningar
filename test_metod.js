/*function person(name, age){
	
	this.name = name;
	this.age = age;
	this.untilRetire = yearsLeft;

	if
}

function yearsLeft(){
	let years = 65 - this.age;
	return years;
}

let henrik = new person("Henrik Andersson", 32);
let lina = new person('Lina Irstad', 31);

console.log(henrik.untilRetire());
console.log(lina.age);*/


/*function cat (name, color, age, cutenessLevel){
	this.name = name;
	this.color = color;
	this.age = age;
	this.cutenessLevel = cutenessLevel;
}

let lola = new cat('Lola', 'Black', 5, 1000);
let missen = new cat('Missen aka Mona Lisa', 'White', 10, 999);

console.log('Ålder: ' + lola.age + ' ' + 'Cuteness: ' + lola.cutenessLevel);
console.log(missen.age*/

function Person (fornamn, efternamn, email){ 					//Class (konstruktor)
	this.Fornamn = fornamn;
	this.Efternamn = efternamn;
	this.Email = email;

	this.Registrera = function(){								//Metod
		return 'Du är nu registrerad';
	}
};

let person = new Person('Bucky', 'Rogers', 'bucky@bucky.com');	//Objekt (instans av klass)
let person2 = new Person('Pucky', 'Sogers', 'pucky@bucky.com');	//Objekt (instans av klass)
let personLista = [person, person2];							//Array med objekt

for (var p of personLista){
	console.log(p.Fornamn)
}

console.log(person.Email + ' ' + person.Fornamn);
console.log(person2.Efternamn + ' ' + person2.Email);

console.log(person.Registrera());