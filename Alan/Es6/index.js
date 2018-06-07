let arr = ["uno", "dos", "tres"];

//Deconstruct
let primero = arr[0];
let segundo = arr[1];
let tercero = arr[2];

//El codigo de arriba es igual al codigo de abajo

let [primero, segundo, tercero] = arr;

//Otro ejemplop
let obj = { nombre: alan, apellido: minor}

let {minombre:nombre, miapellido:apellido} = obj


/**********************************************************************************/
//Arrow Function
x.addEventListener(function() {
    this //todo el contexto
});

x.addEventListener(event => return event.target);


/**********************************************************************************/
//Templates Streams
let body = document.querySelector('body');
let name = "Ron";

body.innerHTML = 'Hola soy' + name;

//Codigo con templates
body.innerHTML = `Hola soy ${name}`;

body.innerHTML = `
    <h1> Hola soy ${name} </h1>
    <p>Y estoy usando templates de ES6 </p>
`


/*********************************************************************************/
//Iterations

let arr = ["uno", "dos", "tres"];

//Viejo for
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}

//Trae el valor cada uno de los elemenotos
for(let elemento of arr){
    console.log(elemnto); //Imprime uno, dos, tres
}

//Trae posiciones de cada elemntos
for(let posiciones in arr){
    console.log(posiciones); //Imprime 1,2,3
}
