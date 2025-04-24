class personagem {
    constructor(vida, força, mana) {
        this.vida = vida;
        this.força = força;
        this.mana = mana;
    }
}

class guerreiro extends personagem{
    atacar() {
        console.log("guerreiro atacou");
    }

    defender() {
        console.log("guerreiro defendeu");
    }

    usarEscudo(){
        console.log("Guerreiro usou escudo");
    }
}

class mago extends personagem{
    atacar() {
        console.log("mago atacou");
    }

    defender() {
        console.log("mago se defendeu");
    }

    usarMagia(){
        console.log("mago usou magia");
    }
}

class arqueiro extends personagem{
    atacar() {
        console.log("arqueiro atacou");
    }

    defender() {
        console.log("arqueiro defendeu");
    }

    recarregar(){
        console.log("arqueiro recarregou");
    }
}

