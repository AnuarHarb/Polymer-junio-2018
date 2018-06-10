let dog = {
    sound: "woof",
    talk: function(){
        console.log(this.sound);
    }
}

let cat = {
    soun: "miau"
}

dog.talk();//Se ejecuta con el contexto de dog

/*Esto no sirve porque no almacena el contexto de dog ya que no lo conoce. Al mandarla a llamar tendremos undefined */
let dogSound = dog.talk;
dogSound();//Imprime undefined

/*Con el metodo bind le mandamos el contexto el cual queremos que ejecute la funcion. Bind forza un contexto en especifico que queramos*/

/*Por lo que ahora si tendra el contexto de dog */
let dogSound = dog.talk.bind(dog);
dogSound();//impreme woof

/*Ahora le pasamos el contexto de cat y lo que nos imprimira sera miau */
let dogSound = dog.talk.bind(cat);
dogSound();

/*-----------------EJAMPLE---------------------*/
let Sayayin = {
    raza: "sayayin",
    goSuper: function{
        console.log("ahh! Super Sayayin");
    }
}

let Krillin = {
    name: "krillin",
    sound: "Gokuuuuu!"
}

let Goku = {
    name: "kakaroto",
    sound: "Te mataré frizer!"
}

Object.setPrototypeOf(Goku, Sayayin);//El objeto Goku toma las pripiedades y los metodos del objeto padre Sayayin


/*-----------------EJAMPLE---------------------*/
//NOTA: Pueden exitir constructores vacios solo para declarar un nuevo objeto y poder setearle propiedades con .prototype

function Sayayin(name){//Funcion contructora
    this.name = name;
}

Sayayin.prototype.goSuper = function(){ //Objeto prototipo: Añade propiedades a Sayayin con si fuera un objeto
    console.log("Super sayayin blue!");
}

let vegeta = new Sayayin("vegeta");


/* NOTA:
* __proto__ referencia para el prototipo de un objeto
*prototype referencia al prototipo de una funcion 

*/

/*-----------------EJAMPLE---------------------*/
//NOTA: Si cambian las propiedades del prototipo (objeto padre) tambien cambias las propiedades del objeto hijo

let Dog = {
    raza: "labrador"
}

let myDog = {
    name: "hachi"
}
Object.setPrototypeOf(myDog, dog);

console.log(myDog.raza);//Imprime labrador

Dog.raza = "pug";
console.log(myDog.raza);//Imprime pug



/*----------------------------------------------------CLASES EN ES6------------------------------------------- */
///////ES5
function Persona(name){
    this.name = name;
}

Persona.prototype.sayMyName = function () {
    console.log(this.name);
}

var persona = new Persona('Hisemberg');
persona.sayMyName(); //Imprime Haisemberg


////////ES6
class Persona{
    constructor(name){
        this.name = name;
    }

    sayMyName(){
        console.log(this.name);
    } 
}

let persona = new Persona('Jessy Pinkman');
persona.sayMyName(); //Imprime Jessy Pinkman
