class Personagem {
    #vida;
    #força;
    #mana;

    constructor(vida, força, mana) {
        this.#vida = vida;
        this.#força = força;
        this.#mana = mana;
    }

    get vida() {
        return this.#vida;
    }

    set vida(novaVida) {
        this.#vida = novaVida;
    }

    get força() {
        return this.#força;
    }

    set força(novaForça) {
        this.#força = novaForça;
    }

    get mana() {
        return this.#mana;
    }

    set mana(novaMana) {
        this.#mana = novaMana;
    }
}

class Guerreiro extends Personagem {
    atacar() {
        console.log("guerreiro atacou");
    }

    defender() {
        console.log("guerreiro defendeu");
    }

    usarEscudo() {
        console.log("Guerreiro usou escudo");
    }
}

class Mago extends Personagem {
    atacar() {
        console.log("mago atacou");
    }

    defender() {
        console.log("mago se defendeu");
    }

    usarMagia() {
        console.log("mago usou magia");
    }
}

class Arqueiro extends Personagem {
    atacar() {
        console.log("arqueiro atacou");
    }

    defender() {
        console.log("arqueiro defendeu");
    }

    recarregar() {
        console.log("arqueiro recarregou");
    }
}