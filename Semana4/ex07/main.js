  function saudacao() {
    let horaAtual = document.getElementById('time').value;
    let hora = parseInt(horaAtual.split(':')[0]); // Obtém a hora do campo de entrada
    if (hora >= 0 && hora < 12){
        console.log("Olá, Bom dia");
    } else if (hora >= 12 && hora < 18){
        console.log("Olá, Boa Tarde");
    } else {
        console.log("Olá, Boa noite");
    }
}