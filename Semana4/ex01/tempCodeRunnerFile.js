function exibirMensagem() {
    let inputNome = document.getElementsById('nome').value; 
    console.log(`Olá ${inputNome}! Seja Bem Vindo...`);
}

exibirMensagem();