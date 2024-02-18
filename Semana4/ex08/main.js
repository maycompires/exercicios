function parOuImpar() {
    let numero = document.getElementById('inputNumero').value
    if (numero % 2 === 0) {
        console.log(`O Nº ${numero} é Par`)
    } else {
        console.log(`O Nº ${numero} é Ímpar`)
    }
}

parOuImpar()