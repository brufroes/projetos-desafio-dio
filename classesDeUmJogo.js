class tipoHeroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
    this.nomeHeroi = nomeHeroi
    this.idadeHeroi = idadeHeroi
    this.tipoHeroi = tipoHeroi

    while (true){
        if (tipoHeroi === "mago"){
            console.log("O " + this.tipoHeroi + " atacou usando magia")
            break 
        }else if (tipoHeroi === "guerreiro"){
            console.log("O " + this.tipoHeroi + " atacou usando espada")
            break
        }else if (tipoHeroi === "monge"){
            console.log("O " + this.tipoHeroi + " atacou usando artes marciais")
            break
        }else if (tipoHeroi === "ninja"){
            console.log("O " + this.tipoHeroi + " atacou usando shuriken")
            break
        }else{
            break
        }
    }
}
}

let heroiKora = new tipoHeroi("Kora", "22", "ninja") 