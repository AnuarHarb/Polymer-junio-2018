var varGlobal

let blockScope
const constantes

function ejemplo() {
  var a = "a";
}

function Persona(name){
  this.name = name
}
Persona.prototype.sayMyName = function () {
  console.log(this.name);
};
var persona = new Persona('Hisenmberg');
persona.sayMyName();

class Persona {
  constructor(name) {
    this.name = name;
    this.raza =["sayayin", "terricola"];
  }
}
let persona = new Persona('Jessy Pinkman');
persona.sayMyName();
