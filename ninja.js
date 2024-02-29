class Ninja {
    constructor (nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    getName() {
        return this.nombre;
    }

    sayName() {
        console.log(this.getName());
    }
    showStats() {
        console.log("Nombre:" + this.nombre + " Salud: " + this.salud + " Velocidad: " + this.velocidad + " Fuerza: " + this.fuerza);
    }
    drinkSake() {
        this.salud = +10;
        return this.salud
    }
}

const liz = new Ninja("Liz", 5);
liz.sayName();
liz.showStats();
liz.drinkSake();

class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200);
        this.sabiduría = 10;
        this.velocidad = 10;
        this.fuerza = 10;
        
        
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Un punto  y coma (;) perdido puede ser un verdadero quebradero de cabeza");
    }
}


const lia = new Sensei("Lia");
lia.showStats();
lia.speakWisdom();