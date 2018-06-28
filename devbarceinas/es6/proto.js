class Persona {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        console.log(this.name);
    }
}

let persona = new Persona('Mario Barceinas');
persona.sayMyName();