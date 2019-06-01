let dog = {
    sound: "woof",
    talk: function () {
        console.log(this.sound);
    }
}

let cat = {
    sound: "miau"
}

dog.talk(); // Imprime woof porque está en su contexto

let dogSound = dog.talk; // No imprime nada porque no está en el contexto (No halla el this)

let dogSound = dog.talk.bind(dog); // Bind hace que tome el contexto del objeto que se le pasa

let dogSound = dog.talk.bind(cat); // Puede tomar otro contexto y ejecutar sus métodos

// -- Prototipos --

let Sayayin = {
    raza: "Sayayin",
    goSuper : function() {
        console.log("Aaaaaah!")
    }
}

let goku = {
    name: "Kakaroto",
    sound: "Te mataré"
}

goku.goSuper(); // No muestra nada porque no está relacionado

Object.setPrototypeOf(goku, Sayayin);
goku.goSuper(); // De esta forma sí lo puede invocar proque ahora sí es un Sayayin (Pero los métodos "heredados" solo se referencían, no se duplican)

// -- Nuevos objetos --

function Sayayin(name) {
    this.name = name;
}

let vegeta = new Sayayin("Vegeta777"); // Setea el objeto con los parámetros que se le pasen

Sayayin.prototype.goSuper() = function () { //Esto es para acceder al protoype como tal
    console.log("Super Sayayin XD"); //Para seteear un nuevo método al 
}

Sayayin.__proto__ // __proto__ es par acceder a los properties y prototype a los métodos

// -- ES5 --

// Creamos el prototipo
function Persona(name) {
    this.name = name;
}
// Le añadimos un método (modificamos)
Persona.prototype.sayMyNAme = function () {
    console.log(this.name);
}
// Modificar la persona
var persona = new Persona('Hisenberg');
persona.sayMyNAme;
 
// -- ES6 --

class Persona {
    //Definimos properties
    constructor(name, text) {
        this.name = name;
        this.text = text;
    }
    // Definimos métodos
    sayMyNAme() {
        console.log(this.name);
    }
}
// Nueva persona con su property
let persona = new Persona('Jesee Pinkman');
persona.sayMyNAme;