function imprimirResultado() {
    let primeiraNota = parseFloat(document.getElementById("nota1").value);
    let segundaNota = parseFloat(document.getElementById("nota2").value);
    let terceiraNota = parseFloat(document.getElementById("nota3").value);
    let quartaNota = parseFloat(document.getElementById("nota4").value);
    
    let mediaFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;
    
    console.log(`A sua Média Final foi ${mediaFinal.toFixed(2)}`)
    
    switch (Math.floor(mediaFinal)) {
        case 10:
        case 9:
            console.log('Você entrou para o Quadro de Honra');
            break;
        case 8:
        case 7:
            console.log('Você foi Aprovado');
            break;
        case 6:
        case 5:
            console.log('Você ficou em Recuperação');
            break;
        case 4:
        case 3:
        case 2:
        case 1:
            console.log('Infelizmente Você foi Reprovado');
            break;
        default:
            console.log('Nota Inválida');
    }
}

imprimirResultado()

