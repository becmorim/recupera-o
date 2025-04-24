class personagem {
    constructor(vida, força, mana) {
        this.vida = vida;
        this.força = força;
        this.mana = mana;
    }
}

class guerreiro extends personagem{
    atacar(){
    }
    defender(){
    }
    usarEscudo(){
    }
}

class mago extends personagem{
    atacar(){
    }
    defender(){
    }
    usarMagia(){
    }
}

class arqueiro extends personagem{
    atacar(){
    }
    defender(){
    }
    recarregar(){
    }
}

