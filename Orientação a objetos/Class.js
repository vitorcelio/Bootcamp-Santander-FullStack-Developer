class Animal {
    constructor(type = 'animal') {
        this.type = type;
        this.outro = outro;
    }

    get type() {
        return this._type;
    }

    set type(val) {
        this._type = val;
    }
}

class Vaca extends Animal {
    constructor() {
        super('Vaca');
    }
}

let vaca = new Vaca();

console.log(vaca.type);