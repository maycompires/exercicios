function enviarFormulario() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const nacionalidade = document.getElementById('nacionalidade').value;
    const profissao = document.getElementById('profissao').value;

    const informacoes = {
        nome: nome,
        idade: idade,
        nacionalidade: nacionalidade,
        profissao: profissao
    };

    console.log(informacoes);
}