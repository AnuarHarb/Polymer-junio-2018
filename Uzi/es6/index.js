/*

var varGlobal
let blockScope
const constants

El navegador declara las var al inicio independientemente dónde estén
El navegador declara let y const al inicio de sus blockscopes
Let puede variar
Const no puede cambiar, excepto solo si es un array y se le modifica un property

-- Descontruct --

let arr = ["uno", "dos", "tres"];

let primero = arr[0];
let segundo = arr[1];
let tercero = arr[2];

Sería: 

let ["primero", "segundo", "terero"] = arr

let obj = {
    nombre: "Uzi",
    apellido: "Rodriguez"
}

let { name:nombre, lname:apellido} = obj;

-- Arrow functions --

function() {

}

Se susituye por:

() => {}

x.addEventListener(function() {

});

Permite una escritura más resumida

x.addEventListener( event => { return event.target });

x.addEventListener( event => return event.target);

Cabe destacar que no utiliza su propio scope, sino el contexto general

-- Templates --

let body = document.querySelector('body');
let name = Uzi;

body.innerHTML = 'Hola soy' + name;

body.innerHTML = `Hola soy ${name}`

body.innerHTML = `
    <h1> Hola soy ${name} <h1>
`
*/


let segments = Math.ceil((Math.random())*100);
for (let index = 0; index < segments; index++) {
    console.log(index);
}


for (let elemento of arr) {
    console.log(elemento); //Trae el elemento
}

for (let posicion in arr) {
    console.log(posicion)
}

let obj = {perro: "labrador", gato:"becket"}
for(let key in obj) {
    console.log(key);
}




