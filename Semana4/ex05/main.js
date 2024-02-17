function verificarNumero(){
    let numero = document.getElementById('numInput').value
        if (numero > 0) {
            console.log(`O número ${numero} é positivo`)
        } else if (numero < 0) {
            console.log(`O número ${numero} é negativo`)
        }else{
        console.log(`O número ${numero} é igual a zero`)
        }
}

verificarNumero()