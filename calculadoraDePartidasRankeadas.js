let vitorias = 45
let derrotas = 3
let niveis = ["ferro", "bronze", "prata", "ouro", "diamante", "lendário", "imortal"]

calculadoraSaldoRankeado(vitorias, derrotas)

function calculadoraSaldoRankeado(v, d){
    let somatorio = v - d
    
    while (true){
        if (somatorio < 10){
            console.log("O Herói tem de saldo de " + somatorio + " e está no nível de " + niveis[0].toUpperCase())
            break 
        }else if (somatorio == 11 || somatorio <= 20){
            console.log("O Herói tem de saldo de " + somatorio + " e está no nível de " + niveis[1].toUpperCase())
            break
        }else if (somatorio == 21 || somatorio <= 50){
            console.log("O Herói tem de saldo de " + somatorio + " e está no nível de " + niveis[2].toUpperCase())
            break
        }else if (somatorio == 51 || somatorio <= 80){
            console.log("O Herói tem de saldo de " + somatorio + " e está no nível de " + niveis[3].toUpperCase())
            break
        }else if (somatorio == 81 || somatorio <= 90){
            console.log("O Herói tem de saldo de " + somatorio + " e está no nível de " + niveis[4].toUpperCase())
            break
        }else if (somatorio == 91 || somatorio <= 100){
            console.log("O Herói tem de saldo de " + somatorio + " e está no nível de " + niveis[5].toUpperCase())
            break
        }else if (somatorio >= 101){
            console.log("O Herói tem de saldo de " + somatorio + " e está no nível de " + niveis[6].toUpperCase())
            break
        }else{
            break
        }
    }
}