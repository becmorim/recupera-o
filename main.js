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
    atacar(oponente) {
        const dano = this.vida * 0.10;
        oponente.vida -= dano;
        console.log(`Guerreiro atacou e causou ${dano} de dano. Vida do oponente: ${oponente.vida.toFixed(2)}`);
    }
    defender() {
        console.log("Guerreiro defendeu");
    }
    usarEscudo() {
        console.log("Guerreiro usou escudo");
    }
    agir(oponente) {
        const acao = Math.floor(Math.random() * 3); 
        switch (acao) {
            case 0:
                this.atacar(oponente);
                break;
            case 1:
                this.defender();
                break;
            case 2:
                this.usarEscudo();
                break;
        }
    }
}

class Mago extends Personagem {
    atacar(oponente) {
        const dano = this.vida * 0.10;
        oponente.vida -= dano;
        console.log(`Mago atacou e causou ${dano} de dano. Vida do oponente: ${oponente.vida.toFixed(2)}`);
    }
    defender() {
        console.log("Mago se defendeu");
    }
    usarMagia() {
        console.log("Mago usou magia");
    }
    agir(oponente) {
        const acao = Math.floor(Math.random() * 3); 
        switch (acao) {
            case 0:
                this.atacar(oponente);
                break;
            case 1:
                this.defender();
        }
    }
}