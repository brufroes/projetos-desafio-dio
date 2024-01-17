let nomeHeroi = "Kora"
let xpAtual = 6060
let niveis = ["ferro", "bronze", "prata", "ouro", "platina", "ascendente", "imortal", "radiante"]

while (true){
    if (xpAtual < 1000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + niveis[0].toUpperCase())
        break
    }else if (xpAtual == 1001 || xpAtual <= 2000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + niveis[1].toUpperCase())
        break
    }else if (xpAtual == 2001 || xpAtual <= 5000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + niveis[2].toUpperCase())
        break
    }else if (xpAtual == 5001 || xpAtual <= 7000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + niveis[3].toUpperCase())
        break
    }else if (xpAtual == 7001 || xpAtual <= 8000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + niveis[4].toUpperCase())
        break
    }else if (xpAtual == 8001 || xpAtual <= 9000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + niveis[5].toUpperCase())
        break
    }else if (xpAtual == 9001 || xpAtual <= 10000){
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + niveis[6].toUpperCase())
        break
    }else if (xpAtual >= 10001){
        console.log("O Herói de nome " + nomeHeroi + " está no nível " + niveis[7].toUpperCase())
        break
    }else {
        console.log("Erro inesperado no código.")
        break
    }
}