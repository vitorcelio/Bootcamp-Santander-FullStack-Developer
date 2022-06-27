class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(val) {
        this._saldo = val;
    }

    sacar(val) {
        if (val > 0 && val <= this.saldo) {
            this.saldo -= val;
        }
    }

    depositar(val) {
        if (val > 0) {
            this.saldo += val;
        }
    }

}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero, 'conta corrente');
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(val) {
        this._cartaoCredito = val;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, 'conta poupança');
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, 'conta universitária');
    }

    sacar(val) {
        if (val > 0 && val <= this.saldo) {
            if (val < 500) {
                this.saldo -= val;
            }
        }
    }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);

console.log(minhaConta);
console.log(contaUni);