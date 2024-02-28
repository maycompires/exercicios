function exibirMensagem() {
    window.alert("Aqui Você Pode entrar em Contato com Maycom.");
}

function solicitarNomeUsuario() {
    var nomeUsuario = prompt("Por favor, digite seu nome:");
    if (nomeUsuario != null && nomeUsuario != "") {
        
        var elementoH1 = document.querySelector('h1');
        var elementoH2 = document.querySelector('h2');

        elementoH1.textContent = "Olá " + nomeUsuario;
        elementoH2.textContent = "Seja bem-vindo(a)!";
    }
}

window.onload = solicitarNomeUsuario;